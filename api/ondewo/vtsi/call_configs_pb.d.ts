import * as jspb from 'google-protobuf'

import * as ondewo_nlu_context_pb from '../../ondewo/nlu/context_pb'; // proto import: "ondewo/nlu/context.proto"
import * as ondewo_nlu_intent_pb from '../../ondewo/nlu/intent_pb'; // proto import: "ondewo/nlu/intent.proto"
import * as ondewo_s2t_speech$to$text_pb from '../../ondewo/s2t/speech-to-text_pb'; // proto import: "ondewo/s2t/speech-to-text.proto"
import * as ondewo_t2s_text$to$speech_pb from '../../ondewo/t2s/text-to-speech_pb'; // proto import: "ondewo/t2s/text-to-speech.proto"


export class BaseServiceConfig extends jspb.Message {
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
    host: string,
    port: number,
    grpcCert: string,
  }
}

export class Credentials extends jspb.Message {
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
    accountName: string,
    password: string,
  }
}

export class NluVtsiConfig extends jspb.Message {
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
    nluBaseConfig?: BaseServiceConfig.AsObject,
    credentials?: Credentials.AsObject,
    authToken: string,
    agentName: string,
    languageCode: string,
    initialIntent: string,
    contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
    httpBasicAuthToken: string,
    platform?: ondewo_nlu_intent_pb.Intent.Message.Platform,
  }

  export enum AuthenticationCase { 
    AUTHENTICATION_NOT_SET = 0,
    CREDENTIALS = 2,
    AUTH_TOKEN = 3,
  }

  export enum PlatformCase { 
    _PLATFORM_NOT_SET = 0,
    PLATFORM = 9,
  }
}

export class T2sVtsiConfig extends jspb.Message {
  getT2sBaseConfig(): BaseServiceConfig | undefined;
  setT2sBaseConfig(value?: BaseServiceConfig): T2sVtsiConfig;
  hasT2sBaseConfig(): boolean;
  clearT2sBaseConfig(): T2sVtsiConfig;

  getT2sRequestConfig(): ondewo_t2s_text$to$speech_pb.RequestConfig | undefined;
  setT2sRequestConfig(value?: ondewo_t2s_text$to$speech_pb.RequestConfig): T2sVtsiConfig;
  hasT2sRequestConfig(): boolean;
  clearT2sRequestConfig(): T2sVtsiConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sVtsiConfig.AsObject;
  static toObject(includeInstance: boolean, msg: T2sVtsiConfig): T2sVtsiConfig.AsObject;
  static serializeBinaryToWriter(message: T2sVtsiConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sVtsiConfig;
  static deserializeBinaryFromReader(message: T2sVtsiConfig, reader: jspb.BinaryReader): T2sVtsiConfig;
}

export namespace T2sVtsiConfig {
  export type AsObject = {
    t2sBaseConfig?: BaseServiceConfig.AsObject,
    t2sRequestConfig?: ondewo_t2s_text$to$speech_pb.RequestConfig.AsObject,
  }
}

export class S2tVtsiConfig extends jspb.Message {
  getS2tBaseConfig(): BaseServiceConfig | undefined;
  setS2tBaseConfig(value?: BaseServiceConfig): S2tVtsiConfig;
  hasS2tBaseConfig(): boolean;
  clearS2tBaseConfig(): S2tVtsiConfig;

