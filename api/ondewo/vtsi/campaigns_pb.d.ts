import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb'; // proto import: "google/protobuf/duration.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as ondewo_sip_sip_pb from '../../ondewo/sip/sip_pb'; // proto import: "ondewo/sip/sip.proto"
import * as ondewo_vtsi_call_configs_pb from '../../ondewo/vtsi/call_configs_pb'; // proto import: "ondewo/vtsi/call_configs.proto"


export class Campaign extends jspb.Message {
  getName(): string;
  setName(value: string): Campaign;

  getCampaignId(): string;
  setCampaignId(value: string): Campaign;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): Campaign;

  getDisplayName(): string;
  setDisplayName(value: string): Campaign;

  getMaxParallelCalls(): number;
  setMaxParallelCalls(value: number): Campaign;

  getMaxAttempts(): number;
  setMaxAttempts(value: number): Campaign;

  getRetryDelay(): google_protobuf_duration_pb.Duration | undefined;
  setRetryDelay(value?: google_protobuf_duration_pb.Duration): Campaign;
  hasRetryDelay(): boolean;
  clearRetryDelay(): Campaign;

  getState(): CampaignState;
  setState(value: CampaignState): Campaign;

  getStateReason(): string;
  setStateReason(value: string): Campaign;

  getStatistics(): CampaignStatistics | undefined;
  setStatistics(value?: CampaignStatistics): Campaign;
  hasStatistics(): boolean;
  clearStatistics(): Campaign;

  getCreatedBy(): string;
  setCreatedBy(value: string): Campaign;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Campaign;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Campaign;

  getModifiedBy(): string;
  setModifiedBy(value: string): Campaign;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Campaign;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Campaign;

  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): Campaign;
  hasStartedAt(): boolean;
  clearStartedAt(): Campaign;

  getStoppedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStoppedAt(value?: google_protobuf_timestamp_pb.Timestamp): Campaign;
  hasStoppedAt(): boolean;
  clearStoppedAt(): Campaign;

  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Campaign;
  hasCompletedAt(): boolean;
  clearCompletedAt(): Campaign;

  getCampaignCommonServicesConfig(): ondewo_vtsi_call_configs_pb.CommonServicesConfig | undefined;
  setCampaignCommonServicesConfig(value?: ondewo_vtsi_call_configs_pb.CommonServicesConfig): Campaign;
  hasCampaignCommonServicesConfig(): boolean;
  clearCampaignCommonServicesConfig(): Campaign;

  getCampaignSipCallerConfig(): ondewo_vtsi_call_configs_pb.SipCallerConfig | undefined;
  setCampaignSipCallerConfig(value?: ondewo_vtsi_call_configs_pb.SipCallerConfig): Campaign;
  hasCampaignSipCallerConfig(): boolean;
  clearCampaignSipCallerConfig(): Campaign;

  getCampaignCallersList(): Array<string>;
  setCampaignCallersList(value: Array<string>): Campaign;
  clearCampaignCallersList(): Campaign;
  addCampaignCallers(value: string, index?: number): Campaign;

  getCampaignCallersTruncated(): boolean;
  setCampaignCallersTruncated(value: boolean): Campaign;

  getCallingWindow(): CampaignCallingWindow | undefined;
  setCallingWindow(value?: CampaignCallingWindow): Campaign;
  hasCallingWindow(): boolean;
  clearCallingWindow(): Campaign;

  getOutsideCallingWindow(): boolean;
  setOutsideCallingWindow(value: boolean): Campaign;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Campaign.AsObject;
  static toObject(includeInstance: boolean, msg: Campaign): Campaign.AsObject;
  static serializeBinaryToWriter(message: Campaign, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Campaign;
  static deserializeBinaryFromReader(message: Campaign, reader: jspb.BinaryReader): Campaign;
}

export namespace Campaign {
  export type AsObject = {
    name: string,
    campaignId: string,
    vtsiProjectName: string,
    displayName: string,
    maxParallelCalls: number,
    maxAttempts: number,
    retryDelay?: google_protobuf_duration_pb.Duration.AsObject,
    state: CampaignState,
    stateReason: string,
    statistics?: CampaignStatistics.AsObject,
    createdBy: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stoppedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    campaignCommonServicesConfig?: ondewo_vtsi_call_configs_pb.CommonServicesConfig.AsObject,
    campaignSipCallerConfig?: ondewo_vtsi_call_configs_pb.SipCallerConfig.AsObject,
    campaignCallersList: Array<string>,
    campaignCallersTruncated: boolean,
    callingWindow?: CampaignCallingWindow.AsObject,
    outsideCallingWindow: boolean,
  }
}

export class CampaignCallingWindow extends jspb.Message {
  getTimeZone(): string;
  setTimeZone(value: string): CampaignCallingWindow;

  getSlotsList(): Array<CallingWindowSlot>;
  setSlotsList(value: Array<CallingWindowSlot>): CampaignCallingWindow;
  clearSlotsList(): CampaignCallingWindow;
  addSlots(value?: CallingWindowSlot, index?: number): CallingWindowSlot;

  getNextWindowStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNextWindowStart(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCallingWindow;
  hasNextWindowStart(): boolean;
  clearNextWindowStart(): CampaignCallingWindow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignCallingWindow.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignCallingWindow): CampaignCallingWindow.AsObject;
  static serializeBinaryToWriter(message: CampaignCallingWindow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignCallingWindow;
  static deserializeBinaryFromReader(message: CampaignCallingWindow, reader: jspb.BinaryReader): CampaignCallingWindow;
}

export namespace CampaignCallingWindow {
  export type AsObject = {
    timeZone: string,
    slotsList: Array<CallingWindowSlot.AsObject>,
    nextWindowStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CallingWindowSlot extends jspb.Message {
  getDayOfWeek(): CallingWindowDayOfWeek;
  setDayOfWeek(value: CallingWindowDayOfWeek): CallingWindowSlot;

  getStartMinute(): number;
  setStartMinute(value: number): CallingWindowSlot;

  getEndMinute(): number;
  setEndMinute(value: number): CallingWindowSlot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallingWindowSlot.AsObject;
  static toObject(includeInstance: boolean, msg: CallingWindowSlot): CallingWindowSlot.AsObject;
  static serializeBinaryToWriter(message: CallingWindowSlot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallingWindowSlot;
  static deserializeBinaryFromReader(message: CallingWindowSlot, reader: jspb.BinaryReader): CallingWindowSlot;
}

export namespace CallingWindowSlot {
  export type AsObject = {
    dayOfWeek: CallingWindowDayOfWeek,
    startMinute: number,
    endMinute: number,
  }
}

export class CampaignStatistics extends jspb.Message {
  getCampaignName(): string;
  setCampaignName(value: string): CampaignStatistics;

  getTotal(): number;
  setTotal(value: number): CampaignStatistics;

  getNotStarted(): number;
  setNotStarted(value: number): CampaignStatistics;

  getInProgress(): number;
  setInProgress(value: number): CampaignStatistics;

  getRetryPending(): number;
  setRetryPending(value: number): CampaignStatistics;

  getCompleted(): number;
  setCompleted(value: number): CampaignStatistics;

  getFailed(): number;
  setFailed(value: number): CampaignStatistics;

  getCancelled(): number;
  setCancelled(value: number): CampaignStatistics;

  getTotalAttempts(): number;
  setTotalAttempts(value: number): CampaignStatistics;

  getProgressPercent(): number;
  setProgressPercent(value: number): CampaignStatistics;

  getScheduledNotDue(): number;
  setScheduledNotDue(value: number): CampaignStatistics;

  getCallsRetried(): number;
  setCallsRetried(value: number): CampaignStatistics;

  getAverageConnectedDuration(): google_protobuf_duration_pb.Duration | undefined;
  setAverageConnectedDuration(value?: google_protobuf_duration_pb.Duration): CampaignStatistics;
  hasAverageConnectedDuration(): boolean;
  clearAverageConnectedDuration(): CampaignStatistics;

  getAnsweringMachineDetected(): number;
  setAnsweringMachineDetected(value: number): CampaignStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignStatistics): CampaignStatistics.AsObject;
  static serializeBinaryToWriter(message: CampaignStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignStatistics;
  static deserializeBinaryFromReader(message: CampaignStatistics, reader: jspb.BinaryReader): CampaignStatistics;
}

export namespace CampaignStatistics {
  export type AsObject = {
    campaignName: string,
    total: number,
    notStarted: number,
    inProgress: number,
    retryPending: number,
    completed: number,
    failed: number,
    cancelled: number,
    totalAttempts: number,
    progressPercent: number,
    scheduledNotDue: number,
    callsRetried: number,
    averageConnectedDuration?: google_protobuf_duration_pb.Duration.AsObject,
    answeringMachineDetected: number,
  }
}

export class CampaignCallAttempt extends jspb.Message {
  getAttemptNumber(): number;
  setAttemptNumber(value: number): CampaignCallAttempt;

  getCallerName(): string;
  setCallerName(value: string): CampaignCallAttempt;

  getCallName(): string;
  setCallName(value: string): CampaignCallAttempt;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCallAttempt;
  hasStartTime(): boolean;
  clearStartTime(): CampaignCallAttempt;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCallAttempt;
  hasEndTime(): boolean;
  clearEndTime(): CampaignCallAttempt;

  getOutcome(): CampaignCallAttemptOutcome;
  setOutcome(value: CampaignCallAttemptOutcome): CampaignCallAttempt;

  getSipStatusType(): ondewo_sip_sip_pb.SipStatus.StatusType;
  setSipStatusType(value: ondewo_sip_sip_pb.SipStatus.StatusType): CampaignCallAttempt;

  getSipStatusDescription(): string;
  setSipStatusDescription(value: string): CampaignCallAttempt;

  getErrorMessage(): string;
  setErrorMessage(value: string): CampaignCallAttempt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignCallAttempt.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignCallAttempt): CampaignCallAttempt.AsObject;
  static serializeBinaryToWriter(message: CampaignCallAttempt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignCallAttempt;
  static deserializeBinaryFromReader(message: CampaignCallAttempt, reader: jspb.BinaryReader): CampaignCallAttempt;
}

export namespace CampaignCallAttempt {
  export type AsObject = {
    attemptNumber: number,
    callerName: string,
    callName: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    outcome: CampaignCallAttemptOutcome,
    sipStatusType: ondewo_sip_sip_pb.SipStatus.StatusType,
    sipStatusDescription: string,
    errorMessage: string,
  }
}

export class CampaignCall extends jspb.Message {
  getName(): string;
  setName(value: string): CampaignCall;

  getCampaignName(): string;
  setCampaignName(value: string): CampaignCall;

  getPosition(): number;
  setPosition(value: number): CampaignCall;

  getState(): CampaignCallState;
  setState(value: CampaignCallState): CampaignCall;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): CampaignCall;

  getSource(): CampaignCallSource;
  setSource(value: CampaignCallSource): CampaignCall;

  getScheduledCallerName(): string;
  setScheduledCallerName(value: string): CampaignCall;

  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;
  hasScheduledTime(): boolean;
  clearScheduledTime(): CampaignCall;

  getAttempts(): number;
  setAttempts(value: number): CampaignCall;

  getMaxAttempts(): number;
  setMaxAttempts(value: number): CampaignCall;

  getCallerName(): string;
  setCallerName(value: string): CampaignCall;

  getCallName(): string;
  setCallName(value: string): CampaignCall;

  getSipStatusType(): ondewo_sip_sip_pb.SipStatus.StatusType;
  setSipStatusType(value: ondewo_sip_sip_pb.SipStatus.StatusType): CampaignCall;

  getSipStatusDescription(): string;
  setSipStatusDescription(value: string): CampaignCall;

  getLastError(): string;
  setLastError(value: string): CampaignCall;

  getNextAttemptTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNextAttemptTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;
  hasNextAttemptTime(): boolean;
  clearNextAttemptTime(): CampaignCall;

  getFirstAttemptTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstAttemptTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;
  hasFirstAttemptTime(): boolean;
  clearFirstAttemptTime(): CampaignCall;

  getLastAttemptTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastAttemptTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;
  hasLastAttemptTime(): boolean;
  clearLastAttemptTime(): CampaignCall;

  getFinishTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTime(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;
  hasFinishTime(): boolean;
  clearFinishTime(): CampaignCall;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;
  hasCreatedAt(): boolean;
  clearCreatedAt(): CampaignCall;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): CampaignCall;
  hasModifiedAt(): boolean;
  clearModifiedAt(): CampaignCall;

  getAttemptHistoryList(): Array<CampaignCallAttempt>;
  setAttemptHistoryList(value: Array<CampaignCallAttempt>): CampaignCall;
  clearAttemptHistoryList(): CampaignCall;
  addAttemptHistory(value?: CampaignCallAttempt, index?: number): CampaignCallAttempt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignCall.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignCall): CampaignCall.AsObject;
  static serializeBinaryToWriter(message: CampaignCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignCall;
  static deserializeBinaryFromReader(message: CampaignCall, reader: jspb.BinaryReader): CampaignCall;
}

export namespace CampaignCall {
  export type AsObject = {
    name: string,
    campaignName: string,
    position: number,
    state: CampaignCallState,
    phoneNumber: string,
    source: CampaignCallSource,
    scheduledCallerName: string,
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    attempts: number,
    maxAttempts: number,
    callerName: string,
    callName: string,
    sipStatusType: ondewo_sip_sip_pb.SipStatus.StatusType,
    sipStatusDescription: string,
    lastError: string,
    nextAttemptTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    firstAttemptTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastAttemptTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    attemptHistoryList: Array<CampaignCallAttempt.AsObject>,
  }
}

export class CampaignAssignment extends jspb.Message {
  getCampaignName(): string;
  setCampaignName(value: string): CampaignAssignment;

  getNewCampaign(): Campaign | undefined;
  setNewCampaign(value?: Campaign): CampaignAssignment;
  hasNewCampaign(): boolean;
  clearNewCampaign(): CampaignAssignment;

  getDisplayName(): string;
  setDisplayName(value: string): CampaignAssignment;

  getStartMode(): CampaignStartMode;
  setStartMode(value: CampaignStartMode): CampaignAssignment;

  getCampaignSelectorCase(): CampaignAssignment.CampaignSelectorCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignAssignment.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignAssignment): CampaignAssignment.AsObject;
  static serializeBinaryToWriter(message: CampaignAssignment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignAssignment;
  static deserializeBinaryFromReader(message: CampaignAssignment, reader: jspb.BinaryReader): CampaignAssignment;
}

export namespace CampaignAssignment {
  export type AsObject = {
    campaignName: string,
    newCampaign?: Campaign.AsObject,
    displayName: string,
    startMode: CampaignStartMode,
  }

  export enum CampaignSelectorCase { 
    CAMPAIGN_SELECTOR_NOT_SET = 0,
    CAMPAIGN_NAME = 1,
    NEW_CAMPAIGN = 2,
    DISPLAY_NAME = 5,
  }
}

export class CreateCampaignRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): CreateCampaignRequest;

