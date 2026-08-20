import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as ondewo_nlu_common_pb from '../../ondewo/nlu/common_pb'; // proto import: "ondewo/nlu/common.proto"
import * as ondewo_vtsi_calls_pb from '../../ondewo/vtsi/calls_pb'; // proto import: "ondewo/vtsi/calls.proto"


export class CallLogEntry extends jspb.Message {
  getSeq(): number;
  setSeq(value: number): CallLogEntry;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): CallLogEntry;
  hasTimestamp(): boolean;
  clearTimestamp(): CallLogEntry;

  getTimestampIsExact(): boolean;
  setTimestampIsExact(value: boolean): CallLogEntry;

  getLevel(): ondewo_nlu_common_pb.LogSeverity;
  setLevel(value: ondewo_nlu_common_pb.LogSeverity): CallLogEntry;

  getMessage(): string;
  setMessage(value: string): CallLogEntry;

  getContainerId(): string;
  setContainerId(value: string): CallLogEntry;

  getContainerName(): string;
  setContainerName(value: string): CallLogEntry;

  getLogSource(): LogSource;
  setLogSource(value: LogSource): CallLogEntry;

  getChannel(): LogStreamChannel;
  setChannel(value: LogStreamChannel): CallLogEntry;

  getEmitter(): string;
  setEmitter(value: string): CallLogEntry;

  getThreadName(): string;
  setThreadName(value: string): CallLogEntry;

  getLogStream(): string;
  setLogStream(value: string): CallLogEntry;

  getCall(): string;
  setCall(value: string): CallLogEntry;

  getNluSessionName(): string;
  setNluSessionName(value: string): CallLogEntry;

  getPhysicalLineCount(): number;
  setPhysicalLineCount(value: number): CallLogEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallLogEntry.AsObject;
  static toObject(includeInstance: boolean, msg: CallLogEntry): CallLogEntry.AsObject;
  static serializeBinaryToWriter(message: CallLogEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallLogEntry;
  static deserializeBinaryFromReader(message: CallLogEntry, reader: jspb.BinaryReader): CallLogEntry;
}

export namespace CallLogEntry {
  export type AsObject = {
    seq: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timestampIsExact: boolean,
    level: ondewo_nlu_common_pb.LogSeverity,
    message: string,
    containerId: string,
    containerName: string,
    logSource: LogSource,
    channel: LogStreamChannel,
    emitter: string,
    threadName: string,
    logStream: string,
    call: string,
    nluSessionName: string,
    physicalLineCount: number,
  }
}

export class SipHeaderFilter extends jspb.Message {
  getKey(): string;
  setKey(value: string): SipHeaderFilter;

  getValue(): string;
  setValue(value: string): SipHeaderFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SipHeaderFilter.AsObject;
  static toObject(includeInstance: boolean, msg: SipHeaderFilter): SipHeaderFilter.AsObject;
  static serializeBinaryToWriter(message: SipHeaderFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SipHeaderFilter;
  static deserializeBinaryFromReader(message: SipHeaderFilter, reader: jspb.BinaryReader): SipHeaderFilter;
}

export namespace SipHeaderFilter {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class CallLogFilter extends jspb.Message {
  getCallNamesList(): Array<string>;
  setCallNamesList(value: Array<string>): CallLogFilter;
  clearCallNamesList(): CallLogFilter;
  addCallNames(value: string, index?: number): CallLogFilter;

  getCallerNamesList(): Array<string>;
  setCallerNamesList(value: Array<string>): CallLogFilter;
  clearCallerNamesList(): CallLogFilter;
  addCallerNames(value: string, index?: number): CallLogFilter;

  getListenerNamesList(): Array<string>;
  setListenerNamesList(value: Array<string>): CallLogFilter;
  clearListenerNamesList(): CallLogFilter;
  addListenerNames(value: string, index?: number): CallLogFilter;

  getCallerIdsList(): Array<string>;
  setCallerIdsList(value: Array<string>): CallLogFilter;
  clearCallerIdsList(): CallLogFilter;
  addCallerIds(value: string, index?: number): CallLogFilter;

