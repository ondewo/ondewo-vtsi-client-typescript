import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as ondewo_vtsi_call_configs_pb from '../../ondewo/vtsi/call_configs_pb'; // proto import: "ondewo/vtsi/call_configs.proto"


export class VtsiProject extends jspb.Message {
  constructor();
  constructor(opt_data?: VtsiProject.AsObject);
  getName(): string;
  setName(value: string): VtsiProject;

  getDisplayName(): string;
  setDisplayName(value: string): VtsiProject;

  getMaxCallers(): number;
  setMaxCallers(value: number): VtsiProject;

  getMaxListeners(): number;
  setMaxListeners(value: number): VtsiProject;

  getAsteriskConfigs(): AsteriskConfigs | undefined;
  setAsteriskConfigs(value?: AsteriskConfigs): VtsiProject;
  hasAsteriskConfigs(): boolean;
  clearAsteriskConfigs(): VtsiProject;

  getVtsiProjectStatus(): VtsiProjectStatus;
  setVtsiProjectStatus(value: VtsiProjectStatus): VtsiProject;

  getCreatedBy(): string;
  setCreatedBy(value: string): VtsiProject;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): VtsiProject;
  hasCreatedAt(): boolean;
  clearCreatedAt(): VtsiProject;

  getModifiedBy(): string;
  setModifiedBy(value: string): VtsiProject;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): VtsiProject;
  hasModifiedAt(): boolean;
  clearModifiedAt(): VtsiProject;

  getActiveCallers(): number;
  setActiveCallers(value: number): VtsiProject;

  getActiveListeners(): number;
  setActiveListeners(value: number): VtsiProject;

  getAsteriskPort(): number;
  setAsteriskPort(value: number): VtsiProject;

  getNluAgentNamesList(): Array<string>;
  setNluAgentNamesList(value: Array<string>): VtsiProject;
  clearNluAgentNamesList(): VtsiProject;
  addNluAgentNames(value: string, index?: number): VtsiProject;

  getDeployedCallers(): number;
  setDeployedCallers(value: number): VtsiProject;

  getDeployedListeners(): number;
  setDeployedListeners(value: number): VtsiProject;

  getTransferPhoneNumberAllowlistList(): Array<string>;
  setTransferPhoneNumberAllowlistList(value: Array<string>): VtsiProject;
  clearTransferPhoneNumberAllowlistList(): VtsiProject;
  addTransferPhoneNumberAllowlist(value: string, index?: number): VtsiProject;

  getStatusMessage(): string;
  setStatusMessage(value: string): VtsiProject;

  getStatusChangedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStatusChangedAt(value?: google_protobuf_timestamp_pb.Timestamp): VtsiProject;
  hasStatusChangedAt(): boolean;
  clearStatusChangedAt(): VtsiProject;

  getTrunkRegistrationState(): TrunkRegistrationState;
  setTrunkRegistrationState(value: TrunkRegistrationState): VtsiProject;

  getAsteriskVersionEffective(): string;
  setAsteriskVersionEffective(value: string): VtsiProject;

  getWarmTransferDefaults(): ondewo_vtsi_call_configs_pb.WarmTransferConfig | undefined;
  setWarmTransferDefaults(value?: ondewo_vtsi_call_configs_pb.WarmTransferConfig): VtsiProject;
  hasWarmTransferDefaults(): boolean;
  clearWarmTransferDefaults(): VtsiProject;

  getFeatureAvailability(): VtsiProjectFeatureAvailability | undefined;
  setFeatureAvailability(value?: VtsiProjectFeatureAvailability): VtsiProject;
  hasFeatureAvailability(): boolean;
  clearFeatureAvailability(): VtsiProject;

  getIvrMenusEnabled(): boolean;
  setIvrMenusEnabled(value: boolean): VtsiProject;
  hasIvrMenusEnabled(): boolean;
  clearIvrMenusEnabled(): VtsiProject;

  getTransferTargetDirectoryMap(): jspb.Map<string, TransferTargetDirectoryItem>;
  clearTransferTargetDirectoryMap(): VtsiProject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VtsiProject.AsObject;
  static toObject(includeInstance: boolean, msg: VtsiProject): VtsiProject.AsObject;
  static serializeBinaryToWriter(message: VtsiProject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VtsiProject;
  static deserializeBinaryFromReader(message: VtsiProject, reader: jspb.BinaryReader): VtsiProject;
}