  getCampaign(): Campaign | undefined;
  setCampaign(value?: Campaign): CreateCampaignRequest;
  hasCampaign(): boolean;
  clearCampaign(): CreateCampaignRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): CreateCampaignRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): CreateCampaignRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): CreateCampaignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCampaignRequest): CreateCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCampaignRequest;
  static deserializeBinaryFromReader(message: CreateCampaignRequest, reader: jspb.BinaryReader): CreateCampaignRequest;
}

export namespace CreateCampaignRequest {
  export type AsObject = {
    vtsiProjectName: string,
    campaign?: Campaign.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    idempotencyKey: string,
  }
}

export class GetCampaignRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetCampaignRequest;

  getDisplayName(): string;
  setDisplayName(value: string): GetCampaignRequest;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): GetCampaignRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetCampaignRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetCampaignRequest;

  getCampaignCase(): GetCampaignRequest.CampaignCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignRequest): GetCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: GetCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignRequest;
  static deserializeBinaryFromReader(message: GetCampaignRequest, reader: jspb.BinaryReader): GetCampaignRequest;
}

export namespace GetCampaignRequest {
  export type AsObject = {
    name: string,
    displayName: string,
    vtsiProjectName: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum CampaignCase { 
    CAMPAIGN_NOT_SET = 0,
    NAME = 1,
    DISPLAY_NAME = 3,
  }
}

export class UpdateCampaignRequest extends jspb.Message {
  getCampaign(): Campaign | undefined;
  setCampaign(value?: Campaign): UpdateCampaignRequest;
  hasCampaign(): boolean;
  clearCampaign(): UpdateCampaignRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCampaignRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateCampaignRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCampaignRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateCampaignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCampaignRequest): UpdateCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCampaignRequest;
  static deserializeBinaryFromReader(message: UpdateCampaignRequest, reader: jspb.BinaryReader): UpdateCampaignRequest;
}

export namespace UpdateCampaignRequest {
  export type AsObject = {
    campaign?: Campaign.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteCampaignRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteCampaignRequest;

  getDisplayName(): string;
  setDisplayName(value: string): DeleteCampaignRequest;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): DeleteCampaignRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): DeleteCampaignRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): DeleteCampaignRequest;

  getForce(): boolean;
  setForce(value: boolean): DeleteCampaignRequest;

  getCampaignCase(): DeleteCampaignRequest.CampaignCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCampaignRequest): DeleteCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCampaignRequest;
  static deserializeBinaryFromReader(message: DeleteCampaignRequest, reader: jspb.BinaryReader): DeleteCampaignRequest;
}

export namespace DeleteCampaignRequest {
  export type AsObject = {
    name: string,
    displayName: string,
    vtsiProjectName: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    force: boolean,
  }

  export enum CampaignCase { 
    CAMPAIGN_NOT_SET = 0,
    NAME = 1,
    DISPLAY_NAME = 3,
  }
}