  getListenerIdsList(): Array<string>;
  setListenerIdsList(value: Array<string>): CallLogFilter;
  clearListenerIdsList(): CallLogFilter;
  addListenerIds(value: string, index?: number): CallLogFilter;

  getCallIdsList(): Array<string>;
  setCallIdsList(value: Array<string>): CallLogFilter;
  clearCallIdsList(): CallLogFilter;
  addCallIds(value: string, index?: number): CallLogFilter;

  getContainerNamesList(): Array<string>;
  setContainerNamesList(value: Array<string>): CallLogFilter;
  clearContainerNamesList(): CallLogFilter;
  addContainerNames(value: string, index?: number): CallLogFilter;

  getContainerIdsList(): Array<string>;
  setContainerIdsList(value: Array<string>): CallLogFilter;
  clearContainerIdsList(): CallLogFilter;
  addContainerIds(value: string, index?: number): CallLogFilter;

  getLogStreamNamesList(): Array<string>;
  setLogStreamNamesList(value: Array<string>): CallLogFilter;
  clearLogStreamNamesList(): CallLogFilter;
  addLogStreamNames(value: string, index?: number): CallLogFilter;

  getSipAccountsList(): Array<string>;
  setSipAccountsList(value: Array<string>): CallLogFilter;
  clearSipAccountsList(): CallLogFilter;
  addSipAccounts(value: string, index?: number): CallLogFilter;

  getSipPortsList(): Array<string>;
  setSipPortsList(value: Array<string>): CallLogFilter;
  clearSipPortsList(): CallLogFilter;
  addSipPorts(value: string, index?: number): CallLogFilter;

  getCsiPortsList(): Array<string>;
  setCsiPortsList(value: Array<string>): CallLogFilter;
  clearCsiPortsList(): CallLogFilter;
  addCsiPorts(value: string, index?: number): CallLogFilter;

  getAsteriskPortsList(): Array<string>;
  setAsteriskPortsList(value: Array<string>): CallLogFilter;
  clearAsteriskPortsList(): CallLogFilter;
  addAsteriskPorts(value: string, index?: number): CallLogFilter;

  getPhoneNumbersList(): Array<string>;
  setPhoneNumbersList(value: Array<string>): CallLogFilter;
  clearPhoneNumbersList(): CallLogFilter;
  addPhoneNumbers(value: string, index?: number): CallLogFilter;

  getCalleeIdsList(): Array<string>;
  setCalleeIdsList(value: Array<string>): CallLogFilter;
  clearCalleeIdsList(): CallLogFilter;
  addCalleeIds(value: string, index?: number): CallLogFilter;

  getNluSessionNamesList(): Array<string>;
  setNluSessionNamesList(value: Array<string>): CallLogFilter;
  clearNluSessionNamesList(): CallLogFilter;
  addNluSessionNames(value: string, index?: number): CallLogFilter;

  getNluSessionUuidsList(): Array<string>;
  setNluSessionUuidsList(value: Array<string>): CallLogFilter;
  clearNluSessionUuidsList(): CallLogFilter;
  addNluSessionUuids(value: string, index?: number): CallLogFilter;

  getNluProjectUuidsList(): Array<string>;
  setNluProjectUuidsList(value: Array<string>): CallLogFilter;
  clearNluProjectUuidsList(): CallLogFilter;
  addNluProjectUuids(value: string, index?: number): CallLogFilter;

  getCallTypesList(): Array<ondewo_vtsi_calls_pb.CallType>;
  setCallTypesList(value: Array<ondewo_vtsi_calls_pb.CallType>): CallLogFilter;
  clearCallTypesList(): CallLogFilter;
  addCallTypes(value: ondewo_vtsi_calls_pb.CallType, index?: number): CallLogFilter;

  getSipHeadersList(): Array<SipHeaderFilter>;
  setSipHeadersList(value: Array<SipHeaderFilter>): CallLogFilter;
  clearSipHeadersList(): CallLogFilter;
  addSipHeaders(value?: SipHeaderFilter, index?: number): SipHeaderFilter;

  getLogSourcesList(): Array<LogSource>;
  setLogSourcesList(value: Array<LogSource>): CallLogFilter;
  clearLogSourcesList(): CallLogFilter;
  addLogSources(value: LogSource, index?: number): CallLogFilter;

