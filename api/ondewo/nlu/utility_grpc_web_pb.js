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

var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');

var ondewo_nlu_entity_type_pb = require('../../ondewo/nlu/entity_type_pb.js');
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./utility_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.UtilitiesClient = function (hostname, credentials, options) {
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
proto.ondewo.nlu.UtilitiesPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.ondewo.nlu.ValidateRegexRequest,
 *   !proto.ondewo.nlu.ValidateRegexResponse>}
 */
const methodDescriptor_Utilities_ValidateRegex = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Utilities/ValidateRegex',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ValidateRegexRequest,
	proto.ondewo.nlu.ValidateRegexResponse,
	/**
	 * @param {!proto.ondewo.nlu.ValidateRegexRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ValidateRegexResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ValidateRegexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ValidateRegexResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ValidateRegexResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UtilitiesClient.prototype.validateRegex = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Utilities/ValidateRegex',
		request,
		metadata || {},
		methodDescriptor_Utilities_ValidateRegex,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ValidateRegexRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ValidateRegexResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UtilitiesPromiseClient.prototype.validateRegex = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Utilities/ValidateRegex',
		request,
		metadata || {},
		methodDescriptor_Utilities_ValidateRegex
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ValidateEmbeddedRegexRequest,
 *   !proto.ondewo.nlu.ValidateEmbeddedRegexResponse>}
 */
const methodDescriptor_Utilities_ValidateEmbeddedRegex = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Utilities/ValidateEmbeddedRegex',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ValidateEmbeddedRegexRequest,
	proto.ondewo.nlu.ValidateEmbeddedRegexResponse,
	/**
	 * @param {!proto.ondewo.nlu.ValidateEmbeddedRegexRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ValidateEmbeddedRegexResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ValidateEmbeddedRegexRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ValidateEmbeddedRegexResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ValidateEmbeddedRegexResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UtilitiesClient.prototype.validateEmbeddedRegex = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Utilities/ValidateEmbeddedRegex',
		request,
		metadata || {},
		methodDescriptor_Utilities_ValidateEmbeddedRegex,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ValidateEmbeddedRegexRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ValidateEmbeddedRegexResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UtilitiesPromiseClient.prototype.validateEmbeddedRegex = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Utilities/ValidateEmbeddedRegex',
		request,
		metadata || {},
		methodDescriptor_Utilities_ValidateEmbeddedRegex
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.CleanAllIntentsRequest,
 *   !proto.ondewo.nlu.CleanAllIntentsResponse>}
 */
const methodDescriptor_Utilities_CleanAllIntents = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Utilities/CleanAllIntents',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.CleanAllIntentsRequest,
	proto.ondewo.nlu.CleanAllIntentsResponse,
	/**
	 * @param {!proto.ondewo.nlu.CleanAllIntentsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.CleanAllIntentsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.CleanAllIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.CleanAllIntentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.CleanAllIntentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UtilitiesClient.prototype.cleanAllIntents = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Utilities/CleanAllIntents',
		request,
		metadata || {},
		methodDescriptor_Utilities_CleanAllIntents,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.CleanAllIntentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.CleanAllIntentsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UtilitiesPromiseClient.prototype.cleanAllIntents = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Utilities/CleanAllIntents',
		request,
		metadata || {},
		methodDescriptor_Utilities_CleanAllIntents
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.CleanIntentRequest,
 *   !proto.ondewo.nlu.CleanIntentResponse>}
 */
const methodDescriptor_Utilities_CleanIntent = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Utilities/CleanIntent',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.CleanIntentRequest,
	proto.ondewo.nlu.CleanIntentResponse,
	/**
	 * @param {!proto.ondewo.nlu.CleanIntentRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.CleanIntentResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.CleanIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.CleanIntentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.CleanIntentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UtilitiesClient.prototype.cleanIntent = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Utilities/CleanIntent',
		request,
		metadata || {},
		methodDescriptor_Utilities_CleanIntent,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.CleanIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.CleanIntentResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UtilitiesPromiseClient.prototype.cleanIntent = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Utilities/CleanIntent',
		request,
		metadata || {},
		methodDescriptor_Utilities_CleanIntent
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.CleanAllEntityTypesRequest,
 *   !proto.ondewo.nlu.CleanAllEntityTypesResponse>}
 */
