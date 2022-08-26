import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_nlu_context_pb from '../../ondewo/nlu/context_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as ondewo_s2t_speech$to$text_pb from '../../ondewo/s2t/speech-to-text_pb';
import * as ondewo_t2s_text$to$speech_pb from '../../ondewo/t2s/text-to-speech_pb';
import * as ondewo_sip_sip_pb from '../../ondewo/sip/sip_pb';


export class ProjectConfigs extends jspb.Message {
  getMaxCallers(): number;
  setMaxCallers(value: number): ProjectConfigs;

  getMaxListeners(): number;
  setMaxListeners(value: number): ProjectConfigs;

  getAsteriskConfigs(): AsteriskConfigs | undefined;
  setAsteriskConfigs(value?: AsteriskConfigs): ProjectConfigs;
  hasAsteriskConfigs(): boolean;
  clearAsteriskConfigs(): ProjectConfigs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectConfigs.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectConfigs): ProjectConfigs.AsObject;
  static serializeBinaryToWriter(message: ProjectConfigs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectConfigs;
  static deserializeBinaryFromReader(message: ProjectConfigs, reader: jspb.BinaryReader): ProjectConfigs;
}

export namespace ProjectConfigs {
  export type AsObject = {
    maxCallers: number,
    maxListeners: number,
    asteriskConfigs?: AsteriskConfigs.AsObject,
  }
}

export class AsteriskConfigsVariables extends jspb.Message {
  getSipTrunkUsername(): string;
  setSipTrunkUsername(value: string): AsteriskConfigsVariables;

  getSipTrunkPassword(): string;
  setSipTrunkPassword(value: string): AsteriskConfigsVariables;

  getSipTrunkHost(): string;
  setSipTrunkHost(value: string): AsteriskConfigsVariables;

  getTransferNumber(): string;
  setTransferNumber(value: string): AsteriskConfigsVariables;

  getTransferNumberHost(): string;
  setTransferNumberHost(value: string): AsteriskConfigsVariables;

  getSipTrunkPhoneNumber(): string;
  setSipTrunkPhoneNumber(value: string): AsteriskConfigsVariables;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsteriskConfigsVariables.AsObject;
  static toObject(includeInstance: boolean, msg: AsteriskConfigsVariables): AsteriskConfigsVariables.AsObject;
  static serializeBinaryToWriter(message: AsteriskConfigsVariables, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsteriskConfigsVariables;
  static deserializeBinaryFromReader(message: AsteriskConfigsVariables, reader: jspb.BinaryReader): AsteriskConfigsVariables;
}

export namespace AsteriskConfigsVariables {
  export type AsObject = {
    sipTrunkUsername: string,
    sipTrunkPassword: string,
    sipTrunkHost: string,
    transferNumber: string,
    transferNumberHost: string,
    sipTrunkPhoneNumber: string,
  }
}

export class AsteriskConfigsFiles extends jspb.Message {
  getSipConfFileString(): string;
  setSipConfFileString(value: string): AsteriskConfigsFiles;

  getExtensionsConfFileString(): string;
  setExtensionsConfFileString(value: string): AsteriskConfigsFiles;

  getQueuesConfFileString(): string;
  setQueuesConfFileString(value: string): AsteriskConfigsFiles;

  getModulesConfFileString(): string;
  setModulesConfFileString(value: string): AsteriskConfigsFiles;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsteriskConfigsFiles.AsObject;
  static toObject(includeInstance: boolean, msg: AsteriskConfigsFiles): AsteriskConfigsFiles.AsObject;
  static serializeBinaryToWriter(message: AsteriskConfigsFiles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsteriskConfigsFiles;
  static deserializeBinaryFromReader(message: AsteriskConfigsFiles, reader: jspb.BinaryReader): AsteriskConfigsFiles;
}

export namespace AsteriskConfigsFiles {
  export type AsObject = {
    sipConfFileString: string,
    extensionsConfFileString: string,
    queuesConfFileString: string,
    modulesConfFileString: string,
  }
}

export class AsteriskConfigs extends jspb.Message {
  getAsteriskConfigsVariables(): AsteriskConfigsVariables | undefined;
  setAsteriskConfigsVariables(value?: AsteriskConfigsVariables): AsteriskConfigs;
  hasAsteriskConfigsVariables(): boolean;
  clearAsteriskConfigsVariables(): AsteriskConfigs;

  getAsteriskConfigsFiles(): AsteriskConfigsFiles | undefined;
  setAsteriskConfigsFiles(value?: AsteriskConfigsFiles): AsteriskConfigs;
  hasAsteriskConfigsFiles(): boolean;
  clearAsteriskConfigsFiles(): AsteriskConfigs;

  getAsteriskConfigsTargetDirectoryName(): string;
  setAsteriskConfigsTargetDirectoryName(value: string): AsteriskConfigs;

  getAsteriskPort(): number;
  setAsteriskPort(value: number): AsteriskConfigs;

  getAsteriskConfigsOneofCase(): AsteriskConfigs.AsteriskConfigsOneofCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsteriskConfigs.AsObject;
  static toObject(includeInstance: boolean, msg: AsteriskConfigs): AsteriskConfigs.AsObject;
  static serializeBinaryToWriter(message: AsteriskConfigs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsteriskConfigs;
  static deserializeBinaryFromReader(message: AsteriskConfigs, reader: jspb.BinaryReader): AsteriskConfigs;
}

export namespace AsteriskConfigs {
  export type AsObject = {
    asteriskConfigsVariables?: AsteriskConfigsVariables.AsObject,
    asteriskConfigsFiles?: AsteriskConfigsFiles.AsObject,
    asteriskConfigsTargetDirectoryName: string,
    asteriskPort: number,
  }

