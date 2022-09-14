/**
 * @fileoverview gRPC-Web generated client stub for ondewo.vtsi
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require('grpc-web');

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

var ondewo_s2t_speech$to$text_pb = require('../../ondewo/s2t/speech-to-text_pb.js');

var ondewo_t2s_text$to$speech_pb = require('../../ondewo/t2s/text-to-speech_pb.js');

var ondewo_sip_sip_pb = require('../../ondewo/sip/sip_pb.js');
const proto = {};
proto.ondewo = {};
proto.ondewo.vtsi = require('./voip_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.vtsi.VoipSessionsClient = function (hostname, credentials, options) {
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
proto.ondewo.vtsi.VoipSessionsPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.ondewo.vtsi.CreateProjectConfigsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_VoipSessions_CreateProjectConfigs = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/CreateProjectConfigs',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.CreateProjectConfigsRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.vtsi.CreateProjectConfigsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.CreateProjectConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.createProjectConfigs = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/CreateProjectConfigs',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_CreateProjectConfigs,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.CreateProjectConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.createProjectConfigs = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/CreateProjectConfigs',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_CreateProjectConfigs
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.GetProjectConfigsRequest,
 *   !proto.ondewo.vtsi.GetProjectConfigsResponse>}
 */
const methodDescriptor_VoipSessions_GetProjectConfigs = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/GetProjectConfigs',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.GetProjectConfigsRequest,
	proto.ondewo.vtsi.GetProjectConfigsResponse,
	/**
	 * @param {!proto.ondewo.vtsi.GetProjectConfigsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.vtsi.GetProjectConfigsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.GetProjectConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.vtsi.GetProjectConfigsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.vtsi.GetProjectConfigsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.getProjectConfigs = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/GetProjectConfigs',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_GetProjectConfigs,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.GetProjectConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.vtsi.GetProjectConfigsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.getProjectConfigs = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/GetProjectConfigs',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_GetProjectConfigs
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.UpdateProjectConfigsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_VoipSessions_UpdateProjectConfigs = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/UpdateProjectConfigs',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.UpdateProjectConfigsRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.vtsi.UpdateProjectConfigsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.UpdateProjectConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.updateProjectConfigs = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/UpdateProjectConfigs',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_UpdateProjectConfigs,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.UpdateProjectConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.updateProjectConfigs = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/UpdateProjectConfigs',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_UpdateProjectConfigs
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.DeleteProjectConfigsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_VoipSessions_DeleteProjectConfigs = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/DeleteProjectConfigs',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.DeleteProjectConfigsRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.vtsi.DeleteProjectConfigsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.DeleteProjectConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.deleteProjectConfigs = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/DeleteProjectConfigs',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_DeleteProjectConfigs,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.DeleteProjectConfigsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.deleteProjectConfigs = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/DeleteProjectConfigs',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_DeleteProjectConfigs
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.DeployProjectRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_VoipSessions_DeployProject = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/DeployProject',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.DeployProjectRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.vtsi.DeployProjectRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.DeployProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.deployProject = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/DeployProject',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_DeployProject,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.DeployProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.deployProject = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/DeployProject',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_DeployProject
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.UndeployProjectRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_VoipSessions_UndeployProject = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/UndeployProject',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.UndeployProjectRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.vtsi.UndeployProjectRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.UndeployProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.undeployProject = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/UndeployProject',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_UndeployProject,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.UndeployProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.undeployProject = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/UndeployProject',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_UndeployProject
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.StartListenersRequest,
 *   !proto.ondewo.vtsi.StartListenersResponse>}
 */
const methodDescriptor_VoipSessions_StartListeners = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/StartListeners',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.StartListenersRequest,
	proto.ondewo.vtsi.StartListenersResponse,
	/**
	 * @param {!proto.ondewo.vtsi.StartListenersRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.vtsi.StartListenersResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.StartListenersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.vtsi.StartListenersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.vtsi.StartListenersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.startListeners = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/StartListeners',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_StartListeners,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.StartListenersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.vtsi.StartListenersResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.startListeners = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/StartListeners',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_StartListeners
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.StartCallersRequest,
 *   !proto.ondewo.vtsi.StartCallersResponse>}
 */