const methodDescriptor_Utilities_CleanAllEntityTypes = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Utilities/CleanAllEntityTypes',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.CleanAllEntityTypesRequest,
	proto.ondewo.nlu.CleanAllEntityTypesResponse,
	/**
	 * @param {!proto.ondewo.nlu.CleanAllEntityTypesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.CleanAllEntityTypesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.CleanAllEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.CleanAllEntityTypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.CleanAllEntityTypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UtilitiesClient.prototype.cleanAllEntityTypes = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Utilities/CleanAllEntityTypes',
		request,
		metadata || {},
		methodDescriptor_Utilities_CleanAllEntityTypes,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.CleanAllEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.CleanAllEntityTypesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UtilitiesPromiseClient.prototype.cleanAllEntityTypes = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Utilities/CleanAllEntityTypes',
		request,
		metadata || {},
		methodDescriptor_Utilities_CleanAllEntityTypes
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.CleanEntityTypeRequest,
 *   !proto.ondewo.nlu.CleanEntityTypeResponse>}
 */
const methodDescriptor_Utilities_CleanEntityType = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Utilities/CleanEntityType',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.CleanEntityTypeRequest,
	proto.ondewo.nlu.CleanEntityTypeResponse,
	/**
	 * @param {!proto.ondewo.nlu.CleanEntityTypeRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.CleanEntityTypeResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.CleanEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.CleanEntityTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.CleanEntityTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UtilitiesClient.prototype.cleanEntityType = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Utilities/CleanEntityType',
		request,
		metadata || {},
		methodDescriptor_Utilities_CleanEntityType,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.CleanEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.CleanEntityTypeResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UtilitiesPromiseClient.prototype.cleanEntityType = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Utilities/CleanEntityType',
		request,
		metadata || {},
		methodDescriptor_Utilities_CleanEntityType
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.AddTrainingPhrasesRequest,
 *   !proto.ondewo.nlu.AddTrainingPhrasesResponse>}
 */
const methodDescriptor_Utilities_AddTrainingPhrases = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Utilities/AddTrainingPhrases',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.AddTrainingPhrasesRequest,
	proto.ondewo.nlu.AddTrainingPhrasesResponse,
	/**
	 * @param {!proto.ondewo.nlu.AddTrainingPhrasesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.AddTrainingPhrasesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.AddTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.AddTrainingPhrasesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.AddTrainingPhrasesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UtilitiesClient.prototype.addTrainingPhrases = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Utilities/AddTrainingPhrases',
		request,
		metadata || {},
		methodDescriptor_Utilities_AddTrainingPhrases,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.AddTrainingPhrasesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.AddTrainingPhrasesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UtilitiesPromiseClient.prototype.addTrainingPhrases = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Utilities/AddTrainingPhrases',
		request,
		metadata || {},
		methodDescriptor_Utilities_AddTrainingPhrases
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.AddTrainingPhrasesFromCSVRequest,
 *   !proto.ondewo.nlu.AddTrainingPhrasesResponse>}
 */
const methodDescriptor_Utilities_AddTrainingPhrasesFromCSV = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Utilities/AddTrainingPhrasesFromCSV',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.AddTrainingPhrasesFromCSVRequest,
	proto.ondewo.nlu.AddTrainingPhrasesResponse,
	/**
	 * @param {!proto.ondewo.nlu.AddTrainingPhrasesFromCSVRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.AddTrainingPhrasesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.AddTrainingPhrasesFromCSVRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.AddTrainingPhrasesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.AddTrainingPhrasesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.UtilitiesClient.prototype.addTrainingPhrasesFromCSV = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Utilities/AddTrainingPhrasesFromCSV',
		request,
		metadata || {},
		methodDescriptor_Utilities_AddTrainingPhrasesFromCSV,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.AddTrainingPhrasesFromCSVRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.AddTrainingPhrasesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.UtilitiesPromiseClient.prototype.addTrainingPhrasesFromCSV = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Utilities/AddTrainingPhrasesFromCSV',
		request,
		metadata || {},
		methodDescriptor_Utilities_AddTrainingPhrasesFromCSV
	);
};

module.exports = proto.ondewo.nlu;
