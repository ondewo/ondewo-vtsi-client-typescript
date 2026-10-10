import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as ondewo_nlu_context_pb from '../../ondewo/nlu/context_pb'; // proto import: "ondewo/nlu/context.proto"
import * as ondewo_nlu_intent_pb from '../../ondewo/nlu/intent_pb'; // proto import: "ondewo/nlu/intent.proto"
import * as ondewo_s2t_speech$to$text_pb from '../../ondewo/s2t/speech-to-text_pb'; // proto import: "ondewo/s2t/speech-to-text.proto"
import * as ondewo_t2s_text$to$speech_pb from '../../ondewo/t2s/text-to-speech_pb'; // proto import: "ondewo/t2s/text-to-speech.proto"
import * as ondewo_sip_sip_pb from '../../ondewo/sip/sip_pb'; // proto import: "ondewo/sip/sip.proto"
import * as ondewo_vtsi_campaigns_pb from '../../ondewo/vtsi/campaigns_pb'; // proto import: "ondewo/vtsi/campaigns.proto"


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

export class AsteriskConfig extends jspb.Message {
  getAsteriskBaseConfig(): BaseServiceConfig | undefined;
  setAsteriskBaseConfig(value?: BaseServiceConfig): AsteriskConfig;
  hasAsteriskBaseConfig(): boolean;
  clearAsteriskBaseConfig(): AsteriskConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsteriskConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AsteriskConfig): AsteriskConfig.AsObject;
  static serializeBinaryToWriter(message: AsteriskConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsteriskConfig;
  static deserializeBinaryFromReader(message: AsteriskConfig, reader: jspb.BinaryReader): AsteriskConfig;
}

export namespace AsteriskConfig {
  export type AsObject = {
    asteriskBaseConfig?: BaseServiceConfig.AsObject,
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

export class Listener extends jspb.Message {
  getName(): string;
  setName(value: string): Listener;

  getCallName(): string;
  setCallName(value: string): Listener;

  getSipBaseConfig(): SipBaseConfig | undefined;
  setSipBaseConfig(value?: SipBaseConfig): Listener;
  hasSipBaseConfig(): boolean;
  clearSipBaseConfig(): Listener;

  getCommonServicesConfig(): CommonServicesConfig | undefined;
  setCommonServicesConfig(value?: CommonServicesConfig): Listener;
  hasCommonServicesConfig(): boolean;
  clearCommonServicesConfig(): Listener;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Listener.AsObject;
  static toObject(includeInstance: boolean, msg: Listener): Listener.AsObject;
  static serializeBinaryToWriter(message: Listener, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Listener;
  static deserializeBinaryFromReader(message: Listener, reader: jspb.BinaryReader): Listener;
}

export namespace Listener {
  export type AsObject = {
    name: string,
    callName: string,
    sipBaseConfig?: SipBaseConfig.AsObject,
    commonServicesConfig?: CommonServicesConfig.AsObject,
  }
}

export class Caller extends jspb.Message {
  getName(): string;
  setName(value: string): Caller;

  getCallName(): string;
  setCallName(value: string): Caller;

  getSipCallerConfig(): SipCallerConfig | undefined;
  setSipCallerConfig(value?: SipCallerConfig): Caller;
  hasSipCallerConfig(): boolean;
  clearSipCallerConfig(): Caller;

  getCommonServicesConfig(): CommonServicesConfig | undefined;
  setCommonServicesConfig(value?: CommonServicesConfig): Caller;
  hasCommonServicesConfig(): boolean;
  clearCommonServicesConfig(): Caller;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Caller.AsObject;
  static toObject(includeInstance: boolean, msg: Caller): Caller.AsObject;
  static serializeBinaryToWriter(message: Caller, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Caller;
  static deserializeBinaryFromReader(message: Caller, reader: jspb.BinaryReader): Caller;
}

export namespace Caller {
  export type AsObject = {
    name: string,
    callName: string,
    sipCallerConfig?: SipCallerConfig.AsObject,
    commonServicesConfig?: CommonServicesConfig.AsObject,
  }
}

export class StartListenerRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StartListenerRequest;

  getSipBaseConfig(): SipBaseConfig | undefined;
  setSipBaseConfig(value?: SipBaseConfig): StartListenerRequest;
  hasSipBaseConfig(): boolean;
  clearSipBaseConfig(): StartListenerRequest;

  getCommonServicesConfig(): CommonServicesConfig | undefined;
  setCommonServicesConfig(value?: CommonServicesConfig): StartListenerRequest;
  hasCommonServicesConfig(): boolean;
  clearCommonServicesConfig(): StartListenerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartListenerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartListenerRequest): StartListenerRequest.AsObject;
  static serializeBinaryToWriter(message: StartListenerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartListenerRequest;
  static deserializeBinaryFromReader(message: StartListenerRequest, reader: jspb.BinaryReader): StartListenerRequest;
}

export namespace StartListenerRequest {
  export type AsObject = {
    vtsiProjectName: string,
    sipBaseConfig?: SipBaseConfig.AsObject,
    commonServicesConfig?: CommonServicesConfig.AsObject,
  }
}

export class StartListenerResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StartListenerResponse;

  getListener(): Listener | undefined;
  setListener(value?: Listener): StartListenerResponse;
  hasListener(): boolean;
  clearListener(): StartListenerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): StartListenerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartListenerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartListenerResponse): StartListenerResponse.AsObject;
  static serializeBinaryToWriter(message: StartListenerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartListenerResponse;
  static deserializeBinaryFromReader(message: StartListenerResponse, reader: jspb.BinaryReader): StartListenerResponse;
}

export namespace StartListenerResponse {
  export type AsObject = {
    vtsiProjectName: string,
    listener?: Listener.AsObject,
    errorMessage: string,
  }
}

export class StartListenersRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StartListenersRequest;

  getListenerRequestsList(): Array<StartListenerRequest>;
  setListenerRequestsList(value: Array<StartListenerRequest>): StartListenersRequest;
  clearListenerRequestsList(): StartListenersRequest;
  addListenerRequests(value?: StartListenerRequest, index?: number): StartListenerRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): StartListenersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartListenersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartListenersRequest): StartListenersRequest.AsObject;
  static serializeBinaryToWriter(message: StartListenersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartListenersRequest;
  static deserializeBinaryFromReader(message: StartListenersRequest, reader: jspb.BinaryReader): StartListenersRequest;
}

export namespace StartListenersRequest {
  export type AsObject = {
    vtsiProjectName: string,
    listenerRequestsList: Array<StartListenerRequest.AsObject>,
    idempotencyKey: string,
  }
}

export class StartListenersResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StartListenersResponse;

  getListenerResponsesList(): Array<StartListenerResponse>;
  setListenerResponsesList(value: Array<StartListenerResponse>): StartListenersResponse;
  clearListenerResponsesList(): StartListenersResponse;
  addListenerResponses(value?: StartListenerResponse, index?: number): StartListenerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): StartListenersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartListenersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartListenersResponse): StartListenersResponse.AsObject;
  static serializeBinaryToWriter(message: StartListenersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartListenersResponse;
  static deserializeBinaryFromReader(message: StartListenersResponse, reader: jspb.BinaryReader): StartListenersResponse;
}

export namespace StartListenersResponse {
  export type AsObject = {
    vtsiProjectName: string,
    listenerResponsesList: Array<StartListenerResponse.AsObject>,
    errorMessage: string,
  }
}

export class StartCallerRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StartCallerRequest;

  getSipCallerConfig(): SipCallerConfig | undefined;
  setSipCallerConfig(value?: SipCallerConfig): StartCallerRequest;
  hasSipCallerConfig(): boolean;
  clearSipCallerConfig(): StartCallerRequest;

  getCommonServicesConfig(): CommonServicesConfig | undefined;
  setCommonServicesConfig(value?: CommonServicesConfig): StartCallerRequest;
  hasCommonServicesConfig(): boolean;
  clearCommonServicesConfig(): StartCallerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartCallerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartCallerRequest): StartCallerRequest.AsObject;
  static serializeBinaryToWriter(message: StartCallerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartCallerRequest;
  static deserializeBinaryFromReader(message: StartCallerRequest, reader: jspb.BinaryReader): StartCallerRequest;
}

export namespace StartCallerRequest {
  export type AsObject = {
    vtsiProjectName: string,
    sipCallerConfig?: SipCallerConfig.AsObject,
    commonServicesConfig?: CommonServicesConfig.AsObject,
  }
}

export class StartCallerResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StartCallerResponse;

  getCaller(): Caller | undefined;
  setCaller(value?: Caller): StartCallerResponse;
  hasCaller(): boolean;
  clearCaller(): StartCallerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): StartCallerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartCallerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartCallerResponse): StartCallerResponse.AsObject;
  static serializeBinaryToWriter(message: StartCallerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartCallerResponse;
  static deserializeBinaryFromReader(message: StartCallerResponse, reader: jspb.BinaryReader): StartCallerResponse;
}

export namespace StartCallerResponse {
  export type AsObject = {
    vtsiProjectName: string,
    caller?: Caller.AsObject,
    errorMessage: string,
  }
}

export class StartCallersRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StartCallersRequest;

  getCallerRequestsList(): Array<StartCallerRequest>;
  setCallerRequestsList(value: Array<StartCallerRequest>): StartCallersRequest;
  clearCallerRequestsList(): StartCallersRequest;
  addCallerRequests(value?: StartCallerRequest, index?: number): StartCallerRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): StartCallersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartCallersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartCallersRequest): StartCallersRequest.AsObject;
  static serializeBinaryToWriter(message: StartCallersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartCallersRequest;
  static deserializeBinaryFromReader(message: StartCallersRequest, reader: jspb.BinaryReader): StartCallersRequest;
}

export namespace StartCallersRequest {
  export type AsObject = {
    vtsiProjectName: string,
    callerRequestsList: Array<StartCallerRequest.AsObject>,
    idempotencyKey: string,
  }
}

export class StartCallersResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StartCallersResponse;

  getCallerResponsesList(): Array<StartCallerResponse>;
  setCallerResponsesList(value: Array<StartCallerResponse>): StartCallersResponse;
  clearCallerResponsesList(): StartCallersResponse;
  addCallerResponses(value?: StartCallerResponse, index?: number): StartCallerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): StartCallersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartCallersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartCallersResponse): StartCallersResponse.AsObject;
  static serializeBinaryToWriter(message: StartCallersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartCallersResponse;
  static deserializeBinaryFromReader(message: StartCallersResponse, reader: jspb.BinaryReader): StartCallersResponse;
}

export namespace StartCallersResponse {
  export type AsObject = {
    vtsiProjectName: string,
    callerResponsesList: Array<StartCallerResponse.AsObject>,
    errorMessage: string,
  }
}

export class ListCallersRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): ListCallersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCallersRequest;
  hasPageToken(): boolean;
  clearPageToken(): ListCallersRequest;

  getCallView(): CallView;
  setCallView(value: CallView): ListCallersRequest;
  hasCallView(): boolean;
  clearCallView(): ListCallersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallersRequest): ListCallersRequest.AsObject;
  static serializeBinaryToWriter(message: ListCallersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallersRequest;
  static deserializeBinaryFromReader(message: ListCallersRequest, reader: jspb.BinaryReader): ListCallersRequest;
}

export namespace ListCallersRequest {
  export type AsObject = {
    vtsiProjectName: string,
    pageToken?: string,
    callView?: CallView,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 2,
  }

  export enum CallViewCase { 
    _CALL_VIEW_NOT_SET = 0,
    CALL_VIEW = 3,
  }
}

export class ListCallersResponse extends jspb.Message {
  getCallersList(): Array<Caller>;
  setCallersList(value: Array<Caller>): ListCallersResponse;
  clearCallersList(): ListCallersResponse;
  addCallers(value?: Caller, index?: number): Caller;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCallersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallersResponse): ListCallersResponse.AsObject;
  static serializeBinaryToWriter(message: ListCallersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallersResponse;
  static deserializeBinaryFromReader(message: ListCallersResponse, reader: jspb.BinaryReader): ListCallersResponse;
}

