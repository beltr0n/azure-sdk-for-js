/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { SqlPoolsListResponse, SqlPoolsGetResponse } from "../models";

/** Interface representing a SqlPools. */
export interface SqlPools {
  /**
   * List Sql Pools
   * @param options The options parameters.
   */
  list(options?: coreHttp.OperationOptions): Promise<SqlPoolsListResponse>;
  /**
   * Get Sql Pool
   * @param sqlPoolName The Sql Pool name
   * @param options The options parameters.
   */
  get(sqlPoolName: string, options?: coreHttp.OperationOptions): Promise<SqlPoolsGetResponse>;
}