import * as grpcWeb from 'grpc-web';

import * as ondewo_vtsi_logs_pb from '../../ondewo/vtsi/logs_pb'; // proto import: "ondewo/vtsi/logs.proto"


export class LogsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamCallLogs(
    request: ondewo_vtsi_logs_pb.StreamCallLogsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_logs_pb.StreamCallLogsResponse>;

  listCallLogs(
    request: ondewo_vtsi_logs_pb.ListCallLogsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_logs_pb.ListCallLogsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_logs_pb.ListCallLogsResponse>;

  getCallLogStream(
    request: ondewo_vtsi_logs_pb.GetCallLogStreamRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_logs_pb.CallLogStream) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_logs_pb.CallLogStream>;

  listCallLogStreams(
    request: ondewo_vtsi_logs_pb.ListCallLogStreamsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_logs_pb.ListCallLogStreamsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_logs_pb.ListCallLogStreamsResponse>;

  deleteCallLogs(
    request: ondewo_vtsi_logs_pb.DeleteCallLogsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_logs_pb.DeleteCallLogsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_logs_pb.DeleteCallLogsResponse>;

}

export class LogsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamCallLogs(
    request: ondewo_vtsi_logs_pb.StreamCallLogsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_logs_pb.StreamCallLogsResponse>;

  listCallLogs(
    request: ondewo_vtsi_logs_pb.ListCallLogsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_logs_pb.ListCallLogsResponse>;

  getCallLogStream(
    request: ondewo_vtsi_logs_pb.GetCallLogStreamRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_logs_pb.CallLogStream>;

  listCallLogStreams(
    request: ondewo_vtsi_logs_pb.ListCallLogStreamsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_logs_pb.ListCallLogStreamsResponse>;

  deleteCallLogs(
    request: ondewo_vtsi_logs_pb.DeleteCallLogsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_logs_pb.DeleteCallLogsResponse>;

}