export class DeleteCampaignResponse extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteCampaignResponse;

  getDeletedCampaignCallCount(): number;
  setDeletedCampaignCallCount(value: number): DeleteCampaignResponse;

  getCancelledScheduledCallerCount(): number;
  setCancelledScheduledCallerCount(value: number): DeleteCampaignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCampaignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCampaignResponse): DeleteCampaignResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCampaignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCampaignResponse;
  static deserializeBinaryFromReader(message: DeleteCampaignResponse, reader: jspb.BinaryReader): DeleteCampaignResponse;
}

export namespace DeleteCampaignResponse {
  export type AsObject = {
    name: string,
    deletedCampaignCallCount: number,
    cancelledScheduledCallerCount: number,
  }
}

export class CampaignFilter extends jspb.Message {
  getStatesList(): Array<CampaignState>;
  setStatesList(value: Array<CampaignState>): CampaignFilter;
  clearStatesList(): CampaignFilter;
  addStates(value: CampaignState, index?: number): CampaignFilter;

  getDisplayNameContains(): string;
  setDisplayNameContains(value: string): CampaignFilter;

  getDisplayName(): string;
  setDisplayName(value: string): CampaignFilter;

  getCreatedAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAfter(value?: google_protobuf_timestamp_pb.Timestamp): CampaignFilter;
  hasCreatedAfter(): boolean;
  clearCreatedAfter(): CampaignFilter;

  getCreatedBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedBefore(value?: google_protobuf_timestamp_pb.Timestamp): CampaignFilter;
  hasCreatedBefore(): boolean;
  clearCreatedBefore(): CampaignFilter;

  getCreatedBy(): string;
  setCreatedBy(value: string): CampaignFilter;

  getModifiedSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedSince(value?: google_protobuf_timestamp_pb.Timestamp): CampaignFilter;
  hasModifiedSince(): boolean;
  clearModifiedSince(): CampaignFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignFilter.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignFilter): CampaignFilter.AsObject;
  static serializeBinaryToWriter(message: CampaignFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignFilter;
  static deserializeBinaryFromReader(message: CampaignFilter, reader: jspb.BinaryReader): CampaignFilter;
}

export namespace CampaignFilter {
  export type AsObject = {
    statesList: Array<CampaignState>,
    displayNameContains: string,
    displayName: string,
    createdAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListCampaignsRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): ListCampaignsRequest;

  getFilter(): CampaignFilter | undefined;
  setFilter(value?: CampaignFilter): ListCampaignsRequest;
  hasFilter(): boolean;
  clearFilter(): ListCampaignsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCampaignsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCampaignsRequest;
  hasPageToken(): boolean;
  clearPageToken(): ListCampaignsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListCampaignsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListCampaignsRequest;

  getOrderBy(): CampaignOrderBy;
  setOrderBy(value: CampaignOrderBy): ListCampaignsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignsRequest): ListCampaignsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCampaignsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignsRequest;
  static deserializeBinaryFromReader(message: ListCampaignsRequest, reader: jspb.BinaryReader): ListCampaignsRequest;
}

export namespace ListCampaignsRequest {
  export type AsObject = {
    vtsiProjectName: string,
    filter?: CampaignFilter.AsObject,
    pageSize: number,
    pageToken?: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    orderBy: CampaignOrderBy,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 4,
  }
}

export class ListCampaignsResponse extends jspb.Message {
  getCampaignsList(): Array<Campaign>;
  setCampaignsList(value: Array<Campaign>): ListCampaignsResponse;
  clearCampaignsList(): ListCampaignsResponse;
  addCampaigns(value?: Campaign, index?: number): Campaign;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCampaignsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignsResponse): ListCampaignsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCampaignsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignsResponse;
  static deserializeBinaryFromReader(message: ListCampaignsResponse, reader: jspb.BinaryReader): ListCampaignsResponse;
}

export namespace ListCampaignsResponse {
  export type AsObject = {
    campaignsList: Array<Campaign.AsObject>,
    nextPageToken: string,
  }
}

export class GetCampaignStatisticsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetCampaignStatisticsRequest;

  getDisplayName(): string;
  setDisplayName(value: string): GetCampaignStatisticsRequest;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): GetCampaignStatisticsRequest;

  getCampaignCase(): GetCampaignStatisticsRequest.CampaignCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignStatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignStatisticsRequest): GetCampaignStatisticsRequest.AsObject;
  static serializeBinaryToWriter(message: GetCampaignStatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignStatisticsRequest;
  static deserializeBinaryFromReader(message: GetCampaignStatisticsRequest, reader: jspb.BinaryReader): GetCampaignStatisticsRequest;
}

export namespace GetCampaignStatisticsRequest {
  export type AsObject = {
    name: string,
    displayName: string,
    vtsiProjectName: string,
  }

  export enum CampaignCase { 
    CAMPAIGN_NOT_SET = 0,
    NAME = 1,
    DISPLAY_NAME = 3,
  }
}

export class ListCampaignCallsRequest extends jspb.Message {
  getCampaignName(): string;
  setCampaignName(value: string): ListCampaignCallsRequest;