  export enum AsteriskConfigsOneofCase { 
    ASTERISK_CONFIGS_ONEOF_NOT_SET = 0,
    ASTERISK_CONFIGS_VARIABLES = 1,
    ASTERISK_CONFIGS_FILES = 2,
    ASTERISK_CONFIGS_TARGET_DIRECTORY_NAME = 3,
  }
}

export class CreateProjectConfigsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): CreateProjectConfigsRequest;

  getProjectConfigs(): ProjectConfigs | undefined;
  setProjectConfigs(value?: ProjectConfigs): CreateProjectConfigsRequest;
  hasProjectConfigs(): boolean;
  clearProjectConfigs(): CreateProjectConfigsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectConfigsRequest): CreateProjectConfigsRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProjectConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectConfigsRequest;
  static deserializeBinaryFromReader(message: CreateProjectConfigsRequest, reader: jspb.BinaryReader): CreateProjectConfigsRequest;
}

export namespace CreateProjectConfigsRequest {
  export type AsObject = {
    projectId: string,
    projectConfigs?: ProjectConfigs.AsObject,
  }
}

export class GetProjectConfigsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): GetProjectConfigsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectConfigsRequest): GetProjectConfigsRequest.AsObject;
  static serializeBinaryToWriter(message: GetProjectConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectConfigsRequest;
  static deserializeBinaryFromReader(message: GetProjectConfigsRequest, reader: jspb.BinaryReader): GetProjectConfigsRequest;
}

export namespace GetProjectConfigsRequest {
  export type AsObject = {
    projectId: string,
  }
}

export class GetProjectConfigsResponse extends jspb.Message {
  getProjectConfigs(): ProjectConfigs | undefined;
  setProjectConfigs(value?: ProjectConfigs): GetProjectConfigsResponse;
  hasProjectConfigs(): boolean;
  clearProjectConfigs(): GetProjectConfigsResponse;

  getErrorMessages(): string;
  setErrorMessages(value: string): GetProjectConfigsResponse;

  getRequest(): GetProjectConfigsRequest | undefined;
  setRequest(value?: GetProjectConfigsRequest): GetProjectConfigsResponse;
  hasRequest(): boolean;
  clearRequest(): GetProjectConfigsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectConfigsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectConfigsResponse): GetProjectConfigsResponse.AsObject;
  static serializeBinaryToWriter(message: GetProjectConfigsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectConfigsResponse;
  static deserializeBinaryFromReader(message: GetProjectConfigsResponse, reader: jspb.BinaryReader): GetProjectConfigsResponse;
}

export namespace GetProjectConfigsResponse {
  export type AsObject = {
    projectConfigs?: ProjectConfigs.AsObject,
    errorMessages: string,
    request?: GetProjectConfigsRequest.AsObject,
  }
}

export class UpdateProjectConfigsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): UpdateProjectConfigsRequest;

  getProjectConfigs(): ProjectConfigs | undefined;
  setProjectConfigs(value?: ProjectConfigs): UpdateProjectConfigsRequest;
  hasProjectConfigs(): boolean;
  clearProjectConfigs(): UpdateProjectConfigsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectConfigsRequest): UpdateProjectConfigsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectConfigsRequest;
  static deserializeBinaryFromReader(message: UpdateProjectConfigsRequest, reader: jspb.BinaryReader): UpdateProjectConfigsRequest;
}

export namespace UpdateProjectConfigsRequest {
  export type AsObject = {
    projectId: string,
    projectConfigs?: ProjectConfigs.AsObject,
  }
}

export class DeleteProjectConfigsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DeleteProjectConfigsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectConfigsRequest): DeleteProjectConfigsRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectConfigsRequest;
  static deserializeBinaryFromReader(message: DeleteProjectConfigsRequest, reader: jspb.BinaryReader): DeleteProjectConfigsRequest;
}

export namespace DeleteProjectConfigsRequest {
  export type AsObject = {
    projectId: string,
  }
}

export class DeployProjectRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): DeployProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeployProjectRequest): DeployProjectRequest.AsObject;
  static serializeBinaryToWriter(message: DeployProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployProjectRequest;
  static deserializeBinaryFromReader(message: DeployProjectRequest, reader: jspb.BinaryReader): DeployProjectRequest;
}

export namespace DeployProjectRequest {
  export type AsObject = {
    projectId: string,
  }
}

export class UndeployProjectRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): UndeployProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeployProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeployProjectRequest): UndeployProjectRequest.AsObject;
  static serializeBinaryToWriter(message: UndeployProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeployProjectRequest;
  static deserializeBinaryFromReader(message: UndeployProjectRequest, reader: jspb.BinaryReader): UndeployProjectRequest;
}

export namespace UndeployProjectRequest {
  export type AsObject = {
    projectId: string,
  }
}

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

export class NLUConfig extends jspb.Message {
  getBaseConfig(): BaseServiceConfig | undefined;
  setBaseConfig(value?: BaseServiceConfig): NLUConfig;
  hasBaseConfig(): boolean;
  clearBaseConfig(): NLUConfig;

  getCredentials(): Credentials | undefined;
  setCredentials(value?: Credentials): NLUConfig;
  hasCredentials(): boolean;
  clearCredentials(): NLUConfig;

  getAuthToken(): string;
  setAuthToken(value: string): NLUConfig;

