import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"


export class SynthesizeRequest extends jspb.Message {
  getText(): string;
  setText(value: string): SynthesizeRequest;

  getConfig(): RequestConfig | undefined;
  setConfig(value?: RequestConfig): SynthesizeRequest;
  hasConfig(): boolean;
  clearConfig(): SynthesizeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynthesizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SynthesizeRequest): SynthesizeRequest.AsObject;
  static serializeBinaryToWriter(message: SynthesizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynthesizeRequest;
  static deserializeBinaryFromReader(message: SynthesizeRequest, reader: jspb.BinaryReader): SynthesizeRequest;
}

export namespace SynthesizeRequest {
  export type AsObject = {
    text: string,
    config?: RequestConfig.AsObject,
  }
}

export class BatchSynthesizeRequest extends jspb.Message {
  getBatchRequestList(): Array<SynthesizeRequest>;
  setBatchRequestList(value: Array<SynthesizeRequest>): BatchSynthesizeRequest;
  clearBatchRequestList(): BatchSynthesizeRequest;
  addBatchRequest(value?: SynthesizeRequest, index?: number): SynthesizeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchSynthesizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchSynthesizeRequest): BatchSynthesizeRequest.AsObject;
  static serializeBinaryToWriter(message: BatchSynthesizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchSynthesizeRequest;
  static deserializeBinaryFromReader(message: BatchSynthesizeRequest, reader: jspb.BinaryReader): BatchSynthesizeRequest;
}

export namespace BatchSynthesizeRequest {
  export type AsObject = {
    batchRequestList: Array<SynthesizeRequest.AsObject>,
  }
}

export class BatchSynthesizeResponse extends jspb.Message {
  getBatchResponseList(): Array<SynthesizeResponse>;
  setBatchResponseList(value: Array<SynthesizeResponse>): BatchSynthesizeResponse;
  clearBatchResponseList(): BatchSynthesizeResponse;
  addBatchResponse(value?: SynthesizeResponse, index?: number): SynthesizeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchSynthesizeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchSynthesizeResponse): BatchSynthesizeResponse.AsObject;
  static serializeBinaryToWriter(message: BatchSynthesizeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchSynthesizeResponse;
  static deserializeBinaryFromReader(message: BatchSynthesizeResponse, reader: jspb.BinaryReader): BatchSynthesizeResponse;
}

export namespace BatchSynthesizeResponse {
  export type AsObject = {
    batchResponseList: Array<SynthesizeResponse.AsObject>,
  }
}

export class RequestConfig extends jspb.Message {
  getT2sPipelineId(): string;
  setT2sPipelineId(value: string): RequestConfig;

  getLengthScale(): number;
  setLengthScale(value: number): RequestConfig;

  getNoiseScale(): number;
  setNoiseScale(value: number): RequestConfig;

  getSampleRate(): number;
  setSampleRate(value: number): RequestConfig;

  getPcm(): Pcm;
  setPcm(value: Pcm): RequestConfig;

  getAudioFormat(): AudioFormat;
  setAudioFormat(value: AudioFormat): RequestConfig;

  getUseCache(): boolean;
  setUseCache(value: boolean): RequestConfig;

  getNormalizer(): string;
  setNormalizer(value: string): RequestConfig;

  getT2sServiceConfig(): google_protobuf_struct_pb.Struct | undefined;
  setT2sServiceConfig(value?: google_protobuf_struct_pb.Struct): RequestConfig;
  hasT2sServiceConfig(): boolean;
  clearT2sServiceConfig(): RequestConfig;

  getT2sCloudProviderConfig(): T2sCloudProviderConfig | undefined;
  setT2sCloudProviderConfig(value?: T2sCloudProviderConfig): RequestConfig;
  hasT2sCloudProviderConfig(): boolean;
  clearT2sCloudProviderConfig(): RequestConfig;

  getOneofLengthScaleCase(): RequestConfig.OneofLengthScaleCase;

  getOneofNoiseScaleCase(): RequestConfig.OneofNoiseScaleCase;

  getOneofSampleRateCase(): RequestConfig.OneofSampleRateCase;

  getOneofPcmCase(): RequestConfig.OneofPcmCase;

  getOneofAudioformatCase(): RequestConfig.OneofAudioformatCase;

  getOneofUseCacheCase(): RequestConfig.OneofUseCacheCase;

  getOneofNormalizerCase(): RequestConfig.OneofNormalizerCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RequestConfig): RequestConfig.AsObject;
  static serializeBinaryToWriter(message: RequestConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestConfig;
  static deserializeBinaryFromReader(message: RequestConfig, reader: jspb.BinaryReader): RequestConfig;
}

export namespace RequestConfig {
  export type AsObject = {
    t2sPipelineId: string,
    lengthScale: number,
    noiseScale: number,
    sampleRate: number,
    pcm: Pcm,
    audioFormat: AudioFormat,
    useCache: boolean,
    normalizer: string,
    t2sServiceConfig?: google_protobuf_struct_pb.Struct.AsObject,
    t2sCloudProviderConfig?: T2sCloudProviderConfig.AsObject,
  }

  export enum OneofLengthScaleCase { 
    ONEOF_LENGTH_SCALE_NOT_SET = 0,
    LENGTH_SCALE = 2,
  }

  export enum OneofNoiseScaleCase { 
    ONEOF_NOISE_SCALE_NOT_SET = 0,
    NOISE_SCALE = 3,
  }

  export enum OneofSampleRateCase { 
    ONEOF_SAMPLE_RATE_NOT_SET = 0,
    SAMPLE_RATE = 4,
  }

  export enum OneofPcmCase { 
    ONEOF_PCM_NOT_SET = 0,
    PCM = 5,
  }

  export enum OneofAudioformatCase { 
    ONEOF_AUDIOFORMAT_NOT_SET = 0,
    AUDIO_FORMAT = 6,
  }

  export enum OneofUseCacheCase { 
    ONEOF_USE_CACHE_NOT_SET = 0,
    USE_CACHE = 7,
  }

  export enum OneofNormalizerCase { 
    ONEOF_NORMALIZER_NOT_SET = 0,
    NORMALIZER = 8,
  }

  export enum T2sServiceConfigCase { 
    _T2S_SERVICE_CONFIG_NOT_SET = 0,
    T2S_SERVICE_CONFIG = 9,
  }

  export enum T2sCloudProviderConfigCase { 
    _T2S_CLOUD_PROVIDER_CONFIG_NOT_SET = 0,
    T2S_CLOUD_PROVIDER_CONFIG = 10,
  }
}

export class T2sCloudProviderConfig extends jspb.Message {
  getT2sCloudProviderConfigElevenlabs(): T2sCloudProviderConfigElevenLabs | undefined;
  setT2sCloudProviderConfigElevenlabs(value?: T2sCloudProviderConfigElevenLabs): T2sCloudProviderConfig;
  hasT2sCloudProviderConfigElevenlabs(): boolean;
  clearT2sCloudProviderConfigElevenlabs(): T2sCloudProviderConfig;

  getT2sCloudProviderConfigGoogle(): T2sCloudProviderConfigGoogle | undefined;
  setT2sCloudProviderConfigGoogle(value?: T2sCloudProviderConfigGoogle): T2sCloudProviderConfig;
  hasT2sCloudProviderConfigGoogle(): boolean;
  clearT2sCloudProviderConfigGoogle(): T2sCloudProviderConfig;

