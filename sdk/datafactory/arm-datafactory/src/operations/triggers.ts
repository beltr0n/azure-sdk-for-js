/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/triggersMappers";
import * as Parameters from "../models/parameters";
import { DataFactoryManagementClientContext } from "../dataFactoryManagementClientContext";

/** Class representing a Triggers. */
export class Triggers {
  private readonly client: DataFactoryManagementClientContext;

  /**
   * Create a Triggers.
   * @param {DataFactoryManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataFactoryManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists triggers.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TriggersListByFactoryResponse>
   */
  listByFactory(resourceGroupName: string, factoryName: string, options?: msRest.RequestOptionsBase): Promise<Models.TriggersListByFactoryResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param callback The callback
   */
  listByFactory(resourceGroupName: string, factoryName: string, callback: msRest.ServiceCallback<Models.TriggerListResponse>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByFactory(resourceGroupName: string, factoryName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TriggerListResponse>): void;
  listByFactory(resourceGroupName: string, factoryName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TriggerListResponse>, callback?: msRest.ServiceCallback<Models.TriggerListResponse>): Promise<Models.TriggersListByFactoryResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        options
      },
      listByFactoryOperationSpec,
      callback) as Promise<Models.TriggersListByFactoryResponse>;
  }

  /**
   * Query triggers.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param filterParameters Parameters to filter the triggers.
   * @param [options] The optional parameters
   * @returns Promise<Models.TriggersQueryByFactoryResponse>
   */
  queryByFactory(resourceGroupName: string, factoryName: string, filterParameters: Models.TriggerFilterParameters, options?: msRest.RequestOptionsBase): Promise<Models.TriggersQueryByFactoryResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param filterParameters Parameters to filter the triggers.
   * @param callback The callback
   */
  queryByFactory(resourceGroupName: string, factoryName: string, filterParameters: Models.TriggerFilterParameters, callback: msRest.ServiceCallback<Models.TriggerQueryResponse>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param filterParameters Parameters to filter the triggers.
   * @param options The optional parameters
   * @param callback The callback
   */
  queryByFactory(resourceGroupName: string, factoryName: string, filterParameters: Models.TriggerFilterParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TriggerQueryResponse>): void;
  queryByFactory(resourceGroupName: string, factoryName: string, filterParameters: Models.TriggerFilterParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TriggerQueryResponse>, callback?: msRest.ServiceCallback<Models.TriggerQueryResponse>): Promise<Models.TriggersQueryByFactoryResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        filterParameters,
        options
      },
      queryByFactoryOperationSpec,
      callback) as Promise<Models.TriggersQueryByFactoryResponse>;
  }

  /**
   * Creates or updates a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param trigger Trigger resource definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.TriggersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, factoryName: string, triggerName: string, trigger: Models.TriggerResource, options?: Models.TriggersCreateOrUpdateOptionalParams): Promise<Models.TriggersCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param trigger Trigger resource definition.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, factoryName: string, triggerName: string, trigger: Models.TriggerResource, callback: msRest.ServiceCallback<Models.TriggerResource>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param trigger Trigger resource definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, factoryName: string, triggerName: string, trigger: Models.TriggerResource, options: Models.TriggersCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.TriggerResource>): void;
  createOrUpdate(resourceGroupName: string, factoryName: string, triggerName: string, trigger: Models.TriggerResource, options?: Models.TriggersCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.TriggerResource>, callback?: msRest.ServiceCallback<Models.TriggerResource>): Promise<Models.TriggersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        trigger,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.TriggersCreateOrUpdateResponse>;
  }

  /**
   * Gets a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TriggersGetResponse>
   */
  get(resourceGroupName: string, factoryName: string, triggerName: string, options?: Models.TriggersGetOptionalParams): Promise<Models.TriggersGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param callback The callback
   */
  get(resourceGroupName: string, factoryName: string, triggerName: string, callback: msRest.ServiceCallback<Models.TriggerResource>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, factoryName: string, triggerName: string, options: Models.TriggersGetOptionalParams, callback: msRest.ServiceCallback<Models.TriggerResource>): void;
  get(resourceGroupName: string, factoryName: string, triggerName: string, options?: Models.TriggersGetOptionalParams | msRest.ServiceCallback<Models.TriggerResource>, callback?: msRest.ServiceCallback<Models.TriggerResource>): Promise<Models.TriggersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TriggersGetResponse>;
  }

  /**
   * Deletes a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, factoryName: string, triggerName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, factoryName: string, triggerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Subscribe event trigger to events.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TriggersSubscribeToEventsResponse>
   */
  subscribeToEvents(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<Models.TriggersSubscribeToEventsResponse> {
    return this.beginSubscribeToEvents(resourceGroupName,factoryName,triggerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.TriggersSubscribeToEventsResponse>;
  }

  /**
   * Get a trigger's event subscription status.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TriggersGetEventSubscriptionStatusResponse>
   */
  getEventSubscriptionStatus(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<Models.TriggersGetEventSubscriptionStatusResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param callback The callback
   */
  getEventSubscriptionStatus(resourceGroupName: string, factoryName: string, triggerName: string, callback: msRest.ServiceCallback<Models.TriggerSubscriptionOperationStatus>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEventSubscriptionStatus(resourceGroupName: string, factoryName: string, triggerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TriggerSubscriptionOperationStatus>): void;
  getEventSubscriptionStatus(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TriggerSubscriptionOperationStatus>, callback?: msRest.ServiceCallback<Models.TriggerSubscriptionOperationStatus>): Promise<Models.TriggersGetEventSubscriptionStatusResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        options
      },
      getEventSubscriptionStatusOperationSpec,
      callback) as Promise<Models.TriggersGetEventSubscriptionStatusResponse>;
  }

  /**
   * Unsubscribe event trigger from events.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TriggersUnsubscribeFromEventsResponse>
   */
  unsubscribeFromEvents(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<Models.TriggersUnsubscribeFromEventsResponse> {
    return this.beginUnsubscribeFromEvents(resourceGroupName,factoryName,triggerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.TriggersUnsubscribeFromEventsResponse>;
  }

  /**
   * Starts a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  start(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStart(resourceGroupName,factoryName,triggerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Stops a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStop(resourceGroupName,factoryName,triggerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Subscribe event trigger to events.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginSubscribeToEvents(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        options
      },
      beginSubscribeToEventsOperationSpec,
      options);
  }

  /**
   * Unsubscribe event trigger from events.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUnsubscribeFromEvents(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        options
      },
      beginUnsubscribeFromEventsOperationSpec,
      options);
  }

  /**
   * Starts a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStart(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        options
      },
      beginStartOperationSpec,
      options);
  }

  /**
   * Stops a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStop(resourceGroupName: string, factoryName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        factoryName,
        triggerName,
        options
      },
      beginStopOperationSpec,
      options);
  }

  /**
   * Lists triggers.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TriggersListByFactoryNextResponse>
   */
  listByFactoryNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TriggersListByFactoryNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByFactoryNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TriggerListResponse>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByFactoryNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TriggerListResponse>): void;
  listByFactoryNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TriggerListResponse>, callback?: msRest.ServiceCallback<Models.TriggerListResponse>): Promise<Models.TriggersListByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByFactoryNextOperationSpec,
      callback) as Promise<Models.TriggersListByFactoryNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByFactoryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TriggerListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const queryByFactoryOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/querytriggers",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "filterParameters",
    mapper: {
      ...Mappers.TriggerFilterParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TriggerQueryResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "trigger",
    mapper: {
      ...Mappers.TriggerResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TriggerResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TriggerResource
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getEventSubscriptionStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/getEventSubscriptionStatus",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginSubscribeToEventsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/subscribeToEvents",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUnsubscribeFromEventsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/unsubscribeFromEvents",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/start",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/stop",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByFactoryNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TriggerListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