  getLanguageCode(): string;
  setLanguageCode(value: string): NLUConfig;

  getInitialIntent(): string;
  setInitialIntent(value: string): NLUConfig;

  getContextsList(): Array<ondewo_nlu_context_pb.Context>;
  setContextsList(value: Array<ondewo_nlu_context_pb.Context>): NLUConfig;
  clearContextsList(): NLUConfig;
  addContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

  getAuthenticationCase(): NLUConfig.AuthenticationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NLUConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NLUConfig): NLUConfig.AsObject;
  static serializeBinaryToWriter(message: NLUConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NLUConfig;
  static deserializeBinaryFromReader(message: NLUConfig, reader: jspb.BinaryReader): NLUConfig;
}

export namespace NLUConfig {
  export type AsObject = {
    baseConfig?: BaseServiceConfig.AsObject,
    credentials?: Credentials.AsObject,
    authToken: string,
    languageCode: string,
    initialIntent: string,
    contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
  }

  export enum AuthenticationCase { 
    AUTHENTICATION_NOT_SET = 0,
    CREDENTIALS = 2,
    AUTH_TOKEN = 3,
  }
}

export class T2SConfig extends jspb.Message {
  getBaseConfig(): BaseServiceConfig | undefined;
  setBaseConfig(value?: BaseServiceConfig): T2SConfig;
  hasBaseConfig(): boolean;
  clearBaseConfig(): T2SConfig;

  getT2sConfig(): ondewo_t2s_text$to$speech_pb.RequestConfig | undefined;
  setT2sConfig(value?: ondewo_t2s_text$to$speech_pb.RequestConfig): T2SConfig;
  hasT2sConfig(): boolean;
  clearT2sConfig(): T2SConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2SConfig.AsObject;
  static toObject(includeInstance: boolean, msg: T2SConfig): T2SConfig.AsObject;
  static serializeBinaryToWriter(message: T2SConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2SConfig;
  static deserializeBinaryFromReader(message: T2SConfig, reader: jspb.BinaryReader): T2SConfig;
}

export namespace T2SConfig {
  export type AsObject = {
    baseConfig?: BaseServiceConfig.AsObject,
    t2sConfig?: ondewo_t2s_text$to$speech_pb.RequestConfig.AsObject,
  }
}

export class S2TConfig extends jspb.Message {
  getBaseConfig(): BaseServiceConfig | undefined;
  setBaseConfig(value?: BaseServiceConfig): S2TConfig;
  hasBaseConfig(): boolean;
  clearBaseConfig(): S2TConfig;

  getS2tConfig(): ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig | undefined;
  setS2tConfig(value?: ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig): S2TConfig;
  hasS2tConfig(): boolean;
  clearS2tConfig(): S2TConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S2TConfig.AsObject;
  static toObject(includeInstance: boolean, msg: S2TConfig): S2TConfig.AsObject;
  static serializeBinaryToWriter(message: S2TConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S2TConfig;
  static deserializeBinaryFromReader(message: S2TConfig, reader: jspb.BinaryReader): S2TConfig;
}

export namespace S2TConfig {
  export type AsObject = {
    baseConfig?: BaseServiceConfig.AsObject,
    s2tConfig?: ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig.AsObject,
  }
}

export class AsteriskConfig extends jspb.Message {
  getBaseConfig(): BaseServiceConfig | undefined;
  setBaseConfig(value?: BaseServiceConfig): AsteriskConfig;
  hasBaseConfig(): boolean;
  clearBaseConfig(): AsteriskConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsteriskConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AsteriskConfig): AsteriskConfig.AsObject;
  static serializeBinaryToWriter(message: AsteriskConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsteriskConfig;
  static deserializeBinaryFromReader(message: AsteriskConfig, reader: jspb.BinaryReader): AsteriskConfig;
}

export namespace AsteriskConfig {
  export type AsObject = {
    baseConfig?: BaseServiceConfig.AsObject,
  }
}

export class CommonServicesConfigs extends jspb.Message {
  getAsteriskConfig(): AsteriskConfig | undefined;
  setAsteriskConfig(value?: AsteriskConfig): CommonServicesConfigs;
  hasAsteriskConfig(): boolean;
  clearAsteriskConfig(): CommonServicesConfigs;

  getCaiConfig(): NLUConfig | undefined;
  setCaiConfig(value?: NLUConfig): CommonServicesConfigs;
  hasCaiConfig(): boolean;
  clearCaiConfig(): CommonServicesConfigs;

  getSttConfig(): S2TConfig | undefined;
  setSttConfig(value?: S2TConfig): CommonServicesConfigs;
  hasSttConfig(): boolean;
  clearSttConfig(): CommonServicesConfigs;

  getTtsConfig(): T2SConfig | undefined;
  setTtsConfig(value?: T2SConfig): CommonServicesConfigs;
  hasTtsConfig(): boolean;
  clearTtsConfig(): CommonServicesConfigs;

