// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AbortSignalLike,
  OperationOptions,
  operationOptionsToRequestOptionsBase
} from "@azure/core-http";

import {
  GeneratedClientHealthResponse as BeginAnalyzeHealthcareResponse,
  GeneratedClientHealthStatusOptionalParams as HealthcareJobStatusOptions,
  State,
  TextDocumentBatchStatistics,
  TextDocumentInput
} from "../../generated/models";
import {
  HealthcareResult,
  HealthcareEntitiesArray,
  PagedAsyncIterableHealthcareEntities,
  PagedHealthcareEntities,
  makeHealthcareEntitiesResult
} from "../../healthResult";
import { PageSettings } from "@azure/core-paging";
import {
  addStrEncodingParam,
  getJobID,
  handleInvalidDocumentBatch,
  nextLinkToTopAndSkip,
  StringIndexType
} from "../../util";
import { AnalysisPollOperation, AnalysisPollOperationState, JobMetadata } from "../poller";
import { GeneratedClient as Client } from "../../generated";
import { processAndCombineSuccessfulAndErroneousDocuments } from "../../textAnalyticsResult";
import { CanonicalCode } from "@opentelemetry/api";
import { createSpan } from "../../tracing";
import { TextAnalyticsOperationOptions } from "../../textAnalyticsOperationOptions";
export { State };

interface HealthcareResultWithPagination {
  result: HealthcareEntitiesArray;
  top?: number;
  skip?: number;
}

interface HealthcareJobStatus {
  done: boolean;
  /**
   * Statistics about the input document batch and how it was processed
   * by the service. This property will have a value when includeStatistics is set to true
   * in the client call.
   */
  statistics?: TextDocumentBatchStatistics;
  /**
   * The version of the text analytics model used by this operation on this
   * batch of input documents.
   */
  modelVersion?: string;
  jobMetdata?: JobMetadata;
}

interface BeginAnalyzeHealthcareInternalOptions extends OperationOptions {
  /**
   * This value indicates which model will be used for scoring. If a model-version is
   * not specified, the API should default to the latest, non-preview version.
   * For supported model versions, see operation-specific documentation, for example:
   * https://docs.microsoft.com/azure/cognitive-services/text-analytics/how-tos/text-analytics-how-to-sentiment-analysis#model-versioning
   */
  modelVersion?: string;
  /**
   * Specifies the measurement unit used to calculate the offset and length properties.
   * Possible units are "TextElements_v8", "UnicodeCodePoint", and "Utf16CodeUnit".
   * The default is the JavaScript's default which is "Utf16CodeUnit".
   */
  stringIndexType?: StringIndexType;
}

/**
 * Options for the begin analyze healthcare operation.
 */
export interface BeginAnalyzeHealthcareEntitiesOptions extends TextAnalyticsOperationOptions {
  /**
   * Delay to wait until next poll, in milliseconds.
   */
  stringIndexType?: StringIndexType;
  /**
   * Delay to wait until next poll, in milliseconds.
   */
  updateIntervalInMs?: number;
  /**
   * A serialized poller which can be used to resume an existing paused Long-Running-Operation.
   */
  resumeFrom?: string;
}

/**
 * The state of the begin analyze healthcare polling operation.
 */
export interface BeginAnalyzeHealthcareOperationState
  extends AnalysisPollOperationState<PagedHealthcareEntities> {}

/**
 * Class that represents a poller that waits for the healthcare results.
 */
export class BeginAnalyzeHealthcarePollerOperation extends AnalysisPollOperation<
  BeginAnalyzeHealthcareOperationState,
  PagedHealthcareEntities