  getChannelsList(): Array<LogStreamChannel>;
  setChannelsList(value: Array<LogStreamChannel>): CallLogFilter;
  clearChannelsList(): CallLogFilter;
  addChannels(value: LogStreamChannel, index?: number): CallLogFilter;

  getMinLogLevel(): ondewo_nlu_common_pb.LogSeverity;
  setMinLogLevel(value: ondewo_nlu_common_pb.LogSeverity): CallLogFilter;

  getLogLevelsList(): Array<ondewo_nlu_common_pb.LogSeverity>;
  setLogLevelsList(value: Array<ondewo_nlu_common_pb.LogSeverity>): CallLogFilter;
  clearLogLevelsList(): CallLogFilter;
  addLogLevels(value: ondewo_nlu_common_pb.LogSeverity, index?: number): CallLogFilter;

  getIncludeUnleveledLines(): boolean;
  setIncludeUnleveledLines(value: boolean): CallLogFilter;
  hasIncludeUnleveledLines(): boolean;
  clearIncludeUnleveledLines(): CallLogFilter;

  getText(): string;
  setText(value: string): CallLogFilter;
  hasText(): boolean;
  clearText(): CallLogFilter;

  getRegex(): string;
  setRegex(value: string): CallLogFilter;
  hasRegex(): boolean;
  clearRegex(): CallLogFilter;

  getEmitterPrefixesList(): Array<string>;
  setEmitterPrefixesList(value: Array<string>): CallLogFilter;
  clearEmitterPrefixesList(): CallLogFilter;
  addEmitterPrefixes(value: string, index?: number): CallLogFilter;

  getThreadNamesList(): Array<string>;
  setThreadNamesList(value: Array<string>): CallLogFilter;
  clearThreadNamesList(): CallLogFilter;
  addThreadNames(value: string, index?: number): CallLogFilter;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CallLogFilter;
  hasStartTime(): boolean;
  clearStartTime(): CallLogFilter;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CallLogFilter;
  hasEndTime(): boolean;
  clearEndTime(): CallLogFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallLogFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CallLogFilter): CallLogFilter.AsObject;
  static serializeBinaryToWriter(message: CallLogFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallLogFilter;
  static deserializeBinaryFromReader(message: CallLogFilter, reader: jspb.BinaryReader): CallLogFilter;
}

export namespace CallLogFilter {
  export type AsObject = {
    callNamesList: Array<string>,
    callerNamesList: Array<string>,
    listenerNamesList: Array<string>,
    callerIdsList: Array<string>,
    listenerIdsList: Array<string>,
    callIdsList: Array<string>,
    containerNamesList: Array<string>,
    containerIdsList: Array<string>,
    logStreamNamesList: Array<string>,
    sipAccountsList: Array<string>,
    sipPortsList: Array<string>,
    csiPortsList: Array<string>,
    asteriskPortsList: Array<string>,
    phoneNumbersList: Array<string>,
    calleeIdsList: Array<string>,
    nluSessionNamesList: Array<string>,
    nluSessionUuidsList: Array<string>,
    nluProjectUuidsList: Array<string>,
    callTypesList: Array<ondewo_vtsi_calls_pb.CallType>,
    sipHeadersList: Array<SipHeaderFilter.AsObject>,
    logSourcesList: Array<LogSource>,
    channelsList: Array<LogStreamChannel>,
    minLogLevel: ondewo_nlu_common_pb.LogSeverity,
    logLevelsList: Array<ondewo_nlu_common_pb.LogSeverity>,
    includeUnleveledLines?: boolean,
    text?: string,
    regex?: string,
    emitterPrefixesList: Array<string>,
    threadNamesList: Array<string>,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum IncludeUnleveledLinesCase { 
    _INCLUDE_UNLEVELED_LINES_NOT_SET = 0,
    INCLUDE_UNLEVELED_LINES = 25,
  }

  export enum TextCase { 
    _TEXT_NOT_SET = 0,
    TEXT = 26,
  }

  export enum RegexCase { 
    _REGEX_NOT_SET = 0,
    REGEX = 27,
  }

  export enum StartTimeCase { 
    _START_TIME_NOT_SET = 0,
    START_TIME = 30,
  }

  export enum EndTimeCase { 
    _END_TIME_NOT_SET = 0,
    END_TIME = 31,
  }
}

export class CallLogStream extends jspb.Message {
  getName(): string;
  setName(value: string): CallLogStream;