  getT2sCloudProviderConfigMicrosoft(): T2sCloudProviderConfigMicrosoft | undefined;
  setT2sCloudProviderConfigMicrosoft(value?: T2sCloudProviderConfigMicrosoft): T2sCloudProviderConfig;
  hasT2sCloudProviderConfigMicrosoft(): boolean;
  clearT2sCloudProviderConfigMicrosoft(): T2sCloudProviderConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sCloudProviderConfig.AsObject;
  static toObject(includeInstance: boolean, msg: T2sCloudProviderConfig): T2sCloudProviderConfig.AsObject;
  static serializeBinaryToWriter(message: T2sCloudProviderConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sCloudProviderConfig;
  static deserializeBinaryFromReader(message: T2sCloudProviderConfig, reader: jspb.BinaryReader): T2sCloudProviderConfig;
}

export namespace T2sCloudProviderConfig {
  export type AsObject = {
    t2sCloudProviderConfigElevenlabs?: T2sCloudProviderConfigElevenLabs.AsObject,
    t2sCloudProviderConfigGoogle?: T2sCloudProviderConfigGoogle.AsObject,
    t2sCloudProviderConfigMicrosoft?: T2sCloudProviderConfigMicrosoft.AsObject,
  }
}

export class T2sCloudProviderConfigElevenLabs extends jspb.Message {
  getStability(): number;
  setStability(value: number): T2sCloudProviderConfigElevenLabs;

  getSimilarityBoost(): number;
  setSimilarityBoost(value: number): T2sCloudProviderConfigElevenLabs;

  getStyle(): number;
  setStyle(value: number): T2sCloudProviderConfigElevenLabs;

  getUseSpeakerBoost(): boolean;
  setUseSpeakerBoost(value: boolean): T2sCloudProviderConfigElevenLabs;

  getApplyTextNormalization(): string;
  setApplyTextNormalization(value: string): T2sCloudProviderConfigElevenLabs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sCloudProviderConfigElevenLabs.AsObject;
  static toObject(includeInstance: boolean, msg: T2sCloudProviderConfigElevenLabs): T2sCloudProviderConfigElevenLabs.AsObject;
  static serializeBinaryToWriter(message: T2sCloudProviderConfigElevenLabs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sCloudProviderConfigElevenLabs;
  static deserializeBinaryFromReader(message: T2sCloudProviderConfigElevenLabs, reader: jspb.BinaryReader): T2sCloudProviderConfigElevenLabs;
}

export namespace T2sCloudProviderConfigElevenLabs {
  export type AsObject = {
    stability: number,
    similarityBoost: number,
    style: number,
    useSpeakerBoost: boolean,
    applyTextNormalization: string,
  }
}

export class T2sCloudProviderConfigMicrosoft extends jspb.Message {
  getUseDefaultSpeaker(): boolean;
  setUseDefaultSpeaker(value: boolean): T2sCloudProviderConfigMicrosoft;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sCloudProviderConfigMicrosoft.AsObject;
  static toObject(includeInstance: boolean, msg: T2sCloudProviderConfigMicrosoft): T2sCloudProviderConfigMicrosoft.AsObject;
  static serializeBinaryToWriter(message: T2sCloudProviderConfigMicrosoft, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sCloudProviderConfigMicrosoft;
  static deserializeBinaryFromReader(message: T2sCloudProviderConfigMicrosoft, reader: jspb.BinaryReader): T2sCloudProviderConfigMicrosoft;
}

export namespace T2sCloudProviderConfigMicrosoft {
  export type AsObject = {
    useDefaultSpeaker: boolean,
  }
}

export class T2sCloudProviderConfigGoogle extends jspb.Message {
  getSpeakingRate(): number;
  setSpeakingRate(value: number): T2sCloudProviderConfigGoogle;

  getVolumeGainDb(): number;
  setVolumeGainDb(value: number): T2sCloudProviderConfigGoogle;

  getPitch(): number;
  setPitch(value: number): T2sCloudProviderConfigGoogle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sCloudProviderConfigGoogle.AsObject;
  static toObject(includeInstance: boolean, msg: T2sCloudProviderConfigGoogle): T2sCloudProviderConfigGoogle.AsObject;
  static serializeBinaryToWriter(message: T2sCloudProviderConfigGoogle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sCloudProviderConfigGoogle;
  static deserializeBinaryFromReader(message: T2sCloudProviderConfigGoogle, reader: jspb.BinaryReader): T2sCloudProviderConfigGoogle;
}

export namespace T2sCloudProviderConfigGoogle {
  export type AsObject = {
    speakingRate: number,
    volumeGainDb: number,
    pitch: number,
  }
}

export class SynthesizeResponse extends jspb.Message {
  getAudioUuid(): string;
  setAudioUuid(value: string): SynthesizeResponse;

  getAudio(): Uint8Array | string;
  getAudio_asU8(): Uint8Array;
  getAudio_asB64(): string;
  setAudio(value: Uint8Array | string): SynthesizeResponse;

  getGenerationTime(): number;
  setGenerationTime(value: number): SynthesizeResponse;

  getAudioLength(): number;
  setAudioLength(value: number): SynthesizeResponse;

  getText(): string;
  setText(value: string): SynthesizeResponse;

  getConfig(): RequestConfig | undefined;
  setConfig(value?: RequestConfig): SynthesizeResponse;
  hasConfig(): boolean;
  clearConfig(): SynthesizeResponse;

  getNormalizedText(): string;
  setNormalizedText(value: string): SynthesizeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynthesizeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SynthesizeResponse): SynthesizeResponse.AsObject;
  static serializeBinaryToWriter(message: SynthesizeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynthesizeResponse;
  static deserializeBinaryFromReader(message: SynthesizeResponse, reader: jspb.BinaryReader): SynthesizeResponse;
}

export namespace SynthesizeResponse {
  export type AsObject = {
    audioUuid: string,
    audio: Uint8Array | string,
    generationTime: number,
    audioLength: number,
    text: string,
    config?: RequestConfig.AsObject,
    normalizedText: string,
  }
}

export class NormalizeTextRequest extends jspb.Message {
  getT2sPipelineId(): string;
  setT2sPipelineId(value: string): NormalizeTextRequest;

  getText(): string;
  setText(value: string): NormalizeTextRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NormalizeTextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NormalizeTextRequest): NormalizeTextRequest.AsObject;
  static serializeBinaryToWriter(message: NormalizeTextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NormalizeTextRequest;
  static deserializeBinaryFromReader(message: NormalizeTextRequest, reader: jspb.BinaryReader): NormalizeTextRequest;
}

export namespace NormalizeTextRequest {
  export type AsObject = {
    t2sPipelineId: string,
    text: string,
  }
}

export class NormalizeTextResponse extends jspb.Message {
  getNormalizedText(): string;
  setNormalizedText(value: string): NormalizeTextResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NormalizeTextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NormalizeTextResponse): NormalizeTextResponse.AsObject;
  static serializeBinaryToWriter(message: NormalizeTextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NormalizeTextResponse;
  static deserializeBinaryFromReader(message: NormalizeTextResponse, reader: jspb.BinaryReader): NormalizeTextResponse;
}

export namespace NormalizeTextResponse {
  export type AsObject = {
    normalizedText: string,
  }
}

export class T2SGetServiceInfoResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): T2SGetServiceInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2SGetServiceInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: T2SGetServiceInfoResponse): T2SGetServiceInfoResponse.AsObject;
  static serializeBinaryToWriter(message: T2SGetServiceInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2SGetServiceInfoResponse;
  static deserializeBinaryFromReader(message: T2SGetServiceInfoResponse, reader: jspb.BinaryReader): T2SGetServiceInfoResponse;
}

export namespace T2SGetServiceInfoResponse {
  export type AsObject = {
    version: string,
  }
}

export class ListT2sPipelinesRequest extends jspb.Message {
  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): ListT2sPipelinesRequest;
  clearLanguagesList(): ListT2sPipelinesRequest;
  addLanguages(value: string, index?: number): ListT2sPipelinesRequest;

