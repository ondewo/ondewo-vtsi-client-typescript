/**
 * @fileoverview gRPC-Web generated client stub for ondewo.qa
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js')
const proto = {};
proto.ondewo = {};
proto.ondewo.qa = require('./qa_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.qa.QAClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.qa.QAPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.qa.GetAnswerRequest,
 *   !proto.ondewo.qa.GetAnswerResponse>}
 */
const methodDescriptor_QA_GetAnswer = new grpc.web.MethodDescriptor(
  '/ondewo.qa.QA/GetAnswer',
  grpc.web.MethodType.UNARY,
  proto.ondewo.qa.GetAnswerRequest,
  proto.ondewo.qa.GetAnswerResponse,
  /**
   * @param {!proto.ondewo.qa.GetAnswerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.qa.GetAnswerResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.qa.GetAnswerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.qa.GetAnswerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.qa.GetAnswerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.qa.QAClient.prototype.getAnswer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.qa.QA/GetAnswer',
      request,
      metadata || {},
      methodDescriptor_QA_GetAnswer,
      callback);
};


/**
 * @param {!proto.ondewo.qa.GetAnswerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.qa.GetAnswerResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.qa.QAPromiseClient.prototype.getAnswer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.qa.QA/GetAnswer',
      request,
      metadata || {},
      methodDescriptor_QA_GetAnswer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.qa.RunScraperRequest,
 *   !proto.ondewo.qa.RunScraperResponse>}
 */
const methodDescriptor_QA_RunScraper = new grpc.web.MethodDescriptor(
  '/ondewo.qa.QA/RunScraper',
  grpc.web.MethodType.UNARY,
  proto.ondewo.qa.RunScraperRequest,
  proto.ondewo.qa.RunScraperResponse,
  /**
   * @param {!proto.ondewo.qa.RunScraperRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.qa.RunScraperResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.qa.RunScraperRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.qa.RunScraperResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.qa.RunScraperResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.qa.QAClient.prototype.runScraper =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.qa.QA/RunScraper',
      request,
      metadata || {},
      methodDescriptor_QA_RunScraper,
      callback);
};


/**
 * @param {!proto.ondewo.qa.RunScraperRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.qa.RunScraperResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.qa.QAPromiseClient.prototype.runScraper =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.qa.QA/RunScraper',
      request,
      metadata || {},
      methodDescriptor_QA_RunScraper);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.qa.UpdateDatabaseRequest,
 *   !proto.ondewo.qa.UpdateDatabaseResponse>}
 */
const methodDescriptor_QA_UpdateDatabase = new grpc.web.MethodDescriptor(
  '/ondewo.qa.QA/UpdateDatabase',
  grpc.web.MethodType.UNARY,
  proto.ondewo.qa.UpdateDatabaseRequest,
  proto.ondewo.qa.UpdateDatabaseResponse,
  /**
   * @param {!proto.ondewo.qa.UpdateDatabaseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.qa.UpdateDatabaseResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.qa.UpdateDatabaseRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.qa.UpdateDatabaseResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.qa.UpdateDatabaseResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.qa.QAClient.prototype.updateDatabase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.qa.QA/UpdateDatabase',
      request,
      metadata || {},
      methodDescriptor_QA_UpdateDatabase,
      callback);
};


/**
 * @param {!proto.ondewo.qa.UpdateDatabaseRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.qa.UpdateDatabaseResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.qa.QAPromiseClient.prototype.updateDatabase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.qa.QA/UpdateDatabase',
      request,
      metadata || {},
      methodDescriptor_QA_UpdateDatabase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.qa.RunTrainingResponse>}
 */
const methodDescriptor_QA_RunTraining = new grpc.web.MethodDescriptor(
  '/ondewo.qa.QA/RunTraining',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.ondewo.qa.RunTrainingResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.qa.RunTrainingResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.qa.RunTrainingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.qa.RunTrainingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.qa.QAClient.prototype.runTraining =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.qa.QA/RunTraining',
      request,
      metadata || {},
      methodDescriptor_QA_RunTraining,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.qa.RunTrainingResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.qa.QAPromiseClient.prototype.runTraining =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.qa.QA/RunTraining',
      request,
      metadata || {},
      methodDescriptor_QA_RunTraining);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.qa.GetServerStateResponse>}
 */
const methodDescriptor_QA_GetServerState = new grpc.web.MethodDescriptor(
  '/ondewo.qa.QA/GetServerState',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.ondewo.qa.GetServerStateResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.qa.GetServerStateResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.qa.GetServerStateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.qa.GetServerStateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.qa.QAClient.prototype.getServerState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.qa.QA/GetServerState',
      request,
      metadata || {},
      methodDescriptor_QA_GetServerState,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.qa.GetServerStateResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.qa.QAPromiseClient.prototype.getServerState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.qa.QA/GetServerState',
      request,
      metadata || {},
      methodDescriptor_QA_GetServerState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.qa.ListProjectIdsResponse>}
 */
const methodDescriptor_QA_ListProjectIds = new grpc.web.MethodDescriptor(
  '/ondewo.qa.QA/ListProjectIds',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.ondewo.qa.ListProjectIdsResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.qa.ListProjectIdsResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.qa.ListProjectIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.qa.ListProjectIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.qa.QAClient.prototype.listProjectIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.qa.QA/ListProjectIds',
      request,
      metadata || {},
      methodDescriptor_QA_ListProjectIds,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.qa.ListProjectIdsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.qa.QAPromiseClient.prototype.listProjectIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.qa.QA/ListProjectIds',
      request,
      metadata || {},
      methodDescriptor_QA_ListProjectIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.qa.GetProjectConfigRequest,
 *   !proto.ondewo.qa.GetProjectConfigResponse>}
 */
const methodDescriptor_QA_GetProjectConfig = new grpc.web.MethodDescriptor(
  '/ondewo.qa.QA/GetProjectConfig',
  grpc.web.MethodType.UNARY,
  proto.ondewo.qa.GetProjectConfigRequest,
  proto.ondewo.qa.GetProjectConfigResponse,
  /**
   * @param {!proto.ondewo.qa.GetProjectConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.qa.GetProjectConfigResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.qa.GetProjectConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.qa.GetProjectConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.qa.GetProjectConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.qa.QAClient.prototype.getProjectConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.qa.QA/GetProjectConfig',
      request,
      metadata || {},
      methodDescriptor_QA_GetProjectConfig,
      callback);
};


/**
 * @param {!proto.ondewo.qa.GetProjectConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.qa.GetProjectConfigResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.qa.QAPromiseClient.prototype.getProjectConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.qa.QA/GetProjectConfig',
      request,
      metadata || {},
      methodDescriptor_QA_GetProjectConfig);
};


module.exports = proto.ondewo.qa;

