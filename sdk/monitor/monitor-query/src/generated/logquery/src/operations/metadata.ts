/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureLogAnalytics } from "../azureLogAnalytics";
import { MetadataGetResponse, MetadataPostResponse } from "../models";

/** Class representing a Metadata. */
export class Metadata {
  private readonly client: AzureLogAnalytics;

  /**
   * Initialize a new instance of the class Metadata class.
   * @param client Reference to the service client
   */
  constructor(client: AzureLogAnalytics) {
    this.client = client;
  }

  /**
   * Retrieve the metadata information for the workspace, including its schema, functions, workspace
   * info, categories etc.
   * @param workspaceId ID of the workspace. This is Workspace ID from the Properties blade in the Azure
   *                    portal.
   * @param options The options parameters.
   */
  get(
    workspaceId: string,
    options?: coreHttp.OperationOptions
  ): Promise<MetadataGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      workspaceId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<MetadataGetResponse>;
  }

  /**
   * Retrieve the metadata information for the workspace, including its schema, functions, workspace
   * info, categories etc.
   * @param workspaceId ID of the workspace. This is Workspace ID from the Properties blade in the Azure
   *                    portal.
   * @param options The options parameters.
   */
  post(
    workspaceId: string,
    options?: coreHttp.OperationOptions
  ): Promise<MetadataPostResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      workspaceId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      postOperationSpec
    ) as Promise<MetadataPostResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path: "/workspaces/{workspaceId}/metadata",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetadataResults
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.workspaceId],
  headerParameters: [Parameters.accept],
  serializer
};
const postOperationSpec: coreHttp.OperationSpec = {
  path: "/workspaces/{workspaceId}/metadata",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.MetadataResults
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.workspaceId],
  headerParameters: [Parameters.accept],
  serializer
};