  getSpeakerSexesList(): Array<string>;
  setSpeakerSexesList(value: Array<string>): ListT2sPipelinesRequest;
  clearSpeakerSexesList(): ListT2sPipelinesRequest;
  addSpeakerSexes(value: string, index?: number): ListT2sPipelinesRequest;

  getPipelineOwnersList(): Array<string>;
  setPipelineOwnersList(value: Array<string>): ListT2sPipelinesRequest;
  clearPipelineOwnersList(): ListT2sPipelinesRequest;
  addPipelineOwners(value: string, index?: number): ListT2sPipelinesRequest;

  getSpeakerNamesList(): Array<string>;
  setSpeakerNamesList(value: Array<string>): ListT2sPipelinesRequest;
  clearSpeakerNamesList(): ListT2sPipelinesRequest;
  addSpeakerNames(value: string, index?: number): ListT2sPipelinesRequest;

  getDomainsList(): Array<string>;
  setDomainsList(value: Array<string>): ListT2sPipelinesRequest;
  clearDomainsList(): ListT2sPipelinesRequest;
  addDomains(value: string, index?: number): ListT2sPipelinesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListT2sPipelinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListT2sPipelinesRequest): ListT2sPipelinesRequest.AsObject;
  static serializeBinaryToWriter(message: ListT2sPipelinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListT2sPipelinesRequest;
  static deserializeBinaryFromReader(message: ListT2sPipelinesRequest, reader: jspb.BinaryReader): ListT2sPipelinesRequest;
}

export namespace ListT2sPipelinesRequest {
  export type AsObject = {
    languagesList: Array<string>,
    speakerSexesList: Array<string>,
    pipelineOwnersList: Array<string>,
    speakerNamesList: Array<string>,
    domainsList: Array<string>,
  }
}

export class ListT2sPipelinesResponse extends jspb.Message {
  getPipelinesList(): Array<Text2SpeechConfig>;
  setPipelinesList(value: Array<Text2SpeechConfig>): ListT2sPipelinesResponse;
  clearPipelinesList(): ListT2sPipelinesResponse;
  addPipelines(value?: Text2SpeechConfig, index?: number): Text2SpeechConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListT2sPipelinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListT2sPipelinesResponse): ListT2sPipelinesResponse.AsObject;
  static serializeBinaryToWriter(message: ListT2sPipelinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListT2sPipelinesResponse;
  static deserializeBinaryFromReader(message: ListT2sPipelinesResponse, reader: jspb.BinaryReader): ListT2sPipelinesResponse;
}

export namespace ListT2sPipelinesResponse {
  export type AsObject = {
    pipelinesList: Array<Text2SpeechConfig.AsObject>,
  }
}

export class ListT2sLanguagesRequest extends jspb.Message {
  getSpeakerSexesList(): Array<string>;
  setSpeakerSexesList(value: Array<string>): ListT2sLanguagesRequest;
  clearSpeakerSexesList(): ListT2sLanguagesRequest;
  addSpeakerSexes(value: string, index?: number): ListT2sLanguagesRequest;

  getPipelineOwnersList(): Array<string>;
  setPipelineOwnersList(value: Array<string>): ListT2sLanguagesRequest;
  clearPipelineOwnersList(): ListT2sLanguagesRequest;
  addPipelineOwners(value: string, index?: number): ListT2sLanguagesRequest;

  getSpeakerNamesList(): Array<string>;
  setSpeakerNamesList(value: Array<string>): ListT2sLanguagesRequest;
  clearSpeakerNamesList(): ListT2sLanguagesRequest;
  addSpeakerNames(value: string, index?: number): ListT2sLanguagesRequest;

  getDomainsList(): Array<string>;
  setDomainsList(value: Array<string>): ListT2sLanguagesRequest;
  clearDomainsList(): ListT2sLanguagesRequest;
  addDomains(value: string, index?: number): ListT2sLanguagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListT2sLanguagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListT2sLanguagesRequest): ListT2sLanguagesRequest.AsObject;
  static serializeBinaryToWriter(message: ListT2sLanguagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListT2sLanguagesRequest;
  static deserializeBinaryFromReader(message: ListT2sLanguagesRequest, reader: jspb.BinaryReader): ListT2sLanguagesRequest;
}

export namespace ListT2sLanguagesRequest {
  export type AsObject = {
    speakerSexesList: Array<string>,
    pipelineOwnersList: Array<string>,
    speakerNamesList: Array<string>,
    domainsList: Array<string>,
  }
}

export class ListT2sLanguagesResponse extends jspb.Message {
  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): ListT2sLanguagesResponse;
  clearLanguagesList(): ListT2sLanguagesResponse;
  addLanguages(value: string, index?: number): ListT2sLanguagesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListT2sLanguagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListT2sLanguagesResponse): ListT2sLanguagesResponse.AsObject;
  static serializeBinaryToWriter(message: ListT2sLanguagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListT2sLanguagesResponse;
  static deserializeBinaryFromReader(message: ListT2sLanguagesResponse, reader: jspb.BinaryReader): ListT2sLanguagesResponse;
}

export namespace ListT2sLanguagesResponse {
  export type AsObject = {
    languagesList: Array<string>,
  }
}

export class ListT2sDomainsRequest extends jspb.Message {
  getSpeakerSexesList(): Array<string>;
  setSpeakerSexesList(value: Array<string>): ListT2sDomainsRequest;
  clearSpeakerSexesList(): ListT2sDomainsRequest;
  addSpeakerSexes(value: string, index?: number): ListT2sDomainsRequest;

  getPipelineOwnersList(): Array<string>;
  setPipelineOwnersList(value: Array<string>): ListT2sDomainsRequest;
  clearPipelineOwnersList(): ListT2sDomainsRequest;
  addPipelineOwners(value: string, index?: number): ListT2sDomainsRequest;

  getSpeakerNamesList(): Array<string>;
  setSpeakerNamesList(value: Array<string>): ListT2sDomainsRequest;
  clearSpeakerNamesList(): ListT2sDomainsRequest;
  addSpeakerNames(value: string, index?: number): ListT2sDomainsRequest;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): ListT2sDomainsRequest;
  clearLanguagesList(): ListT2sDomainsRequest;
  addLanguages(value: string, index?: number): ListT2sDomainsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListT2sDomainsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListT2sDomainsRequest): ListT2sDomainsRequest.AsObject;
  static serializeBinaryToWriter(message: ListT2sDomainsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListT2sDomainsRequest;
  static deserializeBinaryFromReader(message: ListT2sDomainsRequest, reader: jspb.BinaryReader): ListT2sDomainsRequest;
}

export namespace ListT2sDomainsRequest {
  export type AsObject = {
    speakerSexesList: Array<string>,
    pipelineOwnersList: Array<string>,
    speakerNamesList: Array<string>,
    languagesList: Array<string>,
  }
}

export class ListT2sDomainsResponse extends jspb.Message {
  getDomainsList(): Array<string>;
  setDomainsList(value: Array<string>): ListT2sDomainsResponse;
  clearDomainsList(): ListT2sDomainsResponse;
  addDomains(value: string, index?: number): ListT2sDomainsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListT2sDomainsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListT2sDomainsResponse): ListT2sDomainsResponse.AsObject;
  static serializeBinaryToWriter(message: ListT2sDomainsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListT2sDomainsResponse;
  static deserializeBinaryFromReader(message: ListT2sDomainsResponse, reader: jspb.BinaryReader): ListT2sDomainsResponse;
}

export namespace ListT2sDomainsResponse {
  export type AsObject = {
    domainsList: Array<string>,
  }
}