export namespace ListCallersResponse {
  export type AsObject = {
    callersList: Array<Caller.AsObject>,
    nextPageToken: string,
  }
}

export class GetCallerRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): GetCallerRequest;

  getName(): string;
  setName(value: string): GetCallerRequest;

  getCallView(): CallView;
  setCallView(value: CallView): GetCallerRequest;
  hasCallView(): boolean;
  clearCallView(): GetCallerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCallerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCallerRequest): GetCallerRequest.AsObject;
  static serializeBinaryToWriter(message: GetCallerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCallerRequest;
  static deserializeBinaryFromReader(message: GetCallerRequest, reader: jspb.BinaryReader): GetCallerRequest;
}

export namespace GetCallerRequest {
  export type AsObject = {
    vtsiProjectName: string,
    name: string,
    callView?: CallView,
  }

  export enum CallViewCase { 
    _CALL_VIEW_NOT_SET = 0,
    CALL_VIEW = 3,
  }
}

export class ListListenersRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): ListListenersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListListenersRequest;
  hasPageToken(): boolean;
  clearPageToken(): ListListenersRequest;

  getCallView(): CallView;
  setCallView(value: CallView): ListListenersRequest;
  hasCallView(): boolean;
  clearCallView(): ListListenersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListListenersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListListenersRequest): ListListenersRequest.AsObject;
  static serializeBinaryToWriter(message: ListListenersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListListenersRequest;
  static deserializeBinaryFromReader(message: ListListenersRequest, reader: jspb.BinaryReader): ListListenersRequest;
}

export namespace ListListenersRequest {
  export type AsObject = {
    vtsiProjectName: string,
    pageToken?: string,
    callView?: CallView,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 2,
  }

  export enum CallViewCase { 
    _CALL_VIEW_NOT_SET = 0,
    CALL_VIEW = 3,
  }
}

export class ListListenersResponse extends jspb.Message {
  getListenersList(): Array<Listener>;
  setListenersList(value: Array<Listener>): ListListenersResponse;
  clearListenersList(): ListListenersResponse;
  addListeners(value?: Listener, index?: number): Listener;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListListenersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListListenersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListListenersResponse): ListListenersResponse.AsObject;
  static serializeBinaryToWriter(message: ListListenersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListListenersResponse;
  static deserializeBinaryFromReader(message: ListListenersResponse, reader: jspb.BinaryReader): ListListenersResponse;
}

export namespace ListListenersResponse {
  export type AsObject = {
    listenersList: Array<Listener.AsObject>,
    nextPageToken: string,
  }
}

export class GetListenerRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): GetListenerRequest;

  getName(): string;
  setName(value: string): GetListenerRequest;

  getCallView(): CallView;
  setCallView(value: CallView): GetListenerRequest;
  hasCallView(): boolean;
  clearCallView(): GetListenerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListenerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetListenerRequest): GetListenerRequest.AsObject;
  static serializeBinaryToWriter(message: GetListenerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListenerRequest;
  static deserializeBinaryFromReader(message: GetListenerRequest, reader: jspb.BinaryReader): GetListenerRequest;
}

export namespace GetListenerRequest {
  export type AsObject = {
    vtsiProjectName: string,
    name: string,
    callView?: CallView,
  }

  export enum CallViewCase { 
    _CALL_VIEW_NOT_SET = 0,
    CALL_VIEW = 3,
  }
}

export class StopListenerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): StopListenerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopListenerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopListenerRequest): StopListenerRequest.AsObject;
  static serializeBinaryToWriter(message: StopListenerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopListenerRequest;
  static deserializeBinaryFromReader(message: StopListenerRequest, reader: jspb.BinaryReader): StopListenerRequest;
}

export namespace StopListenerRequest {
  export type AsObject = {
    name: string,
  }
}

export class StopListenerResponse extends jspb.Message {
  getName(): string;
  setName(value: string): StopListenerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): StopListenerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopListenerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopListenerResponse): StopListenerResponse.AsObject;
  static serializeBinaryToWriter(message: StopListenerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopListenerResponse;
  static deserializeBinaryFromReader(message: StopListenerResponse, reader: jspb.BinaryReader): StopListenerResponse;
}

export namespace StopListenerResponse {
  export type AsObject = {
    name: string,
    errorMessage: string,
  }
}

export class StopListenersRequest extends jspb.Message {
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): StopListenersRequest;
  clearNamesList(): StopListenersRequest;
  addNames(value: string, index?: number): StopListenersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopListenersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopListenersRequest): StopListenersRequest.AsObject;
  static serializeBinaryToWriter(message: StopListenersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopListenersRequest;
  static deserializeBinaryFromReader(message: StopListenersRequest, reader: jspb.BinaryReader): StopListenersRequest;
}

export namespace StopListenersRequest {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class StopListenersResponse extends jspb.Message {
  getStopListenerResponsesList(): Array<StopListenerResponse>;
  setStopListenerResponsesList(value: Array<StopListenerResponse>): StopListenersResponse;
  clearStopListenerResponsesList(): StopListenersResponse;
  addStopListenerResponses(value?: StopListenerResponse, index?: number): StopListenerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): StopListenersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopListenersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopListenersResponse): StopListenersResponse.AsObject;
  static serializeBinaryToWriter(message: StopListenersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopListenersResponse;
  static deserializeBinaryFromReader(message: StopListenersResponse, reader: jspb.BinaryReader): StopListenersResponse;
}

export namespace StopListenersResponse {
  export type AsObject = {
    stopListenerResponsesList: Array<StopListenerResponse.AsObject>,
    errorMessage: string,
  }
}

export class StopCallerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): StopCallerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopCallerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopCallerRequest): StopCallerRequest.AsObject;
  static serializeBinaryToWriter(message: StopCallerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopCallerRequest;
  static deserializeBinaryFromReader(message: StopCallerRequest, reader: jspb.BinaryReader): StopCallerRequest;
}

export namespace StopCallerRequest {
  export type AsObject = {
    name: string,
  }
}

export class StopCallerResponse extends jspb.Message {
  getName(): string;
  setName(value: string): StopCallerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): StopCallerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopCallerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopCallerResponse): StopCallerResponse.AsObject;
  static serializeBinaryToWriter(message: StopCallerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopCallerResponse;
  static deserializeBinaryFromReader(message: StopCallerResponse, reader: jspb.BinaryReader): StopCallerResponse;
}

export namespace StopCallerResponse {
  export type AsObject = {
    name: string,
    errorMessage: string,
  }
}

export class StopCallersRequest extends jspb.Message {
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): StopCallersRequest;
  clearNamesList(): StopCallersRequest;
  addNames(value: string, index?: number): StopCallersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopCallersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopCallersRequest): StopCallersRequest.AsObject;
  static serializeBinaryToWriter(message: StopCallersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopCallersRequest;
  static deserializeBinaryFromReader(message: StopCallersRequest, reader: jspb.BinaryReader): StopCallersRequest;
}

export namespace StopCallersRequest {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class StopCallersResponse extends jspb.Message {
  getStopCallerResponsesList(): Array<StopCallerResponse>;
  setStopCallerResponsesList(value: Array<StopCallerResponse>): StopCallersResponse;
  clearStopCallerResponsesList(): StopCallersResponse;
  addStopCallerResponses(value?: StopCallerResponse, index?: number): StopCallerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): StopCallersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopCallersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopCallersResponse): StopCallersResponse.AsObject;
  static serializeBinaryToWriter(message: StopCallersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopCallersResponse;
  static deserializeBinaryFromReader(message: StopCallersResponse, reader: jspb.BinaryReader): StopCallersResponse;
}

export namespace StopCallersResponse {
  export type AsObject = {
    stopCallerResponsesList: Array<StopCallerResponse.AsObject>,
    errorMessage: string,
  }
}

export class DeleteListenerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteListenerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteListenerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteListenerRequest): DeleteListenerRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteListenerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteListenerRequest;
  static deserializeBinaryFromReader(message: DeleteListenerRequest, reader: jspb.BinaryReader): DeleteListenerRequest;
}

export namespace DeleteListenerRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteListenerResponse extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteListenerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): DeleteListenerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteListenerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteListenerResponse): DeleteListenerResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteListenerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteListenerResponse;
  static deserializeBinaryFromReader(message: DeleteListenerResponse, reader: jspb.BinaryReader): DeleteListenerResponse;
}

export namespace DeleteListenerResponse {
  export type AsObject = {
    name: string,
    errorMessage: string,
  }
}

export class DeleteListenersRequest extends jspb.Message {
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): DeleteListenersRequest;
  clearNamesList(): DeleteListenersRequest;
  addNames(value: string, index?: number): DeleteListenersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteListenersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteListenersRequest): DeleteListenersRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteListenersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteListenersRequest;
  static deserializeBinaryFromReader(message: DeleteListenersRequest, reader: jspb.BinaryReader): DeleteListenersRequest;
}

export namespace DeleteListenersRequest {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class DeleteListenersResponse extends jspb.Message {
  getDeleteListenerResponsesList(): Array<DeleteListenerResponse>;
  setDeleteListenerResponsesList(value: Array<DeleteListenerResponse>): DeleteListenersResponse;
  clearDeleteListenerResponsesList(): DeleteListenersResponse;
  addDeleteListenerResponses(value?: DeleteListenerResponse, index?: number): DeleteListenerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): DeleteListenersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteListenersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteListenersResponse): DeleteListenersResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteListenersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteListenersResponse;
  static deserializeBinaryFromReader(message: DeleteListenersResponse, reader: jspb.BinaryReader): DeleteListenersResponse;
}

export namespace DeleteListenersResponse {
  export type AsObject = {
    deleteListenerResponsesList: Array<DeleteListenerResponse.AsObject>,
    errorMessage: string,
  }
}

export class DeleteCallerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteCallerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCallerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCallerRequest): DeleteCallerRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCallerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCallerRequest;
  static deserializeBinaryFromReader(message: DeleteCallerRequest, reader: jspb.BinaryReader): DeleteCallerRequest;
}

export namespace DeleteCallerRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteCallerResponse extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteCallerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): DeleteCallerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCallerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCallerResponse): DeleteCallerResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCallerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCallerResponse;
  static deserializeBinaryFromReader(message: DeleteCallerResponse, reader: jspb.BinaryReader): DeleteCallerResponse;
}

export namespace DeleteCallerResponse {
  export type AsObject = {
    name: string,
    errorMessage: string,
  }
}

export class DeleteCallersRequest extends jspb.Message {
  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): DeleteCallersRequest;
  clearNamesList(): DeleteCallersRequest;
  addNames(value: string, index?: number): DeleteCallersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCallersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCallersRequest): DeleteCallersRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCallersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCallersRequest;
  static deserializeBinaryFromReader(message: DeleteCallersRequest, reader: jspb.BinaryReader): DeleteCallersRequest;
}

export namespace DeleteCallersRequest {
  export type AsObject = {
    namesList: Array<string>,
  }
}

export class DeleteCallersResponse extends jspb.Message {
  getDeleteCallerResponsesList(): Array<DeleteCallerResponse>;
  setDeleteCallerResponsesList(value: Array<DeleteCallerResponse>): DeleteCallersResponse;
  clearDeleteCallerResponsesList(): DeleteCallersResponse;
  addDeleteCallerResponses(value?: DeleteCallerResponse, index?: number): DeleteCallerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): DeleteCallersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCallersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCallersResponse): DeleteCallersResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCallersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCallersResponse;
  static deserializeBinaryFromReader(message: DeleteCallersResponse, reader: jspb.BinaryReader): DeleteCallersResponse;
}

export namespace DeleteCallersResponse {
  export type AsObject = {
    deleteCallerResponsesList: Array<DeleteCallerResponse.AsObject>,
    errorMessage: string,
  }
}