  getS2tTranscribeRequestConfig(): ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig | undefined;
  setS2tTranscribeRequestConfig(value?: ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig): S2tVtsiConfig;
  hasS2tTranscribeRequestConfig(): boolean;
  clearS2tTranscribeRequestConfig(): S2tVtsiConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S2tVtsiConfig.AsObject;
  static toObject(includeInstance: boolean, msg: S2tVtsiConfig): S2tVtsiConfig.AsObject;
  static serializeBinaryToWriter(message: S2tVtsiConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S2tVtsiConfig;
  static deserializeBinaryFromReader(message: S2tVtsiConfig, reader: jspb.BinaryReader): S2tVtsiConfig;
}

export namespace S2tVtsiConfig {
  export type AsObject = {
    s2tBaseConfig?: BaseServiceConfig.AsObject,
    s2tTranscribeRequestConfig?: ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig.AsObject,
  }
}

export class CommonServicesConfig extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonServicesConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CommonServicesConfig): CommonServicesConfig.AsObject;
  static serializeBinaryToWriter(message: CommonServicesConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonServicesConfig;
  static deserializeBinaryFromReader(message: CommonServicesConfig, reader: jspb.BinaryReader): CommonServicesConfig;
}

export namespace CommonServicesConfig {
  export type AsObject = {
    s2tVtsiConfig?: S2tVtsiConfig.AsObject,
    nluVtsiConfig?: NluVtsiConfig.AsObject,
    t2sVtsiConfig?: T2sVtsiConfig.AsObject,
    csiVtsiConfig?: CsiVtsiConfig.AsObject,
    voiceInteractionConfig?: VoiceInteractionConfig.AsObject,
  }
}

export class VoiceInteractionConfig extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceInteractionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceInteractionConfig): VoiceInteractionConfig.AsObject;
  static serializeBinaryToWriter(message: VoiceInteractionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceInteractionConfig;
  static deserializeBinaryFromReader(message: VoiceInteractionConfig, reader: jspb.BinaryReader): VoiceInteractionConfig;
}

export namespace VoiceInteractionConfig {
  export type AsObject = {
    turnDetectionConfig?: TurnDetectionConfig.AsObject,
    interruptionHandlingConfig?: InterruptionHandlingConfig.AsObject,
    responseTimingConfig?: ResponseTimingConfig.AsObject,
    answeringMachineDetectionConfig?: AnsweringMachineDetectionConfig.AsObject,
  }
}

export class TurnDetectionConfig extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TurnDetectionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TurnDetectionConfig): TurnDetectionConfig.AsObject;
  static serializeBinaryToWriter(message: TurnDetectionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TurnDetectionConfig;
  static deserializeBinaryFromReader(message: TurnDetectionConfig, reader: jspb.BinaryReader): TurnDetectionConfig;
}

export namespace TurnDetectionConfig {
  export type AsObject = {
    mode: TurnDetectionConfig.TurnDetectionMode,
    minEndpointingDelaySeconds?: number,
    maxEndpointingDelaySeconds?: number,
    turnEagerness: TurnDetectionConfig.TurnEagerness,
    turnDetectionSystemPrompt?: string,
    turnDetectionUserPrompt?: string,
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
}

export class InterruptionHandlingConfig extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterruptionHandlingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: InterruptionHandlingConfig): InterruptionHandlingConfig.AsObject;
  static serializeBinaryToWriter(message: InterruptionHandlingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterruptionHandlingConfig;
  static deserializeBinaryFromReader(message: InterruptionHandlingConfig, reader: jspb.BinaryReader): InterruptionHandlingConfig;
}

export namespace InterruptionHandlingConfig {
  export type AsObject = {
    enabled?: boolean,
    minInterruptionDurationSeconds?: number,
    minInterruptionWords?: number,
    falseInterruptionTimeoutSeconds?: number,
    resumeAfterFalseInterruption?: boolean,
    backoffSeconds?: number,
    firstMessageProtectedSeconds?: number,
    transcribeOnDisabledInterruptions?: boolean,
  }

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
}

export class ResponseTimingConfig extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTimingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTimingConfig): ResponseTimingConfig.AsObject;
  static serializeBinaryToWriter(message: ResponseTimingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTimingConfig;
  static deserializeBinaryFromReader(message: ResponseTimingConfig, reader: jspb.BinaryReader): ResponseTimingConfig;
}

export namespace ResponseTimingConfig {
  export type AsObject = {
    turnTimeoutSeconds?: number,
    silenceEndCallTimeoutSeconds?: number,
    softTimeoutConfig?: SoftTimeoutConfig.AsObject,
    preemptiveGenerationEnabled?: boolean,
    t2sChunkedStreamingEnabled?: boolean,
  }

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
}