export namespace VtsiProject {
  export type AsObject = {
    name: string;
    displayName: string;
    maxCallers: number;
    maxListeners: number;
    asteriskConfigs?: AsteriskConfigs.AsObject;
    vtsiProjectStatus: VtsiProjectStatus;
    createdBy: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    modifiedBy: string;
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    activeCallers: number;
    activeListeners: number;
    asteriskPort: number;
    nluAgentNamesList: Array<string>;
    deployedCallers: number;
    deployedListeners: number;
    transferPhoneNumberAllowlistList: Array<string>;
    statusMessage: string;
    statusChangedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    trunkRegistrationState: TrunkRegistrationState;
    asteriskVersionEffective: string;
    warmTransferDefaults?: ondewo_vtsi_call_configs_pb.WarmTransferConfig.AsObject;
    featureAvailability?: VtsiProjectFeatureAvailability.AsObject;
    ivrMenusEnabled?: boolean;
    transferTargetDirectoryMap: Array<[string, TransferTargetDirectoryItem.AsObject]>;
  };

  export enum IvrMenusEnabledCase {
    _IVR_MENUS_ENABLED_NOT_SET = 0,
    IVR_MENUS_ENABLED = 24,
  }
}

export class TransferTargetDirectoryItem extends jspb.Message {
  constructor();
  constructor(opt_data?: TransferTargetDirectoryItem.AsObject);
  getDisplayName(): string;
  setDisplayName(value: string): TransferTargetDirectoryItem;

  getDescription(): string;
  setDescription(value: string): TransferTargetDirectoryItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferTargetDirectoryItem.AsObject;
  static toObject(includeInstance: boolean, msg: TransferTargetDirectoryItem): TransferTargetDirectoryItem.AsObject;
  static serializeBinaryToWriter(message: TransferTargetDirectoryItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferTargetDirectoryItem;
  static deserializeBinaryFromReader(message: TransferTargetDirectoryItem, reader: jspb.BinaryReader): TransferTargetDirectoryItem;
}

export namespace TransferTargetDirectoryItem {
  export type AsObject = {
    displayName: string;
    description: string;
  };
}

export class VtsiProjectFeatureAvailability extends jspb.Message {
  constructor();
  constructor(opt_data?: VtsiProjectFeatureAvailability.AsObject);
  getWarmIntro(): WarmIntroAvailability;
  setWarmIntro(value: WarmIntroAvailability): VtsiProjectFeatureAvailability;

  getWarmIntroPhaseB(): boolean;
  setWarmIntroPhaseB(value: boolean): VtsiProjectFeatureAvailability;

  getIvr(): IvrAvailability;
  setIvr(value: IvrAvailability): VtsiProjectFeatureAvailability;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VtsiProjectFeatureAvailability.AsObject;
  static toObject(includeInstance: boolean, msg: VtsiProjectFeatureAvailability): VtsiProjectFeatureAvailability.AsObject;
  static serializeBinaryToWriter(message: VtsiProjectFeatureAvailability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VtsiProjectFeatureAvailability;
  static deserializeBinaryFromReader(message: VtsiProjectFeatureAvailability, reader: jspb.BinaryReader): VtsiProjectFeatureAvailability;
}

export namespace VtsiProjectFeatureAvailability {
  export type AsObject = {
    warmIntro: WarmIntroAvailability;
    warmIntroPhaseB: boolean;
    ivr: IvrAvailability;
  };
}

export class AsteriskConfigsVariables extends jspb.Message {
  constructor();
  constructor(opt_data?: AsteriskConfigsVariables.AsObject);
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

  getSipTrunkTransport(): SipTrunkTransport;
  setSipTrunkTransport(value: SipTrunkTransport): AsteriskConfigsVariables;

  getSipTrunkSourceCidr(): string;
  setSipTrunkSourceCidr(value: string): AsteriskConfigsVariables;
  hasSipTrunkSourceCidr(): boolean;
  clearSipTrunkSourceCidr(): AsteriskConfigsVariables;

  getSipTrunkCaCertificatesPem(): string;
  setSipTrunkCaCertificatesPem(value: string): AsteriskConfigsVariables;
  hasSipTrunkCaCertificatesPem(): boolean;
  clearSipTrunkCaCertificatesPem(): AsteriskConfigsVariables;