export class T2sPipelineId extends jspb.Message {
  getId(): string;
  setId(value: string): T2sPipelineId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sPipelineId.AsObject;
  static toObject(includeInstance: boolean, msg: T2sPipelineId): T2sPipelineId.AsObject;
  static serializeBinaryToWriter(message: T2sPipelineId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sPipelineId;
  static deserializeBinaryFromReader(message: T2sPipelineId, reader: jspb.BinaryReader): T2sPipelineId;
}

export namespace T2sPipelineId {
  export type AsObject = {
    id: string,
  }
}

export class Text2SpeechConfig extends jspb.Message {
  getId(): string;
  setId(value: string): Text2SpeechConfig;

  getDescription(): T2SDescription | undefined;
  setDescription(value?: T2SDescription): Text2SpeechConfig;
  hasDescription(): boolean;
  clearDescription(): Text2SpeechConfig;

  getActive(): boolean;
  setActive(value: boolean): Text2SpeechConfig;

  getInference(): T2SInference | undefined;
  setInference(value?: T2SInference): Text2SpeechConfig;
  hasInference(): boolean;
  clearInference(): Text2SpeechConfig;

  getNormalization(): T2SNormalization | undefined;
  setNormalization(value?: T2SNormalization): Text2SpeechConfig;
  hasNormalization(): boolean;
  clearNormalization(): Text2SpeechConfig;

  getPostprocessing(): Postprocessing | undefined;
  setPostprocessing(value?: Postprocessing): Text2SpeechConfig;
  hasPostprocessing(): boolean;
  clearPostprocessing(): Text2SpeechConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Text2SpeechConfig.AsObject;
  static toObject(includeInstance: boolean, msg: Text2SpeechConfig): Text2SpeechConfig.AsObject;
  static serializeBinaryToWriter(message: Text2SpeechConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Text2SpeechConfig;
  static deserializeBinaryFromReader(message: Text2SpeechConfig, reader: jspb.BinaryReader): Text2SpeechConfig;
}

export namespace Text2SpeechConfig {
  export type AsObject = {
    id: string,
    description?: T2SDescription.AsObject,
    active: boolean,
    inference?: T2SInference.AsObject,
    normalization?: T2SNormalization.AsObject,
    postprocessing?: Postprocessing.AsObject,
  }
}

export class T2SDescription extends jspb.Message {
  getLanguage(): string;
  setLanguage(value: string): T2SDescription;

  getSpeakerSex(): string;
  setSpeakerSex(value: string): T2SDescription;

  getPipelineOwner(): string;
  setPipelineOwner(value: string): T2SDescription;

  getComments(): string;
  setComments(value: string): T2SDescription;

  getSpeakerName(): string;
  setSpeakerName(value: string): T2SDescription;

  getDomain(): string;
  setDomain(value: string): T2SDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2SDescription.AsObject;
  static toObject(includeInstance: boolean, msg: T2SDescription): T2SDescription.AsObject;
  static serializeBinaryToWriter(message: T2SDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2SDescription;
  static deserializeBinaryFromReader(message: T2SDescription, reader: jspb.BinaryReader): T2SDescription;
}

export namespace T2SDescription {
  export type AsObject = {
    language: string,
    speakerSex: string,
    pipelineOwner: string,
    comments: string,
    speakerName: string,
    domain: string,
  }
}

export class T2SInference extends jspb.Message {
  getType(): string;
  setType(value: string): T2SInference;

  getCompositeInference(): CompositeInference | undefined;
  setCompositeInference(value?: CompositeInference): T2SInference;
  hasCompositeInference(): boolean;
  clearCompositeInference(): T2SInference;

  getSingleInference(): SingleInference | undefined;
  setSingleInference(value?: SingleInference): T2SInference;
  hasSingleInference(): boolean;
  clearSingleInference(): T2SInference;

  getCaching(): Caching | undefined;
  setCaching(value?: Caching): T2SInference;
  hasCaching(): boolean;
  clearCaching(): T2SInference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2SInference.AsObject;
  static toObject(includeInstance: boolean, msg: T2SInference): T2SInference.AsObject;
  static serializeBinaryToWriter(message: T2SInference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2SInference;
  static deserializeBinaryFromReader(message: T2SInference, reader: jspb.BinaryReader): T2SInference;
}

export namespace T2SInference {
  export type AsObject = {
    type: string,
    compositeInference?: CompositeInference.AsObject,
    singleInference?: SingleInference.AsObject,
    caching?: Caching.AsObject,
  }
}

export class CompositeInference extends jspb.Message {
  getText2mel(): Text2Mel | undefined;
  setText2mel(value?: Text2Mel): CompositeInference;
  hasText2mel(): boolean;
  clearText2mel(): CompositeInference;

  getMel2audio(): Mel2Audio | undefined;
  setMel2audio(value?: Mel2Audio): CompositeInference;
  hasMel2audio(): boolean;
  clearMel2audio(): CompositeInference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositeInference.AsObject;
  static toObject(includeInstance: boolean, msg: CompositeInference): CompositeInference.AsObject;
  static serializeBinaryToWriter(message: CompositeInference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositeInference;
  static deserializeBinaryFromReader(message: CompositeInference, reader: jspb.BinaryReader): CompositeInference;
}

export namespace CompositeInference {
  export type AsObject = {
    text2mel?: Text2Mel.AsObject,
    mel2audio?: Mel2Audio.AsObject,
  }
}

export class SingleInference extends jspb.Message {
  getText2audio(): Text2Audio | undefined;
  setText2audio(value?: Text2Audio): SingleInference;
  hasText2audio(): boolean;
  clearText2audio(): SingleInference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleInference.AsObject;
  static toObject(includeInstance: boolean, msg: SingleInference): SingleInference.AsObject;
  static serializeBinaryToWriter(message: SingleInference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleInference;
  static deserializeBinaryFromReader(message: SingleInference, reader: jspb.BinaryReader): SingleInference;
}

export namespace SingleInference {
  export type AsObject = {
    text2audio?: Text2Audio.AsObject,
  }
}

export class Text2Mel extends jspb.Message {
  getType(): string;
  setType(value: string): Text2Mel;

  getGlowTts(): GlowTTS | undefined;
  setGlowTts(value?: GlowTTS): Text2Mel;
  hasGlowTts(): boolean;
  clearGlowTts(): Text2Mel;

  getGlowTtsTriton(): GlowTTSTriton | undefined;
  setGlowTtsTriton(value?: GlowTTSTriton): Text2Mel;
  hasGlowTtsTriton(): boolean;
  clearGlowTtsTriton(): Text2Mel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Text2Mel.AsObject;
  static toObject(includeInstance: boolean, msg: Text2Mel): Text2Mel.AsObject;
  static serializeBinaryToWriter(message: Text2Mel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Text2Mel;
  static deserializeBinaryFromReader(message: Text2Mel, reader: jspb.BinaryReader): Text2Mel;
}

export namespace Text2Mel {
  export type AsObject = {
    type: string,
    glowTts?: GlowTTS.AsObject,
    glowTtsTriton?: GlowTTSTriton.AsObject,
  }
}

export class Text2Audio extends jspb.Message {
  getType(): string;
  setType(value: string): Text2Audio;

  getVits(): Vits | undefined;
  setVits(value?: Vits): Text2Audio;
  hasVits(): boolean;
  clearVits(): Text2Audio;

  getVitsTriton(): VitsTriton | undefined;
  setVitsTriton(value?: VitsTriton): Text2Audio;
  hasVitsTriton(): boolean;
  clearVitsTriton(): Text2Audio;

  getT2sCloudServiceElevenlabs(): T2sCloudServiceElevenLabs | undefined;
  setT2sCloudServiceElevenlabs(value?: T2sCloudServiceElevenLabs): Text2Audio;
  hasT2sCloudServiceElevenlabs(): boolean;
  clearT2sCloudServiceElevenlabs(): Text2Audio;