const methodDescriptor_VoipSessions_StartCallers = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/StartCallers',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.StartCallersRequest,
	proto.ondewo.vtsi.StartCallersResponse,
	/**
	 * @param {!proto.ondewo.vtsi.StartCallersRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.vtsi.StartCallersResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.StartCallersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.vtsi.StartCallersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.vtsi.StartCallersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.startCallers = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/StartCallers',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_StartCallers,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.StartCallersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.vtsi.StartCallersResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.startCallers = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/StartCallers',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_StartCallers
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.StartScheduledCallersRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_VoipSessions_StartScheduledCallers = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/StartScheduledCallers',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.StartScheduledCallersRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.vtsi.StartScheduledCallersRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.StartScheduledCallersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.startScheduledCallers = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/StartScheduledCallers',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_StartScheduledCallers,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.StartScheduledCallersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.startScheduledCallers = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/StartScheduledCallers',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_StartScheduledCallers
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.StopCallsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_VoipSessions_StopCalls = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/StopCalls',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.StopCallsRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.vtsi.StopCallsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.StopCallsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.stopCalls = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/StopCalls',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_StopCalls,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.StopCallsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.stopCalls = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/StopCalls',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_StopCalls
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.StopAllCallsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_VoipSessions_StopAllCalls = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/StopAllCalls',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.StopAllCallsRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.vtsi.StopAllCallsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.StopAllCallsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.stopAllCalls = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/StopAllCalls',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_StopAllCalls,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.StopAllCallsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.stopAllCalls = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/StopAllCalls',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_StopAllCalls
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.TransferCallsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_VoipSessions_TransferCalls = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/TransferCalls',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.TransferCallsRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.vtsi.TransferCallsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.TransferCallsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.transferCalls = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/TransferCalls',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_TransferCalls,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.TransferCallsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.transferCalls = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/TransferCalls',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_TransferCalls
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.GetVoipCallInfoRequest,
 *   !proto.ondewo.vtsi.GetVoipCallInfoResponse>}
 */
const methodDescriptor_VoipSessions_GetVoipCallInfo = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/GetVoipCallInfo',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.GetVoipCallInfoRequest,
	proto.ondewo.vtsi.GetVoipCallInfoResponse,
	/**
	 * @param {!proto.ondewo.vtsi.GetVoipCallInfoRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.vtsi.GetVoipCallInfoResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.GetVoipCallInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.vtsi.GetVoipCallInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.vtsi.GetVoipCallInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.getVoipCallInfo = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/GetVoipCallInfo',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_GetVoipCallInfo,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.GetVoipCallInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.vtsi.GetVoipCallInfoResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.getVoipCallInfo = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/GetVoipCallInfo',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_GetVoipCallInfo
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.ListVoipCallInfoRequest,
 *   !proto.ondewo.vtsi.ListVoipCallInfoResponse>}
 */
const methodDescriptor_VoipSessions_ListVoipCallInfo = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/ListVoipCallInfo',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.ListVoipCallInfoRequest,
	proto.ondewo.vtsi.ListVoipCallInfoResponse,
	/**
	 * @param {!proto.ondewo.vtsi.ListVoipCallInfoRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.vtsi.ListVoipCallInfoResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.ListVoipCallInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.vtsi.ListVoipCallInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.vtsi.ListVoipCallInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.listVoipCallInfo = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/ListVoipCallInfo',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_ListVoipCallInfo,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.ListVoipCallInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.vtsi.ListVoipCallInfoResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.listVoipCallInfo = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/ListVoipCallInfo',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_ListVoipCallInfo
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.GetAudioFileRequest,
 *   !proto.ondewo.vtsi.GetAudioFileResponse>}
 */
const methodDescriptor_VoipSessions_GetAudioFile = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/GetAudioFile',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.GetAudioFileRequest,
	proto.ondewo.vtsi.GetAudioFileResponse,
	/**
	 * @param {!proto.ondewo.vtsi.GetAudioFileRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.vtsi.GetAudioFileResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.GetAudioFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.vtsi.GetAudioFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.vtsi.GetAudioFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.getAudioFile = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/GetAudioFile',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_GetAudioFile,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.GetAudioFileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.vtsi.GetAudioFileResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.getAudioFile = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/GetAudioFile',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_GetAudioFile
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.vtsi.GetFullConversationAudioFileRequest,
 *   !proto.ondewo.vtsi.GetFullConversationAudioFileResponse>}
 */
const methodDescriptor_VoipSessions_GetFullConversationAudioFile = new grpc.web.MethodDescriptor(
	'/ondewo.vtsi.VoipSessions/GetFullConversationAudioFile',
	grpc.web.MethodType.UNARY,
	proto.ondewo.vtsi.GetFullConversationAudioFileRequest,
	proto.ondewo.vtsi.GetFullConversationAudioFileResponse,
	/**
	 * @param {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.vtsi.GetFullConversationAudioFileResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.vtsi.GetFullConversationAudioFileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.vtsi.GetFullConversationAudioFileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.vtsi.VoipSessionsClient.prototype.getFullConversationAudioFile = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/GetFullConversationAudioFile',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_GetFullConversationAudioFile,
		callback
	);
};

/**
 * @param {!proto.ondewo.vtsi.GetFullConversationAudioFileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.vtsi.GetFullConversationAudioFileResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.vtsi.VoipSessionsPromiseClient.prototype.getFullConversationAudioFile = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.vtsi.VoipSessions/GetFullConversationAudioFile',
		request,
		metadata || {},
		methodDescriptor_VoipSessions_GetFullConversationAudioFile
	);
};

module.exports = proto.ondewo.vtsi;