  getContainerName(): string;
  setContainerName(value: string): CallLogStream;

  getContainerId(): string;
  setContainerId(value: string): CallLogStream;

  getChannel(): LogStreamChannel;
  setChannel(value: LogStreamChannel): CallLogStream;

  getProjectId(): string;
  setProjectId(value: string): CallLogStream;

  getVoipCallName(): string;
  setVoipCallName(value: string): CallLogStream;

  getCallType(): ondewo_vtsi_calls_pb.CallType;
  setCallType(value: ondewo_vtsi_calls_pb.CallType): CallLogStream;

  getSipAccount(): string;
  setSipAccount(value: string): CallLogStream;

  getSipPort(): number;
  setSipPort(value: number): CallLogStream;

  getCsiPort(): number;
  setCsiPort(value: number): CallLogStream;

  getAsteriskPort(): number;
  setAsteriskPort(value: number): CallLogStream;

  getImage(): string;
  setImage(value: string): CallLogStream;

  getCaptureState(): LogCaptureState;
  setCaptureState(value: LogCaptureState): CallLogStream;

  getCaptureError(): string;
  setCaptureError(value: string): CallLogStream;

  getCaptureStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCaptureStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): CallLogStream;
  hasCaptureStartedAt(): boolean;
  clearCaptureStartedAt(): CallLogStream;

  getCaptureFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCaptureFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): CallLogStream;
  hasCaptureFinishedAt(): boolean;
  clearCaptureFinishedAt(): CallLogStream;

  getPartialCapture(): boolean;
  setPartialCapture(value: boolean): CallLogStream;

  getMinAvailableSeq(): number;
  setMinAvailableSeq(value: number): CallLogStream;

  getMaxAvailableSeq(): number;
  setMaxAvailableSeq(value: number): CallLogStream;

  getLineCount(): number;
  setLineCount(value: number): CallLogStream;

  getDroppedLineCount(): number;
  setDroppedLineCount(value: number): CallLogStream;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallLogStream.AsObject;
  static toObject(includeInstance: boolean, msg: CallLogStream): CallLogStream.AsObject;
  static serializeBinaryToWriter(message: CallLogStream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallLogStream;
  static deserializeBinaryFromReader(message: CallLogStream, reader: jspb.BinaryReader): CallLogStream;
}

export namespace CallLogStream {
  export type AsObject = {
    name: string,
    containerName: string,
    containerId: string,
    channel: LogStreamChannel,
    projectId: string,
    voipCallName: string,
    callType: ondewo_vtsi_calls_pb.CallType,
    sipAccount: string,
    sipPort: number,
    csiPort: number,
    asteriskPort: number,
    image: string,
    captureState: LogCaptureState,
    captureError: string,
    captureStartedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    captureFinishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    partialCapture: boolean,
    minAvailableSeq: number,
    maxAvailableSeq: number,
    lineCount: number,
    droppedLineCount: number,
  }
}

export class StreamCallLogsRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StreamCallLogsRequest;

  getFilter(): CallLogFilter | undefined;
  setFilter(value?: CallLogFilter): StreamCallLogsRequest;
  hasFilter(): boolean;
  clearFilter(): StreamCallLogsRequest;

  getTailLines(): number;
  setTailLines(value: number): StreamCallLogsRequest;
  hasTailLines(): boolean;
  clearTailLines(): StreamCallLogsRequest;

  getResumeToken(): string;
  setResumeToken(value: string): StreamCallLogsRequest;
  hasResumeToken(): boolean;
  clearResumeToken(): StreamCallLogsRequest;