  getT2sCloudServiceAmazon(): T2sCloudServiceAmazon | undefined;
  setT2sCloudServiceAmazon(value?: T2sCloudServiceAmazon): Text2Audio;
  hasT2sCloudServiceAmazon(): boolean;
  clearT2sCloudServiceAmazon(): Text2Audio;

  getT2sCloudServiceGoogle(): T2sCloudServiceGoogle | undefined;
  setT2sCloudServiceGoogle(value?: T2sCloudServiceGoogle): Text2Audio;
  hasT2sCloudServiceGoogle(): boolean;
  clearT2sCloudServiceGoogle(): Text2Audio;

  getT2sCloudServiceMicrosoft(): T2sCloudServiceMicrosoft | undefined;
  setT2sCloudServiceMicrosoft(value?: T2sCloudServiceMicrosoft): Text2Audio;
  hasT2sCloudServiceMicrosoft(): boolean;
  clearT2sCloudServiceMicrosoft(): Text2Audio;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Text2Audio.AsObject;
  static toObject(includeInstance: boolean, msg: Text2Audio): Text2Audio.AsObject;
  static serializeBinaryToWriter(message: Text2Audio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Text2Audio;
  static deserializeBinaryFromReader(message: Text2Audio, reader: jspb.BinaryReader): Text2Audio;
}

export namespace Text2Audio {
  export type AsObject = {
    type: string,
    vits?: Vits.AsObject,
    vitsTriton?: VitsTriton.AsObject,
    t2sCloudServiceElevenlabs?: T2sCloudServiceElevenLabs.AsObject,
    t2sCloudServiceAmazon?: T2sCloudServiceAmazon.AsObject,
    t2sCloudServiceGoogle?: T2sCloudServiceGoogle.AsObject,
    t2sCloudServiceMicrosoft?: T2sCloudServiceMicrosoft.AsObject,
  }
}

export class GlowTTS extends jspb.Message {
  getBatchSize(): number;
  setBatchSize(value: number): GlowTTS;

  getUseGpu(): boolean;
  setUseGpu(value: boolean): GlowTTS;

  getLengthScale(): number;
  setLengthScale(value: number): GlowTTS;

  getNoiseScale(): number;
  setNoiseScale(value: number): GlowTTS;

  getPath(): string;
  setPath(value: string): GlowTTS;

  getCleanersList(): Array<string>;
  setCleanersList(value: Array<string>): GlowTTS;
  clearCleanersList(): GlowTTS;
  addCleaners(value: string, index?: number): GlowTTS;

  getParamConfigPath(): string;
  setParamConfigPath(value: string): GlowTTS;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlowTTS.AsObject;
  static toObject(includeInstance: boolean, msg: GlowTTS): GlowTTS.AsObject;
  static serializeBinaryToWriter(message: GlowTTS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlowTTS;
  static deserializeBinaryFromReader(message: GlowTTS, reader: jspb.BinaryReader): GlowTTS;
}

export namespace GlowTTS {
  export type AsObject = {
    batchSize: number,
    useGpu: boolean,
    lengthScale: number,
    noiseScale: number,
    path: string,
    cleanersList: Array<string>,
    paramConfigPath: string,
  }
}

export class GlowTTSTriton extends jspb.Message {
  getBatchSize(): number;
  setBatchSize(value: number): GlowTTSTriton;

  getLengthScale(): number;
  setLengthScale(value: number): GlowTTSTriton;

  getNoiseScale(): number;
  setNoiseScale(value: number): GlowTTSTriton;

  getCleanersList(): Array<string>;
  setCleanersList(value: Array<string>): GlowTTSTriton;
  clearCleanersList(): GlowTTSTriton;
  addCleaners(value: string, index?: number): GlowTTSTriton;

  getMaxTextLength(): number;
  setMaxTextLength(value: number): GlowTTSTriton;

  getParamConfigPath(): string;
  setParamConfigPath(value: string): GlowTTSTriton;

  getTritonModelName(): string;
  setTritonModelName(value: string): GlowTTSTriton;

  getTritonServerHost(): string;
  setTritonServerHost(value: string): GlowTTSTriton;

  getTritonServerPort(): number;
  setTritonServerPort(value: number): GlowTTSTriton;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlowTTSTriton.AsObject;
  static toObject(includeInstance: boolean, msg: GlowTTSTriton): GlowTTSTriton.AsObject;
  static serializeBinaryToWriter(message: GlowTTSTriton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlowTTSTriton;
  static deserializeBinaryFromReader(message: GlowTTSTriton, reader: jspb.BinaryReader): GlowTTSTriton;
}

export namespace GlowTTSTriton {
  export type AsObject = {
    batchSize: number,
    lengthScale: number,
    noiseScale: number,
    cleanersList: Array<string>,
    maxTextLength: number,
    paramConfigPath: string,
    tritonModelName: string,
    tritonServerHost: string,
    tritonServerPort: number,
  }
}

export class Vits extends jspb.Message {
  getBatchSize(): number;
  setBatchSize(value: number): Vits;

  getUseGpu(): boolean;
  setUseGpu(value: boolean): Vits;

  getLengthScale(): number;
  setLengthScale(value: number): Vits;

  getNoiseScale(): number;
  setNoiseScale(value: number): Vits;

  getPath(): string;
  setPath(value: string): Vits;

  getCleanersList(): Array<string>;
  setCleanersList(value: Array<string>): Vits;
  clearCleanersList(): Vits;
  addCleaners(value: string, index?: number): Vits;

  getParamConfigPath(): string;
  setParamConfigPath(value: string): Vits;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vits.AsObject;
  static toObject(includeInstance: boolean, msg: Vits): Vits.AsObject;
  static serializeBinaryToWriter(message: Vits, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vits;
  static deserializeBinaryFromReader(message: Vits, reader: jspb.BinaryReader): Vits;
}

export namespace Vits {
  export type AsObject = {
    batchSize: number,
    useGpu: boolean,
    lengthScale: number,
    noiseScale: number,
    path: string,
    cleanersList: Array<string>,
    paramConfigPath: string,
  }
}

export class VitsTriton extends jspb.Message {
  getBatchSize(): number;
  setBatchSize(value: number): VitsTriton;

  getLengthScale(): number;
  setLengthScale(value: number): VitsTriton;

  getNoiseScale(): number;
  setNoiseScale(value: number): VitsTriton;

  getCleanersList(): Array<string>;
  setCleanersList(value: Array<string>): VitsTriton;
  clearCleanersList(): VitsTriton;
  addCleaners(value: string, index?: number): VitsTriton;

  getMaxTextLength(): number;
  setMaxTextLength(value: number): VitsTriton;

  getParamConfigPath(): string;
  setParamConfigPath(value: string): VitsTriton;

  getTritonModelName(): string;
  setTritonModelName(value: string): VitsTriton;

  getTritonServerHost(): string;
  setTritonServerHost(value: string): VitsTriton;

  getTritonServerPort(): number;
  setTritonServerPort(value: number): VitsTriton;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VitsTriton.AsObject;
  static toObject(includeInstance: boolean, msg: VitsTriton): VitsTriton.AsObject;
  static serializeBinaryToWriter(message: VitsTriton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VitsTriton;
  static deserializeBinaryFromReader(message: VitsTriton, reader: jspb.BinaryReader): VitsTriton;
}

export namespace VitsTriton {
  export type AsObject = {
    batchSize: number,
    lengthScale: number,
    noiseScale: number,
    cleanersList: Array<string>,
    maxTextLength: number,
    paramConfigPath: string,
    tritonModelName: string,
    tritonServerHost: string,
    tritonServerPort: number,
  }
}

export class T2sCloudServiceElevenLabs extends jspb.Message {
  getLanguageCode(): string;
  setLanguageCode(value: string): T2sCloudServiceElevenLabs;

  getModelId(): string;
  setModelId(value: string): T2sCloudServiceElevenLabs;

