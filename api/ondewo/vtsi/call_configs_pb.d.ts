import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as ondewo_nlu_context_pb from '../../ondewo/nlu/context_pb'; // proto import: "ondewo/nlu/context.proto"
import * as ondewo_nlu_intent_pb from '../../ondewo/nlu/intent_pb'; // proto import: "ondewo/nlu/intent.proto"
import * as ondewo_s2t_speech$to$text_pb from '../../ondewo/s2t/speech-to-text_pb'; // proto import: "ondewo/s2t/speech-to-text.proto"
import * as ondewo_t2s_text$to$speech_pb from '../../ondewo/t2s/text-to-speech_pb'; // proto import: "ondewo/t2s/text-to-speech.proto"


export class BaseServiceConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: BaseServiceConfig.AsObject);
  getHost(): string;
  setHost(value: string): BaseServiceConfig;

  getPort(): number;
  setPort(value: number): BaseServiceConfig;

  getGrpcCert(): string;
  setGrpcCert(value: string): BaseServiceConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseServiceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BaseServiceConfig): BaseServiceConfig.AsObject;
  static serializeBinaryToWriter(message: BaseServiceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseServiceConfig;
  static deserializeBinaryFromReader(message: BaseServiceConfig, reader: jspb.BinaryReader): BaseServiceConfig;
}

export namespace BaseServiceConfig {
  export type AsObject = {
    host: string;
    port: number;
    grpcCert: string;
  };
}

export class Credentials extends jspb.Message {
  constructor();
  constructor(opt_data?: Credentials.AsObject);
  getAccountName(): string;
  setAccountName(value: string): Credentials;

  getPassword(): string;
  setPassword(value: string): Credentials;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Credentials.AsObject;
  static toObject(includeInstance: boolean, msg: Credentials): Credentials.AsObject;
  static serializeBinaryToWriter(message: Credentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Credentials;
  static deserializeBinaryFromReader(message: Credentials, reader: jspb.BinaryReader): Credentials;
}

export namespace Credentials {
  export type AsObject = {
    accountName: string;
    password: string;
  };
}

export class NluVtsiConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: NluVtsiConfig.AsObject);
  getNluBaseConfig(): BaseServiceConfig | undefined;
  setNluBaseConfig(value?: BaseServiceConfig): NluVtsiConfig;
  hasNluBaseConfig(): boolean;
  clearNluBaseConfig(): NluVtsiConfig;

  getCredentials(): Credentials | undefined;
  setCredentials(value?: Credentials): NluVtsiConfig;
  hasCredentials(): boolean;
  clearCredentials(): NluVtsiConfig;

  getAuthToken(): string;
  setAuthToken(value: string): NluVtsiConfig;
  hasAuthToken(): boolean;
  clearAuthToken(): NluVtsiConfig;

  getAgentName(): string;
  setAgentName(value: string): NluVtsiConfig;

  getLanguageCode(): string;
  setLanguageCode(value: string): NluVtsiConfig;

  getInitialIntent(): string;
  setInitialIntent(value: string): NluVtsiConfig;

  getContextsList(): Array<ondewo_nlu_context_pb.Context>;
  setContextsList(value: Array<ondewo_nlu_context_pb.Context>): NluVtsiConfig;
  clearContextsList(): NluVtsiConfig;
  addContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

  getHttpBasicAuthToken(): string;
  setHttpBasicAuthToken(value: string): NluVtsiConfig;

  getPlatform(): ondewo_nlu_intent_pb.Intent.Message.Platform;
  setPlatform(value: ondewo_nlu_intent_pb.Intent.Message.Platform): NluVtsiConfig;
  hasPlatform(): boolean;
  clearPlatform(): NluVtsiConfig;

  getPreemptiveGenerationConfig(): NluPreemptiveGenerationConfig | undefined;
  setPreemptiveGenerationConfig(value?: NluPreemptiveGenerationConfig): NluVtsiConfig;
  hasPreemptiveGenerationConfig(): boolean;
  clearPreemptiveGenerationConfig(): NluVtsiConfig;

  getAiTeamsFillersAudible(): boolean;
  setAiTeamsFillersAudible(value: boolean): NluVtsiConfig;
  hasAiTeamsFillersAudible(): boolean;
  clearAiTeamsFillersAudible(): NluVtsiConfig;

  getFailureApologyMessage(): string;
  setFailureApologyMessage(value: string): NluVtsiConfig;
  hasFailureApologyMessage(): boolean;
  clearFailureApologyMessage(): NluVtsiConfig;

  getSessionIdFromSipContext(): boolean;
  setSessionIdFromSipContext(value: boolean): NluVtsiConfig;
  hasSessionIdFromSipContext(): boolean;
  clearSessionIdFromSipContext(): NluVtsiConfig;

  getAiTeamsPushMaxAgeSeconds(): number;
  setAiTeamsPushMaxAgeSeconds(value: number): NluVtsiConfig;
  hasAiTeamsPushMaxAgeSeconds(): boolean;
  clearAiTeamsPushMaxAgeSeconds(): NluVtsiConfig;

  getAiTeamsPushMaxSpoken(): number;
  setAiTeamsPushMaxSpoken(value: number): NluVtsiConfig;
  hasAiTeamsPushMaxSpoken(): boolean;
  clearAiTeamsPushMaxSpoken(): NluVtsiConfig;

  getAuthenticationCase(): NluVtsiConfig.AuthenticationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NluVtsiConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NluVtsiConfig): NluVtsiConfig.AsObject;
  static serializeBinaryToWriter(message: NluVtsiConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NluVtsiConfig;
  static deserializeBinaryFromReader(message: NluVtsiConfig, reader: jspb.BinaryReader): NluVtsiConfig;
}

export namespace NluVtsiConfig {
  export type AsObject = {
    nluBaseConfig?: BaseServiceConfig.AsObject;
    credentials?: Credentials.AsObject;
    authToken?: string;
    agentName: string;
    languageCode: string;
    initialIntent: string;
    contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
    httpBasicAuthToken: string;
    platform?: ondewo_nlu_intent_pb.Intent.Message.Platform;
    preemptiveGenerationConfig?: NluPreemptiveGenerationConfig.AsObject;
    aiTeamsFillersAudible?: boolean;
    failureApologyMessage?: string;
    sessionIdFromSipContext?: boolean;
    aiTeamsPushMaxAgeSeconds?: number;
    aiTeamsPushMaxSpoken?: number;
  };

  export enum AuthenticationCase {
    AUTHENTICATION_NOT_SET = 0,
    CREDENTIALS = 2,
    AUTH_TOKEN = 3,
  }

  export enum PlatformCase {
    _PLATFORM_NOT_SET = 0,
    PLATFORM = 9,
  }

  export enum AiTeamsFillersAudibleCase {
    _AI_TEAMS_FILLERS_AUDIBLE_NOT_SET = 0,
    AI_TEAMS_FILLERS_AUDIBLE = 11,
  }

  export enum FailureApologyMessageCase {
    _FAILURE_APOLOGY_MESSAGE_NOT_SET = 0,
    FAILURE_APOLOGY_MESSAGE = 12,
  }

  export enum SessionIdFromSipContextCase {
    _SESSION_ID_FROM_SIP_CONTEXT_NOT_SET = 0,
    SESSION_ID_FROM_SIP_CONTEXT = 13,
  }

  export enum AiTeamsPushMaxAgeSecondsCase {
    _AI_TEAMS_PUSH_MAX_AGE_SECONDS_NOT_SET = 0,
    AI_TEAMS_PUSH_MAX_AGE_SECONDS = 14,
  }

  export enum AiTeamsPushMaxSpokenCase {
    _AI_TEAMS_PUSH_MAX_SPOKEN_NOT_SET = 0,
    AI_TEAMS_PUSH_MAX_SPOKEN = 15,
  }
}

export class NluPreemptiveGenerationConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: NluPreemptiveGenerationConfig.AsObject);
  getMaxDraftsPerTurn(): number;
  setMaxDraftsPerTurn(value: number): NluPreemptiveGenerationConfig;
  hasMaxDraftsPerTurn(): boolean;
  clearMaxDraftsPerTurn(): NluPreemptiveGenerationConfig;

  getMinStableDwellSeconds(): number;
  setMinStableDwellSeconds(value: number): NluPreemptiveGenerationConfig;
  hasMinStableDwellSeconds(): boolean;
  clearMinStableDwellSeconds(): NluPreemptiveGenerationConfig;

  getMinIntervalSeconds(): number;
  setMinIntervalSeconds(value: number): NluPreemptiveGenerationConfig;
  hasMinIntervalSeconds(): boolean;
  clearMinIntervalSeconds(): NluPreemptiveGenerationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NluPreemptiveGenerationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NluPreemptiveGenerationConfig): NluPreemptiveGenerationConfig.AsObject;
  static serializeBinaryToWriter(message: NluPreemptiveGenerationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NluPreemptiveGenerationConfig;
  static deserializeBinaryFromReader(message: NluPreemptiveGenerationConfig, reader: jspb.BinaryReader): NluPreemptiveGenerationConfig;
}

export namespace NluPreemptiveGenerationConfig {
  export type AsObject = {
    maxDraftsPerTurn?: number;
    minStableDwellSeconds?: number;
    minIntervalSeconds?: number;
  };

  export enum MaxDraftsPerTurnCase {
    _MAX_DRAFTS_PER_TURN_NOT_SET = 0,
    MAX_DRAFTS_PER_TURN = 1,
  }

  export enum MinStableDwellSecondsCase {
    _MIN_STABLE_DWELL_SECONDS_NOT_SET = 0,
    MIN_STABLE_DWELL_SECONDS = 2,
  }

  export enum MinIntervalSecondsCase {
    _MIN_INTERVAL_SECONDS_NOT_SET = 0,
    MIN_INTERVAL_SECONDS = 3,
  }
}

export class T2sVtsiConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: T2sVtsiConfig.AsObject);
  getT2sBaseConfig(): BaseServiceConfig | undefined;
  setT2sBaseConfig(value?: BaseServiceConfig): T2sVtsiConfig;
  hasT2sBaseConfig(): boolean;
  clearT2sBaseConfig(): T2sVtsiConfig;

  getT2sRequestConfig(): ondewo_t2s_text$to$speech_pb.RequestConfig | undefined;
  setT2sRequestConfig(value?: ondewo_t2s_text$to$speech_pb.RequestConfig): T2sVtsiConfig;
  hasT2sRequestConfig(): boolean;
  clearT2sRequestConfig(): T2sVtsiConfig;

  getPreemptiveSynthesisConfig(): T2sPreemptiveSynthesisConfig | undefined;
  setPreemptiveSynthesisConfig(value?: T2sPreemptiveSynthesisConfig): T2sVtsiConfig;
  hasPreemptiveSynthesisConfig(): boolean;
  clearPreemptiveSynthesisConfig(): T2sVtsiConfig;

  getSynthesizeTimeoutSeconds(): number;
  setSynthesizeTimeoutSeconds(value: number): T2sVtsiConfig;
  hasSynthesizeTimeoutSeconds(): boolean;
  clearSynthesizeTimeoutSeconds(): T2sVtsiConfig;

  getCacheRetention(): string;
  setCacheRetention(value: string): T2sVtsiConfig;
  hasCacheRetention(): boolean;
  clearCacheRetention(): T2sVtsiConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sVtsiConfig.AsObject;
  static toObject(includeInstance: boolean, msg: T2sVtsiConfig): T2sVtsiConfig.AsObject;
  static serializeBinaryToWriter(message: T2sVtsiConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sVtsiConfig;
  static deserializeBinaryFromReader(message: T2sVtsiConfig, reader: jspb.BinaryReader): T2sVtsiConfig;
}

export namespace T2sVtsiConfig {
  export type AsObject = {
    t2sBaseConfig?: BaseServiceConfig.AsObject;
    t2sRequestConfig?: ondewo_t2s_text$to$speech_pb.RequestConfig.AsObject;
    preemptiveSynthesisConfig?: T2sPreemptiveSynthesisConfig.AsObject;
    synthesizeTimeoutSeconds?: number;
    cacheRetention?: string;
  };

  export enum SynthesizeTimeoutSecondsCase {
    _SYNTHESIZE_TIMEOUT_SECONDS_NOT_SET = 0,
    SYNTHESIZE_TIMEOUT_SECONDS = 4,
  }

  export enum CacheRetentionCase {
    _CACHE_RETENTION_NOT_SET = 0,
    CACHE_RETENTION = 5,
  }
}

export class T2sPreemptiveSynthesisConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: T2sPreemptiveSynthesisConfig.AsObject);
  getEnabled(): boolean;
  setEnabled(value: boolean): T2sPreemptiveSynthesisConfig;
  hasEnabled(): boolean;
  clearEnabled(): T2sPreemptiveSynthesisConfig;

  getChunked(): boolean;
  setChunked(value: boolean): T2sPreemptiveSynthesisConfig;
  hasChunked(): boolean;
  clearChunked(): T2sPreemptiveSynthesisConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sPreemptiveSynthesisConfig.AsObject;
  static toObject(includeInstance: boolean, msg: T2sPreemptiveSynthesisConfig): T2sPreemptiveSynthesisConfig.AsObject;
  static serializeBinaryToWriter(message: T2sPreemptiveSynthesisConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sPreemptiveSynthesisConfig;
  static deserializeBinaryFromReader(message: T2sPreemptiveSynthesisConfig, reader: jspb.BinaryReader): T2sPreemptiveSynthesisConfig;
}