  getDisplayName(): string;
  setDisplayName(value: string): ListCampaignCallsRequest;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): ListCampaignCallsRequest;

  getStatesList(): Array<CampaignCallState>;
  setStatesList(value: Array<CampaignCallState>): ListCampaignCallsRequest;
  clearStatesList(): ListCampaignCallsRequest;
  addStates(value: CampaignCallState, index?: number): ListCampaignCallsRequest;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): ListCampaignCallsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCampaignCallsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCampaignCallsRequest;
  hasPageToken(): boolean;
  clearPageToken(): ListCampaignCallsRequest;

  getIncludeAttempts(): boolean;
  setIncludeAttempts(value: boolean): ListCampaignCallsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListCampaignCallsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListCampaignCallsRequest;

  getPhoneNumbersList(): Array<string>;
  setPhoneNumbersList(value: Array<string>): ListCampaignCallsRequest;
  clearPhoneNumbersList(): ListCampaignCallsRequest;
  addPhoneNumbers(value: string, index?: number): ListCampaignCallsRequest;

  getSourcesList(): Array<CampaignCallSource>;
  setSourcesList(value: Array<CampaignCallSource>): ListCampaignCallsRequest;
  clearSourcesList(): ListCampaignCallsRequest;
  addSources(value: CampaignCallSource, index?: number): ListCampaignCallsRequest;

  getFinishTimeMin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTimeMin(value?: google_protobuf_timestamp_pb.Timestamp): ListCampaignCallsRequest;
  hasFinishTimeMin(): boolean;
  clearFinishTimeMin(): ListCampaignCallsRequest;

  getFinishTimeMax(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishTimeMax(value?: google_protobuf_timestamp_pb.Timestamp): ListCampaignCallsRequest;
  hasFinishTimeMax(): boolean;
  clearFinishTimeMax(): ListCampaignCallsRequest;

  getModifiedSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedSince(value?: google_protobuf_timestamp_pb.Timestamp): ListCampaignCallsRequest;
  hasModifiedSince(): boolean;
  clearModifiedSince(): ListCampaignCallsRequest;

  getMinAttempts(): number;
  setMinAttempts(value: number): ListCampaignCallsRequest;

  getCampaignCallNamesList(): Array<string>;
  setCampaignCallNamesList(value: Array<string>): ListCampaignCallsRequest;
  clearCampaignCallNamesList(): ListCampaignCallsRequest;
  addCampaignCallNames(value: string, index?: number): ListCampaignCallsRequest;

  getCampaignCase(): ListCampaignCallsRequest.CampaignCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignCallsRequest): ListCampaignCallsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCampaignCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignCallsRequest;
  static deserializeBinaryFromReader(message: ListCampaignCallsRequest, reader: jspb.BinaryReader): ListCampaignCallsRequest;
}

export namespace ListCampaignCallsRequest {
  export type AsObject = {
    campaignName: string,
    displayName: string,
    vtsiProjectName: string,
    statesList: Array<CampaignCallState>,
    phoneNumber: string,
    pageSize: number,
    pageToken?: string,
    includeAttempts: boolean,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    phoneNumbersList: Array<string>,
    sourcesList: Array<CampaignCallSource>,
    finishTimeMin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishTimeMax?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    minAttempts: number,
    campaignCallNamesList: Array<string>,
  }

  export enum CampaignCase { 
    CAMPAIGN_NOT_SET = 0,
    CAMPAIGN_NAME = 1,
    DISPLAY_NAME = 8,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 5,
  }
}

export class ListCampaignCallsResponse extends jspb.Message {
  getCampaignCallsList(): Array<CampaignCall>;
  setCampaignCallsList(value: Array<CampaignCall>): ListCampaignCallsResponse;
  clearCampaignCallsList(): ListCampaignCallsResponse;
  addCampaignCalls(value?: CampaignCall, index?: number): CampaignCall;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCampaignCallsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignCallsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignCallsResponse): ListCampaignCallsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCampaignCallsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignCallsResponse;
  static deserializeBinaryFromReader(message: ListCampaignCallsResponse, reader: jspb.BinaryReader): ListCampaignCallsResponse;
}

export namespace ListCampaignCallsResponse {
  export type AsObject = {
    campaignCallsList: Array<CampaignCall.AsObject>,
    nextPageToken: string,
  }
}

export class StartCampaignRequest extends jspb.Message {
  getName(): string;
  setName(value: string): StartCampaignRequest;

  getDisplayName(): string;
  setDisplayName(value: string): StartCampaignRequest;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StartCampaignRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StartCampaignRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): StartCampaignRequest;

  getCampaignCase(): StartCampaignRequest.CampaignCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartCampaignRequest): StartCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: StartCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartCampaignRequest;
  static deserializeBinaryFromReader(message: StartCampaignRequest, reader: jspb.BinaryReader): StartCampaignRequest;
}

export namespace StartCampaignRequest {
  export type AsObject = {
    name: string,
    displayName: string,
    vtsiProjectName: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum CampaignCase { 
    CAMPAIGN_NOT_SET = 0,
    NAME = 1,
    DISPLAY_NAME = 3,
  }
}

export class StopCampaignRequest extends jspb.Message {
  getName(): string;
  setName(value: string): StopCampaignRequest;

  getDisplayName(): string;
  setDisplayName(value: string): StopCampaignRequest;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StopCampaignRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): StopCampaignRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): StopCampaignRequest;

  getCampaignCase(): StopCampaignRequest.CampaignCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopCampaignRequest): StopCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: StopCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopCampaignRequest;
  static deserializeBinaryFromReader(message: StopCampaignRequest, reader: jspb.BinaryReader): StopCampaignRequest;
}

export namespace StopCampaignRequest {
  export type AsObject = {
    name: string,
    displayName: string,
    vtsiProjectName: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum CampaignCase { 
    CAMPAIGN_NOT_SET = 0,
    NAME = 1,
    DISPLAY_NAME = 3,
  }
}

export class HardStopCampaignRequest extends jspb.Message {
  getName(): string;
  setName(value: string): HardStopCampaignRequest;

  getDisplayName(): string;
  setDisplayName(value: string): HardStopCampaignRequest;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): HardStopCampaignRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): HardStopCampaignRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): HardStopCampaignRequest;

  getCampaignCase(): HardStopCampaignRequest.CampaignCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HardStopCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HardStopCampaignRequest): HardStopCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: HardStopCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HardStopCampaignRequest;
  static deserializeBinaryFromReader(message: HardStopCampaignRequest, reader: jspb.BinaryReader): HardStopCampaignRequest;
}

export namespace HardStopCampaignRequest {
  export type AsObject = {
    name: string,
    displayName: string,
    vtsiProjectName: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum CampaignCase { 
    CAMPAIGN_NOT_SET = 0,
    NAME = 1,
    DISPLAY_NAME = 3,
  }
}

export class ResumeCampaignRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ResumeCampaignRequest;

