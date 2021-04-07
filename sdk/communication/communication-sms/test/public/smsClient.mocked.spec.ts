// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  HttpClient,
  isNode
} from "@azure/core-http";

import { AzureKeyCredential } from "@azure/core-auth";
import { assert } from "chai";
import sinon from "sinon";
import { SmsClient, SmsSendRequest } from "../../src/smsClient";
import { FakeHttpClient } from "./utils/fakeHttpClient";

const TEST_NUMBER = "+14255550123";

describe("[mocked] SmsClient", async () => {
  const baseUri = "https://contoso.api.fake:443";
  const connectionString = `endpoint=${baseUri};accesskey=banana`;
  const dateHeader = isNode ? "date" : "x-ms-date";
  let sendRequestSpy: sinon.SinonSpy;
  const mockHttpClient: HttpClient = new FakeHttpClient(TEST_NUMBER);

  const testSendRequest: SmsSendRequest = {
    from: TEST_NUMBER,
    to: [TEST_NUMBER],
    message: "message"
  };

  describe("when instantiating SMS client", () => {
    it("can instantiate with a connection string", async () => {
      new SmsClient(connectionString);
    });
  
    it("can instantiate with a url and KeyCredential ", async () => {
      new SmsClient(baseUri, new AzureKeyCredential("banana"));
    });
  });

  describe("when sending an SMS", () => {
    let smsClient: SmsClient;
    beforeEach(() => {
      sendRequestSpy = sinon.spy(mockHttpClient, "sendRequest");
      sinon.useFakeTimers();
      smsClient = new SmsClient(connectionString, { httpClient: mockHttpClient });
    });

    it("sends with the correct headers", async () => {
      await smsClient.send(testSendRequest);

      const request = sendRequestSpy.getCall(0).args[0];
      if (isNode) {
        assert.equal(request.headers.get("host"), "contoso.api.fake:443");
      }
      assert.typeOf(request.headers.get(dateHeader), "string");
      assert.isDefined(request.headers.get("authorization"));
      assert.match(
        request.headers.get("authorization") as string,
        /HMAC-SHA256 SignedHeaders=.+&Signature=.+/
      );
    });

    it("returns the correct results", async () => {
      const smsTestResults = await smsClient.send(testSendRequest);

      const smsTestResult = smsTestResults[0];
      sinon.assert.calledOnce(sendRequestSpy);
      assert.equal(smsTestResult.httpStatusCode, 202);
      assert.equal(smsTestResult.messageId, "id");
    });

    afterEach(() => {
      sinon.restore();
    });
  });
});