export namespace T2sPreemptiveSynthesisConfig {
  export type AsObject = {
    enabled?: boolean;
    chunked?: boolean;
  };

  export enum EnabledCase {
    _ENABLED_NOT_SET = 0,
    ENABLED = 1,
  }

  export enum ChunkedCase {
    _CHUNKED_NOT_SET = 0,
    CHUNKED = 2,
  }
}

export class S2tVtsiConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: S2tVtsiConfig.AsObject);
  getS2tBaseConfig(): BaseServiceConfig | undefined;
  setS2tBaseConfig(value?: BaseServiceConfig): S2tVtsiConfig;
  hasS2tBaseConfig(): boolean;
  clearS2tBaseConfig(): S2tVtsiConfig;

  getS2tTranscribeRequestConfig(): ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig | undefined;
  setS2tTranscribeRequestConfig(value?: ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig): S2tVtsiConfig;
  hasS2tTranscribeRequestConfig(): boolean;
  clearS2tTranscribeRequestConfig(): S2tVtsiConfig;

  getFailureSipTrigger(): string;
  setFailureSipTrigger(value: string): S2tVtsiConfig;
  hasFailureSipTrigger(): boolean;
  clearFailureSipTrigger(): S2tVtsiConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S2tVtsiConfig.AsObject;
  static toObject(includeInstance: boolean, msg: S2tVtsiConfig): S2tVtsiConfig.AsObject;
  static serializeBinaryToWriter(message: S2tVtsiConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S2tVtsiConfig;
  static deserializeBinaryFromReader(message: S2tVtsiConfig, reader: jspb.BinaryReader): S2tVtsiConfig;
}

export namespace S2tVtsiConfig {
  export type AsObject = {
    s2tBaseConfig?: BaseServiceConfig.AsObject;
    s2tTranscribeRequestConfig?: ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig.AsObject;
    failureSipTrigger?: string;
  };

  export enum FailureSipTriggerCase {
    _FAILURE_SIP_TRIGGER_NOT_SET = 0,
    FAILURE_SIP_TRIGGER = 3,
  }
}

export class CommonServicesConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: CommonServicesConfig.AsObject);
  getS2tVtsiConfig(): S2tVtsiConfig | undefined;
  setS2tVtsiConfig(value?: S2tVtsiConfig): CommonServicesConfig;
  hasS2tVtsiConfig(): boolean;
  clearS2tVtsiConfig(): CommonServicesConfig;

  getNluVtsiConfig(): NluVtsiConfig | undefined;
  setNluVtsiConfig(value?: NluVtsiConfig): CommonServicesConfig;
  hasNluVtsiConfig(): boolean;
  clearNluVtsiConfig(): CommonServicesConfig;

  getT2sVtsiConfig(): T2sVtsiConfig | undefined;
  setT2sVtsiConfig(value?: T2sVtsiConfig): CommonServicesConfig;
  hasT2sVtsiConfig(): boolean;
  clearT2sVtsiConfig(): CommonServicesConfig;

  getCsiVtsiConfig(): CsiVtsiConfig | undefined;
  setCsiVtsiConfig(value?: CsiVtsiConfig): CommonServicesConfig;
  hasCsiVtsiConfig(): boolean;
  clearCsiVtsiConfig(): CommonServicesConfig;

  getVoiceInteractionConfig(): VoiceInteractionConfig | undefined;
  setVoiceInteractionConfig(value?: VoiceInteractionConfig): CommonServicesConfig;
  hasVoiceInteractionConfig(): boolean;
  clearVoiceInteractionConfig(): CommonServicesConfig;

  getSipVtsiConfig(): SipVtsiConfig | undefined;
  setSipVtsiConfig(value?: SipVtsiConfig): CommonServicesConfig;
  hasSipVtsiConfig(): boolean;
  clearSipVtsiConfig(): CommonServicesConfig;

  getMaxCallDurationSeconds(): number;
  setMaxCallDurationSeconds(value: number): CommonServicesConfig;
  hasMaxCallDurationSeconds(): boolean;
  clearMaxCallDurationSeconds(): CommonServicesConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonServicesConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CommonServicesConfig): CommonServicesConfig.AsObject;
  static serializeBinaryToWriter(message: CommonServicesConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonServicesConfig;
  static deserializeBinaryFromReader(message: CommonServicesConfig, reader: jspb.BinaryReader): CommonServicesConfig;
}

export namespace CommonServicesConfig {
  export type AsObject = {
    s2tVtsiConfig?: S2tVtsiConfig.AsObject;
    nluVtsiConfig?: NluVtsiConfig.AsObject;
    t2sVtsiConfig?: T2sVtsiConfig.AsObject;
    csiVtsiConfig?: CsiVtsiConfig.AsObject;
    voiceInteractionConfig?: VoiceInteractionConfig.AsObject;
    sipVtsiConfig?: SipVtsiConfig.AsObject;
    maxCallDurationSeconds?: number;
  };

  export enum MaxCallDurationSecondsCase {
    _MAX_CALL_DURATION_SECONDS_NOT_SET = 0,
    MAX_CALL_DURATION_SECONDS = 7,
  }
}

export class SipVtsiConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: SipVtsiConfig.AsObject);
  getPlaybackLatencyMs(): number;
  setPlaybackLatencyMs(value: number): SipVtsiConfig;
  hasPlaybackLatencyMs(): boolean;
  clearPlaybackLatencyMs(): SipVtsiConfig;

  getSoftwareClockEnabled(): boolean;
  setSoftwareClockEnabled(value: boolean): SipVtsiConfig;
  hasSoftwareClockEnabled(): boolean;
  clearSoftwareClockEnabled(): SipVtsiConfig;

  getRtpStatsSampleIntervalSeconds(): number;
  setRtpStatsSampleIntervalSeconds(value: number): SipVtsiConfig;
  hasRtpStatsSampleIntervalSeconds(): boolean;
  clearRtpStatsSampleIntervalSeconds(): SipVtsiConfig;

  getHangupWaitForPlaybackTimeoutSeconds(): number;
  setHangupWaitForPlaybackTimeoutSeconds(value: number): SipVtsiConfig;
  hasHangupWaitForPlaybackTimeoutSeconds(): boolean;
  clearHangupWaitForPlaybackTimeoutSeconds(): SipVtsiConfig;

  getOutgoingDialWatchdogSeconds(): number;
  setOutgoingDialWatchdogSeconds(value: number): SipVtsiConfig;
  hasOutgoingDialWatchdogSeconds(): boolean;
  clearOutgoingDialWatchdogSeconds(): SipVtsiConfig;

  getRegisterIntervalSeconds(): number;
  setRegisterIntervalSeconds(value: number): SipVtsiConfig;
  hasRegisterIntervalSeconds(): boolean;
  clearRegisterIntervalSeconds(): SipVtsiConfig;

  getCallAudioStreamMaxConcurrent(): number;
  setCallAudioStreamMaxConcurrent(value: number): SipVtsiConfig;
  hasCallAudioStreamMaxConcurrent(): boolean;
  clearCallAudioStreamMaxConcurrent(): SipVtsiConfig;

  getCallAudioStreamMaxDurationSeconds(): number;
  setCallAudioStreamMaxDurationSeconds(value: number): SipVtsiConfig;
  hasCallAudioStreamMaxDurationSeconds(): boolean;
  clearCallAudioStreamMaxDurationSeconds(): SipVtsiConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SipVtsiConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SipVtsiConfig): SipVtsiConfig.AsObject;
  static serializeBinaryToWriter(message: SipVtsiConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SipVtsiConfig;
  static deserializeBinaryFromReader(message: SipVtsiConfig, reader: jspb.BinaryReader): SipVtsiConfig;
}

export namespace SipVtsiConfig {
  export type AsObject = {
    playbackLatencyMs?: number;
    softwareClockEnabled?: boolean;
    rtpStatsSampleIntervalSeconds?: number;
    hangupWaitForPlaybackTimeoutSeconds?: number;
    outgoingDialWatchdogSeconds?: number;
    registerIntervalSeconds?: number;
    callAudioStreamMaxConcurrent?: number;
    callAudioStreamMaxDurationSeconds?: number;
  };

  export enum PlaybackLatencyMsCase {
    _PLAYBACK_LATENCY_MS_NOT_SET = 0,
    PLAYBACK_LATENCY_MS = 1,
  }

  export enum SoftwareClockEnabledCase {
    _SOFTWARE_CLOCK_ENABLED_NOT_SET = 0,
    SOFTWARE_CLOCK_ENABLED = 2,
  }

  export enum RtpStatsSampleIntervalSecondsCase {
    _RTP_STATS_SAMPLE_INTERVAL_SECONDS_NOT_SET = 0,
    RTP_STATS_SAMPLE_INTERVAL_SECONDS = 3,
  }

  export enum HangupWaitForPlaybackTimeoutSecondsCase {
    _HANGUP_WAIT_FOR_PLAYBACK_TIMEOUT_SECONDS_NOT_SET = 0,
    HANGUP_WAIT_FOR_PLAYBACK_TIMEOUT_SECONDS = 4,
  }

  export enum OutgoingDialWatchdogSecondsCase {
    _OUTGOING_DIAL_WATCHDOG_SECONDS_NOT_SET = 0,
    OUTGOING_DIAL_WATCHDOG_SECONDS = 5,
  }

  export enum RegisterIntervalSecondsCase {
    _REGISTER_INTERVAL_SECONDS_NOT_SET = 0,
    REGISTER_INTERVAL_SECONDS = 6,
  }

  export enum CallAudioStreamMaxConcurrentCase {
    _CALL_AUDIO_STREAM_MAX_CONCURRENT_NOT_SET = 0,
    CALL_AUDIO_STREAM_MAX_CONCURRENT = 7,
  }

  export enum CallAudioStreamMaxDurationSecondsCase {
    _CALL_AUDIO_STREAM_MAX_DURATION_SECONDS_NOT_SET = 0,
    CALL_AUDIO_STREAM_MAX_DURATION_SECONDS = 8,
  }
}

export class VoiceInteractionConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: VoiceInteractionConfig.AsObject);
  getTurnDetectionConfig(): TurnDetectionConfig | undefined;
  setTurnDetectionConfig(value?: TurnDetectionConfig): VoiceInteractionConfig;
  hasTurnDetectionConfig(): boolean;
  clearTurnDetectionConfig(): VoiceInteractionConfig;

  getInterruptionHandlingConfig(): InterruptionHandlingConfig | undefined;
  setInterruptionHandlingConfig(value?: InterruptionHandlingConfig): VoiceInteractionConfig;
  hasInterruptionHandlingConfig(): boolean;
  clearInterruptionHandlingConfig(): VoiceInteractionConfig;

  getResponseTimingConfig(): ResponseTimingConfig | undefined;
  setResponseTimingConfig(value?: ResponseTimingConfig): VoiceInteractionConfig;
  hasResponseTimingConfig(): boolean;
  clearResponseTimingConfig(): VoiceInteractionConfig;

  getAnsweringMachineDetectionConfig(): AnsweringMachineDetectionConfig | undefined;
  setAnsweringMachineDetectionConfig(value?: AnsweringMachineDetectionConfig): VoiceInteractionConfig;
  hasAnsweringMachineDetectionConfig(): boolean;
  clearAnsweringMachineDetectionConfig(): VoiceInteractionConfig;

  getDtmfConfig(): DtmfConfig | undefined;
  setDtmfConfig(value?: DtmfConfig): VoiceInteractionConfig;
  hasDtmfConfig(): boolean;
  clearDtmfConfig(): VoiceInteractionConfig;

  getWarmTransferConfig(): WarmTransferConfig | undefined;
  setWarmTransferConfig(value?: WarmTransferConfig): VoiceInteractionConfig;
  hasWarmTransferConfig(): boolean;
  clearWarmTransferConfig(): VoiceInteractionConfig;

  getBotTransferConfig(): BotTransferConfig | undefined;
  setBotTransferConfig(value?: BotTransferConfig): VoiceInteractionConfig;
  hasBotTransferConfig(): boolean;
  clearBotTransferConfig(): VoiceInteractionConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceInteractionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceInteractionConfig): VoiceInteractionConfig.AsObject;
  static serializeBinaryToWriter(message: VoiceInteractionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceInteractionConfig;
  static deserializeBinaryFromReader(message: VoiceInteractionConfig, reader: jspb.BinaryReader): VoiceInteractionConfig;
}

export namespace VoiceInteractionConfig {
  export type AsObject = {
    turnDetectionConfig?: TurnDetectionConfig.AsObject;
    interruptionHandlingConfig?: InterruptionHandlingConfig.AsObject;
    responseTimingConfig?: ResponseTimingConfig.AsObject;
    answeringMachineDetectionConfig?: AnsweringMachineDetectionConfig.AsObject;
    dtmfConfig?: DtmfConfig.AsObject;
    warmTransferConfig?: WarmTransferConfig.AsObject;
    botTransferConfig?: BotTransferConfig.AsObject;
  };
}

export class BotTransferConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: BotTransferConfig.AsObject);
  getOutcomeTimeoutMs(): number;
  setOutcomeTimeoutMs(value: number): BotTransferConfig;
  hasOutcomeTimeoutMs(): boolean;
  clearOutcomeTimeoutMs(): BotTransferConfig;

  getFailedAction(): string;
  setFailedAction(value: string): BotTransferConfig;
  hasFailedAction(): boolean;
  clearFailedAction(): BotTransferConfig;

  getWarmTransferOutcomeCommitTimeoutSeconds(): number;
  setWarmTransferOutcomeCommitTimeoutSeconds(value: number): BotTransferConfig;
  hasWarmTransferOutcomeCommitTimeoutSeconds(): boolean;
  clearWarmTransferOutcomeCommitTimeoutSeconds(): BotTransferConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BotTransferConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BotTransferConfig): BotTransferConfig.AsObject;
  static serializeBinaryToWriter(message: BotTransferConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BotTransferConfig;
  static deserializeBinaryFromReader(message: BotTransferConfig, reader: jspb.BinaryReader): BotTransferConfig;
}