export class StartScheduledCallerRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StartScheduledCallerRequest;

  getRequest(): StartCallerRequest | undefined;
  setRequest(value?: StartCallerRequest): StartScheduledCallerRequest;
  hasRequest(): boolean;
  clearRequest(): StartScheduledCallerRequest;

  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): StartScheduledCallerRequest;
  hasScheduledTime(): boolean;
  clearScheduledTime(): StartScheduledCallerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartScheduledCallerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartScheduledCallerRequest): StartScheduledCallerRequest.AsObject;
  static serializeBinaryToWriter(message: StartScheduledCallerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartScheduledCallerRequest;
  static deserializeBinaryFromReader(message: StartScheduledCallerRequest, reader: jspb.BinaryReader): StartScheduledCallerRequest;
}

export namespace StartScheduledCallerRequest {
  export type AsObject = {
    vtsiProjectName: string,
    request?: StartCallerRequest.AsObject,
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class StartScheduledCallersRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StartScheduledCallersRequest;

  getScheduledCallerRequestsList(): Array<StartScheduledCallerRequest>;
  setScheduledCallerRequestsList(value: Array<StartScheduledCallerRequest>): StartScheduledCallersRequest;
  clearScheduledCallerRequestsList(): StartScheduledCallersRequest;
  addScheduledCallerRequests(value?: StartScheduledCallerRequest, index?: number): StartScheduledCallerRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): StartScheduledCallersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartScheduledCallersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartScheduledCallersRequest): StartScheduledCallersRequest.AsObject;
  static serializeBinaryToWriter(message: StartScheduledCallersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartScheduledCallersRequest;
  static deserializeBinaryFromReader(message: StartScheduledCallersRequest, reader: jspb.BinaryReader): StartScheduledCallersRequest;
}

export namespace StartScheduledCallersRequest {
  export type AsObject = {
    vtsiProjectName: string,
    scheduledCallerRequestsList: Array<StartScheduledCallerRequest.AsObject>,
    idempotencyKey: string,
  }
}

export class StartScheduledCallersResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StartScheduledCallersResponse;

  getScheduledCallerResponsesList(): Array<StartScheduledCallerResponse>;
  setScheduledCallerResponsesList(value: Array<StartScheduledCallerResponse>): StartScheduledCallersResponse;
  clearScheduledCallerResponsesList(): StartScheduledCallersResponse;
  addScheduledCallerResponses(value?: StartScheduledCallerResponse, index?: number): StartScheduledCallerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartScheduledCallersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartScheduledCallersResponse): StartScheduledCallersResponse.AsObject;
  static serializeBinaryToWriter(message: StartScheduledCallersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartScheduledCallersResponse;
  static deserializeBinaryFromReader(message: StartScheduledCallersResponse, reader: jspb.BinaryReader): StartScheduledCallersResponse;
}

export namespace StartScheduledCallersResponse {
  export type AsObject = {
    vtsiProjectName: string,
    scheduledCallerResponsesList: Array<StartScheduledCallerResponse.AsObject>,
  }
}

export class AddCallersToCampaignRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): AddCallersToCampaignRequest;

  getCallerRequestsList(): Array<StartCallerRequest>;
  setCallerRequestsList(value: Array<StartCallerRequest>): AddCallersToCampaignRequest;
  clearCallerRequestsList(): AddCallersToCampaignRequest;
  addCallerRequests(value?: StartCallerRequest, index?: number): StartCallerRequest;

  getCampaignAssignment(): ondewo_vtsi_campaigns_pb.CampaignAssignment | undefined;
  setCampaignAssignment(value?: ondewo_vtsi_campaigns_pb.CampaignAssignment): AddCallersToCampaignRequest;
  hasCampaignAssignment(): boolean;
  clearCampaignAssignment(): AddCallersToCampaignRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): AddCallersToCampaignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCallersToCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCallersToCampaignRequest): AddCallersToCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: AddCallersToCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCallersToCampaignRequest;
  static deserializeBinaryFromReader(message: AddCallersToCampaignRequest, reader: jspb.BinaryReader): AddCallersToCampaignRequest;
}

export namespace AddCallersToCampaignRequest {
  export type AsObject = {
    vtsiProjectName: string,
    callerRequestsList: Array<StartCallerRequest.AsObject>,
    campaignAssignment?: ondewo_vtsi_campaigns_pb.CampaignAssignment.AsObject,
    idempotencyKey: string,
  }
}

export class AddCallersToCampaignResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): AddCallersToCampaignResponse;

  getCampaign(): ondewo_vtsi_campaigns_pb.Campaign | undefined;
  setCampaign(value?: ondewo_vtsi_campaigns_pb.Campaign): AddCallersToCampaignResponse;
  hasCampaign(): boolean;
  clearCampaign(): AddCallersToCampaignResponse;

  getCampaignCallNamesList(): Array<string>;
  setCampaignCallNamesList(value: Array<string>): AddCallersToCampaignResponse;
  clearCampaignCallNamesList(): AddCallersToCampaignResponse;
  addCampaignCallNames(value: string, index?: number): AddCallersToCampaignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCallersToCampaignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddCallersToCampaignResponse): AddCallersToCampaignResponse.AsObject;
  static serializeBinaryToWriter(message: AddCallersToCampaignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCallersToCampaignResponse;
  static deserializeBinaryFromReader(message: AddCallersToCampaignResponse, reader: jspb.BinaryReader): AddCallersToCampaignResponse;
}

export namespace AddCallersToCampaignResponse {
  export type AsObject = {
    vtsiProjectName: string,
    campaign?: ondewo_vtsi_campaigns_pb.Campaign.AsObject,
    campaignCallNamesList: Array<string>,
  }
}

export class AddScheduledCallersToCampaignRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): AddScheduledCallersToCampaignRequest;

  getScheduledCallerRequestsList(): Array<StartScheduledCallerRequest>;
  setScheduledCallerRequestsList(value: Array<StartScheduledCallerRequest>): AddScheduledCallersToCampaignRequest;
  clearScheduledCallerRequestsList(): AddScheduledCallersToCampaignRequest;
  addScheduledCallerRequests(value?: StartScheduledCallerRequest, index?: number): StartScheduledCallerRequest;

  getCampaignAssignment(): ondewo_vtsi_campaigns_pb.CampaignAssignment | undefined;
  setCampaignAssignment(value?: ondewo_vtsi_campaigns_pb.CampaignAssignment): AddScheduledCallersToCampaignRequest;
  hasCampaignAssignment(): boolean;
  clearCampaignAssignment(): AddScheduledCallersToCampaignRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): AddScheduledCallersToCampaignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddScheduledCallersToCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddScheduledCallersToCampaignRequest): AddScheduledCallersToCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: AddScheduledCallersToCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddScheduledCallersToCampaignRequest;
  static deserializeBinaryFromReader(message: AddScheduledCallersToCampaignRequest, reader: jspb.BinaryReader): AddScheduledCallersToCampaignRequest;
}

export namespace AddScheduledCallersToCampaignRequest {
  export type AsObject = {
    vtsiProjectName: string,
    scheduledCallerRequestsList: Array<StartScheduledCallerRequest.AsObject>,
    campaignAssignment?: ondewo_vtsi_campaigns_pb.CampaignAssignment.AsObject,
    idempotencyKey: string,
  }
}

export class AddScheduledCallersToCampaignResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): AddScheduledCallersToCampaignResponse;

  getScheduledCallerResponsesList(): Array<StartScheduledCallerResponse>;
  setScheduledCallerResponsesList(value: Array<StartScheduledCallerResponse>): AddScheduledCallersToCampaignResponse;
  clearScheduledCallerResponsesList(): AddScheduledCallersToCampaignResponse;
  addScheduledCallerResponses(value?: StartScheduledCallerResponse, index?: number): StartScheduledCallerResponse;

  getCampaign(): ondewo_vtsi_campaigns_pb.Campaign | undefined;
  setCampaign(value?: ondewo_vtsi_campaigns_pb.Campaign): AddScheduledCallersToCampaignResponse;
  hasCampaign(): boolean;
  clearCampaign(): AddScheduledCallersToCampaignResponse;

  getCampaignCallNamesList(): Array<string>;
  setCampaignCallNamesList(value: Array<string>): AddScheduledCallersToCampaignResponse;
  clearCampaignCallNamesList(): AddScheduledCallersToCampaignResponse;
  addCampaignCallNames(value: string, index?: number): AddScheduledCallersToCampaignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddScheduledCallersToCampaignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddScheduledCallersToCampaignResponse): AddScheduledCallersToCampaignResponse.AsObject;
  static serializeBinaryToWriter(message: AddScheduledCallersToCampaignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddScheduledCallersToCampaignResponse;
  static deserializeBinaryFromReader(message: AddScheduledCallersToCampaignResponse, reader: jspb.BinaryReader): AddScheduledCallersToCampaignResponse;
}

export namespace AddScheduledCallersToCampaignResponse {
  export type AsObject = {
    vtsiProjectName: string,
    scheduledCallerResponsesList: Array<StartScheduledCallerResponse.AsObject>,
    campaign?: ondewo_vtsi_campaigns_pb.Campaign.AsObject,
    campaignCallNamesList: Array<string>,
  }
}

export class StartScheduledCallerResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StartScheduledCallerResponse;

  getScheduledCaller(): ScheduledCaller | undefined;
  setScheduledCaller(value?: ScheduledCaller): StartScheduledCallerResponse;
  hasScheduledCaller(): boolean;
  clearScheduledCaller(): StartScheduledCallerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): StartScheduledCallerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartScheduledCallerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartScheduledCallerResponse): StartScheduledCallerResponse.AsObject;
  static serializeBinaryToWriter(message: StartScheduledCallerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartScheduledCallerResponse;
  static deserializeBinaryFromReader(message: StartScheduledCallerResponse, reader: jspb.BinaryReader): StartScheduledCallerResponse;
}

export namespace StartScheduledCallerResponse {
  export type AsObject = {
    vtsiProjectName: string,
    scheduledCaller?: ScheduledCaller.AsObject,
    errorMessage: string,
  }
}

export class ScheduledCaller extends jspb.Message {
  getName(): string;
  setName(value: string): ScheduledCaller;

  getCallName(): string;
  setCallName(value: string): ScheduledCaller;

  getSipConfig(): SipBaseConfig | undefined;
  setSipConfig(value?: SipBaseConfig): ScheduledCaller;
  hasSipConfig(): boolean;
  clearSipConfig(): ScheduledCaller;

  getCommonServicesConfig(): CommonServicesConfig | undefined;
  setCommonServicesConfig(value?: CommonServicesConfig): ScheduledCaller;
  hasCommonServicesConfig(): boolean;
  clearCommonServicesConfig(): ScheduledCaller;

  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): ScheduledCaller;
  hasScheduledTime(): boolean;
  clearScheduledTime(): ScheduledCaller;

  getSipCallerConfig(): SipCallerConfig | undefined;
  setSipCallerConfig(value?: SipCallerConfig): ScheduledCaller;
  hasSipCallerConfig(): boolean;
  clearSipCallerConfig(): ScheduledCaller;

  getStatus(): ScheduledCallerStatus;
  setStatus(value: ScheduledCallerStatus): ScheduledCaller;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): ScheduledCaller;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ScheduledCaller;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ScheduledCaller;

  getFiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFiredAt(value?: google_protobuf_timestamp_pb.Timestamp): ScheduledCaller;
  hasFiredAt(): boolean;
  clearFiredAt(): ScheduledCaller;

  getErrorMessage(): string;
  setErrorMessage(value: string): ScheduledCaller;

  getCampaignName(): string;
  setCampaignName(value: string): ScheduledCaller;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduledCaller.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduledCaller): ScheduledCaller.AsObject;
  static serializeBinaryToWriter(message: ScheduledCaller, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduledCaller;
  static deserializeBinaryFromReader(message: ScheduledCaller, reader: jspb.BinaryReader): ScheduledCaller;
}