  getCsiConfig(): CsiConfig | undefined;
  setCsiConfig(value?: CsiConfig): CommonServicesConfigs;
  hasCsiConfig(): boolean;
  clearCsiConfig(): CommonServicesConfigs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonServicesConfigs.AsObject;
  static toObject(includeInstance: boolean, msg: CommonServicesConfigs): CommonServicesConfigs.AsObject;
  static serializeBinaryToWriter(message: CommonServicesConfigs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonServicesConfigs;
  static deserializeBinaryFromReader(message: CommonServicesConfigs, reader: jspb.BinaryReader): CommonServicesConfigs;
}

export namespace CommonServicesConfigs {
  export type AsObject = {
    asteriskConfig?: AsteriskConfig.AsObject,
    caiConfig?: NLUConfig.AsObject,
    sttConfig?: S2TConfig.AsObject,
    ttsConfig?: T2SConfig.AsObject,
    csiConfig?: CsiConfig.AsObject,
  }
}

export class SIPBaseConfig extends jspb.Message {
  getSipSimVersion(): string;
  setSipSimVersion(value: string): SIPBaseConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SIPBaseConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SIPBaseConfig): SIPBaseConfig.AsObject;
  static serializeBinaryToWriter(message: SIPBaseConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SIPBaseConfig;
  static deserializeBinaryFromReader(message: SIPBaseConfig, reader: jspb.BinaryReader): SIPBaseConfig;
}

export namespace SIPBaseConfig {
  export type AsObject = {
    sipSimVersion: string,
  }
}

export class SIPCallerConfig extends jspb.Message {
  getSipBaseConfig(): SIPBaseConfig | undefined;
  setSipBaseConfig(value?: SIPBaseConfig): SIPCallerConfig;
  hasSipBaseConfig(): boolean;
  clearSipBaseConfig(): SIPCallerConfig;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): SIPCallerConfig;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): SIPCallerConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SIPCallerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SIPCallerConfig): SIPCallerConfig.AsObject;
  static serializeBinaryToWriter(message: SIPCallerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SIPCallerConfig;
  static deserializeBinaryFromReader(message: SIPCallerConfig, reader: jspb.BinaryReader): SIPCallerConfig;
}

export namespace SIPCallerConfig {
  export type AsObject = {
    sipBaseConfig?: SIPBaseConfig.AsObject,
    phoneNumber: string,
    headersMap: Array<[string, string]>,
  }
}

export class CsiConfig extends jspb.Message {
  getS2tCallbacks(): S2tCallbacks | undefined;
  setS2tCallbacks(value?: S2tCallbacks): CsiConfig;
  hasS2tCallbacks(): boolean;
  clearS2tCallbacks(): CsiConfig;

  getNluCallbacks(): NluCallbacks | undefined;
  setNluCallbacks(value?: NluCallbacks): CsiConfig;
  hasNluCallbacks(): boolean;
  clearNluCallbacks(): CsiConfig;

  getT2sCallbacks(): T2sCallbacks | undefined;
  setT2sCallbacks(value?: T2sCallbacks): CsiConfig;
  hasT2sCallbacks(): boolean;
  clearT2sCallbacks(): CsiConfig;

  getAudioObjectStoreConfig(): AudioObjectStorageConfig | undefined;
  setAudioObjectStoreConfig(value?: AudioObjectStorageConfig): CsiConfig;
  hasAudioObjectStoreConfig(): boolean;
  clearAudioObjectStoreConfig(): CsiConfig;

  getMessageBrokerConfig(): MessageBrokerConfig | undefined;
  setMessageBrokerConfig(value?: MessageBrokerConfig): CsiConfig;
  hasMessageBrokerConfig(): boolean;
  clearMessageBrokerConfig(): CsiConfig;

  getActivateControlMessages(): boolean;
  setActivateControlMessages(value: boolean): CsiConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsiConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CsiConfig): CsiConfig.AsObject;
  static serializeBinaryToWriter(message: CsiConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsiConfig;
  static deserializeBinaryFromReader(message: CsiConfig, reader: jspb.BinaryReader): CsiConfig;
}

export namespace CsiConfig {
  export type AsObject = {
    s2tCallbacks?: S2tCallbacks.AsObject,
    nluCallbacks?: NluCallbacks.AsObject,
    t2sCallbacks?: T2sCallbacks.AsObject,
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

  getMinioConfig(): MinioConfig | undefined;
  setMinioConfig(value?: MinioConfig): AudioObjectStorageConfig;
  hasMinioConfig(): boolean;
  clearMinioConfig(): AudioObjectStorageConfig;

  getAudioStorageConfigCase(): AudioObjectStorageConfig.AudioStorageConfigCase;

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
    minioConfig?: MinioConfig.AsObject,
  }

  export enum AudioStorageConfigCase { 
    AUDIO_STORAGE_CONFIG_NOT_SET = 0,
    MINIO_CONFIG = 3,
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

  getPort(): string;
  setPort(value: string): RabbitMqConfig;

  getPort2(): string;
  setPort2(value: string): RabbitMqConfig;

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
    port: string,
    port2: string,
    user: string,
    password: string,
  }
}

export class Endpoint extends jspb.Message {
  getHost(): string;
  setHost(value: string): Endpoint;

  getPort(): string;
  setPort(value: string): Endpoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Endpoint.AsObject;
  static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
  static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Endpoint;
  static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
}

export namespace Endpoint {
  export type AsObject = {
    host: string,
    port: string,
  }
}

export class MinioConfig extends jspb.Message {
  getEndpoint(): Endpoint | undefined;
  setEndpoint(value?: Endpoint): MinioConfig;
  hasEndpoint(): boolean;
  clearEndpoint(): MinioConfig;

  getAccessKey(): string;
  setAccessKey(value: string): MinioConfig;

  getSecretKey(): string;
  setSecretKey(value: string): MinioConfig;

  getSecure(): boolean;
  setSecure(value: boolean): MinioConfig;

