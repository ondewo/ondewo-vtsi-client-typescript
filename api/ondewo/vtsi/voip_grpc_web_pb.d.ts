import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_vtsi_voip_pb from '../../ondewo/vtsi/voip_pb';


export class VoipSessionsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createProjectConfigs(
    request: ondewo_vtsi_voip_pb.CreateProjectConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getProjectConfigs(
    request: ondewo_vtsi_voip_pb.GetProjectConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_voip_pb.GetProjectConfigsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_voip_pb.GetProjectConfigsResponse>;

  updateProjectConfigs(
    request: ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteProjectConfigs(
    request: ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deployProject(
    request: ondewo_vtsi_voip_pb.DeployProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  undeployProject(
    request: ondewo_vtsi_voip_pb.UndeployProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  startListeners(
    request: ondewo_vtsi_voip_pb.StartListenersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_voip_pb.StartListenersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_voip_pb.StartListenersResponse>;

  startCallers(
    request: ondewo_vtsi_voip_pb.StartCallersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_voip_pb.StartCallersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_voip_pb.StartCallersResponse>;

  startScheduledCallers(
    request: ondewo_vtsi_voip_pb.StartScheduledCallersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  stopCalls(
    request: ondewo_vtsi_voip_pb.StopCallsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  stopAllCalls(
    request: ondewo_vtsi_voip_pb.StopAllCallsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  transferCalls(
    request: ondewo_vtsi_voip_pb.TransferCallsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getVoipCallInfo(
    request: ondewo_vtsi_voip_pb.GetVoipCallInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_voip_pb.GetVoipCallInfoResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_voip_pb.GetVoipCallInfoResponse>;

  listVoipCallInfo(
    request: ondewo_vtsi_voip_pb.ListVoipCallInfoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_voip_pb.ListVoipCallInfoResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_voip_pb.ListVoipCallInfoResponse>;

  getAudioFile(
    request: ondewo_vtsi_voip_pb.GetAudioFileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_voip_pb.GetAudioFileResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_voip_pb.GetAudioFileResponse>;

  getFullConversationAudioFile(
    request: ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse>;

}

export class VoipSessionsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createProjectConfigs(
    request: ondewo_vtsi_voip_pb.CreateProjectConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getProjectConfigs(
    request: ondewo_vtsi_voip_pb.GetProjectConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_voip_pb.GetProjectConfigsResponse>;

  updateProjectConfigs(
    request: ondewo_vtsi_voip_pb.UpdateProjectConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteProjectConfigs(
    request: ondewo_vtsi_voip_pb.DeleteProjectConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deployProject(
    request: ondewo_vtsi_voip_pb.DeployProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  undeployProject(
    request: ondewo_vtsi_voip_pb.UndeployProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  startListeners(
    request: ondewo_vtsi_voip_pb.StartListenersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_voip_pb.StartListenersResponse>;

  startCallers(
    request: ondewo_vtsi_voip_pb.StartCallersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_voip_pb.StartCallersResponse>;

  startScheduledCallers(
    request: ondewo_vtsi_voip_pb.StartScheduledCallersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  stopCalls(
    request: ondewo_vtsi_voip_pb.StopCallsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  stopAllCalls(
    request: ondewo_vtsi_voip_pb.StopAllCallsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  transferCalls(
    request: ondewo_vtsi_voip_pb.TransferCallsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getVoipCallInfo(
    request: ondewo_vtsi_voip_pb.GetVoipCallInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_voip_pb.GetVoipCallInfoResponse>;

  listVoipCallInfo(
    request: ondewo_vtsi_voip_pb.ListVoipCallInfoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_voip_pb.ListVoipCallInfoResponse>;

  getAudioFile(
    request: ondewo_vtsi_voip_pb.GetAudioFileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_voip_pb.GetAudioFileResponse>;

  getFullConversationAudioFile(
    request: ondewo_vtsi_voip_pb.GetFullConversationAudioFileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_voip_pb.GetFullConversationAudioFileResponse>;

}