export namespace ScheduledCaller {
  export type AsObject = {
    name: string,
    callName: string,
    sipConfig?: SipBaseConfig.AsObject,
    commonServicesConfig?: CommonServicesConfig.AsObject,
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sipCallerConfig?: SipCallerConfig.AsObject,
    status: ScheduledCallerStatus,
    vtsiProjectName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    firedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    errorMessage: string,
    campaignName: string,
  }
}

export class GetScheduledCallerRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): GetScheduledCallerRequest;

  getName(): string;
  setName(value: string): GetScheduledCallerRequest;

  getCallView(): CallView;
  setCallView(value: CallView): GetScheduledCallerRequest;
  hasCallView(): boolean;
  clearCallView(): GetScheduledCallerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScheduledCallerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScheduledCallerRequest): GetScheduledCallerRequest.AsObject;
  static serializeBinaryToWriter(message: GetScheduledCallerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScheduledCallerRequest;
  static deserializeBinaryFromReader(message: GetScheduledCallerRequest, reader: jspb.BinaryReader): GetScheduledCallerRequest;
}

export namespace GetScheduledCallerRequest {
  export type AsObject = {
    vtsiProjectName: string,
    name: string,
    callView?: CallView,
  }

  export enum CallViewCase { 
    _CALL_VIEW_NOT_SET = 0,
    CALL_VIEW = 3,
  }
}

export class ListScheduledCallersRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): ListScheduledCallersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListScheduledCallersRequest;
  hasPageToken(): boolean;
  clearPageToken(): ListScheduledCallersRequest;

  getCallView(): CallView;
  setCallView(value: CallView): ListScheduledCallersRequest;
  hasCallView(): boolean;
  clearCallView(): ListScheduledCallersRequest;

  getStatusesList(): Array<ScheduledCallerStatus>;
  setStatusesList(value: Array<ScheduledCallerStatus>): ListScheduledCallersRequest;
  clearStatusesList(): ListScheduledCallersRequest;
  addStatuses(value: ScheduledCallerStatus, index?: number): ListScheduledCallersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScheduledCallersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListScheduledCallersRequest): ListScheduledCallersRequest.AsObject;
  static serializeBinaryToWriter(message: ListScheduledCallersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScheduledCallersRequest;
  static deserializeBinaryFromReader(message: ListScheduledCallersRequest, reader: jspb.BinaryReader): ListScheduledCallersRequest;
}

export namespace ListScheduledCallersRequest {
  export type AsObject = {
    vtsiProjectName: string,
    pageToken?: string,
    callView?: CallView,
    statusesList: Array<ScheduledCallerStatus>,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 2,
  }

  export enum CallViewCase { 
    _CALL_VIEW_NOT_SET = 0,
    CALL_VIEW = 3,
  }
}

export class ListScheduledCallersResponse extends jspb.Message {
  getScheduledCallersList(): Array<ScheduledCaller>;
  setScheduledCallersList(value: Array<ScheduledCaller>): ListScheduledCallersResponse;
  clearScheduledCallersList(): ListScheduledCallersResponse;
  addScheduledCallers(value?: ScheduledCaller, index?: number): ScheduledCaller;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListScheduledCallersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListScheduledCallersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListScheduledCallersResponse): ListScheduledCallersResponse.AsObject;
  static serializeBinaryToWriter(message: ListScheduledCallersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListScheduledCallersResponse;
  static deserializeBinaryFromReader(message: ListScheduledCallersResponse, reader: jspb.BinaryReader): ListScheduledCallersResponse;
}

export namespace ListScheduledCallersResponse {
  export type AsObject = {
    scheduledCallersList: Array<ScheduledCaller.AsObject>,
    nextPageToken: string,
  }
}

export class CancelScheduledCallerRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): CancelScheduledCallerRequest;

  getName(): string;
  setName(value: string): CancelScheduledCallerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelScheduledCallerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelScheduledCallerRequest): CancelScheduledCallerRequest.AsObject;
  static serializeBinaryToWriter(message: CancelScheduledCallerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelScheduledCallerRequest;
  static deserializeBinaryFromReader(message: CancelScheduledCallerRequest, reader: jspb.BinaryReader): CancelScheduledCallerRequest;
}

export namespace CancelScheduledCallerRequest {
  export type AsObject = {
    vtsiProjectName: string,
    name: string,
  }
}

export class CancelScheduledCallerResponse extends jspb.Message {
  getName(): string;
  setName(value: string): CancelScheduledCallerResponse;

  getStatus(): ScheduledCallerStatus;
  setStatus(value: ScheduledCallerStatus): CancelScheduledCallerResponse;

  getCancelled(): boolean;
  setCancelled(value: boolean): CancelScheduledCallerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): CancelScheduledCallerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelScheduledCallerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelScheduledCallerResponse): CancelScheduledCallerResponse.AsObject;
  static serializeBinaryToWriter(message: CancelScheduledCallerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelScheduledCallerResponse;
  static deserializeBinaryFromReader(message: CancelScheduledCallerResponse, reader: jspb.BinaryReader): CancelScheduledCallerResponse;
}

export namespace CancelScheduledCallerResponse {
  export type AsObject = {
    name: string,
    status: ScheduledCallerStatus,
    cancelled: boolean,
    errorMessage: string,
  }
}

export class StopCallRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StopCallRequest;

  getCallName(): string;
  setCallName(value: string): StopCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopCallRequest): StopCallRequest.AsObject;
  static serializeBinaryToWriter(message: StopCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopCallRequest;
  static deserializeBinaryFromReader(message: StopCallRequest, reader: jspb.BinaryReader): StopCallRequest;
}

export namespace StopCallRequest {
  export type AsObject = {
    vtsiProjectName: string,
    callName: string,
  }
}

export class StopCallResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StopCallResponse;

  getCallName(): string;
  setCallName(value: string): StopCallResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): StopCallResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopCallResponse): StopCallResponse.AsObject;
  static serializeBinaryToWriter(message: StopCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopCallResponse;
  static deserializeBinaryFromReader(message: StopCallResponse, reader: jspb.BinaryReader): StopCallResponse;
}

export namespace StopCallResponse {
  export type AsObject = {
    vtsiProjectName: string,
    callName: string,
    errorMessage: string,
  }
}

export class StopCallsRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StopCallsRequest;

  getCallNamesList(): Array<string>;
  setCallNamesList(value: Array<string>): StopCallsRequest;
  clearCallNamesList(): StopCallsRequest;
  addCallNames(value: string, index?: number): StopCallsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopCallsRequest): StopCallsRequest.AsObject;
  static serializeBinaryToWriter(message: StopCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopCallsRequest;
  static deserializeBinaryFromReader(message: StopCallsRequest, reader: jspb.BinaryReader): StopCallsRequest;
}

export namespace StopCallsRequest {
  export type AsObject = {
    vtsiProjectName: string,
    callNamesList: Array<string>,
  }
}

export class StopCallsResponse extends jspb.Message {
  getStopCallResponsesList(): Array<StopCallResponse>;
  setStopCallResponsesList(value: Array<StopCallResponse>): StopCallsResponse;
  clearStopCallResponsesList(): StopCallsResponse;
  addStopCallResponses(value?: StopCallResponse, index?: number): StopCallResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): StopCallsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopCallsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopCallsResponse): StopCallsResponse.AsObject;
  static serializeBinaryToWriter(message: StopCallsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopCallsResponse;
  static deserializeBinaryFromReader(message: StopCallsResponse, reader: jspb.BinaryReader): StopCallsResponse;
}

export namespace StopCallsResponse {
  export type AsObject = {
    stopCallResponsesList: Array<StopCallResponse.AsObject>,
    errorMessage: string,
  }
}

export class StopAllCallsRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StopAllCallsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAllCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopAllCallsRequest): StopAllCallsRequest.AsObject;
  static serializeBinaryToWriter(message: StopAllCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAllCallsRequest;
  static deserializeBinaryFromReader(message: StopAllCallsRequest, reader: jspb.BinaryReader): StopAllCallsRequest;
}

export namespace StopAllCallsRequest {
  export type AsObject = {
    vtsiProjectName: string,
  }
}

export class TransferCallRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): TransferCallRequest;

  getCallName(): string;
  setCallName(value: string): TransferCallRequest;

  getTransferId(): string;
  setTransferId(value: string): TransferCallRequest;

  getTarget(): CallTarget | undefined;
  setTarget(value?: CallTarget): TransferCallRequest;
  hasTarget(): boolean;
  clearTarget(): TransferCallRequest;

  getMode(): TransferMode;
  setMode(value: TransferMode): TransferCallRequest;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): TransferCallRequest;

  getRingTimeoutS(): number;
  setRingTimeoutS(value: number): TransferCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferCallRequest): TransferCallRequest.AsObject;
  static serializeBinaryToWriter(message: TransferCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferCallRequest;
  static deserializeBinaryFromReader(message: TransferCallRequest, reader: jspb.BinaryReader): TransferCallRequest;
}

export namespace TransferCallRequest {
  export type AsObject = {
    vtsiProjectName: string,
    callName: string,
    transferId: string,
    target?: CallTarget.AsObject,
    mode: TransferMode,
    headersMap: Array<[string, string]>,
    ringTimeoutS: number,
  }
}

export class CallTarget extends jspb.Message {
  getPhoneNumber(): string;
  setPhoneNumber(value: string): CallTarget;

  getSoftphoneAccountName(): string;
  setSoftphoneAccountName(value: string): CallTarget;

  getListenerName(): string;
  setListenerName(value: string): CallTarget;

  getListenerQueue(): ListenerQueueTarget | undefined;
  setListenerQueue(value?: ListenerQueueTarget): CallTarget;
  hasListenerQueue(): boolean;
  clearListenerQueue(): CallTarget;

  getTargetCase(): CallTarget.TargetCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallTarget.AsObject;
  static toObject(includeInstance: boolean, msg: CallTarget): CallTarget.AsObject;
  static serializeBinaryToWriter(message: CallTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallTarget;
  static deserializeBinaryFromReader(message: CallTarget, reader: jspb.BinaryReader): CallTarget;
}

export namespace CallTarget {
  export type AsObject = {
    phoneNumber: string,
    softphoneAccountName: string,
    listenerName: string,
    listenerQueue?: ListenerQueueTarget.AsObject,
  }

  export enum TargetCase { 
    TARGET_NOT_SET = 0,
    PHONE_NUMBER = 1,
    SOFTPHONE_ACCOUNT_NAME = 2,
    LISTENER_NAME = 3,
    LISTENER_QUEUE = 4,
  }
}

export class ListenerQueueTarget extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenerQueueTarget.AsObject;
  static toObject(includeInstance: boolean, msg: ListenerQueueTarget): ListenerQueueTarget.AsObject;
  static serializeBinaryToWriter(message: ListenerQueueTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenerQueueTarget;
  static deserializeBinaryFromReader(message: ListenerQueueTarget, reader: jspb.BinaryReader): ListenerQueueTarget;
}

export namespace ListenerQueueTarget {
  export type AsObject = {
  }
}

export class TransferCallResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): TransferCallResponse;

  getCallName(): string;
  setCallName(value: string): TransferCallResponse;

  getTransferId(): string;
  setTransferId(value: string): TransferCallResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): TransferCallResponse;

  getOutcome(): TransferOutcome;
  setOutcome(value: TransferOutcome): TransferCallResponse;

  getResolvedTarget(): string;
  setResolvedTarget(value: string): TransferCallResponse;

  getSipResponseCode(): number;
  setSipResponseCode(value: number): TransferCallResponse;

  getErrorReason(): string;
  setErrorReason(value: string): TransferCallResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferCallResponse): TransferCallResponse.AsObject;
  static serializeBinaryToWriter(message: TransferCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferCallResponse;
  static deserializeBinaryFromReader(message: TransferCallResponse, reader: jspb.BinaryReader): TransferCallResponse;
}