  getAfterSeq(): number;
  setAfterSeq(value: number): StreamCallLogsRequest;
  hasAfterSeq(): boolean;
  clearAfterSeq(): StreamCallLogsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCallLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCallLogsRequest): StreamCallLogsRequest.AsObject;
  static serializeBinaryToWriter(message: StreamCallLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCallLogsRequest;
  static deserializeBinaryFromReader(message: StreamCallLogsRequest, reader: jspb.BinaryReader): StreamCallLogsRequest;
}

export namespace StreamCallLogsRequest {
  export type AsObject = {
    vtsiProjectName: string,
    filter?: CallLogFilter.AsObject,
    tailLines?: number,
    resumeToken?: string,
    afterSeq?: number,
  }

  export enum FilterCase { 
    _FILTER_NOT_SET = 0,
    FILTER = 2,
  }

  export enum TailLinesCase { 
    _TAIL_LINES_NOT_SET = 0,
    TAIL_LINES = 3,
  }

  export enum ResumeTokenCase { 
    _RESUME_TOKEN_NOT_SET = 0,
    RESUME_TOKEN = 4,
  }

  export enum AfterSeqCase { 
    _AFTER_SEQ_NOT_SET = 0,
    AFTER_SEQ = 5,
  }
}

export class StreamCallLogsResponse extends jspb.Message {
  getLogEntriesList(): Array<CallLogEntry>;
  setLogEntriesList(value: Array<CallLogEntry>): StreamCallLogsResponse;
  clearLogEntriesList(): StreamCallLogsResponse;
  addLogEntries(value?: CallLogEntry, index?: number): CallLogEntry;

  getCaptureState(): LogCaptureState;
  setCaptureState(value: LogCaptureState): StreamCallLogsResponse;

  getCaptureError(): string;
  setCaptureError(value: string): StreamCallLogsResponse;

  getDroppedLineCount(): number;
  setDroppedLineCount(value: number): StreamCallLogsResponse;

  getResumeToken(): string;
  setResumeToken(value: string): StreamCallLogsResponse;

  getEndReason(): string;
  setEndReason(value: string): StreamCallLogsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCallLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCallLogsResponse): StreamCallLogsResponse.AsObject;
  static serializeBinaryToWriter(message: StreamCallLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCallLogsResponse;
  static deserializeBinaryFromReader(message: StreamCallLogsResponse, reader: jspb.BinaryReader): StreamCallLogsResponse;
}

export namespace StreamCallLogsResponse {
  export type AsObject = {
    logEntriesList: Array<CallLogEntry.AsObject>,
    captureState: LogCaptureState,
    captureError: string,
    droppedLineCount: number,
    resumeToken: string,
    endReason: string,
  }
}

export class ListCallLogsRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): ListCallLogsRequest;

  getFilter(): CallLogFilter | undefined;
  setFilter(value?: CallLogFilter): ListCallLogsRequest;
  hasFilter(): boolean;
  clearFilter(): ListCallLogsRequest;

  getMaxLines(): number;
  setMaxLines(value: number): ListCallLogsRequest;
  hasMaxLines(): boolean;
  clearMaxLines(): ListCallLogsRequest;

  getBeforeSeq(): number;
  setBeforeSeq(value: number): ListCallLogsRequest;
  hasBeforeSeq(): boolean;
  clearBeforeSeq(): ListCallLogsRequest;

  getAfterSeq(): number;
  setAfterSeq(value: number): ListCallLogsRequest;
  hasAfterSeq(): boolean;
  clearAfterSeq(): ListCallLogsRequest;

  getResumeToken(): string;
  setResumeToken(value: string): ListCallLogsRequest;
  hasResumeToken(): boolean;
  clearResumeToken(): ListCallLogsRequest;

  getOldestFirst(): boolean;
  setOldestFirst(value: boolean): ListCallLogsRequest;
  hasOldestFirst(): boolean;
  clearOldestFirst(): ListCallLogsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallLogsRequest): ListCallLogsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCallLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallLogsRequest;
  static deserializeBinaryFromReader(message: ListCallLogsRequest, reader: jspb.BinaryReader): ListCallLogsRequest;
}

export namespace ListCallLogsRequest {
  export type AsObject = {
    vtsiProjectName: string,
    filter?: CallLogFilter.AsObject,
    maxLines?: number,
    beforeSeq?: number,
    afterSeq?: number,
    resumeToken?: string,
    oldestFirst?: boolean,
  }

