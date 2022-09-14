/**
 * @fileoverview gRPC-Web generated client stub for ondewo.nlu
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require('grpc-web');

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

var google_rpc_status_pb = require('../../google/rpc/status_pb.js');

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

var ondewo_nlu_operation_metadata_pb = require('../../ondewo/nlu/operation_metadata_pb.js');
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./operations_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.OperationsClient = function (hostname, credentials, options) {
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
proto.ondewo.nlu.OperationsPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.ondewo.nlu.ListOperationsRequest,
 *   !proto.ondewo.nlu.ListOperationsResponse>}
 */
const methodDescriptor_Operations_ListOperations = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Operations/ListOperations',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListOperationsRequest,
	proto.ondewo.nlu.ListOperationsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListOperationsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListOperationsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListOperationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListOperationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.OperationsClient.prototype.listOperations = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Operations/ListOperations',
		request,
		metadata || {},
		methodDescriptor_Operations_ListOperations,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListOperationsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListOperationsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.OperationsPromiseClient.prototype.listOperations = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Operations/ListOperations',
		request,
		metadata || {},
		methodDescriptor_Operations_ListOperations
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetOperationRequest,
 *   !proto.ondewo.nlu.Operation>}
 */
const methodDescriptor_Operations_GetOperation = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Operations/GetOperation',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetOperationRequest,
	proto.ondewo.nlu.Operation,
	/**
	 * @param {!proto.ondewo.nlu.GetOperationRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Operation.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.OperationsClient.prototype.getOperation = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Operations/GetOperation',
		request,
		metadata || {},
		methodDescriptor_Operations_GetOperation,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.OperationsPromiseClient.prototype.getOperation = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Operations/GetOperation',
		request,
		metadata || {},
		methodDescriptor_Operations_GetOperation
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteOperationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Operations_DeleteOperation = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Operations/DeleteOperation',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.DeleteOperationRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.nlu.DeleteOperationRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.DeleteOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.OperationsClient.prototype.deleteOperation = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Operations/DeleteOperation',
		request,
		metadata || {},
		methodDescriptor_Operations_DeleteOperation,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.DeleteOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.OperationsPromiseClient.prototype.deleteOperation = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Operations/DeleteOperation',
		request,
		metadata || {},
		methodDescriptor_Operations_DeleteOperation
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.CancelOperationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Operations_CancelOperation = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Operations/CancelOperation',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.CancelOperationRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.nlu.CancelOperationRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.CancelOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.OperationsClient.prototype.cancelOperation = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Operations/CancelOperation',
		request,
		metadata || {},
		methodDescriptor_Operations_CancelOperation,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.CancelOperationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.OperationsPromiseClient.prototype.cancelOperation = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Operations/CancelOperation',
		request,
		metadata || {},
		methodDescriptor_Operations_CancelOperation
	);
};

module.exports = proto.ondewo.nlu;
