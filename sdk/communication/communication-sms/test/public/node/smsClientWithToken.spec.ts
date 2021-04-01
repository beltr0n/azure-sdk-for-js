// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { env, record, Recorder } from "@azure/test-utils-recorder";
import { SmsSendRequest, SmsClient } from "../../../src/smsClient";
import { assert } from "chai";
import { isNode } from "@azure/core-http";
import * as dotenv from "dotenv";
import { parseConnectionString } from "@azure/communication-common";
import { createCredential, recorderConfiguration } from "../../utils/recordedClient";
import { Context } from "mocha";

if (isNode) {
  dotenv.config();
}

describe("SmsClientWithToken [Live]", async () => {
  let recorder: Recorder;

  beforeEach(async function(this: Context) {
    recorder = record(this, recorderConfiguration);
    recorder.skip(undefined); // only run in live mode
  });

  afterEach(async function(this: Context) {
    await recorder.stop();
  });

  it("can send an SMS when url and token credential are provided", async function() {
    const credential = createCredential();
    const endpoint = parseConnectionString(env.AZURE_COMMUNICATION_LIVETEST_CONNECTION_STRING)
      .endpoint;
    const fromNumber = env.AZURE_PHONE_NUMBER as string;
    const toNumber = env.AZURE_PHONE_NUMBER as string;

    const smsClient = new SmsClient(endpoint, credential);

    const sendRequest: SmsSendRequest = {
      from: fromNumber,
      to: [toNumber],
      message: "test message"
    };

    const responses = await smsClient.send(sendRequest);
    const response = responses[0];
    assert.equal(response.httpStatusCode, 202);
    assert.isTrue(response.successful);
  }).timeout(5000);
});