  export enum FilterCase { 
    _FILTER_NOT_SET = 0,
    FILTER = 2,
  }

  export enum MaxLinesCase { 
    _MAX_LINES_NOT_SET = 0,
    MAX_LINES = 3,
  }

  export enum BeforeSeqCase { 
    _BEFORE_SEQ_NOT_SET = 0,
    BEFORE_SEQ = 4,
  }

  export enum AfterSeqCase { 
    _AFTER_SEQ_NOT_SET = 0,
    AFTER_SEQ = 5,
  }

  export enum ResumeTokenCase { 
    _RESUME_TOKEN_NOT_SET = 0,
    RESUME_TOKEN = 6,
  }

  export enum OldestFirstCase { 
    _OLDEST_FIRST_NOT_SET = 0,
    OLDEST_FIRST = 7,
  }
}

export class ListCallLogsResponse extends jspb.Message {
  getLogEntriesList(): Array<CallLogEntry>;
  setLogEntriesList(value: Array<CallLogEntry>): ListCallLogsResponse;
  clearLogEntriesList(): ListCallLogsResponse;
  addLogEntries(value?: CallLogEntry, index?: number): CallLogEntry;

  getTruncated(): boolean;
  setTruncated(value: boolean): ListCallLogsResponse;

  getMinAvailableSeq(): number;
  setMinAvailableSeq(value: number): ListCallLogsResponse;

  getMaxAvailableSeq(): number;
  setMaxAvailableSeq(value: number): ListCallLogsResponse;

  getHasMoreOlder(): boolean;
  setHasMoreOlder(value: boolean): ListCallLogsResponse;

  getHasMoreNewer(): boolean;
  setHasMoreNewer(value: boolean): ListCallLogsResponse;

  getNextResumeToken(): string;
  setNextResumeToken(value: string): ListCallLogsResponse;

  getScopeLimitedFiltersList(): Array<CallLogFilterField>;
  setScopeLimitedFiltersList(value: Array<CallLogFilterField>): ListCallLogsResponse;
  clearScopeLimitedFiltersList(): ListCallLogsResponse;
  addScopeLimitedFilters(value: CallLogFilterField, index?: number): ListCallLogsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallLogsResponse): ListCallLogsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCallLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallLogsResponse;
  static deserializeBinaryFromReader(message: ListCallLogsResponse, reader: jspb.BinaryReader): ListCallLogsResponse;
}

export namespace ListCallLogsResponse {
  export type AsObject = {
    logEntriesList: Array<CallLogEntry.AsObject>,
    truncated: boolean,
    minAvailableSeq: number,
    maxAvailableSeq: number,
    hasMoreOlder: boolean,
    hasMoreNewer: boolean,
    nextResumeToken: string,
    scopeLimitedFiltersList: Array<CallLogFilterField>,
  }
}

export class GetCallLogStreamRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): GetCallLogStreamRequest;

  getName(): string;
  setName(value: string): GetCallLogStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCallLogStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCallLogStreamRequest): GetCallLogStreamRequest.AsObject;
  static serializeBinaryToWriter(message: GetCallLogStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCallLogStreamRequest;
  static deserializeBinaryFromReader(message: GetCallLogStreamRequest, reader: jspb.BinaryReader): GetCallLogStreamRequest;
}

export namespace GetCallLogStreamRequest {
  export type AsObject = {
    vtsiProjectName: string,
    name: string,
  }
}

export class ListCallLogStreamsRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): ListCallLogStreamsRequest;

  getFilter(): CallLogFilter | undefined;
  setFilter(value?: CallLogFilter): ListCallLogStreamsRequest;
  hasFilter(): boolean;
  clearFilter(): ListCallLogStreamsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCallLogStreamsRequest;
  hasPageToken(): boolean;
  clearPageToken(): ListCallLogStreamsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallLogStreamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallLogStreamsRequest): ListCallLogStreamsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCallLogStreamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallLogStreamsRequest;
  static deserializeBinaryFromReader(message: ListCallLogStreamsRequest, reader: jspb.BinaryReader): ListCallLogStreamsRequest;
}