  getSipTrunkVerifyServer(): boolean;
  setSipTrunkVerifyServer(value: boolean): AsteriskConfigsVariables;
  hasSipTrunkVerifyServer(): boolean;
  clearSipTrunkVerifyServer(): AsteriskConfigsVariables;

  getSoftphonePermitCidrsList(): Array<string>;
  setSoftphonePermitCidrsList(value: Array<string>): AsteriskConfigsVariables;
  clearSoftphonePermitCidrsList(): AsteriskConfigsVariables;
  addSoftphonePermitCidrs(value: string, index?: number): AsteriskConfigsVariables;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AsteriskConfigsVariables.AsObject;
  static toObject(includeInstance: boolean, msg: AsteriskConfigsVariables): AsteriskConfigsVariables.AsObject;
  static serializeBinaryToWriter(message: AsteriskConfigsVariables, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AsteriskConfigsVariables;
  static deserializeBinaryFromReader(message: AsteriskConfigsVariables, reader: jspb.BinaryReader): AsteriskConfigsVariables;
}

export namespace AsteriskConfigsVariables {
  export type AsObject = {
    sipTrunkUsername: string;
    sipTrunkPassword: string;
    sipTrunkHost: string;
    transferNumber: string;
    transferNumberHost: string;
    sipTrunkPhoneNumber: string;
    sipTrunkTransport: SipTrunkTransport;
    sipTrunkSourceCidr?: string;
    sipTrunkCaCertificatesPem?: string;
    sipTrunkVerifyServer?: boolean;
    softphonePermitCidrsList: Array<string>;
  };

  export enum SipTrunkSourceCidrCase {
    _SIP_TRUNK_SOURCE_CIDR_NOT_SET = 0,
    SIP_TRUNK_SOURCE_CIDR = 8,
  }

  export enum SipTrunkCaCertificatesPemCase {
    _SIP_TRUNK_CA_CERTIFICATES_PEM_NOT_SET = 0,
    SIP_TRUNK_CA_CERTIFICATES_PEM = 9,
  }

  export enum SipTrunkVerifyServerCase {
    _SIP_TRUNK_VERIFY_SERVER_NOT_SET = 0,
    SIP_TRUNK_VERIFY_SERVER = 10,
  }
}

export class AsteriskConfigsFiles extends jspb.Message {
  constructor();
  constructor(opt_data?: AsteriskConfigsFiles.AsObject);
  getPjsipConfFileString(): string;
  setPjsipConfFileString(value: string): AsteriskConfigsFiles;

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
    pjsipConfFileString: string;
    extensionsConfFileString: string;
    queuesConfFileString: string;
    modulesConfFileString: string;
  };
}

export class AsteriskConfigs extends jspb.Message {
  constructor();
  constructor(opt_data?: AsteriskConfigs.AsObject);
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
  hasAsteriskConfigsTargetDirectoryName(): boolean;
  clearAsteriskConfigsTargetDirectoryName(): AsteriskConfigs;

  getAsteriskPort(): number;
  setAsteriskPort(value: number): AsteriskConfigs;

  getAsteriskVersion(): string;
  setAsteriskVersion(value: string): AsteriskConfigs;
  hasAsteriskVersion(): boolean;
  clearAsteriskVersion(): AsteriskConfigs;

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
    asteriskConfigsVariables?: AsteriskConfigsVariables.AsObject;
    asteriskConfigsFiles?: AsteriskConfigsFiles.AsObject;
    asteriskConfigsTargetDirectoryName?: string;
    asteriskPort: number;
    asteriskVersion?: string;
  };

  export enum AsteriskConfigsOneofCase {
    ASTERISK_CONFIGS_ONEOF_NOT_SET = 0,
    ASTERISK_CONFIGS_VARIABLES = 1,
    ASTERISK_CONFIGS_FILES = 2,
    ASTERISK_CONFIGS_TARGET_DIRECTORY_NAME = 3,
  }

  export enum AsteriskVersionCase {
    _ASTERISK_VERSION_NOT_SET = 0,
    ASTERISK_VERSION = 5,
  }
}

export class CreateVtsiProjectRequest extends jspb.Message {
  constructor();
  constructor(opt_data?: CreateVtsiProjectRequest.AsObject);
  getVtsiProject(): VtsiProject | undefined;
  setVtsiProject(value?: VtsiProject): CreateVtsiProjectRequest;
  hasVtsiProject(): boolean;
  clearVtsiProject(): CreateVtsiProjectRequest;