export namespace BotTransferConfig {
  export type AsObject = {
    outcomeTimeoutMs?: number;
    failedAction?: string;
    warmTransferOutcomeCommitTimeoutSeconds?: number;
  };

  export enum OutcomeTimeoutMsCase {
    _OUTCOME_TIMEOUT_MS_NOT_SET = 0,
    OUTCOME_TIMEOUT_MS = 1,
  }

  export enum FailedActionCase {
    _FAILED_ACTION_NOT_SET = 0,
    FAILED_ACTION = 2,
  }

  export enum WarmTransferOutcomeCommitTimeoutSecondsCase {
    _WARM_TRANSFER_OUTCOME_COMMIT_TIMEOUT_SECONDS_NOT_SET = 0,
    WARM_TRANSFER_OUTCOME_COMMIT_TIMEOUT_SECONDS = 3,
  }
}

export class DtmfConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: DtmfConfig.AsObject);
  getEnabled(): boolean;
  setEnabled(value: boolean): DtmfConfig;
  hasEnabled(): boolean;
  clearEnabled(): DtmfConfig;

  getBargeIn(): boolean;
  setBargeIn(value: boolean): DtmfConfig;
  hasBargeIn(): boolean;
  clearBargeIn(): DtmfConfig;

  getInterDigitTimeoutMs(): number;
  setInterDigitTimeoutMs(value: number): DtmfConfig;
  hasInterDigitTimeoutMs(): boolean;
  clearInterDigitTimeoutMs(): DtmfConfig;

  getUndeclaredPolicy(): string;
  setUndeclaredPolicy(value: string): DtmfConfig;
  hasUndeclaredPolicy(): boolean;
  clearUndeclaredPolicy(): DtmfConfig;

  getSpeechGuardMs(): number;
  setSpeechGuardMs(value: number): DtmfConfig;
  hasSpeechGuardMs(): boolean;
  clearSpeechGuardMs(): DtmfConfig;

  getTextTemplate(): string;
  setTextTemplate(value: string): DtmfConfig;
  hasTextTemplate(): boolean;
  clearTextTemplate(): DtmfConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DtmfConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DtmfConfig): DtmfConfig.AsObject;
  static serializeBinaryToWriter(message: DtmfConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DtmfConfig;
  static deserializeBinaryFromReader(message: DtmfConfig, reader: jspb.BinaryReader): DtmfConfig;
}

export namespace DtmfConfig {
  export type AsObject = {
    enabled?: boolean;
    bargeIn?: boolean;
    interDigitTimeoutMs?: number;
    undeclaredPolicy?: string;
    speechGuardMs?: number;
    textTemplate?: string;
  };

  export enum EnabledCase {
    _ENABLED_NOT_SET = 0,
    ENABLED = 1,
  }

  export enum BargeInCase {
    _BARGE_IN_NOT_SET = 0,
    BARGE_IN = 2,
  }

  export enum InterDigitTimeoutMsCase {
    _INTER_DIGIT_TIMEOUT_MS_NOT_SET = 0,
    INTER_DIGIT_TIMEOUT_MS = 3,
  }

  export enum UndeclaredPolicyCase {
    _UNDECLARED_POLICY_NOT_SET = 0,
    UNDECLARED_POLICY = 4,
  }

  export enum SpeechGuardMsCase {
    _SPEECH_GUARD_MS_NOT_SET = 0,
    SPEECH_GUARD_MS = 5,
  }

  export enum TextTemplateCase {
    _TEXT_TEMPLATE_NOT_SET = 0,
    TEXT_TEMPLATE = 6,
  }
}

export class WarmTransferConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: WarmTransferConfig.AsObject);
  getEnabled(): boolean;
  setEnabled(value: boolean): WarmTransferConfig;
  hasEnabled(): boolean;
  clearEnabled(): WarmTransferConfig;

  getIntroPrompt(): string;
  setIntroPrompt(value: string): WarmTransferConfig;
  hasIntroPrompt(): boolean;
  clearIntroPrompt(): WarmTransferConfig;

  getIntroTextSource(): WarmIntroTextSource;
  setIntroTextSource(value: WarmIntroTextSource): WarmTransferConfig;

  getReadyQuestion(): string;
  setReadyQuestion(value: string): WarmTransferConfig;
  hasReadyQuestion(): boolean;
  clearReadyQuestion(): WarmTransferConfig;

  getConfirmHumanBeforeIntro(): boolean;
  setConfirmHumanBeforeIntro(value: boolean): WarmTransferConfig;
  hasConfirmHumanBeforeIntro(): boolean;
  clearConfirmHumanBeforeIntro(): WarmTransferConfig;

  getAcceptQuestion(): string;
  setAcceptQuestion(value: string): WarmTransferConfig;
  hasAcceptQuestion(): boolean;
  clearAcceptQuestion(): WarmTransferConfig;

  getDeclineReasonQuestion(): string;
  setDeclineReasonQuestion(value: string): WarmTransferConfig;
  hasDeclineReasonQuestion(): boolean;
  clearDeclineReasonQuestion(): WarmTransferConfig;

  getCallerDeclinedMessage(): string;
  setCallerDeclinedMessage(value: string): WarmTransferConfig;
  hasCallerDeclinedMessage(): boolean;
  clearCallerDeclinedMessage(): WarmTransferConfig;

  getCallerUnreachableMessage(): string;
  setCallerUnreachableMessage(value: string): WarmTransferConfig;
  hasCallerUnreachableMessage(): boolean;
  clearCallerUnreachableMessage(): WarmTransferConfig;

  getAcceptDtmf(): string;
  setAcceptDtmf(value: string): WarmTransferConfig;
  hasAcceptDtmf(): boolean;
  clearAcceptDtmf(): WarmTransferConfig;

  getDeclineDtmf(): string;
  setDeclineDtmf(value: string): WarmTransferConfig;
  hasDeclineDtmf(): boolean;
  clearDeclineDtmf(): WarmTransferConfig;

  getDecisionTimeoutS(): number;
  setDecisionTimeoutS(value: number): WarmTransferConfig;
  hasDecisionTimeoutS(): boolean;
  clearDecisionTimeoutS(): WarmTransferConfig;

  getMaxIntroDurationS(): number;
  setMaxIntroDurationS(value: number): WarmTransferConfig;
  hasMaxIntroDurationS(): boolean;
  clearMaxIntroDurationS(): WarmTransferConfig;

  getCalleeDisplayName(): string;
  setCalleeDisplayName(value: string): WarmTransferConfig;
  hasCalleeDisplayName(): boolean;
  clearCalleeDisplayName(): WarmTransferConfig;

  getCalleeDescription(): string;
  setCalleeDescription(value: string): WarmTransferConfig;
  hasCalleeDescription(): boolean;
  clearCalleeDescription(): WarmTransferConfig;

  getOnIntroUnavailable(): WarmIntroUnavailablePolicy;
  setOnIntroUnavailable(value: WarmIntroUnavailablePolicy): WarmTransferConfig;

  getApplyToBotTransfers(): boolean;
  setApplyToBotTransfers(value: boolean): WarmTransferConfig;
  hasApplyToBotTransfers(): boolean;
  clearApplyToBotTransfers(): WarmTransferConfig;

  getCallerHoldMessage(): string;
  setCallerHoldMessage(value: string): WarmTransferConfig;
  hasCallerHoldMessage(): boolean;
  clearCallerHoldMessage(): WarmTransferConfig;

  getCallerHoldMusic(): boolean;
  setCallerHoldMusic(value: boolean): WarmTransferConfig;
  hasCallerHoldMusic(): boolean;
  clearCallerHoldMusic(): WarmTransferConfig;

  getCallerReassureIntervalS(): number;
  setCallerReassureIntervalS(value: number): WarmTransferConfig;
  hasCallerReassureIntervalS(): boolean;
  clearCallerReassureIntervalS(): WarmTransferConfig;

  getLlmCcaiServiceName(): string;
  setLlmCcaiServiceName(value: string): WarmTransferConfig;
  hasLlmCcaiServiceName(): boolean;
  clearLlmCcaiServiceName(): WarmTransferConfig;

  getCallerDisclosureMessage(): string;
  setCallerDisclosureMessage(value: string): WarmTransferConfig;
  hasCallerDisclosureMessage(): boolean;
  clearCallerDisclosureMessage(): WarmTransferConfig;

  getCallerAcceptedMessage(): string;
  setCallerAcceptedMessage(value: string): WarmTransferConfig;
  hasCallerAcceptedMessage(): boolean;
  clearCallerAcceptedMessage(): WarmTransferConfig;

  getStoreIntroAudio(): boolean;
  setStoreIntroAudio(value: boolean): WarmTransferConfig;
  hasStoreIntroAudio(): boolean;
  clearStoreIntroAudio(): WarmTransferConfig;

  getIntroListenerNamesList(): Array<string>;
  setIntroListenerNamesList(value: Array<string>): WarmTransferConfig;
  clearIntroListenerNamesList(): WarmTransferConfig;
  addIntroListenerNames(value: string, index?: number): WarmTransferConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarmTransferConfig.AsObject;
  static toObject(includeInstance: boolean, msg: WarmTransferConfig): WarmTransferConfig.AsObject;
  static serializeBinaryToWriter(message: WarmTransferConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarmTransferConfig;
  static deserializeBinaryFromReader(message: WarmTransferConfig, reader: jspb.BinaryReader): WarmTransferConfig;
}

export namespace WarmTransferConfig {
  export type AsObject = {
    enabled?: boolean;
    introPrompt?: string;
    introTextSource: WarmIntroTextSource;
    readyQuestion?: string;
    confirmHumanBeforeIntro?: boolean;
    acceptQuestion?: string;
    declineReasonQuestion?: string;
    callerDeclinedMessage?: string;
    callerUnreachableMessage?: string;
    acceptDtmf?: string;
    declineDtmf?: string;
    decisionTimeoutS?: number;
    maxIntroDurationS?: number;
    calleeDisplayName?: string;
    calleeDescription?: string;
    onIntroUnavailable: WarmIntroUnavailablePolicy;
    applyToBotTransfers?: boolean;
    callerHoldMessage?: string;
    callerHoldMusic?: boolean;
    callerReassureIntervalS?: number;
    llmCcaiServiceName?: string;
    callerDisclosureMessage?: string;
    callerAcceptedMessage?: string;
    storeIntroAudio?: boolean;
    introListenerNamesList: Array<string>;
  };

  export enum EnabledCase {
    _ENABLED_NOT_SET = 0,
    ENABLED = 1,
  }

  export enum IntroPromptCase {
    _INTRO_PROMPT_NOT_SET = 0,
    INTRO_PROMPT = 2,
  }

  export enum ReadyQuestionCase {
    _READY_QUESTION_NOT_SET = 0,
    READY_QUESTION = 4,
  }

  export enum ConfirmHumanBeforeIntroCase {
    _CONFIRM_HUMAN_BEFORE_INTRO_NOT_SET = 0,
    CONFIRM_HUMAN_BEFORE_INTRO = 5,
  }

  export enum AcceptQuestionCase {
    _ACCEPT_QUESTION_NOT_SET = 0,
    ACCEPT_QUESTION = 6,
  }

  export enum DeclineReasonQuestionCase {
    _DECLINE_REASON_QUESTION_NOT_SET = 0,
    DECLINE_REASON_QUESTION = 7,
  }

  export enum CallerDeclinedMessageCase {
    _CALLER_DECLINED_MESSAGE_NOT_SET = 0,
    CALLER_DECLINED_MESSAGE = 8,
  }

  export enum CallerUnreachableMessageCase {
    _CALLER_UNREACHABLE_MESSAGE_NOT_SET = 0,
    CALLER_UNREACHABLE_MESSAGE = 9,
  }

  export enum AcceptDtmfCase {
    _ACCEPT_DTMF_NOT_SET = 0,
    ACCEPT_DTMF = 10,
  }

  export enum DeclineDtmfCase {
    _DECLINE_DTMF_NOT_SET = 0,
    DECLINE_DTMF = 11,
  }

  export enum DecisionTimeoutSCase {
    _DECISION_TIMEOUT_S_NOT_SET = 0,
    DECISION_TIMEOUT_S = 12,
  }

  export enum MaxIntroDurationSCase {
    _MAX_INTRO_DURATION_S_NOT_SET = 0,
    MAX_INTRO_DURATION_S = 13,
  }

  export enum CalleeDisplayNameCase {
    _CALLEE_DISPLAY_NAME_NOT_SET = 0,
    CALLEE_DISPLAY_NAME = 14,
  }

  export enum CalleeDescriptionCase {
    _CALLEE_DESCRIPTION_NOT_SET = 0,
    CALLEE_DESCRIPTION = 15,
  }

  export enum ApplyToBotTransfersCase {
    _APPLY_TO_BOT_TRANSFERS_NOT_SET = 0,
    APPLY_TO_BOT_TRANSFERS = 17,
  }

  export enum CallerHoldMessageCase {
    _CALLER_HOLD_MESSAGE_NOT_SET = 0,
    CALLER_HOLD_MESSAGE = 18,
  }