  getSessionToken(): string;
  setSessionToken(value: string): MinioConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: MinioConfig): MinioConfig.AsObject;
  static serializeBinaryToWriter(message: MinioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinioConfig;
  static deserializeBinaryFromReader(message: MinioConfig, reader: jspb.BinaryReader): MinioConfig;
}

export namespace MinioConfig {
  export type AsObject = {
    endpoint?: Endpoint.AsObject,
    accessKey: string,
    secretKey: string,
    secure: boolean,
    sessionToken: string,
  }
}

export class S2tCallbacks extends jspb.Message {
  getPreS2tCallbacksList(): Array<string>;
  setPreS2tCallbacksList(value: Array<string>): S2tCallbacks;
  clearPreS2tCallbacksList(): S2tCallbacks;
  addPreS2tCallbacks(value: string, index?: number): S2tCallbacks;

  getPostS2tCallbacksList(): Array<string>;
  setPostS2tCallbacksList(value: Array<string>): S2tCallbacks;
  clearPostS2tCallbacksList(): S2tCallbacks;
  addPostS2tCallbacks(value: string, index?: number): S2tCallbacks;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): S2tCallbacks.AsObject;
  static toObject(includeInstance: boolean, msg: S2tCallbacks): S2tCallbacks.AsObject;
  static serializeBinaryToWriter(message: S2tCallbacks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): S2tCallbacks;
  static deserializeBinaryFromReader(message: S2tCallbacks, reader: jspb.BinaryReader): S2tCallbacks;
}

export namespace S2tCallbacks {
  export type AsObject = {
    preS2tCallbacksList: Array<string>,
    postS2tCallbacksList: Array<string>,
  }
}

export class NluCallbacks extends jspb.Message {
  getPreNluCallbacksList(): Array<string>;
  setPreNluCallbacksList(value: Array<string>): NluCallbacks;
  clearPreNluCallbacksList(): NluCallbacks;
  addPreNluCallbacks(value: string, index?: number): NluCallbacks;

  getPostNluCallbacksList(): Array<string>;
  setPostNluCallbacksList(value: Array<string>): NluCallbacks;
  clearPostNluCallbacksList(): NluCallbacks;
  addPostNluCallbacks(value: string, index?: number): NluCallbacks;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NluCallbacks.AsObject;
  static toObject(includeInstance: boolean, msg: NluCallbacks): NluCallbacks.AsObject;
  static serializeBinaryToWriter(message: NluCallbacks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NluCallbacks;
  static deserializeBinaryFromReader(message: NluCallbacks, reader: jspb.BinaryReader): NluCallbacks;
}

export namespace NluCallbacks {
  export type AsObject = {
    preNluCallbacksList: Array<string>,
    postNluCallbacksList: Array<string>,
  }
}

export class T2sCallbacks extends jspb.Message {
  getPreT2sCallbacksList(): Array<string>;
  setPreT2sCallbacksList(value: Array<string>): T2sCallbacks;
  clearPreT2sCallbacksList(): T2sCallbacks;
  addPreT2sCallbacks(value: string, index?: number): T2sCallbacks;

  getPostT2sCallbacksList(): Array<string>;
  setPostT2sCallbacksList(value: Array<string>): T2sCallbacks;
  clearPostT2sCallbacksList(): T2sCallbacks;
  addPostT2sCallbacks(value: string, index?: number): T2sCallbacks;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sCallbacks.AsObject;
  static toObject(includeInstance: boolean, msg: T2sCallbacks): T2sCallbacks.AsObject;
  static serializeBinaryToWriter(message: T2sCallbacks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sCallbacks;
  static deserializeBinaryFromReader(message: T2sCallbacks, reader: jspb.BinaryReader): T2sCallbacks;
}

export namespace T2sCallbacks {
  export type AsObject = {
    preT2sCallbacksList: Array<string>,
    postT2sCallbacksList: Array<string>,
  }
}

export class StartListenerRequest extends jspb.Message {
  getSipConfig(): SIPBaseConfig | undefined;
  setSipConfig(value?: SIPBaseConfig): StartListenerRequest;
  hasSipConfig(): boolean;
  clearSipConfig(): StartListenerRequest;

  getServicesConfigs(): CommonServicesConfigs | undefined;
  setServicesConfigs(value?: CommonServicesConfigs): StartListenerRequest;
  hasServicesConfigs(): boolean;
  clearServicesConfigs(): StartListenerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartListenerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartListenerRequest): StartListenerRequest.AsObject;
  static serializeBinaryToWriter(message: StartListenerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartListenerRequest;
  static deserializeBinaryFromReader(message: StartListenerRequest, reader: jspb.BinaryReader): StartListenerRequest;
}

export namespace StartListenerRequest {
  export type AsObject = {
    sipConfig?: SIPBaseConfig.AsObject,
    servicesConfigs?: CommonServicesConfigs.AsObject,
  }
}

export class StartCallerRequest extends jspb.Message {
  getSipConfig(): SIPCallerConfig | undefined;
  setSipConfig(value?: SIPCallerConfig): StartCallerRequest;
  hasSipConfig(): boolean;
  clearSipConfig(): StartCallerRequest;

  getServicesConfigs(): CommonServicesConfigs | undefined;
  setServicesConfigs(value?: CommonServicesConfigs): StartCallerRequest;
  hasServicesConfigs(): boolean;
  clearServicesConfigs(): StartCallerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartCallerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartCallerRequest): StartCallerRequest.AsObject;
  static serializeBinaryToWriter(message: StartCallerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartCallerRequest;
  static deserializeBinaryFromReader(message: StartCallerRequest, reader: jspb.BinaryReader): StartCallerRequest;
}

export namespace StartCallerRequest {
  export type AsObject = {
    sipConfig?: SIPCallerConfig.AsObject,
    servicesConfigs?: CommonServicesConfigs.AsObject,
  }
}

export class StartScheduledCallerRequest extends jspb.Message {
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
    request?: StartCallerRequest.AsObject,
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class StartListenersRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): StartListenersRequest;

