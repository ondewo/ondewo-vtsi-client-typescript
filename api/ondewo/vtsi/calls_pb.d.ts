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
    activateControlMessages: boolean,
  }
}

export class AudioObjectStorageConfig extends jspb.Message {
  getActivateAudioObjectStorage(): boolean;
  setActivateAudioObjectStorage(value: boolean): AudioObjectStorageConfig;

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
    activateAudioObjectStorage: boolean,
    audioObjectStorageServicesActivationConfig?: AudioObjectStorageServicesActivationConfig.AsObject,
  }
}

export class AudioObjectStorageServicesActivationConfig extends jspb.Message {
  getActivateS2t(): boolean;
  setActivateS2t(value: boolean): AudioObjectStorageServicesActivationConfig;

  getActivateT2s(): boolean;
  setActivateT2s(value: boolean): AudioObjectStorageServicesActivationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioObjectStorageServicesActivationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AudioObjectStorageServicesActivationConfig): AudioObjectStorageServicesActivationConfig.AsObject;
  static serializeBinaryToWriter(message: AudioObjectStorageServicesActivationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioObjectStorageServicesActivationConfig;
  static deserializeBinaryFromReader(message: AudioObjectStorageServicesActivationConfig, reader: jspb.BinaryReader): AudioObjectStorageServicesActivationConfig;
}

export namespace AudioObjectStorageServicesActivationConfig {
  export type AsObject = {
    activateS2t: boolean,
    activateT2s: boolean,
  }
}

export class MessageBrokerConfig extends jspb.Message {
  getActivateMessageBroker(): boolean;
  setActivateMessageBroker(value: boolean): MessageBrokerConfig;

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
    activateMessageBroker: boolean,
    messageBrokerServicesActivationConfig?: MessageBrokerServicesActivationConfig.AsObject,
    rabbitMqConfig?: RabbitMqConfig.AsObject,
  }

  export enum MessageBrokerConfigCase { 
    MESSAGE_BROKER_CONFIG_NOT_SET = 0,
    RABBIT_MQ_CONFIG = 3,
  }
}

export class MessageBrokerServicesActivationConfig extends jspb.Message {
  getActivateS2t(): boolean;
  setActivateS2t(value: boolean): MessageBrokerServicesActivationConfig;

  getActivateNlu(): boolean;
  setActivateNlu(value: boolean): MessageBrokerServicesActivationConfig;

  getActivateT2s(): boolean;
  setActivateT2s(value: boolean): MessageBrokerServicesActivationConfig;

  getActivateSip(): boolean;
  setActivateSip(value: boolean): MessageBrokerServicesActivationConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageBrokerServicesActivationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: MessageBrokerServicesActivationConfig): MessageBrokerServicesActivationConfig.AsObject;
  static serializeBinaryToWriter(message: MessageBrokerServicesActivationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageBrokerServicesActivationConfig;
  static deserializeBinaryFromReader(message: MessageBrokerServicesActivationConfig, reader: jspb.BinaryReader): MessageBrokerServicesActivationConfig;
}

export namespace MessageBrokerServicesActivationConfig {
  export type AsObject = {
    activateS2t: boolean,
    activateNlu: boolean,
    activateT2s: boolean,
    activateSip: boolean,
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