  getVoiceId(): string;
  setVoiceId(value: string): T2sCloudServiceElevenLabs;

  getVoiceSettings(): VoiceSettings | undefined;
  setVoiceSettings(value?: VoiceSettings): T2sCloudServiceElevenLabs;
  hasVoiceSettings(): boolean;
  clearVoiceSettings(): T2sCloudServiceElevenLabs;

  getApplyTextNormalization(): string;
  setApplyTextNormalization(value: string): T2sCloudServiceElevenLabs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sCloudServiceElevenLabs.AsObject;
  static toObject(includeInstance: boolean, msg: T2sCloudServiceElevenLabs): T2sCloudServiceElevenLabs.AsObject;
  static serializeBinaryToWriter(message: T2sCloudServiceElevenLabs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sCloudServiceElevenLabs;
  static deserializeBinaryFromReader(message: T2sCloudServiceElevenLabs, reader: jspb.BinaryReader): T2sCloudServiceElevenLabs;
}

export namespace T2sCloudServiceElevenLabs {
  export type AsObject = {
    languageCode: string,
    modelId: string,
    voiceId: string,
    voiceSettings?: VoiceSettings.AsObject,
    applyTextNormalization: string,
  }
}

export class VoiceSettings extends jspb.Message {
  getStability(): number;
  setStability(value: number): VoiceSettings;

  getSimilarityBoost(): number;
  setSimilarityBoost(value: number): VoiceSettings;

  getStyle(): number;
  setStyle(value: number): VoiceSettings;

  getUseSpeakerBoost(): boolean;
  setUseSpeakerBoost(value: boolean): VoiceSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoiceSettings.AsObject;
  static toObject(includeInstance: boolean, msg: VoiceSettings): VoiceSettings.AsObject;
  static serializeBinaryToWriter(message: VoiceSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoiceSettings;
  static deserializeBinaryFromReader(message: VoiceSettings, reader: jspb.BinaryReader): VoiceSettings;
}

export namespace VoiceSettings {
  export type AsObject = {
    stability: number,
    similarityBoost: number,
    style: number,
    useSpeakerBoost: boolean,
  }
}

export class T2sCloudServiceAmazon extends jspb.Message {
  getVoiceId(): string;
  setVoiceId(value: string): T2sCloudServiceAmazon;

  getModelId(): string;
  setModelId(value: string): T2sCloudServiceAmazon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sCloudServiceAmazon.AsObject;
  static toObject(includeInstance: boolean, msg: T2sCloudServiceAmazon): T2sCloudServiceAmazon.AsObject;
  static serializeBinaryToWriter(message: T2sCloudServiceAmazon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sCloudServiceAmazon;
  static deserializeBinaryFromReader(message: T2sCloudServiceAmazon, reader: jspb.BinaryReader): T2sCloudServiceAmazon;
}

export namespace T2sCloudServiceAmazon {
  export type AsObject = {
    voiceId: string,
    modelId: string,
  }
}

export class T2sCloudServiceGoogle extends jspb.Message {
  getVoiceId(): string;
  setVoiceId(value: string): T2sCloudServiceGoogle;

  getSpeakingRate(): number;
  setSpeakingRate(value: number): T2sCloudServiceGoogle;

  getVolumeGainDb(): number;
  setVolumeGainDb(value: number): T2sCloudServiceGoogle;

  getPitch(): number;
  setPitch(value: number): T2sCloudServiceGoogle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sCloudServiceGoogle.AsObject;
  static toObject(includeInstance: boolean, msg: T2sCloudServiceGoogle): T2sCloudServiceGoogle.AsObject;
  static serializeBinaryToWriter(message: T2sCloudServiceGoogle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sCloudServiceGoogle;
  static deserializeBinaryFromReader(message: T2sCloudServiceGoogle, reader: jspb.BinaryReader): T2sCloudServiceGoogle;
}

export namespace T2sCloudServiceGoogle {
  export type AsObject = {
    voiceId: string,
    speakingRate: number,
    volumeGainDb: number,
    pitch: number,
  }
}

export class T2sCloudServiceMicrosoft extends jspb.Message {
  getVoiceId(): string;
  setVoiceId(value: string): T2sCloudServiceMicrosoft;

  getUseDefaultSpeaker(): boolean;
  setUseDefaultSpeaker(value: boolean): T2sCloudServiceMicrosoft;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2sCloudServiceMicrosoft.AsObject;
  static toObject(includeInstance: boolean, msg: T2sCloudServiceMicrosoft): T2sCloudServiceMicrosoft.AsObject;
  static serializeBinaryToWriter(message: T2sCloudServiceMicrosoft, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2sCloudServiceMicrosoft;
  static deserializeBinaryFromReader(message: T2sCloudServiceMicrosoft, reader: jspb.BinaryReader): T2sCloudServiceMicrosoft;
}

export namespace T2sCloudServiceMicrosoft {
  export type AsObject = {
    voiceId: string,
    useDefaultSpeaker: boolean,
  }
}

export class Mel2Audio extends jspb.Message {
  getType(): string;
  setType(value: string): Mel2Audio;

  getMbMelganTriton(): MbMelganTriton | undefined;
  setMbMelganTriton(value?: MbMelganTriton): Mel2Audio;
  hasMbMelganTriton(): boolean;
  clearMbMelganTriton(): Mel2Audio;

  getHifiGan(): HiFiGan | undefined;
  setHifiGan(value?: HiFiGan): Mel2Audio;
  hasHifiGan(): boolean;
  clearHifiGan(): Mel2Audio;

  getHifiGanTriton(): HiFiGanTriton | undefined;
  setHifiGanTriton(value?: HiFiGanTriton): Mel2Audio;
  hasHifiGanTriton(): boolean;
  clearHifiGanTriton(): Mel2Audio;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mel2Audio.AsObject;
  static toObject(includeInstance: boolean, msg: Mel2Audio): Mel2Audio.AsObject;
  static serializeBinaryToWriter(message: Mel2Audio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mel2Audio;
  static deserializeBinaryFromReader(message: Mel2Audio, reader: jspb.BinaryReader): Mel2Audio;
}

export namespace Mel2Audio {
  export type AsObject = {
    type: string,
    mbMelganTriton?: MbMelganTriton.AsObject,
    hifiGan?: HiFiGan.AsObject,
    hifiGanTriton?: HiFiGanTriton.AsObject,
  }
}

export class HiFiGan extends jspb.Message {
  getUseGpu(): boolean;
  setUseGpu(value: boolean): HiFiGan;

  getBatchSize(): number;
  setBatchSize(value: number): HiFiGan;

  getConfigPath(): string;
  setConfigPath(value: string): HiFiGan;

  getModelPath(): string;
  setModelPath(value: string): HiFiGan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HiFiGan.AsObject;
  static toObject(includeInstance: boolean, msg: HiFiGan): HiFiGan.AsObject;
  static serializeBinaryToWriter(message: HiFiGan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HiFiGan;
  static deserializeBinaryFromReader(message: HiFiGan, reader: jspb.BinaryReader): HiFiGan;
}

export namespace HiFiGan {
  export type AsObject = {
    useGpu: boolean,
    batchSize: number,
    configPath: string,
    modelPath: string,
  }
}

export class HiFiGanTriton extends jspb.Message {
  getConfigPath(): string;
  setConfigPath(value: string): HiFiGanTriton;

  getTritonModelName(): string;
  setTritonModelName(value: string): HiFiGanTriton;

  getTritonServerHost(): string;
  setTritonServerHost(value: string): HiFiGanTriton;