  getRequestsList(): Array<StartListenerRequest>;
  setRequestsList(value: Array<StartListenerRequest>): StartListenersRequest;
  clearRequestsList(): StartListenersRequest;
  addRequests(value?: StartListenerRequest, index?: number): StartListenerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartListenersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartListenersRequest): StartListenersRequest.AsObject;
  static serializeBinaryToWriter(message: StartListenersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartListenersRequest;
  static deserializeBinaryFromReader(message: StartListenersRequest, reader: jspb.BinaryReader): StartListenersRequest;
}

export namespace StartListenersRequest {
  export type AsObject = {
    projectId: string,
    requestsList: Array<StartListenerRequest.AsObject>,
  }
}

export class StartListenersResponse extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): StartListenersResponse;

  getCallIdsList(): Array<string>;
  setCallIdsList(value: Array<string>): StartListenersResponse;
  clearCallIdsList(): StartListenersResponse;
  addCallIds(value: string, index?: number): StartListenersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartListenersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartListenersResponse): StartListenersResponse.AsObject;
  static serializeBinaryToWriter(message: StartListenersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartListenersResponse;
  static deserializeBinaryFromReader(message: StartListenersResponse, reader: jspb.BinaryReader): StartListenersResponse;
}

export namespace StartListenersResponse {
  export type AsObject = {
    projectId: string,
    callIdsList: Array<string>,
  }
}

export class StartCallersRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): StartCallersRequest;

  getRequestsList(): Array<StartCallerRequest>;
  setRequestsList(value: Array<StartCallerRequest>): StartCallersRequest;
  clearRequestsList(): StartCallersRequest;
  addRequests(value?: StartCallerRequest, index?: number): StartCallerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartCallersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartCallersRequest): StartCallersRequest.AsObject;
  static serializeBinaryToWriter(message: StartCallersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartCallersRequest;
  static deserializeBinaryFromReader(message: StartCallersRequest, reader: jspb.BinaryReader): StartCallersRequest;
}

export namespace StartCallersRequest {
  export type AsObject = {
    projectId: string,
    requestsList: Array<StartCallerRequest.AsObject>,
  }
}

export class StartCallersResponse extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): StartCallersResponse;

  getCallIdsList(): Array<string>;
  setCallIdsList(value: Array<string>): StartCallersResponse;
  clearCallIdsList(): StartCallersResponse;
  addCallIds(value: string, index?: number): StartCallersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartCallersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartCallersResponse): StartCallersResponse.AsObject;
  static serializeBinaryToWriter(message: StartCallersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartCallersResponse;
  static deserializeBinaryFromReader(message: StartCallersResponse, reader: jspb.BinaryReader): StartCallersResponse;
}

export namespace StartCallersResponse {
  export type AsObject = {
    projectId: string,
    callIdsList: Array<string>,
  }
}

export class StartScheduledCallersRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): StartScheduledCallersRequest;

  getRequestsList(): Array<StartScheduledCallerRequest>;
  setRequestsList(value: Array<StartScheduledCallerRequest>): StartScheduledCallersRequest;
  clearRequestsList(): StartScheduledCallersRequest;
  addRequests(value?: StartScheduledCallerRequest, index?: number): StartScheduledCallerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartScheduledCallersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartScheduledCallersRequest): StartScheduledCallersRequest.AsObject;
  static serializeBinaryToWriter(message: StartScheduledCallersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartScheduledCallersRequest;
  static deserializeBinaryFromReader(message: StartScheduledCallersRequest, reader: jspb.BinaryReader): StartScheduledCallersRequest;
}

export namespace StartScheduledCallersRequest {
  export type AsObject = {
    projectId: string,
    requestsList: Array<StartScheduledCallerRequest.AsObject>,
  }
}

export class StopCallsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): StopCallsRequest;

  getCallIdsList(): Array<string>;
  setCallIdsList(value: Array<string>): StopCallsRequest;
  clearCallIdsList(): StopCallsRequest;
  addCallIds(value: string, index?: number): StopCallsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopCallsRequest): StopCallsRequest.AsObject;
  static serializeBinaryToWriter(message: StopCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopCallsRequest;
  static deserializeBinaryFromReader(message: StopCallsRequest, reader: jspb.BinaryReader): StopCallsRequest;
}

export namespace StopCallsRequest {
  export type AsObject = {
    projectId: string,
    callIdsList: Array<string>,
  }
}

export class StopAllCallsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): StopAllCallsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAllCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopAllCallsRequest): StopAllCallsRequest.AsObject;
  static serializeBinaryToWriter(message: StopAllCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAllCallsRequest;
  static deserializeBinaryFromReader(message: StopAllCallsRequest, reader: jspb.BinaryReader): StopAllCallsRequest;
}

export namespace StopAllCallsRequest {
  export type AsObject = {
    projectId: string,
  }
}