export namespace TransferCallResponse {
  export type AsObject = {
    vtsiProjectName: string,
    callName: string,
    transferId: string,
    errorMessage: string,
    outcome: TransferOutcome,
    resolvedTarget: string,
    sipResponseCode: number,
    errorReason: string,
  }
}

export class CallTransferRecord extends jspb.Message {
  getTarget(): CallTarget | undefined;
  setTarget(value?: CallTarget): CallTransferRecord;
  hasTarget(): boolean;
  clearTarget(): CallTransferRecord;

  getResolvedTarget(): string;
  setResolvedTarget(value: string): CallTransferRecord;

  getMode(): TransferMode;
  setMode(value: TransferMode): CallTransferRecord;

  getOutcome(): TransferOutcome;
  setOutcome(value: TransferOutcome): CallTransferRecord;

  getSipResponseCode(): number;
  setSipResponseCode(value: number): CallTransferRecord;

  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): CallTransferRecord;
  hasTime(): boolean;
  clearTime(): CallTransferRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallTransferRecord.AsObject;
  static toObject(includeInstance: boolean, msg: CallTransferRecord): CallTransferRecord.AsObject;
  static serializeBinaryToWriter(message: CallTransferRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallTransferRecord;
  static deserializeBinaryFromReader(message: CallTransferRecord, reader: jspb.BinaryReader): CallTransferRecord;
}

export namespace CallTransferRecord {
  export type AsObject = {
    target?: CallTarget.AsObject,
    resolvedTarget: string,
    mode: TransferMode,
    outcome: TransferOutcome,
    sipResponseCode: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CallMediaControlState extends jspb.Message {
  getBotMuted(): boolean;
  setBotMuted(value: boolean): CallMediaControlState;

  getListeningPaused(): boolean;
  setListeningPaused(value: boolean): CallMediaControlState;

  getConnectedAudioStreams(): number;
  setConnectedAudioStreams(value: number): CallMediaControlState;

  getJoinedParticipants(): number;
  setJoinedParticipants(value: number): CallMediaControlState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallMediaControlState.AsObject;
  static toObject(includeInstance: boolean, msg: CallMediaControlState): CallMediaControlState.AsObject;
  static serializeBinaryToWriter(message: CallMediaControlState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallMediaControlState;
  static deserializeBinaryFromReader(message: CallMediaControlState, reader: jspb.BinaryReader): CallMediaControlState;
}

export namespace CallMediaControlState {
  export type AsObject = {
    botMuted: boolean,
    listeningPaused: boolean,
    connectedAudioStreams: number,
    joinedParticipants: number,
  }
}

export class CallParticipant extends jspb.Message {
  getParticipantId(): string;
  setParticipantId(value: string): CallParticipant;

  getSoftphoneAccountName(): string;
  setSoftphoneAccountName(value: string): CallParticipant;

  getMode(): ParticipantMode;
  setMode(value: ParticipantMode): CallParticipant;

  getState(): ParticipantState;
  setState(value: ParticipantState): CallParticipant;

  getInvitedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInvitedAt(value?: google_protobuf_timestamp_pb.Timestamp): CallParticipant;
  hasInvitedAt(): boolean;
  clearInvitedAt(): CallParticipant;

  getJoinedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setJoinedAt(value?: google_protobuf_timestamp_pb.Timestamp): CallParticipant;
  hasJoinedAt(): boolean;
  clearJoinedAt(): CallParticipant;

  getLeftAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLeftAt(value?: google_protobuf_timestamp_pb.Timestamp): CallParticipant;
  hasLeftAt(): boolean;
  clearLeftAt(): CallParticipant;

  getEndReason(): string;
  setEndReason(value: string): CallParticipant;

  getInvitedBy(): string;
  setInvitedBy(value: string): CallParticipant;

  getBotPolicy(): BotPolicyOnJoin;
  setBotPolicy(value: BotPolicyOnJoin): CallParticipant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallParticipant.AsObject;
  static toObject(includeInstance: boolean, msg: CallParticipant): CallParticipant.AsObject;
  static serializeBinaryToWriter(message: CallParticipant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallParticipant;
  static deserializeBinaryFromReader(message: CallParticipant, reader: jspb.BinaryReader): CallParticipant;
}

export namespace CallParticipant {
  export type AsObject = {
    participantId: string,
    softphoneAccountName: string,
    mode: ParticipantMode,
    state: ParticipantState,
    invitedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    joinedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    leftAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endReason: string,
    invitedBy: string,
    botPolicy: BotPolicyOnJoin,
  }
}

export class InviteToCallRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): InviteToCallRequest;

  getCallName(): string;
  setCallName(value: string): InviteToCallRequest;

  getSoftphoneAccountName(): string;
  setSoftphoneAccountName(value: string): InviteToCallRequest;

  getMode(): ParticipantMode;
  setMode(value: ParticipantMode): InviteToCallRequest;

  getRingTimeoutS(): number;
  setRingTimeoutS(value: number): InviteToCallRequest;

  getBotPolicy(): BotPolicyOnJoin;
  setBotPolicy(value: BotPolicyOnJoin): InviteToCallRequest;

  getCallerIdDisplayName(): string;
  setCallerIdDisplayName(value: string): InviteToCallRequest;

  getRequestId(): string;
  setRequestId(value: string): InviteToCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteToCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InviteToCallRequest): InviteToCallRequest.AsObject;
  static serializeBinaryToWriter(message: InviteToCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteToCallRequest;
  static deserializeBinaryFromReader(message: InviteToCallRequest, reader: jspb.BinaryReader): InviteToCallRequest;
}

export namespace InviteToCallRequest {
  export type AsObject = {
    vtsiProjectName: string,
    callName: string,
    softphoneAccountName: string,
    mode: ParticipantMode,
    ringTimeoutS: number,
    botPolicy: BotPolicyOnJoin,
    callerIdDisplayName: string,
    requestId: string,
  }
}

export class InviteToCallResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): InviteToCallResponse;

  getCallName(): string;
  setCallName(value: string): InviteToCallResponse;

  getParticipant(): CallParticipant | undefined;
  setParticipant(value?: CallParticipant): InviteToCallResponse;
  hasParticipant(): boolean;
  clearParticipant(): InviteToCallResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): InviteToCallResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteToCallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InviteToCallResponse): InviteToCallResponse.AsObject;
  static serializeBinaryToWriter(message: InviteToCallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteToCallResponse;
  static deserializeBinaryFromReader(message: InviteToCallResponse, reader: jspb.BinaryReader): InviteToCallResponse;
}

export namespace InviteToCallResponse {
  export type AsObject = {
    vtsiProjectName: string,
    callName: string,
    participant?: CallParticipant.AsObject,
    errorMessage: string,
  }
}

export class RemoveCallParticipantRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): RemoveCallParticipantRequest;

  getCallName(): string;
  setCallName(value: string): RemoveCallParticipantRequest;

  getParticipantId(): string;
  setParticipantId(value: string): RemoveCallParticipantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveCallParticipantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveCallParticipantRequest): RemoveCallParticipantRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveCallParticipantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveCallParticipantRequest;
  static deserializeBinaryFromReader(message: RemoveCallParticipantRequest, reader: jspb.BinaryReader): RemoveCallParticipantRequest;
}

export namespace RemoveCallParticipantRequest {
  export type AsObject = {
    vtsiProjectName: string,
    callName: string,
    participantId: string,
  }
}

export class RemoveCallParticipantResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): RemoveCallParticipantResponse;

  getCallName(): string;
  setCallName(value: string): RemoveCallParticipantResponse;

  getParticipant(): CallParticipant | undefined;
  setParticipant(value?: CallParticipant): RemoveCallParticipantResponse;
  hasParticipant(): boolean;
  clearParticipant(): RemoveCallParticipantResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): RemoveCallParticipantResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveCallParticipantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveCallParticipantResponse): RemoveCallParticipantResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveCallParticipantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveCallParticipantResponse;
  static deserializeBinaryFromReader(message: RemoveCallParticipantResponse, reader: jspb.BinaryReader): RemoveCallParticipantResponse;
}

export namespace RemoveCallParticipantResponse {
  export type AsObject = {
    vtsiProjectName: string,
    callName: string,
    participant?: CallParticipant.AsObject,
    errorMessage: string,
  }
}

export class SetCallMediaControlRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): SetCallMediaControlRequest;

  getCallName(): string;
  setCallName(value: string): SetCallMediaControlRequest;

  getBotVoice(): CallMediaSetting;
  setBotVoice(value: CallMediaSetting): SetCallMediaControlRequest;

  getBotListening(): CallMediaSetting;
  setBotListening(value: CallMediaSetting): SetCallMediaControlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCallMediaControlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetCallMediaControlRequest): SetCallMediaControlRequest.AsObject;
  static serializeBinaryToWriter(message: SetCallMediaControlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCallMediaControlRequest;
  static deserializeBinaryFromReader(message: SetCallMediaControlRequest, reader: jspb.BinaryReader): SetCallMediaControlRequest;
}

export namespace SetCallMediaControlRequest {
  export type AsObject = {
    vtsiProjectName: string,
    callName: string,
    botVoice: CallMediaSetting,
    botListening: CallMediaSetting,
  }
}

export class SetCallMediaControlResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): SetCallMediaControlResponse;

  getCallName(): string;
  setCallName(value: string): SetCallMediaControlResponse;

  getState(): CallMediaControlState | undefined;
  setState(value?: CallMediaControlState): SetCallMediaControlResponse;
  hasState(): boolean;
  clearState(): SetCallMediaControlResponse;

  getChanged(): boolean;
  setChanged(value: boolean): SetCallMediaControlResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): SetCallMediaControlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCallMediaControlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetCallMediaControlResponse): SetCallMediaControlResponse.AsObject;
  static serializeBinaryToWriter(message: SetCallMediaControlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCallMediaControlResponse;
  static deserializeBinaryFromReader(message: SetCallMediaControlResponse, reader: jspb.BinaryReader): SetCallMediaControlResponse;
}

export namespace SetCallMediaControlResponse {
  export type AsObject = {
    vtsiProjectName: string,
    callName: string,
    state?: CallMediaControlState.AsObject,
    changed: boolean,
    errorMessage: string,
  }
}

export class StreamCallAudioConfig extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StreamCallAudioConfig;

  getCallName(): string;
  setCallName(value: string): StreamCallAudioConfig;

  getMode(): CallAudioMode;
  setMode(value: CallAudioMode): StreamCallAudioConfig;

  getSampleRateHz(): number;
  setSampleRateHz(value: number): StreamCallAudioConfig;

  getTakeOver(): boolean;
  setTakeOver(value: boolean): StreamCallAudioConfig;

  getMaxDurationS(): number;
  setMaxDurationS(value: number): StreamCallAudioConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCallAudioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCallAudioConfig): StreamCallAudioConfig.AsObject;
  static serializeBinaryToWriter(message: StreamCallAudioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCallAudioConfig;
  static deserializeBinaryFromReader(message: StreamCallAudioConfig, reader: jspb.BinaryReader): StreamCallAudioConfig;
}

export namespace StreamCallAudioConfig {
  export type AsObject = {
    vtsiProjectName: string,
    callName: string,
    mode: CallAudioMode,
    sampleRateHz: number,
    takeOver: boolean,
    maxDurationS: number,
  }
}

export class CallAudioFrame extends jspb.Message {
  getPcmS16le(): Uint8Array | string;
  getPcmS16le_asU8(): Uint8Array;
  getPcmS16le_asB64(): string;
  setPcmS16le(value: Uint8Array | string): CallAudioFrame;