  getTritonServerPort(): number;
  setTritonServerPort(value: number): HiFiGanTriton;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HiFiGanTriton.AsObject;
  static toObject(includeInstance: boolean, msg: HiFiGanTriton): HiFiGanTriton.AsObject;
  static serializeBinaryToWriter(message: HiFiGanTriton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HiFiGanTriton;
  static deserializeBinaryFromReader(message: HiFiGanTriton, reader: jspb.BinaryReader): HiFiGanTriton;
}

export namespace HiFiGanTriton {
  export type AsObject = {
    configPath: string,
    tritonModelName: string,
    tritonServerHost: string,
    tritonServerPort: number,
  }
}

export class MbMelganTriton extends jspb.Message {
  getConfigPath(): string;
  setConfigPath(value: string): MbMelganTriton;

  getStatsPath(): string;
  setStatsPath(value: string): MbMelganTriton;

  getTritonModelName(): string;
  setTritonModelName(value: string): MbMelganTriton;

  getTritonServerHost(): string;
  setTritonServerHost(value: string): MbMelganTriton;

  getTritonServerPort(): number;
  setTritonServerPort(value: number): MbMelganTriton;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MbMelganTriton.AsObject;
  static toObject(includeInstance: boolean, msg: MbMelganTriton): MbMelganTriton.AsObject;
  static serializeBinaryToWriter(message: MbMelganTriton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MbMelganTriton;
  static deserializeBinaryFromReader(message: MbMelganTriton, reader: jspb.BinaryReader): MbMelganTriton;
}

export namespace MbMelganTriton {
  export type AsObject = {
    configPath: string,
    statsPath: string,
    tritonModelName: string,
    tritonServerHost: string,
    tritonServerPort: number,
  }
}

export class Caching extends jspb.Message {
  getActive(): boolean;
  setActive(value: boolean): Caching;

  getMemoryCacheMaxSize(): number;
  setMemoryCacheMaxSize(value: number): Caching;

  getSamplingRate(): number;
  setSamplingRate(value: number): Caching;

  getLoadCache(): boolean;
  setLoadCache(value: boolean): Caching;

  getSaveCache(): boolean;
  setSaveCache(value: boolean): Caching;

  getCacheSaveDir(): string;
  setCacheSaveDir(value: string): Caching;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Caching.AsObject;
  static toObject(includeInstance: boolean, msg: Caching): Caching.AsObject;
  static serializeBinaryToWriter(message: Caching, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Caching;
  static deserializeBinaryFromReader(message: Caching, reader: jspb.BinaryReader): Caching;
}

export namespace Caching {
  export type AsObject = {
    active: boolean,
    memoryCacheMaxSize: number,
    samplingRate: number,
    loadCache: boolean,
    saveCache: boolean,
    cacheSaveDir: string,
  }
}

export class T2SNormalization extends jspb.Message {
  getLanguage(): string;
  setLanguage(value: string): T2SNormalization;

  getPipelineList(): Array<string>;
  setPipelineList(value: Array<string>): T2SNormalization;
  clearPipelineList(): T2SNormalization;
  addPipeline(value: string, index?: number): T2SNormalization;

  getCustomPhonemizerId(): string;
  setCustomPhonemizerId(value: string): T2SNormalization;

  getCustomLengthScales(): T2SCustomLengthScales | undefined;
  setCustomLengthScales(value?: T2SCustomLengthScales): T2SNormalization;
  hasCustomLengthScales(): boolean;
  clearCustomLengthScales(): T2SNormalization;

  getArpabetMapping(): string;
  setArpabetMapping(value: string): T2SNormalization;

  getNumericMapping(): string;
  setNumericMapping(value: string): T2SNormalization;

  getCallsignsMapping(): string;
  setCallsignsMapping(value: string): T2SNormalization;

  getPhonemeCorrectionMapping(): string;
  setPhonemeCorrectionMapping(value: string): T2SNormalization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2SNormalization.AsObject;
  static toObject(includeInstance: boolean, msg: T2SNormalization): T2SNormalization.AsObject;
  static serializeBinaryToWriter(message: T2SNormalization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2SNormalization;
  static deserializeBinaryFromReader(message: T2SNormalization, reader: jspb.BinaryReader): T2SNormalization;
}

export namespace T2SNormalization {
  export type AsObject = {
    language: string,
    pipelineList: Array<string>,
    customPhonemizerId: string,
    customLengthScales?: T2SCustomLengthScales.AsObject,
    arpabetMapping: string,
    numericMapping: string,
    callsignsMapping: string,
    phonemeCorrectionMapping: string,
  }
}

export class Postprocessing extends jspb.Message {
  getSilenceSecs(): number;
  setSilenceSecs(value: number): Postprocessing;

  getPipelineList(): Array<string>;
  setPipelineList(value: Array<string>): Postprocessing;
  clearPipelineList(): Postprocessing;
  addPipeline(value: string, index?: number): Postprocessing;

  getLogmmse(): Logmnse | undefined;
  setLogmmse(value?: Logmnse): Postprocessing;
  hasLogmmse(): boolean;
  clearLogmmse(): Postprocessing;

  getWiener(): Wiener | undefined;
  setWiener(value?: Wiener): Postprocessing;
  hasWiener(): boolean;
  clearWiener(): Postprocessing;

  getApodization(): Apodization | undefined;
  setApodization(value?: Apodization): Postprocessing;
  hasApodization(): boolean;
  clearApodization(): Postprocessing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Postprocessing.AsObject;
  static toObject(includeInstance: boolean, msg: Postprocessing): Postprocessing.AsObject;
  static serializeBinaryToWriter(message: Postprocessing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Postprocessing;
  static deserializeBinaryFromReader(message: Postprocessing, reader: jspb.BinaryReader): Postprocessing;
}

export namespace Postprocessing {
  export type AsObject = {
    silenceSecs: number,
    pipelineList: Array<string>,
    logmmse?: Logmnse.AsObject,
    wiener?: Wiener.AsObject,
    apodization?: Apodization.AsObject,
  }
}

export class Logmnse extends jspb.Message {
  getInitialNoise(): number;
  setInitialNoise(value: number): Logmnse;

  getWindowSize(): number;
  setWindowSize(value: number): Logmnse;

  getNoiseThreshold(): number;
  setNoiseThreshold(value: number): Logmnse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Logmnse.AsObject;
  static toObject(includeInstance: boolean, msg: Logmnse): Logmnse.AsObject;
  static serializeBinaryToWriter(message: Logmnse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Logmnse;
  static deserializeBinaryFromReader(message: Logmnse, reader: jspb.BinaryReader): Logmnse;
}

export namespace Logmnse {
  export type AsObject = {
    initialNoise: number,
    windowSize: number,
    noiseThreshold: number,
  }
}

export class Wiener extends jspb.Message {
  getFrameLen(): number;
  setFrameLen(value: number): Wiener;

  getLpcOrder(): number;
  setLpcOrder(value: number): Wiener;

  getIterations(): number;
  setIterations(value: number): Wiener;

  getAlpha(): number;
  setAlpha(value: number): Wiener;

  getThresh(): number;
  setThresh(value: number): Wiener;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wiener.AsObject;
  static toObject(includeInstance: boolean, msg: Wiener): Wiener.AsObject;
  static serializeBinaryToWriter(message: Wiener, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wiener;
  static deserializeBinaryFromReader(message: Wiener, reader: jspb.BinaryReader): Wiener;
}

export namespace Wiener {
  export type AsObject = {
    frameLen: number,
    lpcOrder: number,
    iterations: number,
    alpha: number,
    thresh: number,
  }
}

export class Apodization extends jspb.Message {
  getApodizationSecs(): number;
  setApodizationSecs(value: number): Apodization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Apodization.AsObject;
  static toObject(includeInstance: boolean, msg: Apodization): Apodization.AsObject;
  static serializeBinaryToWriter(message: Apodization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Apodization;
  static deserializeBinaryFromReader(message: Apodization, reader: jspb.BinaryReader): Apodization;
}

export namespace Apodization {
  export type AsObject = {
    apodizationSecs: number,
  }
}

export class T2SCustomLengthScales extends jspb.Message {
  getText(): number;
  setText(value: number): T2SCustomLengthScales;