export namespace ListCallLogStreamsRequest {
  export type AsObject = {
    vtsiProjectName: string,
    filter?: CallLogFilter.AsObject,
    pageToken?: string,
  }

  export enum FilterCase { 
    _FILTER_NOT_SET = 0,
    FILTER = 2,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 3,
  }
}

export class ListCallLogStreamsResponse extends jspb.Message {
  getLogStreamsList(): Array<CallLogStream>;
  setLogStreamsList(value: Array<CallLogStream>): ListCallLogStreamsResponse;
  clearLogStreamsList(): ListCallLogStreamsResponse;
  addLogStreams(value?: CallLogStream, index?: number): CallLogStream;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCallLogStreamsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallLogStreamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallLogStreamsResponse): ListCallLogStreamsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCallLogStreamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallLogStreamsResponse;
  static deserializeBinaryFromReader(message: ListCallLogStreamsResponse, reader: jspb.BinaryReader): ListCallLogStreamsResponse;
}

export namespace ListCallLogStreamsResponse {
  export type AsObject = {
    logStreamsList: Array<CallLogStream.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteCallLogsRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): DeleteCallLogsRequest;

  getFilter(): CallLogFilter | undefined;
  setFilter(value?: CallLogFilter): DeleteCallLogsRequest;
  hasFilter(): boolean;
  clearFilter(): DeleteCallLogsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCallLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCallLogsRequest): DeleteCallLogsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCallLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCallLogsRequest;
  static deserializeBinaryFromReader(message: DeleteCallLogsRequest, reader: jspb.BinaryReader): DeleteCallLogsRequest;
}

export namespace DeleteCallLogsRequest {
  export type AsObject = {
    vtsiProjectName: string,
    filter?: CallLogFilter.AsObject,
  }
}

export class DeleteCallLogsResponse extends jspb.Message {
  getDeletedLogEntryCount(): number;
  setDeletedLogEntryCount(value: number): DeleteCallLogsResponse;

  getDeletedLogStreamCount(): number;
  setDeletedLogStreamCount(value: number): DeleteCallLogsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCallLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCallLogsResponse): DeleteCallLogsResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCallLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCallLogsResponse;
  static deserializeBinaryFromReader(message: DeleteCallLogsResponse, reader: jspb.BinaryReader): DeleteCallLogsResponse;
}

export namespace DeleteCallLogsResponse {
  export type AsObject = {
    deletedLogEntryCount: number,
    deletedLogStreamCount: number,
  }
}

export enum LogSource { 
  LOG_SOURCE_UNSPECIFIED = 0,
  LOG_SOURCE_SIP = 1,
  LOG_SOURCE_CSI = 2,
  LOG_SOURCE_ASTERISK = 3,
  LOG_SOURCE_PULSEAUDIO = 4,
  LOG_SOURCE_SYSTEM = 5,
}
export enum LogStreamChannel { 
  LOG_STREAM_CHANNEL_UNSPECIFIED = 0,
  LOG_STREAM_CHANNEL_STDOUT = 1,
  LOG_STREAM_CHANNEL_STDERR = 2,
}
export enum LogCaptureState { 
  LOG_CAPTURE_STATE_UNSPECIFIED = 0,
  LOG_CAPTURE_STATE_CAPTURING = 1,
  LOG_CAPTURE_STATE_STOPPED = 2,
  LOG_CAPTURE_STATE_FAILED = 3,
  LOG_CAPTURE_STATE_DETACHED = 4,
}
export enum CallLogFilterField { 
  CALL_LOG_FILTER_FIELD_UNSPECIFIED = 0,
  CALL_LOG_FILTER_FIELD_TEXT = 1,
  CALL_LOG_FILTER_FIELD_REGEX = 2,
  CALL_LOG_FILTER_FIELD_LOG_SOURCES = 3,
  CALL_LOG_FILTER_FIELD_CHANNELS = 4,
  CALL_LOG_FILTER_FIELD_EMITTER_PREFIXES = 5,
  CALL_LOG_FILTER_FIELD_THREAD_NAMES = 6,
  CALL_LOG_FILTER_FIELD_SIP_HEADERS = 7,
}