export class TransferCallsRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): TransferCallsRequest;

  getCallIdList(): Array<string>;
  setCallIdList(value: Array<string>): TransferCallsRequest;
  clearCallIdList(): TransferCallsRequest;
  addCallId(value: string, index?: number): TransferCallsRequest;

  getTransferIdList(): Array<string>;
  setTransferIdList(value: Array<string>): TransferCallsRequest;
  clearTransferIdList(): TransferCallsRequest;
  addTransferId(value: string, index?: number): TransferCallsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferCallsRequest): TransferCallsRequest.AsObject;
  static serializeBinaryToWriter(message: TransferCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferCallsRequest;
  static deserializeBinaryFromReader(message: TransferCallsRequest, reader: jspb.BinaryReader): TransferCallsRequest;
}

export namespace TransferCallsRequest {
  export type AsObject = {
    projectId: string,
    callIdList: Array<string>,
    transferIdList: Array<string>,
  }
}

export class GetVoipCallInfoRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): GetVoipCallInfoRequest;

  getCallId(): string;
  setCallId(value: string): GetVoipCallInfoRequest;

  getVoipCallInfoView(): VoipCallInfoView;
  setVoipCallInfoView(value: VoipCallInfoView): GetVoipCallInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoipCallInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoipCallInfoRequest): GetVoipCallInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetVoipCallInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoipCallInfoRequest;
  static deserializeBinaryFromReader(message: GetVoipCallInfoRequest, reader: jspb.BinaryReader): GetVoipCallInfoRequest;
}

export namespace GetVoipCallInfoRequest {
  export type AsObject = {
    projectId: string,
    callId: string,
    voipCallInfoView: VoipCallInfoView,
  }
}

export class GetVoipCallInfoResponse extends jspb.Message {
  getActiveLog(): VoipCallInfo | undefined;
  setActiveLog(value?: VoipCallInfo): GetVoipCallInfoResponse;
  hasActiveLog(): boolean;
  clearActiveLog(): GetVoipCallInfoResponse;

  getDoneLogsList(): Array<VoipCallInfo>;
  setDoneLogsList(value: Array<VoipCallInfo>): GetVoipCallInfoResponse;
  clearDoneLogsList(): GetVoipCallInfoResponse;
  addDoneLogs(value?: VoipCallInfo, index?: number): VoipCallInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVoipCallInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVoipCallInfoResponse): GetVoipCallInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetVoipCallInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVoipCallInfoResponse;
  static deserializeBinaryFromReader(message: GetVoipCallInfoResponse, reader: jspb.BinaryReader): GetVoipCallInfoResponse;
}

export namespace GetVoipCallInfoResponse {
  export type AsObject = {
    activeLog?: VoipCallInfo.AsObject,
    doneLogsList: Array<VoipCallInfo.AsObject>,
  }
}

export class VoipCallInfo extends jspb.Message {
  getCallId(): string;
  setCallId(value: string): VoipCallInfo;

  getSipAccount(): string;
  setSipAccount(value: string): VoipCallInfo;

  getContainerName(): string;
  setContainerName(value: string): VoipCallInfo;

  getCallType(): CallType;
  setCallType(value: CallType): VoipCallInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): VoipCallInfo;

  getStartTime(): number;
  setStartTime(value: number): VoipCallInfo;

  getEndTime(): number;
  setEndTime(value: number): VoipCallInfo;

  getSipStatus(): ondewo_sip_sip_pb.SipStatus | undefined;
  setSipStatus(value?: ondewo_sip_sip_pb.SipStatus): VoipCallInfo;
  hasSipStatus(): boolean;
  clearSipStatus(): VoipCallInfo;

  getSipStatusHistory(): ondewo_sip_sip_pb.SipStatusHistoryResponse | undefined;
  setSipStatusHistory(value?: ondewo_sip_sip_pb.SipStatusHistoryResponse): VoipCallInfo;
  hasSipStatusHistory(): boolean;
  clearSipStatusHistory(): VoipCallInfo;

  getServicesStatuses(): AllServicesStatuses | undefined;
  setServicesStatuses(value?: AllServicesStatuses): VoipCallInfo;
  hasServicesStatuses(): boolean;
  clearServicesStatuses(): VoipCallInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoipCallInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VoipCallInfo): VoipCallInfo.AsObject;
  static serializeBinaryToWriter(message: VoipCallInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoipCallInfo;
  static deserializeBinaryFromReader(message: VoipCallInfo, reader: jspb.BinaryReader): VoipCallInfo;
}

export namespace VoipCallInfo {
  export type AsObject = {
    callId: string,
    sipAccount: string,
    containerName: string,
    callType: CallType,
    phoneNumber: string,
    startTime: number,
    endTime: number,
    sipStatus?: ondewo_sip_sip_pb.SipStatus.AsObject,
    sipStatusHistory?: ondewo_sip_sip_pb.SipStatusHistoryResponse.AsObject,
    servicesStatuses?: AllServicesStatuses.AsObject,
  }
}

export class ListVoipCallInfoRequest extends jspb.Message {
  getProjectId(): string;
  setProjectId(value: string): ListVoipCallInfoRequest;

  getVoipCallInfoView(): VoipCallInfoView;
  setVoipCallInfoView(value: VoipCallInfoView): ListVoipCallInfoRequest;

  getCallType(): CallType;
  setCallType(value: CallType): ListVoipCallInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVoipCallInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVoipCallInfoRequest): ListVoipCallInfoRequest.AsObject;
  static serializeBinaryToWriter(message: ListVoipCallInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVoipCallInfoRequest;
  static deserializeBinaryFromReader(message: ListVoipCallInfoRequest, reader: jspb.BinaryReader): ListVoipCallInfoRequest;
}

