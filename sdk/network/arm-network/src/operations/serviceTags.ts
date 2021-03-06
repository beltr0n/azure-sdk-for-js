/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/serviceTagsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ServiceTags. */
export class ServiceTags {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ServiceTags.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of service tag information resources.
   * @param location The location that will be used as a reference for version (not as a filter based
   * on location, you will get the list of service tags with prefix details across all regions but
   * limited to the cloud that your subscription belongs to).
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceTagsListResponse>
   */
  list(location: string, options?: msRest.RequestOptionsBase): Promise<Models.ServiceTagsListResponse>;
  /**
   * @param location The location that will be used as a reference for version (not as a filter based
   * on location, you will get the list of service tags with prefix details across all regions but
   * limited to the cloud that your subscription belongs to).
   * @param callback The callback
   */
  list(location: string, callback: msRest.ServiceCallback<Models.ServiceTagsListResult>): void;
  /**
   * @param location The location that will be used as a reference for version (not as a filter based
   * on location, you will get the list of service tags with prefix details across all regions but
   * limited to the cloud that your subscription belongs to).
   * @param options The optional parameters
   * @param callback The callback
   */
  list(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServiceTagsListResult>): void;
  list(location: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServiceTagsListResult>, callback?: msRest.ServiceCallback<Models.ServiceTagsListResult>): Promise<Models.ServiceTagsListResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ServiceTagsListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/serviceTags",
  urlParameters: [
    Parameters.location0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceTagsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