> {
  constructor(
    public state: BeginAnalyzeHealthcareOperationState,
    // eslint-disable-next-line @azure/azure-sdk/ts-use-interface-parameters
    private client: Client,
    private documents: TextDocumentInput[],
    private options: BeginAnalyzeHealthcareEntitiesOptions = {}
  ) {
    super(state);
  }

  /**
   * should be called only after all the status of the healthcare jobs became
   * "succeeded" and it returns an iterator for the results and provides a
   * byPage method to return the results paged.
   */
  private listHealthcareEntitiesByPage(
    jobId: string,
    options: HealthcareJobStatusOptions = {}
  ): PagedAsyncIterableHealthcareEntities {
    const iter = this._listHealthcareEntities(jobId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        const pageOptions = { ...options, top: settings?.maxPageSize };
        return this._listHealthcareEntitiesPaged(jobId, pageOptions);
      }
    };
  }

  /**
   * returns an iterator to the results of a healthcare job.
   */
  private async *_listHealthcareEntities(
    jobId: string,
    options?: HealthcareJobStatusOptions
  ): AsyncIterableIterator<HealthcareResult> {
    for await (const page of this._listHealthcareEntitiesPaged(jobId, options)) {
      yield* page;
    }
  }

  /**
   * returns an iterator to arrays of the results of a healthcare job.
   */
  private async *_listHealthcareEntitiesPaged(
    jobId: string,
    options?: HealthcareJobStatusOptions
  ): AsyncIterableIterator<HealthcareEntitiesArray> {
    let response = await this._listHealthcareEntitiesSinglePage(jobId, options);
    yield response.result;
    while (response.skip) {
      const optionsWithContinuation: HealthcareJobStatusOptions = {
        ...options,
        top: response.top,
        skip: response.skip
      };
      response = await this._listHealthcareEntitiesSinglePage(jobId, optionsWithContinuation);
      yield response.result;
    }
  }

  /**
   * returns an iterator to arrays of the sorted results of a healthcare job.
   */
  private async _listHealthcareEntitiesSinglePage(
    jobId: string,
    options?: HealthcareJobStatusOptions
  ): Promise<HealthcareResultWithPagination> {
    const { span, updatedOptions: finalOptions } = createSpan(
      "TextAnalyticsClient-_listHealthcareEntitiesSinglePage",
      options || {}
    );
    try {
      const response = await this.client.healthStatus(
        jobId,
        operationOptionsToRequestOptionsBase(finalOptions)
      );
      if (response.results) {
        const result = processAndCombineSuccessfulAndErroneousDocuments(
          this.documents,
          response.results,
          makeHealthcareEntitiesResult
        );
        return response.nextLink
          ? { result, ...nextLinkToTopAndSkip(response.nextLink) }
          : { result };
      } else {
        throw new Error("Healthcare task has succeeded but the there are no results!");
      }
    } catch (e) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  /**
   * returns whether the healthcare job is done and if so returns also
   * statistics and the model version used.
   */
  private async getHealthStatus(
    jobId: string,
    options?: HealthcareJobStatusOptions
  ): Promise<HealthcareJobStatus> {
    const { span, updatedOptions: finalOptions } = createSpan(
      "TextAnalyticsClient-getHealthStatus",
      options || {}
    );
    try {
      const response = await this.client.healthStatus(
        jobId,
        operationOptionsToRequestOptionsBase(finalOptions)
      );
      switch (response.status) {
        case "succeeded": {
          if (response.results) {
            return {
              done: true,
              statistics: response.results.statistics,
              modelVersion: response.results.modelVersion,
              jobMetdata: {
                createdOn: response.createdDateTime,
                updatedOn: response.lastUpdateDateTime,
                expiresOn: response.expirationDateTime,
                status: response.status
              }
            };
          } else {
            throw new Error("Healthcare task has succeeded but the there are no results!");
          }
        }
        case "failed": {
          const errors = response.errors
            ?.map((e) => `  code ${e.code}, message: '${e.message}'`)
            .join("\n");
          const message = `Healthcare analysis failed. Error(s): ${errors || ""}`;
          throw new Error(message);
        }
        case "notStarted":
        case "running":
          break;
        default: {
          throw new Error("Unrecognized state of healthcare job!");
        }
      }
      return { done: false };
    } catch (e) {
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: e.message
      });
      throw e;
    } finally {
      span.end();
    }
  }

  private async beginAnalyzeHealthcare(
    documents: TextDocumentInput[],
    options?: BeginAnalyzeHealthcareInternalOptions
  ): Promise<BeginAnalyzeHealthcareResponse> {
    const { span, updatedOptions: finalOptions } = createSpan(
      "TextAnalyticsClient-beginAnalyzeHealthcare",
      addStrEncodingParam(options || {})
    );

    try {
      return await this.client.health(
        { documents: documents },
        operationOptionsToRequestOptionsBase(finalOptions)
      );
    } catch (e) {
      const exception = handleInvalidDocumentBatch(e);
      span.setStatus({
        code: CanonicalCode.UNKNOWN,
        message: exception.message
      });
      throw exception;
    } finally {
      span.end();
    }
  }

  async update(
    options: {
      abortSignal?: AbortSignalLike;
      fireProgress?: (state: BeginAnalyzeHealthcareOperationState) => void;
    } = {}
  ): Promise<BeginAnalyzeHealthcarePollerOperation> {
    const state = this.state;
    const updatedAbortSignal = options.abortSignal;
    if (!state.isStarted) {
      state.isStarted = true;
      const response = await this.beginAnalyzeHealthcare(this.documents, {
        requestOptions: this.options.requestOptions,
        tracingOptions: this.options.tracingOptions,
        abortSignal: updatedAbortSignal ? updatedAbortSignal : options.abortSignal,
        modelVersion: this.options.modelVersion,
        stringIndexType: this.options.stringIndexType
      });
      if (!response.operationLocation) {
        throw new Error(
          "Expects a valid 'operationLocation' to retrieve health results but did not find any"
        );
      }
      state.jobId = getJobID(response.operationLocation);
    }
    const jobStatus = await this.getHealthStatus(state.jobId!, {
      abortSignal: updatedAbortSignal ? updatedAbortSignal : options.abortSignal,
      includeStatistics: this.options.includeStatistics,
      tracingOptions: this.options.tracingOptions
    });

    state.createdOn = jobStatus.jobMetdata?.createdOn;
    state.expiresOn = jobStatus.jobMetdata?.expiresOn;
    state.updatedOn = jobStatus.jobMetdata?.updatedOn;
    state.status = jobStatus.jobMetdata?.status;

    if (!state.isCompleted && jobStatus.done) {
      if (typeof options.fireProgress === "function") {
        options.fireProgress(state);
      }
      const pagedIterator = this.listHealthcareEntitiesByPage(state.jobId!, {
        abortSignal: this.options.abortSignal,
        tracingOptions: this.options.tracingOptions
      });
      state.result = Object.assign(pagedIterator, {
        statistics: jobStatus.statistics,
        modelVersion: jobStatus.modelVersion!
      });
      state.isCompleted = true;
    }
    return this;
  }

  async cancel(): Promise<BeginAnalyzeHealthcarePollerOperation> {
    const state = this.state;
    if (state.jobId) {
      await this.client.cancelHealthJob(state.jobId, {
        abortSignal: this.options.abortSignal,
        tracingOptions: this.options.tracingOptions
      });
    }
    state.isCancelled = true;
    return this;
  }
}