  export enum CallerHoldMusicCase {
    _CALLER_HOLD_MUSIC_NOT_SET = 0,
    CALLER_HOLD_MUSIC = 19,
  }

  export enum CallerReassureIntervalSCase {
    _CALLER_REASSURE_INTERVAL_S_NOT_SET = 0,
    CALLER_REASSURE_INTERVAL_S = 20,
  }

  export enum LlmCcaiServiceNameCase {
    _LLM_CCAI_SERVICE_NAME_NOT_SET = 0,
    LLM_CCAI_SERVICE_NAME = 21,
  }

  export enum CallerDisclosureMessageCase {
    _CALLER_DISCLOSURE_MESSAGE_NOT_SET = 0,
    CALLER_DISCLOSURE_MESSAGE = 22,
  }

  export enum CallerAcceptedMessageCase {
    _CALLER_ACCEPTED_MESSAGE_NOT_SET = 0,
    CALLER_ACCEPTED_MESSAGE = 23,
  }

  export enum StoreIntroAudioCase {
    _STORE_INTRO_AUDIO_NOT_SET = 0,
    STORE_INTRO_AUDIO = 24,
  }
}

export class WarmIntroRecord extends jspb.Message {
  constructor();
  constructor(opt_data?: WarmIntroRecord.AsObject);
  getIntroId(): string;
  setIntroId(value: string): WarmIntroRecord;

  getDecision(): WarmIntroDecision;
  setDecision(value: WarmIntroDecision): WarmIntroRecord;

  getDecidedBy(): WarmIntroDecidedBy;
  setDecidedBy(value: WarmIntroDecidedBy): WarmIntroRecord;

  getDeclineReasonPresent(): boolean;
  setDeclineReasonPresent(value: boolean): WarmIntroRecord;

  getIntroCallName(): string;
  setIntroCallName(value: string): WarmIntroRecord;

  getRingDuration(): google_protobuf_duration_pb.Duration | undefined;
  setRingDuration(value?: google_protobuf_duration_pb.Duration): WarmIntroRecord;
  hasRingDuration(): boolean;
  clearRingDuration(): WarmIntroRecord;

  getIntroDuration(): google_protobuf_duration_pb.Duration | undefined;
  setIntroDuration(value?: google_protobuf_duration_pb.Duration): WarmIntroRecord;
  hasIntroDuration(): boolean;
  clearIntroDuration(): WarmIntroRecord;

  getTextSource(): WarmIntroTextSource;
  setTextSource(value: WarmIntroTextSource): WarmIntroRecord;

  getTextFellBack(): boolean;
  setTextFellBack(value: boolean): WarmIntroRecord;

  getCause(): string;
  setCause(value: string): WarmIntroRecord;

  getNoticeDelivered(): boolean;
  setNoticeDelivered(value: boolean): WarmIntroRecord;

  getIntroStarted(): boolean;
  setIntroStarted(value: boolean): WarmIntroRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarmIntroRecord.AsObject;
  static toObject(includeInstance: boolean, msg: WarmIntroRecord): WarmIntroRecord.AsObject;
  static serializeBinaryToWriter(message: WarmIntroRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarmIntroRecord;
  static deserializeBinaryFromReader(message: WarmIntroRecord, reader: jspb.BinaryReader): WarmIntroRecord;
}

export namespace WarmIntroRecord {
  export type AsObject = {
    introId: string;
    decision: WarmIntroDecision;
    decidedBy: WarmIntroDecidedBy;
    declineReasonPresent: boolean;
    introCallName: string;
    ringDuration?: google_protobuf_duration_pb.Duration.AsObject;
    introDuration?: google_protobuf_duration_pb.Duration.AsObject;
    textSource: WarmIntroTextSource;
    textFellBack: boolean;
    cause: string;
    noticeDelivered: boolean;
    introStarted: boolean;
  };
}

export class TurnDetectionConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: TurnDetectionConfig.AsObject);
  getMode(): TurnDetectionConfig.TurnDetectionMode;
  setMode(value: TurnDetectionConfig.TurnDetectionMode): TurnDetectionConfig;

  getMinEndpointingDelaySeconds(): number;
  setMinEndpointingDelaySeconds(value: number): TurnDetectionConfig;
  hasMinEndpointingDelaySeconds(): boolean;
  clearMinEndpointingDelaySeconds(): TurnDetectionConfig;

  getMaxEndpointingDelaySeconds(): number;
  setMaxEndpointingDelaySeconds(value: number): TurnDetectionConfig;
  hasMaxEndpointingDelaySeconds(): boolean;
  clearMaxEndpointingDelaySeconds(): TurnDetectionConfig;

  getTurnEagerness(): TurnDetectionConfig.TurnEagerness;
  setTurnEagerness(value: TurnDetectionConfig.TurnEagerness): TurnDetectionConfig;

  getTurnDetectionSystemPrompt(): string;
  setTurnDetectionSystemPrompt(value: string): TurnDetectionConfig;
  hasTurnDetectionSystemPrompt(): boolean;
  clearTurnDetectionSystemPrompt(): TurnDetectionConfig;

  getTurnDetectionUserPrompt(): string;
  setTurnDetectionUserPrompt(value: string): TurnDetectionConfig;
  hasTurnDetectionUserPrompt(): boolean;
  clearTurnDetectionUserPrompt(): TurnDetectionConfig;

  getConversationContextTurns(): number;
  setConversationContextTurns(value: number): TurnDetectionConfig;
  hasConversationContextTurns(): boolean;
  clearConversationContextTurns(): TurnDetectionConfig;

  getSemanticModelName(): string;
  setSemanticModelName(value: string): TurnDetectionConfig;
  hasSemanticModelName(): boolean;
  clearSemanticModelName(): TurnDetectionConfig;

  getEndOfTurnProbabilityThreshold(): number;
  setEndOfTurnProbabilityThreshold(value: number): TurnDetectionConfig;
  hasEndOfTurnProbabilityThreshold(): boolean;
  clearEndOfTurnProbabilityThreshold(): TurnDetectionConfig;

  getHoldBands(): TurnDetectionConfig.EndOfTurnHoldBands | undefined;
  setHoldBands(value?: TurnDetectionConfig.EndOfTurnHoldBands): TurnDetectionConfig;
  hasHoldBands(): boolean;
  clearHoldBands(): TurnDetectionConfig;

  getUncertainMinWords(): number;
  setUncertainMinWords(value: number): TurnDetectionConfig;
  hasUncertainMinWords(): boolean;
  clearUncertainMinWords(): TurnDetectionConfig;

  getIncompleteMaxSilenceSeconds(): number;
  setIncompleteMaxSilenceSeconds(value: number): TurnDetectionConfig;
  hasIncompleteMaxSilenceSeconds(): boolean;
  clearIncompleteMaxSilenceSeconds(): TurnDetectionConfig;

  getExactProbability(): boolean;
  setExactProbability(value: boolean): TurnDetectionConfig;
  hasExactProbability(): boolean;
  clearExactProbability(): TurnDetectionConfig;

  getFinalMergeWindowSeconds(): number;
  setFinalMergeWindowSeconds(value: number): TurnDetectionConfig;
  hasFinalMergeWindowSeconds(): boolean;
  clearFinalMergeWindowSeconds(): TurnDetectionConfig;

  getDictationConfig(): DictationConfig | undefined;
  setDictationConfig(value?: DictationConfig): TurnDetectionConfig;
  hasDictationConfig(): boolean;
  clearDictationConfig(): TurnDetectionConfig;

  getS2tEmitMs(): number;
  setS2tEmitMs(value: number): TurnDetectionConfig;
  hasS2tEmitMs(): boolean;
  clearS2tEmitMs(): TurnDetectionConfig;

  getS2tRequestPartials(): boolean;
  setS2tRequestPartials(value: boolean): TurnDetectionConfig;
  hasS2tRequestPartials(): boolean;
  clearS2tRequestPartials(): TurnDetectionConfig;

  getS2tRequestEndOfSpeechCandidate(): boolean;
  setS2tRequestEndOfSpeechCandidate(value: boolean): TurnDetectionConfig;
  hasS2tRequestEndOfSpeechCandidate(): boolean;
  clearS2tRequestEndOfSpeechCandidate(): TurnDetectionConfig;

  getSmartTurnThreshold(): number;
  setSmartTurnThreshold(value: number): TurnDetectionConfig;
  hasSmartTurnThreshold(): boolean;
  clearSmartTurnThreshold(): TurnDetectionConfig;

  getPostUnmutePhantomWindowSeconds(): number;
  setPostUnmutePhantomWindowSeconds(value: number): TurnDetectionConfig;
  hasPostUnmutePhantomWindowSeconds(): boolean;
  clearPostUnmutePhantomWindowSeconds(): TurnDetectionConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TurnDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TurnDetectionConfig): TurnDetectionConfig.AsObject;
  static serializeBinaryToWriter(message: TurnDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TurnDetectionConfig;
  static deserializeBinaryFromReader(message: TurnDetectionConfig, reader: jspb.BinaryReader): TurnDetectionConfig;
}

export namespace TurnDetectionConfig {
  export type AsObject = {
    mode: TurnDetectionConfig.TurnDetectionMode;
    minEndpointingDelaySeconds?: number;
    maxEndpointingDelaySeconds?: number;
    turnEagerness: TurnDetectionConfig.TurnEagerness;
    turnDetectionSystemPrompt?: string;
    turnDetectionUserPrompt?: string;
    conversationContextTurns?: number;
    semanticModelName?: string;
    endOfTurnProbabilityThreshold?: number;
    holdBands?: TurnDetectionConfig.EndOfTurnHoldBands.AsObject;
    uncertainMinWords?: number;
    incompleteMaxSilenceSeconds?: number;
    exactProbability?: boolean;
    finalMergeWindowSeconds?: number;
    dictationConfig?: DictationConfig.AsObject;
    s2tEmitMs?: number;
    s2tRequestPartials?: boolean;
    s2tRequestEndOfSpeechCandidate?: boolean;
    smartTurnThreshold?: number;
    postUnmutePhantomWindowSeconds?: number;
  };

  export class EndOfTurnHoldBands extends jspb.Message {
    constructor();
    constructor(opt_data?: EndOfTurnHoldBands.AsObject);
    getBandsList(): Array<TurnDetectionConfig.EndOfTurnHoldBand>;
    setBandsList(value: Array<TurnDetectionConfig.EndOfTurnHoldBand>): EndOfTurnHoldBands;
    clearBandsList(): EndOfTurnHoldBands;
    addBands(value?: TurnDetectionConfig.EndOfTurnHoldBand, index?: number): TurnDetectionConfig.EndOfTurnHoldBand;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndOfTurnHoldBands.AsObject;
    static toObject(includeInstance: boolean, msg: EndOfTurnHoldBands): EndOfTurnHoldBands.AsObject;
    static serializeBinaryToWriter(message: EndOfTurnHoldBands, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndOfTurnHoldBands;
    static deserializeBinaryFromReader(message: EndOfTurnHoldBands, reader: jspb.BinaryReader): EndOfTurnHoldBands;
  }

  export namespace EndOfTurnHoldBands {
    export type AsObject = {
      bandsList: Array<TurnDetectionConfig.EndOfTurnHoldBand.AsObject>;
    };
  }


  export class EndOfTurnHoldBand extends jspb.Message {
    constructor();
    constructor(opt_data?: EndOfTurnHoldBand.AsObject);
    getUpperProbability(): number;
    setUpperProbability(value: number): EndOfTurnHoldBand;

    getMaxSilenceSeconds(): number;
    setMaxSilenceSeconds(value: number): EndOfTurnHoldBand;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndOfTurnHoldBand.AsObject;
    static toObject(includeInstance: boolean, msg: EndOfTurnHoldBand): EndOfTurnHoldBand.AsObject;
    static serializeBinaryToWriter(message: EndOfTurnHoldBand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndOfTurnHoldBand;
    static deserializeBinaryFromReader(message: EndOfTurnHoldBand, reader: jspb.BinaryReader): EndOfTurnHoldBand;
  }

  export namespace EndOfTurnHoldBand {
    export type AsObject = {
      upperProbability: number;
      maxSilenceSeconds: number;
    };
  }


  export enum TurnDetectionMode {
    TURN_DETECTION_MODE_UNSPECIFIED = 0,
    VAD = 1,
    SEMANTIC_MODEL = 2,
    AUDIO_MODEL = 3,
  }

  export enum TurnEagerness {
    TURN_EAGERNESS_UNSPECIFIED = 0,
    PATIENT = 1,
    NORMAL = 2,
    EAGER = 3,
  }

  export enum MinEndpointingDelaySecondsCase {
    _MIN_ENDPOINTING_DELAY_SECONDS_NOT_SET = 0,
    MIN_ENDPOINTING_DELAY_SECONDS = 2,
  }

  export enum MaxEndpointingDelaySecondsCase {
    _MAX_ENDPOINTING_DELAY_SECONDS_NOT_SET = 0,
    MAX_ENDPOINTING_DELAY_SECONDS = 3,
  }

  export enum TurnDetectionSystemPromptCase {
    _TURN_DETECTION_SYSTEM_PROMPT_NOT_SET = 0,
    TURN_DETECTION_SYSTEM_PROMPT = 5,
  }

  export enum TurnDetectionUserPromptCase {
    _TURN_DETECTION_USER_PROMPT_NOT_SET = 0,
    TURN_DETECTION_USER_PROMPT = 6,
  }

  export enum ConversationContextTurnsCase {
    _CONVERSATION_CONTEXT_TURNS_NOT_SET = 0,
    CONVERSATION_CONTEXT_TURNS = 7,
  }