export class SoftTimeoutConfig extends jspb.Message {
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
    timeoutSeconds?: number,
    messagesList: Array<string>,
    maxPerGeneration?: number,
  }

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
    active?: boolean,
    action?: AnsweringMachineDetectionConfig.AmdAction,
    sensitivity?: AnsweringMachineDetectionConfig.AmdSensitivity,
    maxDecisionTimeMs?: number,
    maxMachineWaitMs?: number,
    beepWaitAfterGreetingMs?: number,
    initialSilenceMs?: number,
    maxHumanGreetingMs?: number,
    greetingEndSilenceMs?: number,
    beepDetectionActive?: boolean,
    additionalMachinePhrasesList: Array<string>,
    additionalHumanPhrasesList: Array<string>,
    hangUpOnFax?: boolean,
    hangUpOnNetworkAnnouncement?: boolean,
    hangUpOnIvr?: boolean,
    hangUpOnCallScreening?: boolean,
    voiceMessageIntent?: string,
    voiceMessageMaxBeepWaitMs?: number,
    voiceMessageTimeoutMs?: number,
    keywordDetectionActive?: boolean,
    cadenceDetectionActive?: boolean,
  }

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
    sipSimVersion: string,
  }
}

export class SipCallerConfig extends jspb.Message {
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
    sipBaseConfig?: SipBaseConfig.AsObject,
    calleeId: string,
    sipHeadersMap: Array<[string, string]>,
  }
}

export class CsiVtsiConfig extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsiVtsiConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CsiVtsiConfig): CsiVtsiConfig.AsObject;
  static serializeBinaryToWriter(message: CsiVtsiConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsiVtsiConfig;
  static deserializeBinaryFromReader(message: CsiVtsiConfig, reader: jspb.BinaryReader): CsiVtsiConfig;
}

export namespace CsiVtsiConfig {
  export type AsObject = {
    s2tVtsiCallbacks?: S2tVtsiCallbacks.AsObject,
    nluVtsiCallbacks?: NluVtsiCallbacks.AsObject,
    t2sVtsiCallbacks?: T2sVtsiCallbacks.AsObject,
    audioObjectStoreConfig?: AudioObjectStorageConfig.AsObject,
    messageBrokerConfig?: MessageBrokerConfig.AsObject,
    activateControlMessages?: boolean,
  }

  export enum ActivateControlMessagesCase { 
    _ACTIVATE_CONTROL_MESSAGES_NOT_SET = 0,
    ACTIVATE_CONTROL_MESSAGES = 6,
  }
}

export class AudioObjectStorageConfig extends jspb.Message {
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
    activateAudioObjectStorage?: boolean,
    audioObjectStorageServicesActivationConfig?: AudioObjectStorageServicesActivationConfig.AsObject,
  }

  export enum ActivateAudioObjectStorageCase { 
    _ACTIVATE_AUDIO_OBJECT_STORAGE_NOT_SET = 0,
    ACTIVATE_AUDIO_OBJECT_STORAGE = 1,
  }
}

export class AudioObjectStorageServicesActivationConfig extends jspb.Message {
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
    activateS2t?: boolean,
    activateT2s?: boolean,
  }

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
    activateMessageBroker?: boolean,
    messageBrokerServicesActivationConfig?: MessageBrokerServicesActivationConfig.AsObject,
    rabbitMqConfig?: RabbitMqConfig.AsObject,
  }

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
    activateS2t?: boolean,
    activateNlu?: boolean,
    activateT2s?: boolean,
    activateSip?: boolean,
  }

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
    host: string,
    port: number,
    port2: number,
    user: string,
    password: string,
  }
}

export class S2tVtsiCallbacks extends jspb.Message {
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
    preS2tCallbacksList: Array<string>,
    postS2tCallbacksList: Array<string>,
  }
}

export class NluVtsiCallbacks extends jspb.Message {
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
    preNluCallbacksList: Array<string>,
    postNluCallbacksList: Array<string>,
  }
}

export class T2sVtsiCallbacks extends jspb.Message {
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
    preT2sCallbacksList: Array<string>,
    postT2sCallbacksList: Array<string>,
  }
}