  getSequence(): number;
  setSequence(value: number): CallAudioFrame;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallAudioFrame.AsObject;
  static toObject(includeInstance: boolean, msg: CallAudioFrame): CallAudioFrame.AsObject;
  static serializeBinaryToWriter(message: CallAudioFrame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallAudioFrame;
  static deserializeBinaryFromReader(message: CallAudioFrame, reader: jspb.BinaryReader): CallAudioFrame;
}

export namespace CallAudioFrame {
  export type AsObject = {
    pcmS16le: Uint8Array | string,
    sequence: number,
  }
}

export class StreamCallAudioRequest extends jspb.Message {
  getConfig(): StreamCallAudioConfig | undefined;
  setConfig(value?: StreamCallAudioConfig): StreamCallAudioRequest;
  hasConfig(): boolean;
  clearConfig(): StreamCallAudioRequest;

  getAudio(): CallAudioFrame | undefined;
  setAudio(value?: CallAudioFrame): StreamCallAudioRequest;
  hasAudio(): boolean;
  clearAudio(): StreamCallAudioRequest;

  getAgentMuted(): boolean;
  setAgentMuted(value: boolean): StreamCallAudioRequest;

  getRequestCase(): StreamCallAudioRequest.RequestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCallAudioRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCallAudioRequest): StreamCallAudioRequest.AsObject;
  static serializeBinaryToWriter(message: StreamCallAudioRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCallAudioRequest;
  static deserializeBinaryFromReader(message: StreamCallAudioRequest, reader: jspb.BinaryReader): StreamCallAudioRequest;
}

export namespace StreamCallAudioRequest {
  export type AsObject = {
    config?: StreamCallAudioConfig.AsObject,
    audio?: CallAudioFrame.AsObject,
    agentMuted: boolean,
  }

  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    CONFIG = 1,
    AUDIO = 2,
    AGENT_MUTED = 3,
  }
}

export class CallAudioStarted extends jspb.Message {
  getStreamId(): string;
  setStreamId(value: string): CallAudioStarted;

  getSampleRateHz(): number;
  setSampleRateHz(value: number): CallAudioStarted;

  getFrameMs(): number;
  setFrameMs(value: number): CallAudioStarted;

  getMode(): CallAudioMode;
  setMode(value: CallAudioMode): CallAudioStarted;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallAudioStarted.AsObject;
  static toObject(includeInstance: boolean, msg: CallAudioStarted): CallAudioStarted.AsObject;
  static serializeBinaryToWriter(message: CallAudioStarted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallAudioStarted;
  static deserializeBinaryFromReader(message: CallAudioStarted, reader: jspb.BinaryReader): CallAudioStarted;
}

export namespace CallAudioStarted {
  export type AsObject = {
    streamId: string,
    sampleRateHz: number,
    frameMs: number,
    mode: CallAudioMode,
  }
}

export class CallAudioStats extends jspb.Message {
  getFramesSent(): number;
  setFramesSent(value: number): CallAudioStats;

  getFramesDropped(): number;
  setFramesDropped(value: number): CallAudioStats;

  getFramesReceived(): number;
  setFramesReceived(value: number): CallAudioStats;

  getUnderruns(): number;
  setUnderruns(value: number): CallAudioStats;

  getFramesDiscarded(): number;
  setFramesDiscarded(value: number): CallAudioStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallAudioStats.AsObject;
  static toObject(includeInstance: boolean, msg: CallAudioStats): CallAudioStats.AsObject;
  static serializeBinaryToWriter(message: CallAudioStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallAudioStats;
  static deserializeBinaryFromReader(message: CallAudioStats, reader: jspb.BinaryReader): CallAudioStats;
}

export namespace CallAudioStats {
  export type AsObject = {
    framesSent: number,
    framesDropped: number,
    framesReceived: number,
    underruns: number,
    framesDiscarded: number,
  }
}

export class CallAudioEnded extends jspb.Message {
  getReason(): CallAudioEndReason;
  setReason(value: CallAudioEndReason): CallAudioEnded;

  getDetail(): string;
  setDetail(value: string): CallAudioEnded;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallAudioEnded.AsObject;
  static toObject(includeInstance: boolean, msg: CallAudioEnded): CallAudioEnded.AsObject;
  static serializeBinaryToWriter(message: CallAudioEnded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallAudioEnded;
  static deserializeBinaryFromReader(message: CallAudioEnded, reader: jspb.BinaryReader): CallAudioEnded;
}

export namespace CallAudioEnded {
  export type AsObject = {
    reason: CallAudioEndReason,
    detail: string,
  }
}

export class StreamCallAudioResponse extends jspb.Message {
  getStarted(): CallAudioStarted | undefined;
  setStarted(value?: CallAudioStarted): StreamCallAudioResponse;
  hasStarted(): boolean;
  clearStarted(): StreamCallAudioResponse;

  getAudio(): CallAudioFrame | undefined;
  setAudio(value?: CallAudioFrame): StreamCallAudioResponse;
  hasAudio(): boolean;
  clearAudio(): StreamCallAudioResponse;

  getStats(): CallAudioStats | undefined;
  setStats(value?: CallAudioStats): StreamCallAudioResponse;
  hasStats(): boolean;
  clearStats(): StreamCallAudioResponse;

  getEnded(): CallAudioEnded | undefined;
  setEnded(value?: CallAudioEnded): StreamCallAudioResponse;
  hasEnded(): boolean;
  clearEnded(): StreamCallAudioResponse;

  getResponseCase(): StreamCallAudioResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCallAudioResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCallAudioResponse): StreamCallAudioResponse.AsObject;
  static serializeBinaryToWriter(message: StreamCallAudioResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCallAudioResponse;
  static deserializeBinaryFromReader(message: StreamCallAudioResponse, reader: jspb.BinaryReader): StreamCallAudioResponse;
}

export namespace StreamCallAudioResponse {
  export type AsObject = {
    started?: CallAudioStarted.AsObject,
    audio?: CallAudioFrame.AsObject,
    stats?: CallAudioStats.AsObject,
    ended?: CallAudioEnded.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    STARTED = 1,
    AUDIO = 2,
    STATS = 3,
    ENDED = 4,
  }
}

export class ListenCallAudioRequest extends jspb.Message {
  getConfig(): StreamCallAudioConfig | undefined;
  setConfig(value?: StreamCallAudioConfig): ListenCallAudioRequest;
  hasConfig(): boolean;
  clearConfig(): ListenCallAudioRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListenCallAudioRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListenCallAudioRequest): ListenCallAudioRequest.AsObject;
  static serializeBinaryToWriter(message: ListenCallAudioRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListenCallAudioRequest;
  static deserializeBinaryFromReader(message: ListenCallAudioRequest, reader: jspb.BinaryReader): ListenCallAudioRequest;
}

export namespace ListenCallAudioRequest {
  export type AsObject = {
    config?: StreamCallAudioConfig.AsObject,
  }
}

export class TransferCallsRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): TransferCallsRequest;

  getTransferCallRequestsList(): Array<TransferCallRequest>;
  setTransferCallRequestsList(value: Array<TransferCallRequest>): TransferCallsRequest;
  clearTransferCallRequestsList(): TransferCallsRequest;
  addTransferCallRequests(value?: TransferCallRequest, index?: number): TransferCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferCallsRequest): TransferCallsRequest.AsObject;
  static serializeBinaryToWriter(message: TransferCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferCallsRequest;
  static deserializeBinaryFromReader(message: TransferCallsRequest, reader: jspb.BinaryReader): TransferCallsRequest;
}

export namespace TransferCallsRequest {
  export type AsObject = {
    vtsiProjectName: string,
    transferCallRequestsList: Array<TransferCallRequest.AsObject>,
  }
}

export class TransferCallsResponse extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): TransferCallsResponse;

  getTransferCallResponsesList(): Array<TransferCallResponse>;
  setTransferCallResponsesList(value: Array<TransferCallResponse>): TransferCallsResponse;
  clearTransferCallResponsesList(): TransferCallsResponse;
  addTransferCallResponses(value?: TransferCallResponse, index?: number): TransferCallResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): TransferCallsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferCallsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferCallsResponse): TransferCallsResponse.AsObject;
  static serializeBinaryToWriter(message: TransferCallsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferCallsResponse;
  static deserializeBinaryFromReader(message: TransferCallsResponse, reader: jspb.BinaryReader): TransferCallsResponse;
}

export namespace TransferCallsResponse {
  export type AsObject = {
    vtsiProjectName: string,
    transferCallResponsesList: Array<TransferCallResponse.AsObject>,
    errorMessage: string,
  }
}

export class GetCallRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): GetCallRequest;

  getCallName(): string;
  setCallName(value: string): GetCallRequest;

  getCallView(): CallView;
  setCallView(value: CallView): GetCallRequest;
  hasCallView(): boolean;
  clearCallView(): GetCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCallRequest): GetCallRequest.AsObject;
  static serializeBinaryToWriter(message: GetCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCallRequest;
  static deserializeBinaryFromReader(message: GetCallRequest, reader: jspb.BinaryReader): GetCallRequest;
}

export namespace GetCallRequest {
  export type AsObject = {
    vtsiProjectName: string,
    callName: string,
    callView?: CallView,
  }

  export enum CallViewCase { 
    _CALL_VIEW_NOT_SET = 0,
    CALL_VIEW = 3,
  }
}

export class Call extends jspb.Message {
  getName(): string;
  setName(value: string): Call;

  getSipAccount(): string;
  setSipAccount(value: string): Call;

  getContainerName(): string;
  setContainerName(value: string): Call;

  getCallType(): CallType;
  setCallType(value: CallType): Call;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): Call;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): Call;
  hasStartTime(): boolean;
  clearStartTime(): Call;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): Call;
  hasEndTime(): boolean;
  clearEndTime(): Call;

  getSipStatusType(): ondewo_sip_sip_pb.SipStatus.StatusType;
  setSipStatusType(value: ondewo_sip_sip_pb.SipStatus.StatusType): Call;

  getSipStatus(): ondewo_sip_sip_pb.SipStatus | undefined;
  setSipStatus(value?: ondewo_sip_sip_pb.SipStatus): Call;
  hasSipStatus(): boolean;
  clearSipStatus(): Call;

  getSipStatusHistory(): ondewo_sip_sip_pb.SipStatusHistoryResponse | undefined;
  setSipStatusHistory(value?: ondewo_sip_sip_pb.SipStatusHistoryResponse): Call;
  hasSipStatusHistory(): boolean;
  clearSipStatusHistory(): Call;

  getServicesStatuses(): AllServicesStatuses | undefined;
  setServicesStatuses(value?: AllServicesStatuses): Call;
  hasServicesStatuses(): boolean;
  clearServicesStatuses(): Call;

  getActive(): boolean;
  setActive(value: boolean): Call;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): Call;

  getCommonServicesConfig(): CommonServicesConfig | undefined;
  setCommonServicesConfig(value?: CommonServicesConfig): Call;
  hasCommonServicesConfig(): boolean;
  clearCommonServicesConfig(): Call;

  getSipPort(): number;
  setSipPort(value: number): Call;
  hasSipPort(): boolean;
  clearSipPort(): Call;

  getCsiPort(): number;
  setCsiPort(value: number): Call;
  hasCsiPort(): boolean;
  clearCsiPort(): Call;

  getNluSessionName(): string;
  setNluSessionName(value: string): Call;
  hasNluSessionName(): boolean;
  clearNluSessionName(): Call;

  getPlatforms(): ondewo_nlu_intent_pb.Intent.Message.Platform;
  setPlatforms(value: ondewo_nlu_intent_pb.Intent.Message.Platform): Call;
  hasPlatforms(): boolean;
  clearPlatforms(): Call;

  getRedialRecommended(): boolean;
  setRedialRecommended(value: boolean): Call;
  hasRedialRecommended(): boolean;
  clearRedialRecommended(): Call;

  getRedialReason(): string;
  setRedialReason(value: string): Call;
  hasRedialReason(): boolean;
  clearRedialReason(): Call;

  getAnsweringMachineDetectionEndDescription(): string;
  setAnsweringMachineDetectionEndDescription(value: string): Call;
  hasAnsweringMachineDetectionEndDescription(): boolean;
  clearAnsweringMachineDetectionEndDescription(): Call;

  getMediaControl(): CallMediaControlState | undefined;
  setMediaControl(value?: CallMediaControlState): Call;
  hasMediaControl(): boolean;
  clearMediaControl(): Call;

  getParticipantsList(): Array<CallParticipant>;
  setParticipantsList(value: Array<CallParticipant>): Call;
  clearParticipantsList(): Call;
  addParticipants(value?: CallParticipant, index?: number): CallParticipant;

  getLastTransfer(): CallTransferRecord | undefined;
  setLastTransfer(value?: CallTransferRecord): Call;
  hasLastTransfer(): boolean;
  clearLastTransfer(): Call;

  getSipCallId(): string;
  setSipCallId(value: string): Call;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Call.AsObject;
  static toObject(includeInstance: boolean, msg: Call): Call.AsObject;
  static serializeBinaryToWriter(message: Call, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Call;
  static deserializeBinaryFromReader(message: Call, reader: jspb.BinaryReader): Call;
}