  export enum SemanticModelNameCase {
    _SEMANTIC_MODEL_NAME_NOT_SET = 0,
    SEMANTIC_MODEL_NAME = 8,
  }

  export enum EndOfTurnProbabilityThresholdCase {
    _END_OF_TURN_PROBABILITY_THRESHOLD_NOT_SET = 0,
    END_OF_TURN_PROBABILITY_THRESHOLD = 9,
  }

  export enum UncertainMinWordsCase {
    _UNCERTAIN_MIN_WORDS_NOT_SET = 0,
    UNCERTAIN_MIN_WORDS = 11,
  }

  export enum IncompleteMaxSilenceSecondsCase {
    _INCOMPLETE_MAX_SILENCE_SECONDS_NOT_SET = 0,
    INCOMPLETE_MAX_SILENCE_SECONDS = 12,
  }

  export enum ExactProbabilityCase {
    _EXACT_PROBABILITY_NOT_SET = 0,
    EXACT_PROBABILITY = 13,
  }

  export enum FinalMergeWindowSecondsCase {
    _FINAL_MERGE_WINDOW_SECONDS_NOT_SET = 0,
    FINAL_MERGE_WINDOW_SECONDS = 14,
  }

  export enum S2tEmitMsCase {
    _S2T_EMIT_MS_NOT_SET = 0,
    S2T_EMIT_MS = 16,
  }

  export enum S2tRequestPartialsCase {
    _S2T_REQUEST_PARTIALS_NOT_SET = 0,
    S2T_REQUEST_PARTIALS = 17,
  }

  export enum S2tRequestEndOfSpeechCandidateCase {
    _S2T_REQUEST_END_OF_SPEECH_CANDIDATE_NOT_SET = 0,
    S2T_REQUEST_END_OF_SPEECH_CANDIDATE = 18,
  }

  export enum SmartTurnThresholdCase {
    _SMART_TURN_THRESHOLD_NOT_SET = 0,
    SMART_TURN_THRESHOLD = 19,
  }

  export enum PostUnmutePhantomWindowSecondsCase {
    _POST_UNMUTE_PHANTOM_WINDOW_SECONDS_NOT_SET = 0,
    POST_UNMUTE_PHANTOM_WINDOW_SECONDS = 20,
  }
}

export class DictationConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: DictationConfig.AsObject);
  getHoldEnabled(): boolean;
  setHoldEnabled(value: boolean): DictationConfig;
  hasHoldEnabled(): boolean;
  clearHoldEnabled(): DictationConfig;

  getExpectedInputEnabled(): boolean;
  setExpectedInputEnabled(value: boolean): DictationConfig;
  hasExpectedInputEnabled(): boolean;
  clearExpectedInputEnabled(): DictationConfig;

  getReadBackFromBotTextEnabled(): boolean;
  setReadBackFromBotTextEnabled(value: boolean): DictationConfig;
  hasReadBackFromBotTextEnabled(): boolean;
  clearReadBackFromBotTextEnabled(): DictationConfig;

  getHoldGenericMaxSeconds(): number;
  setHoldGenericMaxSeconds(value: number): DictationConfig;
  hasHoldGenericMaxSeconds(): boolean;
  clearHoldGenericMaxSeconds(): DictationConfig;

  getHoldMaxSecondsByCategoryMap(): jspb.Map<string, number>;
  clearHoldMaxSecondsByCategoryMap(): DictationConfig;

  getHoldInvalidChecksumSeconds(): number;
  setHoldInvalidChecksumSeconds(value: number): DictationConfig;
  hasHoldInvalidChecksumSeconds(): boolean;
  clearHoldInvalidChecksumSeconds(): DictationConfig;

  getEarlyCommitOnCompleteValue(): boolean;
  setEarlyCommitOnCompleteValue(value: boolean): DictationConfig;
  hasEarlyCommitOnCompleteValue(): boolean;
  clearEarlyCommitOnCompleteValue(): DictationConfig;

  getS2tSlotMinDurationOffSeconds(): number;
  setS2tSlotMinDurationOffSeconds(value: number): DictationConfig;
  hasS2tSlotMinDurationOffSeconds(): boolean;
  clearS2tSlotMinDurationOffSeconds(): DictationConfig;

  getS2tSlotMinDurationOffRestoreSeconds(): number;
  setS2tSlotMinDurationOffRestoreSeconds(value: number): DictationConfig;
  hasS2tSlotMinDurationOffRestoreSeconds(): boolean;
  clearS2tSlotMinDurationOffRestoreSeconds(): DictationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DictationConfig): DictationConfig.AsObject;
  static serializeBinaryToWriter(message: DictationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictationConfig;
  static deserializeBinaryFromReader(message: DictationConfig, reader: jspb.BinaryReader): DictationConfig;
}

export namespace DictationConfig {
  export type AsObject = {
    holdEnabled?: boolean;
    expectedInputEnabled?: boolean;
    readBackFromBotTextEnabled?: boolean;
    holdGenericMaxSeconds?: number;
    holdMaxSecondsByCategoryMap: Array<[string, number]>;
    holdInvalidChecksumSeconds?: number;
    earlyCommitOnCompleteValue?: boolean;
    s2tSlotMinDurationOffSeconds?: number;
    s2tSlotMinDurationOffRestoreSeconds?: number;
  };

  export enum HoldEnabledCase {
    _HOLD_ENABLED_NOT_SET = 0,
    HOLD_ENABLED = 1,
  }

  export enum ExpectedInputEnabledCase {
    _EXPECTED_INPUT_ENABLED_NOT_SET = 0,
    EXPECTED_INPUT_ENABLED = 2,
  }

  export enum ReadBackFromBotTextEnabledCase {
    _READ_BACK_FROM_BOT_TEXT_ENABLED_NOT_SET = 0,
    READ_BACK_FROM_BOT_TEXT_ENABLED = 3,
  }

  export enum HoldGenericMaxSecondsCase {
    _HOLD_GENERIC_MAX_SECONDS_NOT_SET = 0,
    HOLD_GENERIC_MAX_SECONDS = 4,
  }

  export enum HoldInvalidChecksumSecondsCase {
    _HOLD_INVALID_CHECKSUM_SECONDS_NOT_SET = 0,
    HOLD_INVALID_CHECKSUM_SECONDS = 6,
  }

  export enum EarlyCommitOnCompleteValueCase {
    _EARLY_COMMIT_ON_COMPLETE_VALUE_NOT_SET = 0,
    EARLY_COMMIT_ON_COMPLETE_VALUE = 7,
  }

  export enum S2tSlotMinDurationOffSecondsCase {
    _S2T_SLOT_MIN_DURATION_OFF_SECONDS_NOT_SET = 0,
    S2T_SLOT_MIN_DURATION_OFF_SECONDS = 8,
  }

  export enum S2tSlotMinDurationOffRestoreSecondsCase {
    _S2T_SLOT_MIN_DURATION_OFF_RESTORE_SECONDS_NOT_SET = 0,
    S2T_SLOT_MIN_DURATION_OFF_RESTORE_SECONDS = 9,
  }
}

export class InterruptionHandlingConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: InterruptionHandlingConfig.AsObject);
  getEnabled(): boolean;
  setEnabled(value: boolean): InterruptionHandlingConfig;
  hasEnabled(): boolean;
  clearEnabled(): InterruptionHandlingConfig;

  getMinInterruptionDurationSeconds(): number;
  setMinInterruptionDurationSeconds(value: number): InterruptionHandlingConfig;
  hasMinInterruptionDurationSeconds(): boolean;
  clearMinInterruptionDurationSeconds(): InterruptionHandlingConfig;

  getMinInterruptionWords(): number;
  setMinInterruptionWords(value: number): InterruptionHandlingConfig;
  hasMinInterruptionWords(): boolean;
  clearMinInterruptionWords(): InterruptionHandlingConfig;

  getFalseInterruptionTimeoutSeconds(): number;
  setFalseInterruptionTimeoutSeconds(value: number): InterruptionHandlingConfig;
  hasFalseInterruptionTimeoutSeconds(): boolean;
  clearFalseInterruptionTimeoutSeconds(): InterruptionHandlingConfig;

  getResumeAfterFalseInterruption(): boolean;
  setResumeAfterFalseInterruption(value: boolean): InterruptionHandlingConfig;
  hasResumeAfterFalseInterruption(): boolean;
  clearResumeAfterFalseInterruption(): InterruptionHandlingConfig;

  getBackoffSeconds(): number;
  setBackoffSeconds(value: number): InterruptionHandlingConfig;
  hasBackoffSeconds(): boolean;
  clearBackoffSeconds(): InterruptionHandlingConfig;

  getFirstMessageProtectedSeconds(): number;
  setFirstMessageProtectedSeconds(value: number): InterruptionHandlingConfig;
  hasFirstMessageProtectedSeconds(): boolean;
  clearFirstMessageProtectedSeconds(): InterruptionHandlingConfig;

  getTranscribeOnDisabledInterruptions(): boolean;
  setTranscribeOnDisabledInterruptions(value: boolean): InterruptionHandlingConfig;
  hasTranscribeOnDisabledInterruptions(): boolean;
  clearTranscribeOnDisabledInterruptions(): InterruptionHandlingConfig;

  getInterruptionFadeOutMs(): number;
  setInterruptionFadeOutMs(value: number): InterruptionHandlingConfig;
  hasInterruptionFadeOutMs(): boolean;
  clearInterruptionFadeOutMs(): InterruptionHandlingConfig;

  getCancelOnSpeechWhileThinking(): boolean;
  setCancelOnSpeechWhileThinking(value: boolean): InterruptionHandlingConfig;
  hasCancelOnSpeechWhileThinking(): boolean;
  clearCancelOnSpeechWhileThinking(): InterruptionHandlingConfig;

  getAiTeamsCancelPendingOnInterrupt(): boolean;
  setAiTeamsCancelPendingOnInterrupt(value: boolean): InterruptionHandlingConfig;
  hasAiTeamsCancelPendingOnInterrupt(): boolean;
  clearAiTeamsCancelPendingOnInterrupt(): InterruptionHandlingConfig;

  getT2sCancelOnBargeIn(): boolean;
  setT2sCancelOnBargeIn(value: boolean): InterruptionHandlingConfig;
  hasT2sCancelOnBargeIn(): boolean;
  clearT2sCancelOnBargeIn(): InterruptionHandlingConfig;

  getNluTurnControlEnabled(): boolean;
  setNluTurnControlEnabled(value: boolean): InterruptionHandlingConfig;
  hasNluTurnControlEnabled(): boolean;
  clearNluTurnControlEnabled(): InterruptionHandlingConfig;

  getHeardReportEnabled(): boolean;
  setHeardReportEnabled(value: boolean): InterruptionHandlingConfig;
  hasHeardReportEnabled(): boolean;
  clearHeardReportEnabled(): InterruptionHandlingConfig;

  getHeardTextAlignmentEnabled(): boolean;
  setHeardTextAlignmentEnabled(value: boolean): InterruptionHandlingConfig;
  hasHeardTextAlignmentEnabled(): boolean;
  clearHeardTextAlignmentEnabled(): InterruptionHandlingConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterruptionHandlingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InterruptionHandlingConfig): InterruptionHandlingConfig.AsObject;
  static serializeBinaryToWriter(message: InterruptionHandlingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterruptionHandlingConfig;
  static deserializeBinaryFromReader(message: InterruptionHandlingConfig, reader: jspb.BinaryReader): InterruptionHandlingConfig;
}

export namespace InterruptionHandlingConfig {
  export type AsObject = {
    enabled?: boolean;
    minInterruptionDurationSeconds?: number;
    minInterruptionWords?: number;
    falseInterruptionTimeoutSeconds?: number;
    resumeAfterFalseInterruption?: boolean;
    backoffSeconds?: number;
    firstMessageProtectedSeconds?: number;
    transcribeOnDisabledInterruptions?: boolean;
    interruptionFadeOutMs?: number;
    cancelOnSpeechWhileThinking?: boolean;
    aiTeamsCancelPendingOnInterrupt?: boolean;
    t2sCancelOnBargeIn?: boolean;
    nluTurnControlEnabled?: boolean;
    heardReportEnabled?: boolean;
    heardTextAlignmentEnabled?: boolean;
  };

  export enum EnabledCase {
    _ENABLED_NOT_SET = 0,
    ENABLED = 1,
  }

  export enum MinInterruptionDurationSecondsCase {
    _MIN_INTERRUPTION_DURATION_SECONDS_NOT_SET = 0,
    MIN_INTERRUPTION_DURATION_SECONDS = 2,
  }

  export enum MinInterruptionWordsCase {
    _MIN_INTERRUPTION_WORDS_NOT_SET = 0,
    MIN_INTERRUPTION_WORDS = 3,
  }

  export enum FalseInterruptionTimeoutSecondsCase {
    _FALSE_INTERRUPTION_TIMEOUT_SECONDS_NOT_SET = 0,
    FALSE_INTERRUPTION_TIMEOUT_SECONDS = 4,
  }

  export enum ResumeAfterFalseInterruptionCase {
    _RESUME_AFTER_FALSE_INTERRUPTION_NOT_SET = 0,
    RESUME_AFTER_FALSE_INTERRUPTION = 5,
  }

  export enum BackoffSecondsCase {
    _BACKOFF_SECONDS_NOT_SET = 0,
    BACKOFF_SECONDS = 6,
  }

  export enum FirstMessageProtectedSecondsCase {
    _FIRST_MESSAGE_PROTECTED_SECONDS_NOT_SET = 0,
    FIRST_MESSAGE_PROTECTED_SECONDS = 7,
  }

