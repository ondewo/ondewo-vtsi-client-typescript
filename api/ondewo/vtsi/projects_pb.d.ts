import * as jspb from 'google-protobuf'

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class VtsiProject extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VtsiProject.AsObject;
  static toObject(includeInstance: boolean, msg: VtsiProject): VtsiProject.AsObject;
  static serializeBinaryToWriter(message: VtsiProject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VtsiProject;
  static deserializeBinaryFromReader(message: VtsiProject, reader: jspb.BinaryReader): VtsiProject;
}

export namespace VtsiProject {
  export type AsObject = {
    name: string,
    displayName: string,
    maxCallers: number,
    maxListeners: number,
    asteriskConfigs?: AsteriskConfigs.AsObject,
    vtsiProjectStatus: VtsiProjectStatus,
    createdBy: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    activeCallers: number,
    activeListeners: number,
    asteriskPort: number,
    nluAgentNamesList: Array<string>,
    deployedCallers: number,
    deployedListeners: number,
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

export class CreateVtsiProjectRequest extends jspb.Message {
  getVtsiProject(): VtsiProject | undefined;
  setVtsiProject(value?: VtsiProject): CreateVtsiProjectRequest;
  hasVtsiProject(): boolean;
  clearVtsiProject(): CreateVtsiProjectRequest;

  getErrorMessage(): string;
  setErrorMessage(value: string): CreateVtsiProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVtsiProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVtsiProjectRequest): CreateVtsiProjectRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVtsiProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVtsiProjectRequest;
  static deserializeBinaryFromReader(message: CreateVtsiProjectRequest, reader: jspb.BinaryReader): CreateVtsiProjectRequest;
}

export namespace CreateVtsiProjectRequest {
  export type AsObject = {
    vtsiProject?: VtsiProject.AsObject,
    errorMessage: string,
  }
}

export class CreateVtsiProjectResponse extends jspb.Message {
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
    vtsiProject?: VtsiProject.AsObject,
    errorMessage: string,
  }
}

export class GetVtsiProjectRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetVtsiProjectRequest;

  getVtsiProjectView(): VtsiProjectView;
  setVtsiProjectView(value: VtsiProjectView): GetVtsiProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVtsiProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVtsiProjectRequest): GetVtsiProjectRequest.AsObject;
  static serializeBinaryToWriter(message: GetVtsiProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVtsiProjectRequest;
  static deserializeBinaryFromReader(message: GetVtsiProjectRequest, reader: jspb.BinaryReader): GetVtsiProjectRequest;
}

export namespace GetVtsiProjectRequest {
  export type AsObject = {
    name: string,
    vtsiProjectView: VtsiProjectView,
  }
}

export class ListVtsiProjectsRequest extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVtsiProjectsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVtsiProjectsRequest): ListVtsiProjectsRequest.AsObject;
  static serializeBinaryToWriter(message: ListVtsiProjectsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVtsiProjectsRequest;
  static deserializeBinaryFromReader(message: ListVtsiProjectsRequest, reader: jspb.BinaryReader): ListVtsiProjectsRequest;
}

export namespace ListVtsiProjectsRequest {
  export type AsObject = {
    vtsiProjectView: VtsiProjectView,
    pageToken?: string,
    vtsiProjectSorting?: VtsiProjectSorting.AsObject,
    nluAgentNamesList: Array<string>,
  }

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
    vtsiProjectsList: Array<VtsiProject.AsObject>,
    nextPageToken: string,
  }
}

export class VtsiProjectSorting extends jspb.Message {
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
    sortingField?: VtsiProjectSorting.VtsiProjectSortingField,
    sortingMode?: VtsiProjectSortingMode,
  }

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
  getVtsiProject(): VtsiProject | undefined;
  setVtsiProject(value?: VtsiProject): UpdateVtsiProjectRequest;
  hasVtsiProject(): boolean;
  clearVtsiProject(): UpdateVtsiProjectRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVtsiProjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVtsiProjectRequest): UpdateVtsiProjectRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVtsiProjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVtsiProjectRequest;
  static deserializeBinaryFromReader(message: UpdateVtsiProjectRequest, reader: jspb.BinaryReader): UpdateVtsiProjectRequest;
}

export namespace UpdateVtsiProjectRequest {
  export type AsObject = {
    vtsiProject?: VtsiProject.AsObject,
  }
}

export class UpdateVtsiProjectResponse extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateVtsiProjectResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): UpdateVtsiProjectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVtsiProjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVtsiProjectResponse): UpdateVtsiProjectResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateVtsiProjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVtsiProjectResponse;
  static deserializeBinaryFromReader(message: UpdateVtsiProjectResponse, reader: jspb.BinaryReader): UpdateVtsiProjectResponse;
}

export namespace UpdateVtsiProjectResponse {
  export type AsObject = {
    name: string,
    errorMessage: string,
  }
}

export class DeleteVtsiProjectRequest extends jspb.Message {
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
    name: string,
  }
}

export class DeleteVtsiProjectResponse extends jspb.Message {
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
    name: string,
    errorMessage: string,
  }
}

export class DeployVtsiProjectRequest extends jspb.Message {
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
    name: string,
  }
}

export class DeployVtsiProjectResponse extends jspb.Message {
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
    name: string,
    errorMessage: string,
  }
}

export class UndeployVtsiProjectRequest extends jspb.Message {
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
    name: string,
  }
}

export class UndeployVtsiProjectResponse extends jspb.Message {
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
    name: string,
    errorMessage: string,
  }
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