  getEmail(): number;
  setEmail(value: number): T2SCustomLengthScales;

  getUrl(): number;
  setUrl(value: number): T2SCustomLengthScales;

  getPhone(): number;
  setPhone(value: number): T2SCustomLengthScales;

  getSpell(): number;
  setSpell(value: number): T2SCustomLengthScales;

  getSpellWithNames(): number;
  setSpellWithNames(value: number): T2SCustomLengthScales;

  getCallsignLong(): number;
  setCallsignLong(value: number): T2SCustomLengthScales;

  getCallsignShort(): number;
  setCallsignShort(value: number): T2SCustomLengthScales;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): T2SCustomLengthScales.AsObject;
  static toObject(includeInstance: boolean, msg: T2SCustomLengthScales): T2SCustomLengthScales.AsObject;
  static serializeBinaryToWriter(message: T2SCustomLengthScales, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): T2SCustomLengthScales;
  static deserializeBinaryFromReader(message: T2SCustomLengthScales, reader: jspb.BinaryReader): T2SCustomLengthScales;
}

export namespace T2SCustomLengthScales {
  export type AsObject = {
    text: number,
    email: number,
    url: number,
    phone: number,
    spell: number,
    spellWithNames: number,
    callsignLong: number,
    callsignShort: number,
  }
}

export class PhonemizerId extends jspb.Message {
  getId(): string;
  setId(value: string): PhonemizerId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhonemizerId.AsObject;
  static toObject(includeInstance: boolean, msg: PhonemizerId): PhonemizerId.AsObject;
  static serializeBinaryToWriter(message: PhonemizerId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhonemizerId;
  static deserializeBinaryFromReader(message: PhonemizerId, reader: jspb.BinaryReader): PhonemizerId;
}

export namespace PhonemizerId {
  export type AsObject = {
    id: string,
  }
}

export class CustomPhonemizerProto extends jspb.Message {
  getId(): string;
  setId(value: string): CustomPhonemizerProto;

  getMapsList(): Array<Map>;
  setMapsList(value: Array<Map>): CustomPhonemizerProto;
  clearMapsList(): CustomPhonemizerProto;
  addMaps(value?: Map, index?: number): Map;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomPhonemizerProto.AsObject;
  static toObject(includeInstance: boolean, msg: CustomPhonemizerProto): CustomPhonemizerProto.AsObject;
  static serializeBinaryToWriter(message: CustomPhonemizerProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomPhonemizerProto;
  static deserializeBinaryFromReader(message: CustomPhonemizerProto, reader: jspb.BinaryReader): CustomPhonemizerProto;
}

export namespace CustomPhonemizerProto {
  export type AsObject = {
    id: string,
    mapsList: Array<Map.AsObject>,
  }
}

export class Map extends jspb.Message {
  getWord(): string;
  setWord(value: string): Map;

  getPhonemeGroups(): string;
  setPhonemeGroups(value: string): Map;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Map.AsObject;
  static toObject(includeInstance: boolean, msg: Map): Map.AsObject;
  static serializeBinaryToWriter(message: Map, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Map;
  static deserializeBinaryFromReader(message: Map, reader: jspb.BinaryReader): Map;
}

export namespace Map {
  export type AsObject = {
    word: string,
    phonemeGroups: string,
  }
}

export class ListCustomPhonemizerResponse extends jspb.Message {
  getPhonemizersList(): Array<CustomPhonemizerProto>;
  setPhonemizersList(value: Array<CustomPhonemizerProto>): ListCustomPhonemizerResponse;
  clearPhonemizersList(): ListCustomPhonemizerResponse;
  addPhonemizers(value?: CustomPhonemizerProto, index?: number): CustomPhonemizerProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomPhonemizerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomPhonemizerResponse): ListCustomPhonemizerResponse.AsObject;
  static serializeBinaryToWriter(message: ListCustomPhonemizerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomPhonemizerResponse;
  static deserializeBinaryFromReader(message: ListCustomPhonemizerResponse, reader: jspb.BinaryReader): ListCustomPhonemizerResponse;
}

export namespace ListCustomPhonemizerResponse {
  export type AsObject = {
    phonemizersList: Array<CustomPhonemizerProto.AsObject>,
  }
}

export class ListCustomPhonemizerRequest extends jspb.Message {
  getPipelineIdsList(): Array<string>;
  setPipelineIdsList(value: Array<string>): ListCustomPhonemizerRequest;
  clearPipelineIdsList(): ListCustomPhonemizerRequest;
  addPipelineIds(value: string, index?: number): ListCustomPhonemizerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCustomPhonemizerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCustomPhonemizerRequest): ListCustomPhonemizerRequest.AsObject;
  static serializeBinaryToWriter(message: ListCustomPhonemizerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCustomPhonemizerRequest;
  static deserializeBinaryFromReader(message: ListCustomPhonemizerRequest, reader: jspb.BinaryReader): ListCustomPhonemizerRequest;
}

export namespace ListCustomPhonemizerRequest {
  export type AsObject = {
    pipelineIdsList: Array<string>,
  }
}

export class UpdateCustomPhonemizerRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateCustomPhonemizerRequest;

  getUpdateMethod(): UpdateCustomPhonemizerRequest.UpdateMethod;
  setUpdateMethod(value: UpdateCustomPhonemizerRequest.UpdateMethod): UpdateCustomPhonemizerRequest;

  getMapsList(): Array<Map>;
  setMapsList(value: Array<Map>): UpdateCustomPhonemizerRequest;
  clearMapsList(): UpdateCustomPhonemizerRequest;
  addMaps(value?: Map, index?: number): Map;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomPhonemizerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomPhonemizerRequest): UpdateCustomPhonemizerRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomPhonemizerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomPhonemizerRequest;
  static deserializeBinaryFromReader(message: UpdateCustomPhonemizerRequest, reader: jspb.BinaryReader): UpdateCustomPhonemizerRequest;
}

export namespace UpdateCustomPhonemizerRequest {
  export type AsObject = {
    id: string,
    updateMethod: UpdateCustomPhonemizerRequest.UpdateMethod,
    mapsList: Array<Map.AsObject>,
  }

  export enum UpdateMethod { 
    EXTEND_HARD = 0,
    EXTEND_SOFT = 1,
    REPLACE = 2,
  }
}

export class CreateCustomPhonemizerRequest extends jspb.Message {
  getPrefix(): string;
  setPrefix(value: string): CreateCustomPhonemizerRequest;

  getMapsList(): Array<Map>;
  setMapsList(value: Array<Map>): CreateCustomPhonemizerRequest;
  clearMapsList(): CreateCustomPhonemizerRequest;
  addMaps(value?: Map, index?: number): Map;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomPhonemizerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomPhonemizerRequest): CreateCustomPhonemizerRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCustomPhonemizerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomPhonemizerRequest;
  static deserializeBinaryFromReader(message: CreateCustomPhonemizerRequest, reader: jspb.BinaryReader): CreateCustomPhonemizerRequest;
}

export namespace CreateCustomPhonemizerRequest {
  export type AsObject = {
    prefix: string,
    mapsList: Array<Map.AsObject>,
  }
}

export enum Pcm { 
  PCM_16 = 0,
  PCM_24 = 1,
  PCM_32 = 2,
  PCM_S8 = 3,
  PCM_U8 = 4,
  FLOAT = 5,
  DOUBLE = 6,
}
export enum AudioFormat { 
  WAV = 0,
  FLAC = 1,
  CAF = 2,
  MP3 = 3,
  AAC = 4,
  OGG = 5,
  WMA = 6,
}