export namespace ListVoipCallInfoRequest {
  export type AsObject = {
    projectId: string,
    voipCallInfoView: VoipCallInfoView,
    callType: CallType,
  }
}

export class ListVoipCallInfoResponse extends jspb.Message {
  getVoipInfoList(): Array<VoipCallInfo>;
  setVoipInfoList(value: Array<VoipCallInfo>): ListVoipCallInfoResponse;
  clearVoipInfoList(): ListVoipCallInfoResponse;
  addVoipInfo(value?: VoipCallInfo, index?: number): VoipCallInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVoipCallInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVoipCallInfoResponse): ListVoipCallInfoResponse.AsObject;
  static serializeBinaryToWriter(message: ListVoipCallInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVoipCallInfoResponse;
  static deserializeBinaryFromReader(message: ListVoipCallInfoResponse, reader: jspb.BinaryReader): ListVoipCallInfoResponse;
}

export namespace ListVoipCallInfoResponse {
  export type AsObject = {
    voipInfoList: Array<VoipCallInfo.AsObject>,
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

  getStatusCai(): ServiceStatus | undefined;
  setStatusCai(value?: ServiceStatus): AllServicesStatuses;
  hasStatusCai(): boolean;
  clearStatusCai(): AllServicesStatuses;

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
    statusCai?: ServiceStatus.AsObject,
    statusStt?: ServiceStatus.AsObject,
    statusTts?: ServiceStatus.AsObject,
  }
}

export class ServiceStatus extends jspb.Message {
  getHealthy(): boolean;
  setHealthy(value: boolean): ServiceStatus;

  getErrorMesssages(): string;
  setErrorMesssages(value: string): ServiceStatus;

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
    errorMesssages: string,
  }
}

export class GetAudioFileRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): GetAudioFileRequest;

  getObjectName(): string;
  setObjectName(value: string): GetAudioFileRequest;

  getMinioConfig(): MinioConfig | undefined;
  setMinioConfig(value?: MinioConfig): GetAudioFileRequest;
  hasMinioConfig(): boolean;
  clearMinioConfig(): GetAudioFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAudioFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAudioFileRequest): GetAudioFileRequest.AsObject;
  static serializeBinaryToWriter(message: GetAudioFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAudioFileRequest;
  static deserializeBinaryFromReader(message: GetAudioFileRequest, reader: jspb.BinaryReader): GetAudioFileRequest;
}

export namespace GetAudioFileRequest {
  export type AsObject = {
    bucketName: string,
    objectName: string,
    minioConfig?: MinioConfig.AsObject,
  }
}

export class GetAudioFileResponse extends jspb.Message {
  getAudio(): Uint8Array | string;
  getAudio_asU8(): Uint8Array;
  getAudio_asB64(): string;
  setAudio(value: Uint8Array | string): GetAudioFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAudioFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAudioFileResponse): GetAudioFileResponse.AsObject;
  static serializeBinaryToWriter(message: GetAudioFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAudioFileResponse;
  static deserializeBinaryFromReader(message: GetAudioFileResponse, reader: jspb.BinaryReader): GetAudioFileResponse;
}

export namespace GetAudioFileResponse {
  export type AsObject = {
    audio: Uint8Array | string,
  }
}

export class GetFullConversationAudioFileRequest extends jspb.Message {
  getBucketName(): string;
  setBucketName(value: string): GetFullConversationAudioFileRequest;

  getObjectNamesList(): Array<string>;
  setObjectNamesList(value: Array<string>): GetFullConversationAudioFileRequest;
  clearObjectNamesList(): GetFullConversationAudioFileRequest;
  addObjectNames(value: string, index?: number): GetFullConversationAudioFileRequest;

  getMinioConfig(): MinioConfig | undefined;
  setMinioConfig(value?: MinioConfig): GetFullConversationAudioFileRequest;
  hasMinioConfig(): boolean;
  clearMinioConfig(): GetFullConversationAudioFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFullConversationAudioFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFullConversationAudioFileRequest): GetFullConversationAudioFileRequest.AsObject;
  static serializeBinaryToWriter(message: GetFullConversationAudioFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFullConversationAudioFileRequest;
  static deserializeBinaryFromReader(message: GetFullConversationAudioFileRequest, reader: jspb.BinaryReader): GetFullConversationAudioFileRequest;
}

export namespace GetFullConversationAudioFileRequest {
  export type AsObject = {
    bucketName: string,
    objectNamesList: Array<string>,
    minioConfig?: MinioConfig.AsObject,
  }
}

export class GetFullConversationAudioFileResponse extends jspb.Message {
  getAudio(): Uint8Array | string;
  getAudio_asU8(): Uint8Array;
  getAudio_asB64(): string;
  setAudio(value: Uint8Array | string): GetFullConversationAudioFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFullConversationAudioFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFullConversationAudioFileResponse): GetFullConversationAudioFileResponse.AsObject;
  static serializeBinaryToWriter(message: GetFullConversationAudioFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFullConversationAudioFileResponse;
  static deserializeBinaryFromReader(message: GetFullConversationAudioFileResponse, reader: jspb.BinaryReader): GetFullConversationAudioFileResponse;
}

export namespace GetFullConversationAudioFileResponse {
  export type AsObject = {
    audio: Uint8Array | string,
  }
}

export enum VoipCallInfoView { 
  INFO_VIEW_SHALLOW = 0,
  INFO_VIEW_FULL = 1,
}
export enum CallType { 
  BOTH = 0,
  LISTENER = 1,
  CALLER = 2,
}