  export enum TranscribeOnDisabledInterruptionsCase {
    _TRANSCRIBE_ON_DISABLED_INTERRUPTIONS_NOT_SET = 0,
    TRANSCRIBE_ON_DISABLED_INTERRUPTIONS = 8,
  }

  export enum InterruptionFadeOutMsCase {
    _INTERRUPTION_FADE_OUT_MS_NOT_SET = 0,
    INTERRUPTION_FADE_OUT_MS = 9,
  }

  export enum CancelOnSpeechWhileThinkingCase {
    _CANCEL_ON_SPEECH_WHILE_THINKING_NOT_SET = 0,
    CANCEL_ON_SPEECH_WHILE_THINKING = 10,
  }

  export enum AiTeamsCancelPendingOnInterruptCase {
    _AI_TEAMS_CANCEL_PENDING_ON_INTERRUPT_NOT_SET = 0,
    AI_TEAMS_CANCEL_PENDING_ON_INTERRUPT = 11,
  }

  export enum T2sCancelOnBargeInCase {
    _T2S_CANCEL_ON_BARGE_IN_NOT_SET = 0,
    T2S_CANCEL_ON_BARGE_IN = 12,
  }

  export enum NluTurnControlEnabledCase {
    _NLU_TURN_CONTROL_ENABLED_NOT_SET = 0,
    NLU_TURN_CONTROL_ENABLED = 13,
  }

  export enum HeardReportEnabledCase {
    _HEARD_REPORT_ENABLED_NOT_SET = 0,
    HEARD_REPORT_ENABLED = 14,
  }

  export enum HeardTextAlignmentEnabledCase {
    _HEARD_TEXT_ALIGNMENT_ENABLED_NOT_SET = 0,
    HEARD_TEXT_ALIGNMENT_ENABLED = 15,
  }
}

export class ResponseTimingConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: ResponseTimingConfig.AsObject);
  getTurnTimeoutSeconds(): number;
  setTurnTimeoutSeconds(value: number): ResponseTimingConfig;
  hasTurnTimeoutSeconds(): boolean;
  clearTurnTimeoutSeconds(): ResponseTimingConfig;

  getSilenceEndCallTimeoutSeconds(): number;
  setSilenceEndCallTimeoutSeconds(value: number): ResponseTimingConfig;
  hasSilenceEndCallTimeoutSeconds(): boolean;
  clearSilenceEndCallTimeoutSeconds(): ResponseTimingConfig;

  getSoftTimeoutConfig(): SoftTimeoutConfig | undefined;
  setSoftTimeoutConfig(value?: SoftTimeoutConfig): ResponseTimingConfig;
  hasSoftTimeoutConfig(): boolean;
  clearSoftTimeoutConfig(): ResponseTimingConfig;

  getPreemptiveGenerationEnabled(): boolean;
  setPreemptiveGenerationEnabled(value: boolean): ResponseTimingConfig;
  hasPreemptiveGenerationEnabled(): boolean;
  clearPreemptiveGenerationEnabled(): ResponseTimingConfig;

  getT2sChunkedStreamingEnabled(): boolean;
  setT2sChunkedStreamingEnabled(value: boolean): ResponseTimingConfig;
  hasT2sChunkedStreamingEnabled(): boolean;
  clearT2sChunkedStreamingEnabled(): ResponseTimingConfig;

  getStreamingEnabled(): boolean;
  setStreamingEnabled(value: boolean): ResponseTimingConfig;
  hasStreamingEnabled(): boolean;
  clearStreamingEnabled(): ResponseTimingConfig;

  getNluCallStreamEnabled(): boolean;
  setNluCallStreamEnabled(value: boolean): ResponseTimingConfig;
  hasNluCallStreamEnabled(): boolean;
  clearNluCallStreamEnabled(): ResponseTimingConfig;

  getTurnTimeoutIntent(): string;
  setTurnTimeoutIntent(value: string): ResponseTimingConfig;
  hasTurnTimeoutIntent(): boolean;
  clearTurnTimeoutIntent(): ResponseTimingConfig;

  getT2sMaxEdgeSilenceMs(): number;
  setT2sMaxEdgeSilenceMs(value: number): ResponseTimingConfig;
  hasT2sMaxEdgeSilenceMs(): boolean;
  clearT2sMaxEdgeSilenceMs(): ResponseTimingConfig;

  getNluCallStreamTurnTimeoutSeconds(): number;
  setNluCallStreamTurnTimeoutSeconds(value: number): ResponseTimingConfig;
  hasNluCallStreamTurnTimeoutSeconds(): boolean;
  clearNluCallStreamTurnTimeoutSeconds(): ResponseTimingConfig;

  getNluCallStreamTurnQuietSeconds(): number;
  setNluCallStreamTurnQuietSeconds(value: number): ResponseTimingConfig;
  hasNluCallStreamTurnQuietSeconds(): boolean;
  clearNluCallStreamTurnQuietSeconds(): ResponseTimingConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTimingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTimingConfig): ResponseTimingConfig.AsObject;
  static serializeBinaryToWriter(message: ResponseTimingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTimingConfig;
  static deserializeBinaryFromReader(message: ResponseTimingConfig, reader: jspb.BinaryReader): ResponseTimingConfig;
}

export namespace ResponseTimingConfig {
  export type AsObject = {
    turnTimeoutSeconds?: number;
    silenceEndCallTimeoutSeconds?: number;
    softTimeoutConfig?: SoftTimeoutConfig.AsObject;
    preemptiveGenerationEnabled?: boolean;
    t2sChunkedStreamingEnabled?: boolean;
    streamingEnabled?: boolean;
    nluCallStreamEnabled?: boolean;
    turnTimeoutIntent?: string;
    t2sMaxEdgeSilenceMs?: number;
    nluCallStreamTurnTimeoutSeconds?: number;
    nluCallStreamTurnQuietSeconds?: number;
  };

  export enum TurnTimeoutSecondsCase {
    _TURN_TIMEOUT_SECONDS_NOT_SET = 0,
    TURN_TIMEOUT_SECONDS = 1,
  }

  export enum SilenceEndCallTimeoutSecondsCase {
    _SILENCE_END_CALL_TIMEOUT_SECONDS_NOT_SET = 0,
    SILENCE_END_CALL_TIMEOUT_SECONDS = 2,
  }

  export enum PreemptiveGenerationEnabledCase {
    _PREEMPTIVE_GENERATION_ENABLED_NOT_SET = 0,
    PREEMPTIVE_GENERATION_ENABLED = 4,
  }

  export enum T2sChunkedStreamingEnabledCase {
    _T2S_CHUNKED_STREAMING_ENABLED_NOT_SET = 0,
    T2S_CHUNKED_STREAMING_ENABLED = 5,
  }

  export enum StreamingEnabledCase {
    _STREAMING_ENABLED_NOT_SET = 0,
    STREAMING_ENABLED = 6,
  }

  export enum NluCallStreamEnabledCase {
    _NLU_CALL_STREAM_ENABLED_NOT_SET = 0,
    NLU_CALL_STREAM_ENABLED = 7,
  }

  export enum TurnTimeoutIntentCase {
    _TURN_TIMEOUT_INTENT_NOT_SET = 0,
    TURN_TIMEOUT_INTENT = 8,
  }

  export enum T2sMaxEdgeSilenceMsCase {
    _T2S_MAX_EDGE_SILENCE_MS_NOT_SET = 0,
    T2S_MAX_EDGE_SILENCE_MS = 9,
  }

  export enum NluCallStreamTurnTimeoutSecondsCase {
    _NLU_CALL_STREAM_TURN_TIMEOUT_SECONDS_NOT_SET = 0,
    NLU_CALL_STREAM_TURN_TIMEOUT_SECONDS = 10,
  }

  export enum NluCallStreamTurnQuietSecondsCase {
    _NLU_CALL_STREAM_TURN_QUIET_SECONDS_NOT_SET = 0,
    NLU_CALL_STREAM_TURN_QUIET_SECONDS = 11,
  }
}

export class SoftTimeoutConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: SoftTimeoutConfig.AsObject);
  getTimeoutSeconds(): number;
  setTimeoutSeconds(value: number): SoftTimeoutConfig;
  hasTimeoutSeconds(): boolean;
  clearTimeoutSeconds(): SoftTimeoutConfig;

  getMessagesList(): Array<string>;
  setMessagesList(value: Array<string>): SoftTimeoutConfig;
  clearMessagesList(): SoftTimeoutConfig;
  addMessages(value: string, index?: number): SoftTimeoutConfig;

  getMaxPerGeneration(): number;
  setMaxPerGeneration(value: number): SoftTimeoutConfig;
  hasMaxPerGeneration(): boolean;
  clearMaxPerGeneration(): SoftTimeoutConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SoftTimeoutConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SoftTimeoutConfig): SoftTimeoutConfig.AsObject;
  static serializeBinaryToWriter(message: SoftTimeoutConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SoftTimeoutConfig;
  static deserializeBinaryFromReader(message: SoftTimeoutConfig, reader: jspb.BinaryReader): SoftTimeoutConfig;
}

export namespace SoftTimeoutConfig {
  export type AsObject = {
    timeoutSeconds?: number;
    messagesList: Array<string>;
    maxPerGeneration?: number;
  };

  export enum TimeoutSecondsCase {
    _TIMEOUT_SECONDS_NOT_SET = 0,
    TIMEOUT_SECONDS = 1,
  }

  export enum MaxPerGenerationCase {
    _MAX_PER_GENERATION_NOT_SET = 0,
    MAX_PER_GENERATION = 3,
  }
}

export class AnsweringMachineDetectionConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: AnsweringMachineDetectionConfig.AsObject);
  getActive(): boolean;
  setActive(value: boolean): AnsweringMachineDetectionConfig;
  hasActive(): boolean;
  clearActive(): AnsweringMachineDetectionConfig;

  getAction(): AnsweringMachineDetectionConfig.AmdAction;
  setAction(value: AnsweringMachineDetectionConfig.AmdAction): AnsweringMachineDetectionConfig;
  hasAction(): boolean;
  clearAction(): AnsweringMachineDetectionConfig;

  getSensitivity(): AnsweringMachineDetectionConfig.AmdSensitivity;
  setSensitivity(value: AnsweringMachineDetectionConfig.AmdSensitivity): AnsweringMachineDetectionConfig;
  hasSensitivity(): boolean;
  clearSensitivity(): AnsweringMachineDetectionConfig;

  getMaxDecisionTimeMs(): number;
  setMaxDecisionTimeMs(value: number): AnsweringMachineDetectionConfig;
  hasMaxDecisionTimeMs(): boolean;
  clearMaxDecisionTimeMs(): AnsweringMachineDetectionConfig;

  getMaxMachineWaitMs(): number;
  setMaxMachineWaitMs(value: number): AnsweringMachineDetectionConfig;
  hasMaxMachineWaitMs(): boolean;
  clearMaxMachineWaitMs(): AnsweringMachineDetectionConfig;

  getBeepWaitAfterGreetingMs(): number;
  setBeepWaitAfterGreetingMs(value: number): AnsweringMachineDetectionConfig;
  hasBeepWaitAfterGreetingMs(): boolean;
  clearBeepWaitAfterGreetingMs(): AnsweringMachineDetectionConfig;

  getInitialSilenceMs(): number;
  setInitialSilenceMs(value: number): AnsweringMachineDetectionConfig;
  hasInitialSilenceMs(): boolean;
  clearInitialSilenceMs(): AnsweringMachineDetectionConfig;

  getMaxHumanGreetingMs(): number;
  setMaxHumanGreetingMs(value: number): AnsweringMachineDetectionConfig;
  hasMaxHumanGreetingMs(): boolean;
  clearMaxHumanGreetingMs(): AnsweringMachineDetectionConfig;

  getGreetingEndSilenceMs(): number;
  setGreetingEndSilenceMs(value: number): AnsweringMachineDetectionConfig;
  hasGreetingEndSilenceMs(): boolean;
  clearGreetingEndSilenceMs(): AnsweringMachineDetectionConfig;

  getBeepDetectionActive(): boolean;
  setBeepDetectionActive(value: boolean): AnsweringMachineDetectionConfig;
  hasBeepDetectionActive(): boolean;
  clearBeepDetectionActive(): AnsweringMachineDetectionConfig;

  getAdditionalMachinePhrasesList(): Array<string>;
  setAdditionalMachinePhrasesList(value: Array<string>): AnsweringMachineDetectionConfig;
  clearAdditionalMachinePhrasesList(): AnsweringMachineDetectionConfig;
  addAdditionalMachinePhrases(value: string, index?: number): AnsweringMachineDetectionConfig;

  getAdditionalHumanPhrasesList(): Array<string>;
  setAdditionalHumanPhrasesList(value: Array<string>): AnsweringMachineDetectionConfig;
  clearAdditionalHumanPhrasesList(): AnsweringMachineDetectionConfig;
  addAdditionalHumanPhrases(value: string, index?: number): AnsweringMachineDetectionConfig;

  getHangUpOnFax(): boolean;
  setHangUpOnFax(value: boolean): AnsweringMachineDetectionConfig;
  hasHangUpOnFax(): boolean;
  clearHangUpOnFax(): AnsweringMachineDetectionConfig;

  getHangUpOnNetworkAnnouncement(): boolean;
  setHangUpOnNetworkAnnouncement(value: boolean): AnsweringMachineDetectionConfig;
  hasHangUpOnNetworkAnnouncement(): boolean;
  clearHangUpOnNetworkAnnouncement(): AnsweringMachineDetectionConfig;

  getHangUpOnIvr(): boolean;
  setHangUpOnIvr(value: boolean): AnsweringMachineDetectionConfig;
  hasHangUpOnIvr(): boolean;
  clearHangUpOnIvr(): AnsweringMachineDetectionConfig;

  getHangUpOnCallScreening(): boolean;
  setHangUpOnCallScreening(value: boolean): AnsweringMachineDetectionConfig;
  hasHangUpOnCallScreening(): boolean;
  clearHangUpOnCallScreening(): AnsweringMachineDetectionConfig;

  getVoiceMessageIntent(): string;
  setVoiceMessageIntent(value: string): AnsweringMachineDetectionConfig;
  hasVoiceMessageIntent(): boolean;
  clearVoiceMessageIntent(): AnsweringMachineDetectionConfig;

  getVoiceMessageMaxBeepWaitMs(): number;
  setVoiceMessageMaxBeepWaitMs(value: number): AnsweringMachineDetectionConfig;
  hasVoiceMessageMaxBeepWaitMs(): boolean;
  clearVoiceMessageMaxBeepWaitMs(): AnsweringMachineDetectionConfig;

  getVoiceMessageTimeoutMs(): number;
  setVoiceMessageTimeoutMs(value: number): AnsweringMachineDetectionConfig;
  hasVoiceMessageTimeoutMs(): boolean;
  clearVoiceMessageTimeoutMs(): AnsweringMachineDetectionConfig;

  getKeywordDetectionActive(): boolean;
  setKeywordDetectionActive(value: boolean): AnsweringMachineDetectionConfig;
  hasKeywordDetectionActive(): boolean;
  clearKeywordDetectionActive(): AnsweringMachineDetectionConfig;

  getCadenceDetectionActive(): boolean;
  setCadenceDetectionActive(value: boolean): AnsweringMachineDetectionConfig;
  hasCadenceDetectionActive(): boolean;
  clearCadenceDetectionActive(): AnsweringMachineDetectionConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnsweringMachineDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AnsweringMachineDetectionConfig): AnsweringMachineDetectionConfig.AsObject;
  static serializeBinaryToWriter(message: AnsweringMachineDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnsweringMachineDetectionConfig;
  static deserializeBinaryFromReader(message: AnsweringMachineDetectionConfig, reader: jspb.BinaryReader): AnsweringMachineDetectionConfig;
}