  getErrorMessage(): string;
  setErrorMessage(value: string): CreateVtsiProjectRequest;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): CreateVtsiProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVtsiProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVtsiProjectRequest): CreateVtsiProjectRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVtsiProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVtsiProjectRequest;
  static deserializeBinaryFromReader(message: CreateVtsiProjectRequest, reader: jspb.BinaryReader): CreateVtsiProjectRequest;
}

export namespace CreateVtsiProjectRequest {
  export type AsObject = {
    vtsiProject?: VtsiProject.AsObject;
    errorMessage: string;
    validateOnly: boolean;
  };
}

export class CreateVtsiProjectResponse extends jspb.Message {
  constructor();
  constructor(opt_data?: CreateVtsiProjectResponse.AsObject);
  getVtsiProject(): VtsiProject | undefined;
  setVtsiProject(value?: VtsiProject): CreateVtsiProjectResponse;
  hasVtsiProject(): boolean;
  clearVtsiProject(): CreateVtsiProjectResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): CreateVtsiProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVtsiProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVtsiProjectResponse): CreateVtsiProjectResponse.AsObject;
  static serializeBinaryToWriter(message: CreateVtsiProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVtsiProjectResponse;
  static deserializeBinaryFromReader(message: CreateVtsiProjectResponse, reader: jspb.BinaryReader): CreateVtsiProjectResponse;
}

export namespace CreateVtsiProjectResponse {
  export type AsObject = {
    vtsiProject?: VtsiProject.AsObject;
    errorMessage: string;
  };
}

export class GetVtsiProjectRequest extends jspb.Message {
  constructor();
  constructor(opt_data?: GetVtsiProjectRequest.AsObject);
  getName(): string;
  setName(value: string): GetVtsiProjectRequest;

  getVtsiProjectView(): VtsiProjectView;
  setVtsiProjectView(value: VtsiProjectView): GetVtsiProjectRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetVtsiProjectRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetVtsiProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVtsiProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVtsiProjectRequest): GetVtsiProjectRequest.AsObject;
  static serializeBinaryToWriter(message: GetVtsiProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVtsiProjectRequest;
  static deserializeBinaryFromReader(message: GetVtsiProjectRequest, reader: jspb.BinaryReader): GetVtsiProjectRequest;
}

export namespace GetVtsiProjectRequest {
  export type AsObject = {
    name: string;
    vtsiProjectView: VtsiProjectView;
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
  };
}

export class ListVtsiProjectsRequest extends jspb.Message {
  constructor();
  constructor(opt_data?: ListVtsiProjectsRequest.AsObject);
  getVtsiProjectView(): VtsiProjectView;
  setVtsiProjectView(value: VtsiProjectView): ListVtsiProjectsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListVtsiProjectsRequest;
  hasPageToken(): boolean;
  clearPageToken(): ListVtsiProjectsRequest;

  getVtsiProjectSorting(): VtsiProjectSorting | undefined;
  setVtsiProjectSorting(value?: VtsiProjectSorting): ListVtsiProjectsRequest;
  hasVtsiProjectSorting(): boolean;
  clearVtsiProjectSorting(): ListVtsiProjectsRequest;

  getNluAgentNamesList(): Array<string>;
  setNluAgentNamesList(value: Array<string>): ListVtsiProjectsRequest;
  clearNluAgentNamesList(): ListVtsiProjectsRequest;
  addNluAgentNames(value: string, index?: number): ListVtsiProjectsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListVtsiProjectsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListVtsiProjectsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListVtsiProjectsRequest;

  getStatusesList(): Array<VtsiProjectStatus>;
  setStatusesList(value: Array<VtsiProjectStatus>): ListVtsiProjectsRequest;
  clearStatusesList(): ListVtsiProjectsRequest;
  addStatuses(value: VtsiProjectStatus, index?: number): ListVtsiProjectsRequest;

  getDisplayNameContains(): string;
  setDisplayNameContains(value: string): ListVtsiProjectsRequest;

  getCreatedAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAfter(value?: google_protobuf_timestamp_pb.Timestamp): ListVtsiProjectsRequest;
  hasCreatedAfter(): boolean;
  clearCreatedAfter(): ListVtsiProjectsRequest;

  getCreatedBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedBefore(value?: google_protobuf_timestamp_pb.Timestamp): ListVtsiProjectsRequest;
  hasCreatedBefore(): boolean;
  clearCreatedBefore(): ListVtsiProjectsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVtsiProjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVtsiProjectsRequest): ListVtsiProjectsRequest.AsObject;
  static serializeBinaryToWriter(message: ListVtsiProjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVtsiProjectsRequest;
  static deserializeBinaryFromReader(message: ListVtsiProjectsRequest, reader: jspb.BinaryReader): ListVtsiProjectsRequest;
}

export namespace ListVtsiProjectsRequest {
  export type AsObject = {
    vtsiProjectView: VtsiProjectView;
    pageToken?: string;
    vtsiProjectSorting?: VtsiProjectSorting.AsObject;
    nluAgentNamesList: Array<string>;
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
    pageSize: number;
    statusesList: Array<VtsiProjectStatus>;
    displayNameContains: string;
    createdAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    createdBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum PageTokenCase {
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 2,
  }

  export enum VtsiProjectSortingCase {
    _VTSI_PROJECT_SORTING_NOT_SET = 0,
    VTSI_PROJECT_SORTING = 3,
  }
}

export class ListVtsiProjectsResponse extends jspb.Message {
  constructor();
  constructor(opt_data?: ListVtsiProjectsResponse.AsObject);
  getVtsiProjectsList(): Array<VtsiProject>;
  setVtsiProjectsList(value: Array<VtsiProject>): ListVtsiProjectsResponse;
  clearVtsiProjectsList(): ListVtsiProjectsResponse;
  addVtsiProjects(value?: VtsiProject, index?: number): VtsiProject;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListVtsiProjectsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVtsiProjectsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVtsiProjectsResponse): ListVtsiProjectsResponse.AsObject;
  static serializeBinaryToWriter(message: ListVtsiProjectsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVtsiProjectsResponse;
  static deserializeBinaryFromReader(message: ListVtsiProjectsResponse, reader: jspb.BinaryReader): ListVtsiProjectsResponse;
}

export namespace ListVtsiProjectsResponse {
  export type AsObject = {
    vtsiProjectsList: Array<VtsiProject.AsObject>;
    nextPageToken: string;
  };
}

export class VtsiProjectSorting extends jspb.Message {
  constructor();
  constructor(opt_data?: VtsiProjectSorting.AsObject);
  getSortingField(): VtsiProjectSorting.VtsiProjectSortingField;
  setSortingField(value: VtsiProjectSorting.VtsiProjectSortingField): VtsiProjectSorting;
  hasSortingField(): boolean;
  clearSortingField(): VtsiProjectSorting;

  getSortingMode(): VtsiProjectSortingMode;
  setSortingMode(value: VtsiProjectSortingMode): VtsiProjectSorting;
  hasSortingMode(): boolean;
  clearSortingMode(): VtsiProjectSorting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VtsiProjectSorting.AsObject;
  static toObject(includeInstance: boolean, msg: VtsiProjectSorting): VtsiProjectSorting.AsObject;
  static serializeBinaryToWriter(message: VtsiProjectSorting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VtsiProjectSorting;
  static deserializeBinaryFromReader(message: VtsiProjectSorting, reader: jspb.BinaryReader): VtsiProjectSorting;
}

export namespace VtsiProjectSorting {
  export type AsObject = {
    sortingField?: VtsiProjectSorting.VtsiProjectSortingField;
    sortingMode?: VtsiProjectSortingMode;
  };

  export enum VtsiProjectSortingField {
    NO_VTSI_PROJECT_SORTING = 0,
    SORT_VTSI_PROJECT_BY_NAME = 1,
    SORT_VTSI_PROJECT_BY_DISPLAY_NAME = 2,
    SORT_VTSI_PROJECT_BY_CREATION_DATE = 3,
    SORT_VTSI_PROJECT_BY_LAST_MODIFIED = 4,
  }

  export enum SortingFieldCase {
    _SORTING_FIELD_NOT_SET = 0,
    SORTING_FIELD = 1,
  }

