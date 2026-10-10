import * as grpcWeb from 'grpc-web';

import * as ondewo_vtsi_campaigns_pb from '../../ondewo/vtsi/campaigns_pb'; // proto import: "ondewo/vtsi/campaigns.proto"


export class CampaignsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createCampaign(
    request: ondewo_vtsi_campaigns_pb.CreateCampaignRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_campaigns_pb.Campaign) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_campaigns_pb.Campaign>;

  getCampaign(
    request: ondewo_vtsi_campaigns_pb.GetCampaignRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_campaigns_pb.Campaign) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_campaigns_pb.Campaign>;

  updateCampaign(
    request: ondewo_vtsi_campaigns_pb.UpdateCampaignRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_campaigns_pb.Campaign) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_campaigns_pb.Campaign>;

  deleteCampaign(
    request: ondewo_vtsi_campaigns_pb.DeleteCampaignRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_campaigns_pb.DeleteCampaignResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_campaigns_pb.DeleteCampaignResponse>;

  listCampaigns(
    request: ondewo_vtsi_campaigns_pb.ListCampaignsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_campaigns_pb.ListCampaignsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_campaigns_pb.ListCampaignsResponse>;

  getCampaignStatistics(
    request: ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_campaigns_pb.CampaignStatistics) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_campaigns_pb.CampaignStatistics>;

  listCampaignCalls(
    request: ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse>;

  startCampaign(
    request: ondewo_vtsi_campaigns_pb.StartCampaignRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_campaigns_pb.Campaign) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_campaigns_pb.Campaign>;

  stopCampaign(
    request: ondewo_vtsi_campaigns_pb.StopCampaignRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_campaigns_pb.Campaign) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_campaigns_pb.Campaign>;

  hardStopCampaign(
    request: ondewo_vtsi_campaigns_pb.HardStopCampaignRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_campaigns_pb.Campaign) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_campaigns_pb.Campaign>;

  resumeCampaign(
    request: ondewo_vtsi_campaigns_pb.ResumeCampaignRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_campaigns_pb.Campaign) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_campaigns_pb.Campaign>;

  streamCampaignStatus(
    request: ondewo_vtsi_campaigns_pb.StreamCampaignStatusRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_campaigns_pb.StreamCampaignStatusResponse>;

}

export class CampaignsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createCampaign(
    request: ondewo_vtsi_campaigns_pb.CreateCampaignRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_campaigns_pb.Campaign>;

  getCampaign(
    request: ondewo_vtsi_campaigns_pb.GetCampaignRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_campaigns_pb.Campaign>;

  updateCampaign(
    request: ondewo_vtsi_campaigns_pb.UpdateCampaignRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_campaigns_pb.Campaign>;

  deleteCampaign(
    request: ondewo_vtsi_campaigns_pb.DeleteCampaignRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_campaigns_pb.DeleteCampaignResponse>;

  listCampaigns(
    request: ondewo_vtsi_campaigns_pb.ListCampaignsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_campaigns_pb.ListCampaignsResponse>;

  getCampaignStatistics(
    request: ondewo_vtsi_campaigns_pb.GetCampaignStatisticsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_campaigns_pb.CampaignStatistics>;

  listCampaignCalls(
    request: ondewo_vtsi_campaigns_pb.ListCampaignCallsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_campaigns_pb.ListCampaignCallsResponse>;

  startCampaign(
    request: ondewo_vtsi_campaigns_pb.StartCampaignRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_campaigns_pb.Campaign>;

  stopCampaign(
    request: ondewo_vtsi_campaigns_pb.StopCampaignRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_campaigns_pb.Campaign>;

  hardStopCampaign(
    request: ondewo_vtsi_campaigns_pb.HardStopCampaignRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_campaigns_pb.Campaign>;

  resumeCampaign(
    request: ondewo_vtsi_campaigns_pb.ResumeCampaignRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_campaigns_pb.Campaign>;

  streamCampaignStatus(
    request: ondewo_vtsi_campaigns_pb.StreamCampaignStatusRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_campaigns_pb.StreamCampaignStatusResponse>;

}