export namespace Call {
  export type AsObject = {
    name: string,
    sipAccount: string,
    containerName: string,
    callType: CallType,
    phoneNumber: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sipStatusType: ondewo_sip_sip_pb.SipStatus.StatusType,
    sipStatus?: ondewo_sip_sip_pb.SipStatus.AsObject,
    sipStatusHistory?: ondewo_sip_sip_pb.SipStatusHistoryResponse.AsObject,
    servicesStatuses?: AllServicesStatuses.AsObject,
    active: boolean,
    vtsiProjectName: string,
    commonServicesConfig?: CommonServicesConfig.AsObject,
    sipPort?: number,
    csiPort?: number,
    nluSessionName?: string,
    platforms?: ondewo_nlu_intent_pb.Intent.Message.Platform,
    redialRecommended?: boolean,
    redialReason?: string,
    answeringMachineDetectionEndDescription?: string,
    mediaControl?: CallMediaControlState.AsObject,
    participantsList: Array<CallParticipant.AsObject>,
    lastTransfer?: CallTransferRecord.AsObject,
    sipCallId: string,
  }

  export enum SipStatusCase { 
    _SIP_STATUS_NOT_SET = 0,
    SIP_STATUS = 9,
  }

  export enum SipStatusHistoryCase { 
    _SIP_STATUS_HISTORY_NOT_SET = 0,
    SIP_STATUS_HISTORY = 10,
  }

  export enum ServicesStatusesCase { 
    _SERVICES_STATUSES_NOT_SET = 0,
    SERVICES_STATUSES = 11,
  }

  export enum CommonServicesConfigCase { 
    _COMMON_SERVICES_CONFIG_NOT_SET = 0,
    COMMON_SERVICES_CONFIG = 14,
  }

  export enum SipPortCase { 
    _SIP_PORT_NOT_SET = 0,
    SIP_PORT = 15,
  }

  export enum CsiPortCase { 
    _CSI_PORT_NOT_SET = 0,
    CSI_PORT = 16,
  }

  export enum NluSessionNameCase { 
    _NLU_SESSION_NAME_NOT_SET = 0,
    NLU_SESSION_NAME = 17,
  }

  export enum PlatformsCase { 
    _PLATFORMS_NOT_SET = 0,
    PLATFORMS = 18,
  }

  export enum RedialRecommendedCase { 
    _REDIAL_RECOMMENDED_NOT_SET = 0,
    REDIAL_RECOMMENDED = 19,
  }

  export enum RedialReasonCase { 
    _REDIAL_REASON_NOT_SET = 0,
    REDIAL_REASON = 20,
  }

  export enum AnsweringMachineDetectionEndDescriptionCase { 
    _ANSWERING_MACHINE_DETECTION_END_DESCRIPTION_NOT_SET = 0,
    ANSWERING_MACHINE_DETECTION_END_DESCRIPTION = 21,
  }
}

export class CallFilter extends jspb.Message {
  getCallNamesList(): Array<string>;
  setCallNamesList(value: Array<string>): CallFilter;
  clearCallNamesList(): CallFilter;
  addCallNames(value: string, index?: number): CallFilter;

  getNluSessionNamesList(): Array<string>;
  setNluSessionNamesList(value: Array<string>): CallFilter;
  clearNluSessionNamesList(): CallFilter;
  addNluSessionNames(value: string, index?: number): CallFilter;

  getSipAccountsList(): Array<string>;
  setSipAccountsList(value: Array<string>): CallFilter;
  clearSipAccountsList(): CallFilter;
  addSipAccounts(value: string, index?: number): CallFilter;

  getPhoneNumbersList(): Array<string>;
  setPhoneNumbersList(value: Array<string>): CallFilter;
  clearPhoneNumbersList(): CallFilter;
  addPhoneNumbers(value: string, index?: number): CallFilter;

  getContainerNamesList(): Array<string>;
  setContainerNamesList(value: Array<string>): CallFilter;
  clearContainerNamesList(): CallFilter;
  addContainerNames(value: string, index?: number): CallFilter;

  getSipPortsList(): Array<string>;
  setSipPortsList(value: Array<string>): CallFilter;
  clearSipPortsList(): CallFilter;
  addSipPorts(value: string, index?: number): CallFilter;

  getCsiPortsList(): Array<string>;
  setCsiPortsList(value: Array<string>): CallFilter;
  clearCsiPortsList(): CallFilter;
  addCsiPorts(value: string, index?: number): CallFilter;

  getCallTypesList(): Array<CallType>;
  setCallTypesList(value: Array<CallType>): CallFilter;
  clearCallTypesList(): CallFilter;
  addCallTypes(value: CallType, index?: number): CallFilter;

  getSipStatusTypesList(): Array<ondewo_sip_sip_pb.SipStatus.StatusType>;
  setSipStatusTypesList(value: Array<ondewo_sip_sip_pb.SipStatus.StatusType>): CallFilter;
  clearSipStatusTypesList(): CallFilter;
  addSipStatusTypes(value: ondewo_sip_sip_pb.SipStatus.StatusType, index?: number): CallFilter;

  getCallStatus(): CallStatus;
  setCallStatus(value: CallStatus): CallFilter;
  hasCallStatus(): boolean;
  clearCallStatus(): CallFilter;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CallFilter;
  hasStartTime(): boolean;
  clearStartTime(): CallFilter;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CallFilter;
  hasEndTime(): boolean;
  clearEndTime(): CallFilter;

  getDurationInSMin(): number;
  setDurationInSMin(value: number): CallFilter;
  hasDurationInSMin(): boolean;
  clearDurationInSMin(): CallFilter;

  getDurationInSMax(): number;
  setDurationInSMax(value: number): CallFilter;
  hasDurationInSMax(): boolean;
  clearDurationInSMax(): CallFilter;

  getPlatformsList(): Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
  setPlatformsList(value: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>): CallFilter;
  clearPlatformsList(): CallFilter;
  addPlatforms(value: ondewo_nlu_intent_pb.Intent.Message.Platform, index?: number): CallFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CallFilter): CallFilter.AsObject;
  static serializeBinaryToWriter(message: CallFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallFilter;
  static deserializeBinaryFromReader(message: CallFilter, reader: jspb.BinaryReader): CallFilter;
}

export namespace CallFilter {
  export type AsObject = {
    callNamesList: Array<string>,
    nluSessionNamesList: Array<string>,
    sipAccountsList: Array<string>,
    phoneNumbersList: Array<string>,
    containerNamesList: Array<string>,
    sipPortsList: Array<string>,
    csiPortsList: Array<string>,
    callTypesList: Array<CallType>,
    sipStatusTypesList: Array<ondewo_sip_sip_pb.SipStatus.StatusType>,
    callStatus?: CallStatus,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    durationInSMin?: number,
    durationInSMax?: number,
    platformsList: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>,
  }

  export enum CallStatusCase { 
    _CALL_STATUS_NOT_SET = 0,
    CALL_STATUS = 10,
  }

  export enum StartTimeCase { 
    _START_TIME_NOT_SET = 0,
    START_TIME = 11,
  }

  export enum EndTimeCase { 
    _END_TIME_NOT_SET = 0,
    END_TIME = 12,
  }

  export enum DurationInSMinCase { 
    _DURATION_IN_S_MIN_NOT_SET = 0,
    DURATION_IN_S_MIN = 13,
  }

  export enum DurationInSMaxCase { 
    _DURATION_IN_S_MAX_NOT_SET = 0,
    DURATION_IN_S_MAX = 14,
  }
}

export class ListCallsRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): ListCallsRequest;

  getCallView(): CallView;
  setCallView(value: CallView): ListCallsRequest;
  hasCallView(): boolean;
  clearCallView(): ListCallsRequest;

  getCallFilter(): CallFilter | undefined;
  setCallFilter(value?: CallFilter): ListCallsRequest;
  hasCallFilter(): boolean;
  clearCallFilter(): ListCallsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCallsRequest;
  hasPageToken(): boolean;
  clearPageToken(): ListCallsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallsRequest): ListCallsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallsRequest;
  static deserializeBinaryFromReader(message: ListCallsRequest, reader: jspb.BinaryReader): ListCallsRequest;
}

export namespace ListCallsRequest {
  export type AsObject = {
    vtsiProjectName: string,
    callView?: CallView,
    callFilter?: CallFilter.AsObject,
    pageToken?: string,
  }

  export enum CallViewCase { 
    _CALL_VIEW_NOT_SET = 0,
    CALL_VIEW = 2,
  }

  export enum CallFilterCase { 
    _CALL_FILTER_NOT_SET = 0,
    CALL_FILTER = 3,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 4,
  }
}

export class ListCallsResponse extends jspb.Message {
  getCallsList(): Array<Call>;
  setCallsList(value: Array<Call>): ListCallsResponse;
  clearCallsList(): ListCallsResponse;
  addCalls(value?: Call, index?: number): Call;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCallsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCallsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCallsResponse): ListCallsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCallsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCallsResponse;
  static deserializeBinaryFromReader(message: ListCallsResponse, reader: jspb.BinaryReader): ListCallsResponse;
}

export namespace ListCallsResponse {
  export type AsObject = {
    callsList: Array<Call.AsObject>,
    nextPageToken: string,
  }
}

export class AllServicesStatuses extends jspb.Message {
  getStatusSip(): ServiceStatus | undefined;
  setStatusSip(value?: ServiceStatus): AllServicesStatuses;
  hasStatusSip(): boolean;
  clearStatusSip(): AllServicesStatuses;

  getStatusAsterisk(): ServiceStatus | undefined;
  setStatusAsterisk(value?: ServiceStatus): AllServicesStatuses;
  hasStatusAsterisk(): boolean;
  clearStatusAsterisk(): AllServicesStatuses;

  getStatusNlu(): ServiceStatus | undefined;
  setStatusNlu(value?: ServiceStatus): AllServicesStatuses;
  hasStatusNlu(): boolean;
  clearStatusNlu(): AllServicesStatuses;

  getStatusStt(): ServiceStatus | undefined;
  setStatusStt(value?: ServiceStatus): AllServicesStatuses;
  hasStatusStt(): boolean;
  clearStatusStt(): AllServicesStatuses;