  getDisplayName(): string;
  setDisplayName(value: string): ResumeCampaignRequest;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): ResumeCampaignRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ResumeCampaignRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ResumeCampaignRequest;

  getCampaignCase(): ResumeCampaignRequest.CampaignCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResumeCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResumeCampaignRequest): ResumeCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: ResumeCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResumeCampaignRequest;
  static deserializeBinaryFromReader(message: ResumeCampaignRequest, reader: jspb.BinaryReader): ResumeCampaignRequest;
}

export namespace ResumeCampaignRequest {
  export type AsObject = {
    name: string,
    displayName: string,
    vtsiProjectName: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum CampaignCase { 
    CAMPAIGN_NOT_SET = 0,
    NAME = 1,
    DISPLAY_NAME = 3,
  }
}

export class StreamCampaignStatusRequest extends jspb.Message {
  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): StreamCampaignStatusRequest;

  getCampaignNamesList(): Array<string>;
  setCampaignNamesList(value: Array<string>): StreamCampaignStatusRequest;
  clearCampaignNamesList(): StreamCampaignStatusRequest;
  addCampaignNames(value: string, index?: number): StreamCampaignStatusRequest;

  getCampaignDisplayNamesList(): Array<string>;
  setCampaignDisplayNamesList(value: Array<string>): StreamCampaignStatusRequest;
  clearCampaignDisplayNamesList(): StreamCampaignStatusRequest;
  addCampaignDisplayNames(value: string, index?: number): StreamCampaignStatusRequest;

  getIncludeCalls(): boolean;
  setIncludeCalls(value: boolean): StreamCampaignStatusRequest;

  getStatesList(): Array<CampaignState>;
  setStatesList(value: Array<CampaignState>): StreamCampaignStatusRequest;
  clearStatesList(): StreamCampaignStatusRequest;
  addStates(value: CampaignState, index?: number): StreamCampaignStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCampaignStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCampaignStatusRequest): StreamCampaignStatusRequest.AsObject;
  static serializeBinaryToWriter(message: StreamCampaignStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCampaignStatusRequest;
  static deserializeBinaryFromReader(message: StreamCampaignStatusRequest, reader: jspb.BinaryReader): StreamCampaignStatusRequest;
}

export namespace StreamCampaignStatusRequest {
  export type AsObject = {
    vtsiProjectName: string,
    campaignNamesList: Array<string>,
    campaignDisplayNamesList: Array<string>,
    includeCalls: boolean,
    statesList: Array<CampaignState>,
  }
}

export class StreamCampaignStatusResponse extends jspb.Message {
  getCampaignsList(): Array<Campaign>;
  setCampaignsList(value: Array<Campaign>): StreamCampaignStatusResponse;
  clearCampaignsList(): StreamCampaignStatusResponse;
  addCampaigns(value?: Campaign, index?: number): Campaign;

  getCampaignCallsList(): Array<CampaignCall>;
  setCampaignCallsList(value: Array<CampaignCall>): StreamCampaignStatusResponse;
  clearCampaignCallsList(): StreamCampaignStatusResponse;
  addCampaignCalls(value?: CampaignCall, index?: number): CampaignCall;

  getDeletedCampaignNamesList(): Array<string>;
  setDeletedCampaignNamesList(value: Array<string>): StreamCampaignStatusResponse;
  clearDeletedCampaignNamesList(): StreamCampaignStatusResponse;
  addDeletedCampaignNames(value: string, index?: number): StreamCampaignStatusResponse;

  getSnapshot(): boolean;
  setSnapshot(value: boolean): StreamCampaignStatusResponse;

  getEndReason(): string;
  setEndReason(value: string): StreamCampaignStatusResponse;

  getEndReasonType(): StreamEndReason;
  setEndReasonType(value: StreamEndReason): StreamCampaignStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamCampaignStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamCampaignStatusResponse): StreamCampaignStatusResponse.AsObject;
  static serializeBinaryToWriter(message: StreamCampaignStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamCampaignStatusResponse;
  static deserializeBinaryFromReader(message: StreamCampaignStatusResponse, reader: jspb.BinaryReader): StreamCampaignStatusResponse;
}

export namespace StreamCampaignStatusResponse {
  export type AsObject = {
    campaignsList: Array<Campaign.AsObject>,
    campaignCallsList: Array<CampaignCall.AsObject>,
    deletedCampaignNamesList: Array<string>,
    snapshot: boolean,
    endReason: string,
    endReasonType: StreamEndReason,
  }
}

export class GetCampaignCallRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetCampaignCallRequest;

  getIncludeAttempts(): boolean;
  setIncludeAttempts(value: boolean): GetCampaignCallRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetCampaignCallRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetCampaignCallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignCallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignCallRequest): GetCampaignCallRequest.AsObject;
  static serializeBinaryToWriter(message: GetCampaignCallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignCallRequest;
  static deserializeBinaryFromReader(message: GetCampaignCallRequest, reader: jspb.BinaryReader): GetCampaignCallRequest;
}

export namespace GetCampaignCallRequest {
  export type AsObject = {
    name: string,
    includeAttempts: boolean,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CampaignCallRefusal extends jspb.Message {
  getCampaignCallName(): string;
  setCampaignCallName(value: string): CampaignCallRefusal;

  getState(): CampaignCallState;
  setState(value: CampaignCallState): CampaignCallRefusal;

  getReason(): string;
  setReason(value: string): CampaignCallRefusal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignCallRefusal.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignCallRefusal): CampaignCallRefusal.AsObject;
  static serializeBinaryToWriter(message: CampaignCallRefusal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignCallRefusal;
  static deserializeBinaryFromReader(message: CampaignCallRefusal, reader: jspb.BinaryReader): CampaignCallRefusal;
}

export namespace CampaignCallRefusal {
  export type AsObject = {
    campaignCallName: string,
    state: CampaignCallState,
    reason: string,
  }
}

export class CancelCampaignCallsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CancelCampaignCallsRequest;

  getDisplayName(): string;
  setDisplayName(value: string): CancelCampaignCallsRequest;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): CancelCampaignCallsRequest;

