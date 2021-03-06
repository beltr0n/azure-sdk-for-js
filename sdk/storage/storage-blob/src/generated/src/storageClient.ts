/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  Service,
  Container,
  Directory,
  Blob,
  PageBlob,
  AppendBlob,
  BlockBlob
} from "./operations";
import { StorageClientContext } from "./storageClientContext";
import { StorageClientOptionalParams } from "./models";

export class StorageClient extends StorageClientContext {
  /**
   * Initializes a new instance of the StorageClient class.
   * @param url The URL of the service account, container, or blob that is the targe of the desired
   *            operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: StorageClientOptionalParams) {
    super(url, options);
    this.service = new Service(this);
    this.container = new Container(this);
    this.directory = new Directory(this);
    this.blob = new Blob(this);
    this.pageBlob = new PageBlob(this);
    this.appendBlob = new AppendBlob(this);
    this.blockBlob = new BlockBlob(this);
  }

  service: Service;
  container: Container;
  directory: Directory;
  blob: Blob;
  pageBlob: PageBlob;
  appendBlob: AppendBlob;
  blockBlob: BlockBlob;
}