  getStatusTts(): ServiceStatus | undefined;
  setStatusTts(value?: ServiceStatus): AllServicesStatuses;
  hasStatusTts(): boolean;
  clearStatusTts(): AllServicesStatuses;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllServicesStatuses.AsObject;
  static toObject(includeInstance: boolean, msg: AllServicesStatuses): AllServicesStatuses.AsObject;
  static serializeBinaryToWriter(message: AllServicesStatuses, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllServicesStatuses;
  static deserializeBinaryFromReader(message: AllServicesStatuses, reader: jspb.BinaryReader): AllServicesStatuses;
}

export namespace AllServicesStatuses {
  export type AsObject = {
    statusSip?: ServiceStatus.AsObject,
    statusAsterisk?: ServiceStatus.AsObject,
    statusNlu?: ServiceStatus.AsObject,
    statusStt?: ServiceStatus.AsObject,
    statusTts?: ServiceStatus.AsObject,
  }
}

export class ServiceStatus extends jspb.Message {
  getHealthy(): boolean;
  setHealthy(value: boolean): ServiceStatus;

  getErrorMessage(): string;
  setErrorMessage(value: string): ServiceStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceStatus): ServiceStatus.AsObject;
  static serializeBinaryToWriter(message: ServiceStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceStatus;
  static deserializeBinaryFromReader(message: ServiceStatus, reader: jspb.BinaryReader): ServiceStatus;
}

export namespace ServiceStatus {
  export type AsObject = {
    healthy: boolean,
    errorMessage: string,
  }
}

export class CallResourceStatus extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): CallResourceStatus;

  getCallType(): CallType;
  setCallType(value: CallType): CallResourceStatus;

  getCallName(): string;
  setCallName(value: string): CallResourceStatus;

  getActive(): boolean;
  setActive(value: boolean): CallResourceStatus;

  getSipStatusType(): ondewo_sip_sip_pb.SipStatus.StatusType;
  setSipStatusType(value: ondewo_sip_sip_pb.SipStatus.StatusType): CallResourceStatus;

  getSipStatusDescription(): string;
  setSipStatusDescription(value: string): CallResourceStatus;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CallResourceStatus;
  hasStartTime(): boolean;
  clearStartTime(): CallResourceStatus;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CallResourceStatus;
  hasEndTime(): boolean;
  clearEndTime(): CallResourceStatus;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): CallResourceStatus;

  getScheduledCallerStatus(): ScheduledCallerStatus;
  setScheduledCallerStatus(value: ScheduledCallerStatus): CallResourceStatus;

  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): CallResourceStatus;
  hasScheduledTime(): boolean;
  clearScheduledTime(): CallResourceStatus;

  getCampaignName(): string;
  setCampaignName(value: string): CallResourceStatus;

  getErrorMessage(): string;
  setErrorMessage(value: string): CallResourceStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallResourceStatus.AsObject;
  static toObject(includeInstance: boolean, msg: CallResourceStatus): CallResourceStatus.AsObject;
  static serializeBinaryToWriter(message: CallResourceStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallResourceStatus;
  static deserializeBinaryFromReader(message: CallResourceStatus, reader: jspb.BinaryReader): CallResourceStatus;
}

export namespace CallResourceStatus {
  export type AsObject = {
    resourceName: string,
    callType: CallType,
    callName: string,
    active: boolean,
    sipStatusType: ondewo_sip_sip_pb.SipStatus.StatusType,
    sipStatusDescription: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    phoneNumber: string,
    scheduledCallerStatus: ScheduledCallerStatus,
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    campaignName: string,
    errorMessage: string,
  }
}

export class StreamCallerStatusRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StreamCallerStatusRequest;

  getCallerNamesList(): Array<string>;
  setCallerNamesList(value: Array<string>): StreamCallerStatusRequest;
  clearCallerNamesList(): StreamCallerStatusRequest;
  addCallerNames(value: string, index?: number): StreamCallerStatusRequest;

  getActiveOnly(): boolean;
  setActiveOnly(value: boolean): StreamCallerStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCallerStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCallerStatusRequest): StreamCallerStatusRequest.AsObject;
  static serializeBinaryToWriter(message: StreamCallerStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCallerStatusRequest;
  static deserializeBinaryFromReader(message: StreamCallerStatusRequest, reader: jspb.BinaryReader): StreamCallerStatusRequest;
}

export namespace StreamCallerStatusRequest {
  export type AsObject = {
    vtsiProjectName: string,
    callerNamesList: Array<string>,
    activeOnly: boolean,
  }
}

export class StreamListenerStatusRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StreamListenerStatusRequest;

  getListenerNamesList(): Array<string>;
  setListenerNamesList(value: Array<string>): StreamListenerStatusRequest;
  clearListenerNamesList(): StreamListenerStatusRequest;
  addListenerNames(value: string, index?: number): StreamListenerStatusRequest;

  getActiveOnly(): boolean;
  setActiveOnly(value: boolean): StreamListenerStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamListenerStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamListenerStatusRequest): StreamListenerStatusRequest.AsObject;
  static serializeBinaryToWriter(message: StreamListenerStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamListenerStatusRequest;
  static deserializeBinaryFromReader(message: StreamListenerStatusRequest, reader: jspb.BinaryReader): StreamListenerStatusRequest;
}

export namespace StreamListenerStatusRequest {
  export type AsObject = {
    vtsiProjectName: string,
    listenerNamesList: Array<string>,
    activeOnly: boolean,
  }
}

export class StreamScheduledCallerStatusRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StreamScheduledCallerStatusRequest;

  getScheduledCallerNamesList(): Array<string>;
  setScheduledCallerNamesList(value: Array<string>): StreamScheduledCallerStatusRequest;
  clearScheduledCallerNamesList(): StreamScheduledCallerStatusRequest;
  addScheduledCallerNames(value: string, index?: number): StreamScheduledCallerStatusRequest;

  getStatusesList(): Array<ScheduledCallerStatus>;
  setStatusesList(value: Array<ScheduledCallerStatus>): StreamScheduledCallerStatusRequest;
  clearStatusesList(): StreamScheduledCallerStatusRequest;
  addStatuses(value: ScheduledCallerStatus, index?: number): StreamScheduledCallerStatusRequest;

  getCampaignName(): string;
  setCampaignName(value: string): StreamScheduledCallerStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamScheduledCallerStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamScheduledCallerStatusRequest): StreamScheduledCallerStatusRequest.AsObject;
  static serializeBinaryToWriter(message: StreamScheduledCallerStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamScheduledCallerStatusRequest;
  static deserializeBinaryFromReader(message: StreamScheduledCallerStatusRequest, reader: jspb.BinaryReader): StreamScheduledCallerStatusRequest;
}

export namespace StreamScheduledCallerStatusRequest {
  export type AsObject = {
    vtsiProjectName: string,
    scheduledCallerNamesList: Array<string>,
    statusesList: Array<ScheduledCallerStatus>,
    campaignName: string,
  }
}

export class StreamCallResourceStatusResponse extends jspb.Message {
  getStatusesList(): Array<CallResourceStatus>;
  setStatusesList(value: Array<CallResourceStatus>): StreamCallResourceStatusResponse;
  clearStatusesList(): StreamCallResourceStatusResponse;
  addStatuses(value?: CallResourceStatus, index?: number): CallResourceStatus;

  getRemovedResourceNamesList(): Array<string>;
  setRemovedResourceNamesList(value: Array<string>): StreamCallResourceStatusResponse;
  clearRemovedResourceNamesList(): StreamCallResourceStatusResponse;
  addRemovedResourceNames(value: string, index?: number): StreamCallResourceStatusResponse;

  getSnapshot(): boolean;
  setSnapshot(value: boolean): StreamCallResourceStatusResponse;

  getSnapshotTruncated(): boolean;
  setSnapshotTruncated(value: boolean): StreamCallResourceStatusResponse;

  getEndReason(): string;
  setEndReason(value: string): StreamCallResourceStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCallResourceStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCallResourceStatusResponse): StreamCallResourceStatusResponse.AsObject;
  static serializeBinaryToWriter(message: StreamCallResourceStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCallResourceStatusResponse;
  static deserializeBinaryFromReader(message: StreamCallResourceStatusResponse, reader: jspb.BinaryReader): StreamCallResourceStatusResponse;
}

export namespace StreamCallResourceStatusResponse {
  export type AsObject = {
    statusesList: Array<CallResourceStatus.AsObject>,
    removedResourceNamesList: Array<string>,
    snapshot: boolean,
    snapshotTruncated: boolean,
    endReason: string,
  }
}

export enum ScheduledCallerStatus { 
  SCHEDULED_CALLER_STATUS_UNSPECIFIED = 0,
  SCHEDULED_CALLER_STATUS_PENDING = 1,
  SCHEDULED_CALLER_STATUS_FIRING = 2,
  SCHEDULED_CALLER_STATUS_DONE = 3,
  SCHEDULED_CALLER_STATUS_FAILED = 4,
  SCHEDULED_CALLER_STATUS_CANCELLED = 5,
}
export enum TransferMode { 
  TRANSFER_MODE_UNSPECIFIED = 0,
  TRANSFER_MODE_BLIND = 1,
  TRANSFER_MODE_WARM = 2,
}
export enum TransferOutcome { 
  TRANSFER_OUTCOME_UNSPECIFIED = 0,
  TRANSFER_OUTCOME_ACCEPTED = 1,
  TRANSFER_OUTCOME_PENDING = 2,
  TRANSFER_OUTCOME_TARGET_INVALID = 3,
  TRANSFER_OUTCOME_REFER_REJECTED = 4,
  TRANSFER_OUTCOME_TIMEOUT = 5,
  TRANSFER_OUTCOME_CALL_ENDED = 6,
  TRANSFER_OUTCOME_CALL_SCOPE_MISMATCH = 7,
  TRANSFER_OUTCOME_SIP_UNREACHABLE = 8,
}
export enum CallMediaSetting { 
  CALL_MEDIA_SETTING_UNCHANGED = 0,
  CALL_MEDIA_SETTING_ON = 1,
  CALL_MEDIA_SETTING_OFF = 2,
}
export enum ParticipantMode { 
  PARTICIPANT_MODE_UNSPECIFIED = 0,
  PARTICIPANT_MODE_CONFERENCE = 1,
  PARTICIPANT_MODE_MONITOR = 2,
}
export enum BotPolicyOnJoin { 
  BOT_POLICY_ON_JOIN_UNSPECIFIED = 0,
  BOT_POLICY_ON_JOIN_PAUSE = 1,
  BOT_POLICY_ON_JOIN_PAUSE_LISTENING = 2,
  BOT_POLICY_ON_JOIN_KEEP = 3,
}
export enum ParticipantState { 
  PARTICIPANT_STATE_UNSPECIFIED = 0,
  PARTICIPANT_STATE_RINGING = 1,
  PARTICIPANT_STATE_JOINED = 2,
  PARTICIPANT_STATE_FAILED = 3,
  PARTICIPANT_STATE_LEFT = 4,
}
export enum CallAudioMode { 
  CALL_AUDIO_MODE_UNSPECIFIED = 0,
  CALL_AUDIO_MODE_LISTEN = 1,
  CALL_AUDIO_MODE_TALK = 2,
}
export enum CallAudioEndReason { 
  CALL_AUDIO_END_REASON_UNSPECIFIED = 0,
  CALL_AUDIO_END_REASON_CLIENT_CLOSED = 1,
  CALL_AUDIO_END_REASON_CALL_ENDED = 2,
  CALL_AUDIO_END_REASON_CALL_TRANSFERRED = 3,
  CALL_AUDIO_END_REASON_MAX_DURATION = 4,
  CALL_AUDIO_END_REASON_STALLED = 5,
  CALL_AUDIO_END_REASON_INTERNAL = 6,
}
export enum CallView { 
  MINIMUM = 0,
  SHALLOW = 1,
  FULL = 2,
}
export enum CallStatus { 
  CALL_STATUS_UNSPECIFIED = 0,
  CALL_STATUS_ACTIVE = 1,
  CALL_STATUS_INACTIVE = 2,
}
export enum CallType { 
  BOTH = 0,
  LISTENER = 1,
  CALLER = 2,
  SCHEDULED_CALLER = 3,
}