  getCampaignCallNamesList(): Array<string>;
  setCampaignCallNamesList(value: Array<string>): CancelCampaignCallsRequest;
  clearCampaignCallNamesList(): CancelCampaignCallsRequest;
  addCampaignCallNames(value: string, index?: number): CancelCampaignCallsRequest;

  getStatesList(): Array<CampaignCallState>;
  setStatesList(value: Array<CampaignCallState>): CancelCampaignCallsRequest;
  clearStatesList(): CancelCampaignCallsRequest;
  addStates(value: CampaignCallState, index?: number): CancelCampaignCallsRequest;

  getCampaignCase(): CancelCampaignCallsRequest.CampaignCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelCampaignCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelCampaignCallsRequest): CancelCampaignCallsRequest.AsObject;
  static serializeBinaryToWriter(message: CancelCampaignCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelCampaignCallsRequest;
  static deserializeBinaryFromReader(message: CancelCampaignCallsRequest, reader: jspb.BinaryReader): CancelCampaignCallsRequest;
}

export namespace CancelCampaignCallsRequest {
  export type AsObject = {
    name: string,
    displayName: string,
    vtsiProjectName: string,
    campaignCallNamesList: Array<string>,
    statesList: Array<CampaignCallState>,
  }

  export enum CampaignCase { 
    CAMPAIGN_NOT_SET = 0,
    NAME = 1,
    DISPLAY_NAME = 2,
  }
}

export class CancelCampaignCallsResponse extends jspb.Message {
  getCampaignName(): string;
  setCampaignName(value: string): CancelCampaignCallsResponse;

  getCancelledCampaignCallNamesList(): Array<string>;
  setCancelledCampaignCallNamesList(value: Array<string>): CancelCampaignCallsResponse;
  clearCancelledCampaignCallNamesList(): CancelCampaignCallsResponse;
  addCancelledCampaignCallNames(value: string, index?: number): CancelCampaignCallsResponse;

  getRefusedList(): Array<CampaignCallRefusal>;
  setRefusedList(value: Array<CampaignCallRefusal>): CancelCampaignCallsResponse;
  clearRefusedList(): CancelCampaignCallsResponse;
  addRefused(value?: CampaignCallRefusal, index?: number): CampaignCallRefusal;

  getRemainingCount(): number;
  setRemainingCount(value: number): CancelCampaignCallsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelCampaignCallsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelCampaignCallsResponse): CancelCampaignCallsResponse.AsObject;
  static serializeBinaryToWriter(message: CancelCampaignCallsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelCampaignCallsResponse;
  static deserializeBinaryFromReader(message: CancelCampaignCallsResponse, reader: jspb.BinaryReader): CancelCampaignCallsResponse;
}

export namespace CancelCampaignCallsResponse {
  export type AsObject = {
    campaignName: string,
    cancelledCampaignCallNamesList: Array<string>,
    refusedList: Array<CampaignCallRefusal.AsObject>,
    remainingCount: number,
  }
}

export class RetryCampaignCallsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RetryCampaignCallsRequest;

  getDisplayName(): string;
  setDisplayName(value: string): RetryCampaignCallsRequest;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): RetryCampaignCallsRequest;

  getCampaignCallNamesList(): Array<string>;
  setCampaignCallNamesList(value: Array<string>): RetryCampaignCallsRequest;
  clearCampaignCallNamesList(): RetryCampaignCallsRequest;
  addCampaignCallNames(value: string, index?: number): RetryCampaignCallsRequest;

  getStatesList(): Array<CampaignCallState>;
  setStatesList(value: Array<CampaignCallState>): RetryCampaignCallsRequest;
  clearStatesList(): RetryCampaignCallsRequest;
  addStates(value: CampaignCallState, index?: number): RetryCampaignCallsRequest;

  getAdditionalAttempts(): number;
  setAdditionalAttempts(value: number): RetryCampaignCallsRequest;

  getNotBefore(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNotBefore(value?: google_protobuf_timestamp_pb.Timestamp): RetryCampaignCallsRequest;
  hasNotBefore(): boolean;
  clearNotBefore(): RetryCampaignCallsRequest;

  getCampaignCase(): RetryCampaignCallsRequest.CampaignCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryCampaignCallsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetryCampaignCallsRequest): RetryCampaignCallsRequest.AsObject;
  static serializeBinaryToWriter(message: RetryCampaignCallsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryCampaignCallsRequest;
  static deserializeBinaryFromReader(message: RetryCampaignCallsRequest, reader: jspb.BinaryReader): RetryCampaignCallsRequest;
}

export namespace RetryCampaignCallsRequest {
  export type AsObject = {
    name: string,
    displayName: string,
    vtsiProjectName: string,
    campaignCallNamesList: Array<string>,
    statesList: Array<CampaignCallState>,
    additionalAttempts: number,
    notBefore?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum CampaignCase { 
    CAMPAIGN_NOT_SET = 0,
    NAME = 1,
    DISPLAY_NAME = 2,
  }
}

export class RetryCampaignCallsResponse extends jspb.Message {
  getCampaignName(): string;
  setCampaignName(value: string): RetryCampaignCallsResponse;

  getRequeuedCampaignCallNamesList(): Array<string>;
  setRequeuedCampaignCallNamesList(value: Array<string>): RetryCampaignCallsResponse;
  clearRequeuedCampaignCallNamesList(): RetryCampaignCallsResponse;
  addRequeuedCampaignCallNames(value: string, index?: number): RetryCampaignCallsResponse;

  getRefusedList(): Array<CampaignCallRefusal>;
  setRefusedList(value: Array<CampaignCallRefusal>): RetryCampaignCallsResponse;
  clearRefusedList(): RetryCampaignCallsResponse;
  addRefused(value?: CampaignCallRefusal, index?: number): CampaignCallRefusal;

  getRemainingCount(): number;
  setRemainingCount(value: number): RetryCampaignCallsResponse;