  export enum SortingModeCase {
    _SORTING_MODE_NOT_SET = 0,
    SORTING_MODE = 2,
  }
}

export class UpdateVtsiProjectRequest extends jspb.Message {
  constructor();
  constructor(opt_data?: UpdateVtsiProjectRequest.AsObject);
  getVtsiProject(): VtsiProject | undefined;
  setVtsiProject(value?: VtsiProject): UpdateVtsiProjectRequest;
  hasVtsiProject(): boolean;
  clearVtsiProject(): UpdateVtsiProjectRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateVtsiProjectRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateVtsiProjectRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateVtsiProjectRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateVtsiProjectRequest;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): UpdateVtsiProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVtsiProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVtsiProjectRequest): UpdateVtsiProjectRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVtsiProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVtsiProjectRequest;
  static deserializeBinaryFromReader(message: UpdateVtsiProjectRequest, reader: jspb.BinaryReader): UpdateVtsiProjectRequest;
}

export namespace UpdateVtsiProjectRequest {
  export type AsObject = {
    vtsiProject?: VtsiProject.AsObject;
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
    validateOnly: boolean;
  };
}

export class UpdateVtsiProjectResponse extends jspb.Message {
  constructor();
  constructor(opt_data?: UpdateVtsiProjectResponse.AsObject);
  getName(): string;
  setName(value: string): UpdateVtsiProjectResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): UpdateVtsiProjectResponse;

  getVtsiProject(): VtsiProject | undefined;
  setVtsiProject(value?: VtsiProject): UpdateVtsiProjectResponse;
  hasVtsiProject(): boolean;
  clearVtsiProject(): UpdateVtsiProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVtsiProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVtsiProjectResponse): UpdateVtsiProjectResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateVtsiProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVtsiProjectResponse;
  static deserializeBinaryFromReader(message: UpdateVtsiProjectResponse, reader: jspb.BinaryReader): UpdateVtsiProjectResponse;
}

export namespace UpdateVtsiProjectResponse {
  export type AsObject = {
    name: string;
    errorMessage: string;
    vtsiProject?: VtsiProject.AsObject;
  };
}

export class DeleteVtsiProjectRequest extends jspb.Message {
  constructor();
  constructor(opt_data?: DeleteVtsiProjectRequest.AsObject);
  getName(): string;
  setName(value: string): DeleteVtsiProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVtsiProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVtsiProjectRequest): DeleteVtsiProjectRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVtsiProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVtsiProjectRequest;
  static deserializeBinaryFromReader(message: DeleteVtsiProjectRequest, reader: jspb.BinaryReader): DeleteVtsiProjectRequest;
}

export namespace DeleteVtsiProjectRequest {
  export type AsObject = {
    name: string;
  };
}

export class DeleteVtsiProjectResponse extends jspb.Message {
  constructor();
  constructor(opt_data?: DeleteVtsiProjectResponse.AsObject);
  getName(): string;
  setName(value: string): DeleteVtsiProjectResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): DeleteVtsiProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVtsiProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVtsiProjectResponse): DeleteVtsiProjectResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteVtsiProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVtsiProjectResponse;
  static deserializeBinaryFromReader(message: DeleteVtsiProjectResponse, reader: jspb.BinaryReader): DeleteVtsiProjectResponse;
}

export namespace DeleteVtsiProjectResponse {
  export type AsObject = {
    name: string;
    errorMessage: string;
  };
}

export class DeployVtsiProjectRequest extends jspb.Message {
  constructor();
  constructor(opt_data?: DeployVtsiProjectRequest.AsObject);
  getName(): string;
  setName(value: string): DeployVtsiProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployVtsiProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeployVtsiProjectRequest): DeployVtsiProjectRequest.AsObject;
  static serializeBinaryToWriter(message: DeployVtsiProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployVtsiProjectRequest;
  static deserializeBinaryFromReader(message: DeployVtsiProjectRequest, reader: jspb.BinaryReader): DeployVtsiProjectRequest;
}

export namespace DeployVtsiProjectRequest {
  export type AsObject = {
    name: string;
  };
}

export class DeployVtsiProjectResponse extends jspb.Message {
  constructor();
  constructor(opt_data?: DeployVtsiProjectResponse.AsObject);
  getName(): string;
  setName(value: string): DeployVtsiProjectResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): DeployVtsiProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployVtsiProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeployVtsiProjectResponse): DeployVtsiProjectResponse.AsObject;
  static serializeBinaryToWriter(message: DeployVtsiProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployVtsiProjectResponse;
  static deserializeBinaryFromReader(message: DeployVtsiProjectResponse, reader: jspb.BinaryReader): DeployVtsiProjectResponse;
}