export namespace AnsweringMachineDetectionConfig {
  export type AsObject = {
    active?: boolean;
    action?: AnsweringMachineDetectionConfig.AmdAction;
    sensitivity?: AnsweringMachineDetectionConfig.AmdSensitivity;
    maxDecisionTimeMs?: number;
    maxMachineWaitMs?: number;
    beepWaitAfterGreetingMs?: number;
    initialSilenceMs?: number;
    maxHumanGreetingMs?: number;
    greetingEndSilenceMs?: number;
    beepDetectionActive?: boolean;
    additionalMachinePhrasesList: Array<string>;
    additionalHumanPhrasesList: Array<string>;
    hangUpOnFax?: boolean;
    hangUpOnNetworkAnnouncement?: boolean;
    hangUpOnIvr?: boolean;
    hangUpOnCallScreening?: boolean;
    voiceMessageIntent?: string;
    voiceMessageMaxBeepWaitMs?: number;
    voiceMessageTimeoutMs?: number;
    keywordDetectionActive?: boolean;
    cadenceDetectionActive?: boolean;
  };

  export enum AmdAction {
    AMD_ACTION_UNSPECIFIED = 0,
    HANG_UP = 1,
    DETECT_ONLY = 2,
    LEAVE_VOICE_MESSAGE = 3,
  }

  export enum AmdSensitivity {
    AMD_SENSITIVITY_UNSPECIFIED = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
  }

  export enum ActiveCase {
    _ACTIVE_NOT_SET = 0,
    ACTIVE = 1,
  }

  export enum ActionCase {
    _ACTION_NOT_SET = 0,
    ACTION = 2,
  }

  export enum SensitivityCase {
    _SENSITIVITY_NOT_SET = 0,
    SENSITIVITY = 3,
  }

  export enum MaxDecisionTimeMsCase {
    _MAX_DECISION_TIME_MS_NOT_SET = 0,
    MAX_DECISION_TIME_MS = 4,
  }

  export enum MaxMachineWaitMsCase {
    _MAX_MACHINE_WAIT_MS_NOT_SET = 0,
    MAX_MACHINE_WAIT_MS = 5,
  }

  export enum BeepWaitAfterGreetingMsCase {
    _BEEP_WAIT_AFTER_GREETING_MS_NOT_SET = 0,
    BEEP_WAIT_AFTER_GREETING_MS = 6,
  }

  export enum InitialSilenceMsCase {
    _INITIAL_SILENCE_MS_NOT_SET = 0,
    INITIAL_SILENCE_MS = 7,
  }

  export enum MaxHumanGreetingMsCase {
    _MAX_HUMAN_GREETING_MS_NOT_SET = 0,
    MAX_HUMAN_GREETING_MS = 8,
  }

  export enum GreetingEndSilenceMsCase {
    _GREETING_END_SILENCE_MS_NOT_SET = 0,
    GREETING_END_SILENCE_MS = 9,
  }

  export enum BeepDetectionActiveCase {
    _BEEP_DETECTION_ACTIVE_NOT_SET = 0,
    BEEP_DETECTION_ACTIVE = 10,
  }

  export enum HangUpOnFaxCase {
    _HANG_UP_ON_FAX_NOT_SET = 0,
    HANG_UP_ON_FAX = 13,
  }

  export enum HangUpOnNetworkAnnouncementCase {
    _HANG_UP_ON_NETWORK_ANNOUNCEMENT_NOT_SET = 0,
    HANG_UP_ON_NETWORK_ANNOUNCEMENT = 14,
  }

  export enum HangUpOnIvrCase {
    _HANG_UP_ON_IVR_NOT_SET = 0,
    HANG_UP_ON_IVR = 15,
  }

  export enum HangUpOnCallScreeningCase {
    _HANG_UP_ON_CALL_SCREENING_NOT_SET = 0,
    HANG_UP_ON_CALL_SCREENING = 16,
  }

  export enum VoiceMessageIntentCase {
    _VOICE_MESSAGE_INTENT_NOT_SET = 0,
    VOICE_MESSAGE_INTENT = 17,
  }

  export enum VoiceMessageMaxBeepWaitMsCase {
    _VOICE_MESSAGE_MAX_BEEP_WAIT_MS_NOT_SET = 0,
    VOICE_MESSAGE_MAX_BEEP_WAIT_MS = 18,
  }

  export enum VoiceMessageTimeoutMsCase {
    _VOICE_MESSAGE_TIMEOUT_MS_NOT_SET = 0,
    VOICE_MESSAGE_TIMEOUT_MS = 19,
  }

  export enum KeywordDetectionActiveCase {
    _KEYWORD_DETECTION_ACTIVE_NOT_SET = 0,
    KEYWORD_DETECTION_ACTIVE = 20,
  }

  export enum CadenceDetectionActiveCase {
    _CADENCE_DETECTION_ACTIVE_NOT_SET = 0,
    CADENCE_DETECTION_ACTIVE = 21,
  }
}

export class SipBaseConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: SipBaseConfig.AsObject);
  getSipSimVersion(): string;
  setSipSimVersion(value: string): SipBaseConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SipBaseConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SipBaseConfig): SipBaseConfig.AsObject;
  static serializeBinaryToWriter(message: SipBaseConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SipBaseConfig;
  static deserializeBinaryFromReader(message: SipBaseConfig, reader: jspb.BinaryReader): SipBaseConfig;
}

export namespace SipBaseConfig {
  export type AsObject = {
    sipSimVersion: string;
  };
}

export class SipCallerConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: SipCallerConfig.AsObject);
  getSipBaseConfig(): SipBaseConfig | undefined;
  setSipBaseConfig(value?: SipBaseConfig): SipCallerConfig;
  hasSipBaseConfig(): boolean;
  clearSipBaseConfig(): SipCallerConfig;

  getCalleeId(): string;
  setCalleeId(value: string): SipCallerConfig;

  getSipHeadersMap(): jspb.Map<string, string>;
  clearSipHeadersMap(): SipCallerConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SipCallerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SipCallerConfig): SipCallerConfig.AsObject;
  static serializeBinaryToWriter(message: SipCallerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SipCallerConfig;
  static deserializeBinaryFromReader(message: SipCallerConfig, reader: jspb.BinaryReader): SipCallerConfig;
}

export namespace SipCallerConfig {
  export type AsObject = {
    sipBaseConfig?: SipBaseConfig.AsObject;
    calleeId: string;
    sipHeadersMap: Array<[string, string]>;
  };
}

export class CsiVtsiConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: CsiVtsiConfig.AsObject);
  getS2tVtsiCallbacks(): S2tVtsiCallbacks | undefined;
  setS2tVtsiCallbacks(value?: S2tVtsiCallbacks): CsiVtsiConfig;
  hasS2tVtsiCallbacks(): boolean;
  clearS2tVtsiCallbacks(): CsiVtsiConfig;

  getNluVtsiCallbacks(): NluVtsiCallbacks | undefined;
  setNluVtsiCallbacks(value?: NluVtsiCallbacks): CsiVtsiConfig;
  hasNluVtsiCallbacks(): boolean;
  clearNluVtsiCallbacks(): CsiVtsiConfig;

  getT2sVtsiCallbacks(): T2sVtsiCallbacks | undefined;
  setT2sVtsiCallbacks(value?: T2sVtsiCallbacks): CsiVtsiConfig;
  hasT2sVtsiCallbacks(): boolean;
  clearT2sVtsiCallbacks(): CsiVtsiConfig;

  getAudioObjectStoreConfig(): AudioObjectStorageConfig | undefined;
  setAudioObjectStoreConfig(value?: AudioObjectStorageConfig): CsiVtsiConfig;
  hasAudioObjectStoreConfig(): boolean;
  clearAudioObjectStoreConfig(): CsiVtsiConfig;

  getMessageBrokerConfig(): MessageBrokerConfig | undefined;
  setMessageBrokerConfig(value?: MessageBrokerConfig): CsiVtsiConfig;
  hasMessageBrokerConfig(): boolean;
  clearMessageBrokerConfig(): CsiVtsiConfig;

  getActivateControlMessages(): boolean;
  setActivateControlMessages(value: boolean): CsiVtsiConfig;
  hasActivateControlMessages(): boolean;
  clearActivateControlMessages(): CsiVtsiConfig;

  getPreemptiveGenerationConfig(): CsiPreemptiveGenerationConfig | undefined;
  setPreemptiveGenerationConfig(value?: CsiPreemptiveGenerationConfig): CsiVtsiConfig;
  hasPreemptiveGenerationConfig(): boolean;
  clearPreemptiveGenerationConfig(): CsiVtsiConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsiVtsiConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CsiVtsiConfig): CsiVtsiConfig.AsObject;
  static serializeBinaryToWriter(message: CsiVtsiConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsiVtsiConfig;
  static deserializeBinaryFromReader(message: CsiVtsiConfig, reader: jspb.BinaryReader): CsiVtsiConfig;
}

export namespace CsiVtsiConfig {
  export type AsObject = {
    s2tVtsiCallbacks?: S2tVtsiCallbacks.AsObject;
    nluVtsiCallbacks?: NluVtsiCallbacks.AsObject;
    t2sVtsiCallbacks?: T2sVtsiCallbacks.AsObject;
    audioObjectStoreConfig?: AudioObjectStorageConfig.AsObject;
    messageBrokerConfig?: MessageBrokerConfig.AsObject;
    activateControlMessages?: boolean;
    preemptiveGenerationConfig?: CsiPreemptiveGenerationConfig.AsObject;
  };

  export enum ActivateControlMessagesCase {
    _ACTIVATE_CONTROL_MESSAGES_NOT_SET = 0,
    ACTIVATE_CONTROL_MESSAGES = 6,
  }
}

export class CsiPreemptiveGenerationConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: CsiPreemptiveGenerationConfig.AsObject);
  getEnabled(): boolean;
  setEnabled(value: boolean): CsiPreemptiveGenerationConfig;
  hasEnabled(): boolean;
  clearEnabled(): CsiPreemptiveGenerationConfig;

  getCommitWaitTimeoutSeconds(): number;
  setCommitWaitTimeoutSeconds(value: number): CsiPreemptiveGenerationConfig;
  hasCommitWaitTimeoutSeconds(): boolean;
  clearCommitWaitTimeoutSeconds(): CsiPreemptiveGenerationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsiPreemptiveGenerationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CsiPreemptiveGenerationConfig): CsiPreemptiveGenerationConfig.AsObject;
  static serializeBinaryToWriter(message: CsiPreemptiveGenerationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsiPreemptiveGenerationConfig;
  static deserializeBinaryFromReader(message: CsiPreemptiveGenerationConfig, reader: jspb.BinaryReader): CsiPreemptiveGenerationConfig;
}

export namespace CsiPreemptiveGenerationConfig {
  export type AsObject = {
    enabled?: boolean;
    commitWaitTimeoutSeconds?: number;
  };

  export enum EnabledCase {
    _ENABLED_NOT_SET = 0,
    ENABLED = 1,
  }

  export enum CommitWaitTimeoutSecondsCase {
    _COMMIT_WAIT_TIMEOUT_SECONDS_NOT_SET = 0,
    COMMIT_WAIT_TIMEOUT_SECONDS = 2,
  }
}