  getCampaignState(): CampaignState;
  setCampaignState(value: CampaignState): RetryCampaignCallsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryCampaignCallsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RetryCampaignCallsResponse): RetryCampaignCallsResponse.AsObject;
  static serializeBinaryToWriter(message: RetryCampaignCallsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryCampaignCallsResponse;
  static deserializeBinaryFromReader(message: RetryCampaignCallsResponse, reader: jspb.BinaryReader): RetryCampaignCallsResponse;
}

export namespace RetryCampaignCallsResponse {
  export type AsObject = {
    campaignName: string,
    requeuedCampaignCallNamesList: Array<string>,
    refusedList: Array<CampaignCallRefusal.AsObject>,
    remainingCount: number,
    campaignState: CampaignState,
  }
}

export class CloneCampaignRequest extends jspb.Message {
  getSourceName(): string;
  setSourceName(value: string): CloneCampaignRequest;

  getSourceDisplayName(): string;
  setSourceDisplayName(value: string): CloneCampaignRequest;

  getVtsiProjectName(): string;
  setVtsiProjectName(value: string): CloneCampaignRequest;

  getNewDisplayName(): string;
  setNewDisplayName(value: string): CloneCampaignRequest;

  getIncludeCalls(): boolean;
  setIncludeCalls(value: boolean): CloneCampaignRequest;

  getCallStatesList(): Array<CampaignCallState>;
  setCallStatesList(value: Array<CampaignCallState>): CloneCampaignRequest;
  clearCallStatesList(): CloneCampaignRequest;
  addCallStates(value: CampaignCallState, index?: number): CloneCampaignRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): CloneCampaignRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): CloneCampaignRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): CloneCampaignRequest;

  getSourceCase(): CloneCampaignRequest.SourceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloneCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloneCampaignRequest): CloneCampaignRequest.AsObject;
  static serializeBinaryToWriter(message: CloneCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloneCampaignRequest;
  static deserializeBinaryFromReader(message: CloneCampaignRequest, reader: jspb.BinaryReader): CloneCampaignRequest;
}

export namespace CloneCampaignRequest {
  export type AsObject = {
    sourceName: string,
    sourceDisplayName: string,
    vtsiProjectName: string,
    newDisplayName: string,
    includeCalls: boolean,
    callStatesList: Array<CampaignCallState>,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    idempotencyKey: string,
  }

  export enum SourceCase { 
    SOURCE_NOT_SET = 0,
    SOURCE_NAME = 1,
    SOURCE_DISPLAY_NAME = 2,
  }
}

export enum CampaignState { 
  CAMPAIGN_STATE_UNSPECIFIED = 0,
  CAMPAIGN_STATE_CREATED = 1,
  CAMPAIGN_STATE_RUNNING = 2,
  CAMPAIGN_STATE_STOPPING = 3,
  CAMPAIGN_STATE_STOPPED = 4,
  CAMPAIGN_STATE_HARD_STOPPING = 5,
  CAMPAIGN_STATE_HARD_STOPPED = 6,
  CAMPAIGN_STATE_COMPLETED = 7,
}
export enum CampaignCallState { 
  CAMPAIGN_CALL_STATE_UNSPECIFIED = 0,
  CAMPAIGN_CALL_STATE_NOT_STARTED = 1,
  CAMPAIGN_CALL_STATE_DISPATCHING = 2,
  CAMPAIGN_CALL_STATE_IN_PROGRESS = 3,
  CAMPAIGN_CALL_STATE_RETRY_PENDING = 4,
  CAMPAIGN_CALL_STATE_COMPLETED = 5,
  CAMPAIGN_CALL_STATE_FAILED = 6,
  CAMPAIGN_CALL_STATE_CANCELLED = 7,
}
export enum CampaignStartMode { 
  CAMPAIGN_START_MODE_UNSPECIFIED = 0,
  CAMPAIGN_START_MODE_START = 1,
  CAMPAIGN_START_MODE_DO_NOT_START = 2,
}
export enum CampaignCallSource { 
  CAMPAIGN_CALL_SOURCE_UNSPECIFIED = 0,
  CAMPAIGN_CALL_SOURCE_CALLER = 1,
  CAMPAIGN_CALL_SOURCE_SCHEDULED_CALLER = 2,
}
export enum CampaignCallAttemptOutcome { 
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_UNSPECIFIED = 0,
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_IN_PROGRESS = 1,
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_COMPLETED = 2,
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_FAILED = 3,
  CAMPAIGN_CALL_ATTEMPT_OUTCOME_CANCELLED = 4,
}
export enum CallingWindowDayOfWeek { 
  CALLING_WINDOW_DAY_OF_WEEK_UNSPECIFIED = 0,
  CALLING_WINDOW_DAY_OF_WEEK_MONDAY = 1,
  CALLING_WINDOW_DAY_OF_WEEK_TUESDAY = 2,
  CALLING_WINDOW_DAY_OF_WEEK_WEDNESDAY = 3,
  CALLING_WINDOW_DAY_OF_WEEK_THURSDAY = 4,
  CALLING_WINDOW_DAY_OF_WEEK_FRIDAY = 5,
  CALLING_WINDOW_DAY_OF_WEEK_SATURDAY = 6,
  CALLING_WINDOW_DAY_OF_WEEK_SUNDAY = 7,
}
export enum CampaignOrderBy { 
  CAMPAIGN_ORDER_BY_UNSPECIFIED = 0,
  CAMPAIGN_ORDER_BY_CREATED_AT_DESC = 1,
  CAMPAIGN_ORDER_BY_MODIFIED_AT_DESC = 2,
  CAMPAIGN_ORDER_BY_DISPLAY_NAME_ASC = 3,
}
export enum StreamEndReason { 
  STREAM_END_REASON_UNSPECIFIED = 0,
  STREAM_END_REASON_MAX_DURATION = 1,
  STREAM_END_REASON_CLIENT_TOO_SLOW = 2,
  STREAM_END_REASON_SUBSCRIPTION_DELETED = 3,
  STREAM_END_REASON_SUBSCRIPTION_DISABLED = 4,
  STREAM_END_REASON_PROJECT_DELETED = 5,
  STREAM_END_REASON_SERVER_SHUTDOWN = 6,
}