export namespace DeployVtsiProjectResponse {
  export type AsObject = {
    name: string;
    errorMessage: string;
  };
}

export class UndeployVtsiProjectRequest extends jspb.Message {
  constructor();
  constructor(opt_data?: UndeployVtsiProjectRequest.AsObject);
  getName(): string;
  setName(value: string): UndeployVtsiProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeployVtsiProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeployVtsiProjectRequest): UndeployVtsiProjectRequest.AsObject;
  static serializeBinaryToWriter(message: UndeployVtsiProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeployVtsiProjectRequest;
  static deserializeBinaryFromReader(message: UndeployVtsiProjectRequest, reader: jspb.BinaryReader): UndeployVtsiProjectRequest;
}

export namespace UndeployVtsiProjectRequest {
  export type AsObject = {
    name: string;
  };
}

export class UndeployVtsiProjectResponse extends jspb.Message {
  constructor();
  constructor(opt_data?: UndeployVtsiProjectResponse.AsObject);
  getName(): string;
  setName(value: string): UndeployVtsiProjectResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): UndeployVtsiProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeployVtsiProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UndeployVtsiProjectResponse): UndeployVtsiProjectResponse.AsObject;
  static serializeBinaryToWriter(message: UndeployVtsiProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeployVtsiProjectResponse;
  static deserializeBinaryFromReader(message: UndeployVtsiProjectResponse, reader: jspb.BinaryReader): UndeployVtsiProjectResponse;
}

export namespace UndeployVtsiProjectResponse {
  export type AsObject = {
    name: string;
    errorMessage: string;
  };
}

export enum WarmIntroAvailability {
  WARM_INTRO_AVAILABILITY_UNSPECIFIED = 0,
  WARM_INTRO_AVAILABILITY_AVAILABLE = 1,
  WARM_INTRO_AVAILABILITY_DISABLED_BY_DEPLOYMENT = 2,
  WARM_INTRO_AVAILABILITY_NEEDS_LOCAL_ASTERISK = 3,
  WARM_INTRO_AVAILABILITY_NEEDS_LISTENER = 4,
  WARM_INTRO_AVAILABILITY_NEEDS_CALL_CONTROL_KEY = 5,
}
export enum IvrAvailability {
  IVR_AVAILABILITY_UNSPECIFIED = 0,
  IVR_AVAILABILITY_AVAILABLE = 1,
  IVR_AVAILABILITY_DISABLED_BY_DEPLOYMENT = 2,
  IVR_AVAILABILITY_NEEDS_LOCAL_ASTERISK = 3,
}
export enum TrunkRegistrationState {
  TRUNK_REGISTRATION_STATE_UNSPECIFIED = 0,
  TRUNK_REGISTRATION_STATE_REGISTERED = 1,
  TRUNK_REGISTRATION_STATE_UNREGISTERED = 2,
  TRUNK_REGISTRATION_STATE_REJECTED = 3,
  TRUNK_REGISTRATION_STATE_NOT_CONFIGURED = 4,
}
export enum VtsiProjectStatus {
  UNSPECIFIED = 0,
  UNDEPLOYED = 1,
  UPDATING = 2,
  DEPLOYING = 3,
  DEPLOYED = 4,
  UNDEPLOYING = 5,
  DELETING = 6,
  DELETED = 7,
  DEPLOY_FAILED = 8,
}
export enum SipTrunkTransport {
  SIP_TRUNK_TRANSPORT_UNSPECIFIED = 0,
  SIP_TRUNK_TRANSPORT_TLS = 1,
  SIP_TRUNK_TRANSPORT_UDP = 2,
  SIP_TRUNK_TRANSPORT_TCP = 3,
}
export enum VtsiProjectSortingMode {
  ASCENDING = 0,
  DESCENDING = 1,
}
export enum VtsiProjectView {
  VTSI_PROJECT_VIEW_UNSPECIFIED = 0,
  VTSI_PROJECT_VIEW_FULL = 1,
  VTSI_PROJECT_VIEW_SHALLOW = 2,
  VTSI_PROJECT_VIEW_MINIMUM = 3,
}