export class AudioObjectStorageConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: AudioObjectStorageConfig.AsObject);
  getActivateAudioObjectStorage(): boolean;
  setActivateAudioObjectStorage(value: boolean): AudioObjectStorageConfig;
  hasActivateAudioObjectStorage(): boolean;
  clearActivateAudioObjectStorage(): AudioObjectStorageConfig;

  getAudioObjectStorageServicesActivationConfig(): AudioObjectStorageServicesActivationConfig | undefined;
  setAudioObjectStorageServicesActivationConfig(value?: AudioObjectStorageServicesActivationConfig): AudioObjectStorageConfig;
  hasAudioObjectStorageServicesActivationConfig(): boolean;
  clearAudioObjectStorageServicesActivationConfig(): AudioObjectStorageConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioObjectStorageConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AudioObjectStorageConfig): AudioObjectStorageConfig.AsObject;
  static serializeBinaryToWriter(message: AudioObjectStorageConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioObjectStorageConfig;
  static deserializeBinaryFromReader(message: AudioObjectStorageConfig, reader: jspb.BinaryReader): AudioObjectStorageConfig;
}

export namespace AudioObjectStorageConfig {
  export type AsObject = {
    activateAudioObjectStorage?: boolean;
    audioObjectStorageServicesActivationConfig?: AudioObjectStorageServicesActivationConfig.AsObject;
  };

  export enum ActivateAudioObjectStorageCase {
    _ACTIVATE_AUDIO_OBJECT_STORAGE_NOT_SET = 0,
    ACTIVATE_AUDIO_OBJECT_STORAGE = 1,
  }
}

export class AudioObjectStorageServicesActivationConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: AudioObjectStorageServicesActivationConfig.AsObject);
  getActivateS2t(): boolean;
  setActivateS2t(value: boolean): AudioObjectStorageServicesActivationConfig;
  hasActivateS2t(): boolean;
  clearActivateS2t(): AudioObjectStorageServicesActivationConfig;

  getActivateT2s(): boolean;
  setActivateT2s(value: boolean): AudioObjectStorageServicesActivationConfig;
  hasActivateT2s(): boolean;
  clearActivateT2s(): AudioObjectStorageServicesActivationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioObjectStorageServicesActivationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AudioObjectStorageServicesActivationConfig): AudioObjectStorageServicesActivationConfig.AsObject;
  static serializeBinaryToWriter(message: AudioObjectStorageServicesActivationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioObjectStorageServicesActivationConfig;
  static deserializeBinaryFromReader(message: AudioObjectStorageServicesActivationConfig, reader: jspb.BinaryReader): AudioObjectStorageServicesActivationConfig;
}

export namespace AudioObjectStorageServicesActivationConfig {
  export type AsObject = {
    activateS2t?: boolean;
    activateT2s?: boolean;
  };

  export enum ActivateS2tCase {
    _ACTIVATE_S2T_NOT_SET = 0,
    ACTIVATE_S2T = 1,
  }

  export enum ActivateT2sCase {
    _ACTIVATE_T2S_NOT_SET = 0,
    ACTIVATE_T2S = 2,
  }
}

export class MessageBrokerConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: MessageBrokerConfig.AsObject);
  getActivateMessageBroker(): boolean;
  setActivateMessageBroker(value: boolean): MessageBrokerConfig;
  hasActivateMessageBroker(): boolean;
  clearActivateMessageBroker(): MessageBrokerConfig;

  getMessageBrokerServicesActivationConfig(): MessageBrokerServicesActivationConfig | undefined;
  setMessageBrokerServicesActivationConfig(value?: MessageBrokerServicesActivationConfig): MessageBrokerConfig;
  hasMessageBrokerServicesActivationConfig(): boolean;
  clearMessageBrokerServicesActivationConfig(): MessageBrokerConfig;

  getRabbitMqConfig(): RabbitMqConfig | undefined;
  setRabbitMqConfig(value?: RabbitMqConfig): MessageBrokerConfig;
  hasRabbitMqConfig(): boolean;
  clearRabbitMqConfig(): MessageBrokerConfig;

  getMessageBrokerConfigCase(): MessageBrokerConfig.MessageBrokerConfigCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageBrokerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: MessageBrokerConfig): MessageBrokerConfig.AsObject;
  static serializeBinaryToWriter(message: MessageBrokerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageBrokerConfig;
  static deserializeBinaryFromReader(message: MessageBrokerConfig, reader: jspb.BinaryReader): MessageBrokerConfig;
}

export namespace MessageBrokerConfig {
  export type AsObject = {
    activateMessageBroker?: boolean;
    messageBrokerServicesActivationConfig?: MessageBrokerServicesActivationConfig.AsObject;
    rabbitMqConfig?: RabbitMqConfig.AsObject;
  };

  export enum MessageBrokerConfigCase {
    MESSAGE_BROKER_CONFIG_NOT_SET = 0,
    RABBIT_MQ_CONFIG = 3,
  }

  export enum ActivateMessageBrokerCase {
    _ACTIVATE_MESSAGE_BROKER_NOT_SET = 0,
    ACTIVATE_MESSAGE_BROKER = 1,
  }
}

export class MessageBrokerServicesActivationConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: MessageBrokerServicesActivationConfig.AsObject);
  getActivateS2t(): boolean;
  setActivateS2t(value: boolean): MessageBrokerServicesActivationConfig;
  hasActivateS2t(): boolean;
  clearActivateS2t(): MessageBrokerServicesActivationConfig;

  getActivateNlu(): boolean;
  setActivateNlu(value: boolean): MessageBrokerServicesActivationConfig;
  hasActivateNlu(): boolean;
  clearActivateNlu(): MessageBrokerServicesActivationConfig;

  getActivateT2s(): boolean;
  setActivateT2s(value: boolean): MessageBrokerServicesActivationConfig;
  hasActivateT2s(): boolean;
  clearActivateT2s(): MessageBrokerServicesActivationConfig;

  getActivateSip(): boolean;
  setActivateSip(value: boolean): MessageBrokerServicesActivationConfig;
  hasActivateSip(): boolean;
  clearActivateSip(): MessageBrokerServicesActivationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageBrokerServicesActivationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: MessageBrokerServicesActivationConfig): MessageBrokerServicesActivationConfig.AsObject;
  static serializeBinaryToWriter(message: MessageBrokerServicesActivationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageBrokerServicesActivationConfig;
  static deserializeBinaryFromReader(message: MessageBrokerServicesActivationConfig, reader: jspb.BinaryReader): MessageBrokerServicesActivationConfig;
}

export namespace MessageBrokerServicesActivationConfig {
  export type AsObject = {
    activateS2t?: boolean;
    activateNlu?: boolean;
    activateT2s?: boolean;
    activateSip?: boolean;
  };

  export enum ActivateS2tCase {
    _ACTIVATE_S2T_NOT_SET = 0,
    ACTIVATE_S2T = 1,
  }

  export enum ActivateNluCase {
    _ACTIVATE_NLU_NOT_SET = 0,
    ACTIVATE_NLU = 2,
  }

  export enum ActivateT2sCase {
    _ACTIVATE_T2S_NOT_SET = 0,
    ACTIVATE_T2S = 3,
  }

  export enum ActivateSipCase {
    _ACTIVATE_SIP_NOT_SET = 0,
    ACTIVATE_SIP = 4,
  }
}

export class RabbitMqConfig extends jspb.Message {
  constructor();
  constructor(opt_data?: RabbitMqConfig.AsObject);
  getHost(): string;
  setHost(value: string): RabbitMqConfig;

  getPort(): number;
  setPort(value: number): RabbitMqConfig;

  getPort2(): number;
  setPort2(value: number): RabbitMqConfig;

  getUser(): string;
  setUser(value: string): RabbitMqConfig;

  getPassword(): string;
  setPassword(value: string): RabbitMqConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RabbitMqConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RabbitMqConfig): RabbitMqConfig.AsObject;
  static serializeBinaryToWriter(message: RabbitMqConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RabbitMqConfig;
  static deserializeBinaryFromReader(message: RabbitMqConfig, reader: jspb.BinaryReader): RabbitMqConfig;
}

export namespace RabbitMqConfig {
  export type AsObject = {
    host: string;
    port: number;
    port2: number;
    user: string;
    password: string;
  };
}

export class S2tVtsiCallbacks extends jspb.Message {
  constructor();
  constructor(opt_data?: S2tVtsiCallbacks.AsObject);
  getPreS2tCallbacksList(): Array<string>;
  setPreS2tCallbacksList(value: Array<string>): S2tVtsiCallbacks;
  clearPreS2tCallbacksList(): S2tVtsiCallbacks;
  addPreS2tCallbacks(value: string, index?: number): S2tVtsiCallbacks;

  getPostS2tCallbacksList(): Array<string>;
  setPostS2tCallbacksList(value: Array<string>): S2tVtsiCallbacks;
  clearPostS2tCallbacksList(): S2tVtsiCallbacks;
  addPostS2tCallbacks(value: string, index?: number): S2tVtsiCallbacks;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S2tVtsiCallbacks.AsObject;
  static toObject(includeInstance: boolean, msg: S2tVtsiCallbacks): S2tVtsiCallbacks.AsObject;
  static serializeBinaryToWriter(message: S2tVtsiCallbacks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S2tVtsiCallbacks;
  static deserializeBinaryFromReader(message: S2tVtsiCallbacks, reader: jspb.BinaryReader): S2tVtsiCallbacks;
}

export namespace S2tVtsiCallbacks {
  export type AsObject = {
    preS2tCallbacksList: Array<string>;
    postS2tCallbacksList: Array<string>;
  };
}

export class NluVtsiCallbacks extends jspb.Message {
  constructor();
  constructor(opt_data?: NluVtsiCallbacks.AsObject);
  getPreNluCallbacksList(): Array<string>;
  setPreNluCallbacksList(value: Array<string>): NluVtsiCallbacks;
  clearPreNluCallbacksList(): NluVtsiCallbacks;
  addPreNluCallbacks(value: string, index?: number): NluVtsiCallbacks;

  getPostNluCallbacksList(): Array<string>;
  setPostNluCallbacksList(value: Array<string>): NluVtsiCallbacks;
  clearPostNluCallbacksList(): NluVtsiCallbacks;
  addPostNluCallbacks(value: string, index?: number): NluVtsiCallbacks;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NluVtsiCallbacks.AsObject;
  static toObject(includeInstance: boolean, msg: NluVtsiCallbacks): NluVtsiCallbacks.AsObject;
  static serializeBinaryToWriter(message: NluVtsiCallbacks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NluVtsiCallbacks;
  static deserializeBinaryFromReader(message: NluVtsiCallbacks, reader: jspb.BinaryReader): NluVtsiCallbacks;
}

export namespace NluVtsiCallbacks {
  export type AsObject = {
    preNluCallbacksList: Array<string>;
    postNluCallbacksList: Array<string>;
  };
}

export class T2sVtsiCallbacks extends jspb.Message {
  constructor();
  constructor(opt_data?: T2sVtsiCallbacks.AsObject);
  getPreT2sCallbacksList(): Array<string>;
  setPreT2sCallbacksList(value: Array<string>): T2sVtsiCallbacks;
  clearPreT2sCallbacksList(): T2sVtsiCallbacks;
  addPreT2sCallbacks(value: string, index?: number): T2sVtsiCallbacks;

  getPostT2sCallbacksList(): Array<string>;
  setPostT2sCallbacksList(value: Array<string>): T2sVtsiCallbacks;
  clearPostT2sCallbacksList(): T2sVtsiCallbacks;
  addPostT2sCallbacks(value: string, index?: number): T2sVtsiCallbacks;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sVtsiCallbacks.AsObject;
  static toObject(includeInstance: boolean, msg: T2sVtsiCallbacks): T2sVtsiCallbacks.AsObject;
  static serializeBinaryToWriter(message: T2sVtsiCallbacks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sVtsiCallbacks;
  static deserializeBinaryFromReader(message: T2sVtsiCallbacks, reader: jspb.BinaryReader): T2sVtsiCallbacks;
}

export namespace T2sVtsiCallbacks {
  export type AsObject = {
    preT2sCallbacksList: Array<string>;
    postT2sCallbacksList: Array<string>;
  };
}

export enum WarmIntroTextSource {
  WARM_INTRO_TEXT_SOURCE_UNSPECIFIED = 0,
  WARM_INTRO_TEXT_SOURCE_TEMPLATE = 1,
  WARM_INTRO_TEXT_SOURCE_LLM_SUMMARY = 2,
}
export enum WarmIntroUnavailablePolicy {
  WARM_INTRO_UNAVAILABLE_POLICY_UNSPECIFIED = 0,
  WARM_INTRO_UNAVAILABLE_POLICY_CONNECT_WITHOUT_INTRO = 1,
  WARM_INTRO_UNAVAILABLE_POLICY_RETURN_TO_CALLER = 2,
}
export enum WarmIntroDecision {
  WARM_INTRO_DECISION_UNSPECIFIED = 0,
  WARM_INTRO_DECISION_ACCEPTED = 1,
  WARM_INTRO_DECISION_DECLINED = 2,
  WARM_INTRO_DECISION_NO_DECISION = 3,
}
export enum WarmIntroDecidedBy {
  WARM_INTRO_DECIDED_BY_UNSPECIFIED = 0,
  WARM_INTRO_DECIDED_BY_DTMF = 1,
  WARM_INTRO_DECIDED_BY_SPEECH = 2,
  WARM_INTRO_DECIDED_BY_TIMEOUT = 3,
}
