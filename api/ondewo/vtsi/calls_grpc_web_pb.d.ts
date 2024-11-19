import * as grpcWeb from 'grpc-web';

import * as ondewo_vtsi_calls_pb from '../../ondewo/vtsi/calls_pb'; // proto import: "ondewo/vtsi/calls.proto"


export class CallsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  startCaller(
    request: ondewo_vtsi_calls_pb.StartCallerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.StartCallerResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.StartCallerResponse>;

  startCallers(
    request: ondewo_vtsi_calls_pb.StartCallersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.StartCallersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.StartCallersResponse>;

  listCallers(
    request: ondewo_vtsi_calls_pb.ListCallersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.ListCallersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.ListCallersResponse>;

  getCaller(
    request: ondewo_vtsi_calls_pb.GetCallerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.Caller) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.Caller>;

  deleteCaller(
    request: ondewo_vtsi_calls_pb.DeleteCallerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.DeleteCallerResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.DeleteCallerResponse>;

  deleteCallers(
    request: ondewo_vtsi_calls_pb.DeleteCallersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.DeleteCallersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.DeleteCallersResponse>;

  stopCaller(
    request: ondewo_vtsi_calls_pb.StopCallerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.StopCallerResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.StopCallerResponse>;

  stopCallers(
    request: ondewo_vtsi_calls_pb.StopCallersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.StopCallersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.StopCallersResponse>;

  startListener(
    request: ondewo_vtsi_calls_pb.StartListenerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.StartListenerResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.StartListenerResponse>;

  startListeners(
    request: ondewo_vtsi_calls_pb.StartListenersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.StartListenersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.StartListenersResponse>;

  stopListener(
    request: ondewo_vtsi_calls_pb.StopListenerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.StopListenerResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.StopListenerResponse>;

  stopListeners(
    request: ondewo_vtsi_calls_pb.StopListenersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.StopListenersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.StopListenersResponse>;

  listListeners(
    request: ondewo_vtsi_calls_pb.ListListenersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.ListListenersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.ListListenersResponse>;

  getListener(
    request: ondewo_vtsi_calls_pb.GetListenerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.Listener) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.Listener>;

  deleteListener(
    request: ondewo_vtsi_calls_pb.DeleteListenerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.DeleteListenerResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.DeleteListenerResponse>;

  deleteListeners(
    request: ondewo_vtsi_calls_pb.DeleteListenersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.DeleteListenersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.DeleteListenersResponse>;

  startScheduledCaller(
    request: ondewo_vtsi_calls_pb.StartScheduledCallerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.StartScheduledCallerResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.StartScheduledCallerResponse>;

  startScheduledCallers(
    request: ondewo_vtsi_calls_pb.StartScheduledCallersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.StartScheduledCallersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.StartScheduledCallersResponse>;

  stopCall(
    request: ondewo_vtsi_calls_pb.StopCallRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.StopCallResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.StopCallResponse>;

  stopCalls(
    request: ondewo_vtsi_calls_pb.StopCallsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.StopCallsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.StopCallsResponse>;

  stopAllCalls(
    request: ondewo_vtsi_calls_pb.StopAllCallsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.StopCallsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.StopCallsResponse>;

  transferCall(
    request: ondewo_vtsi_calls_pb.TransferCallRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.TransferCallResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.TransferCallResponse>;

  transferCalls(
    request: ondewo_vtsi_calls_pb.TransferCallsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.TransferCallsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.TransferCallsResponse>;

  getCall(
    request: ondewo_vtsi_calls_pb.GetCallRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.Call) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.Call>;

  listCalls(
    request: ondewo_vtsi_calls_pb.ListCallsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_calls_pb.ListCallsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_calls_pb.ListCallsResponse>;

}

export class CallsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  startCaller(
    request: ondewo_vtsi_calls_pb.StartCallerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.StartCallerResponse>;

  startCallers(
    request: ondewo_vtsi_calls_pb.StartCallersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.StartCallersResponse>;

  listCallers(
    request: ondewo_vtsi_calls_pb.ListCallersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.ListCallersResponse>;

  getCaller(
    request: ondewo_vtsi_calls_pb.GetCallerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.Caller>;

  deleteCaller(
    request: ondewo_vtsi_calls_pb.DeleteCallerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.DeleteCallerResponse>;

  deleteCallers(
    request: ondewo_vtsi_calls_pb.DeleteCallersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.DeleteCallersResponse>;

  stopCaller(
    request: ondewo_vtsi_calls_pb.StopCallerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.StopCallerResponse>;

  stopCallers(
    request: ondewo_vtsi_calls_pb.StopCallersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.StopCallersResponse>;

  startListener(
    request: ondewo_vtsi_calls_pb.StartListenerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.StartListenerResponse>;

  startListeners(
    request: ondewo_vtsi_calls_pb.StartListenersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.StartListenersResponse>;

  stopListener(
    request: ondewo_vtsi_calls_pb.StopListenerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.StopListenerResponse>;

  stopListeners(
    request: ondewo_vtsi_calls_pb.StopListenersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.StopListenersResponse>;

  listListeners(
    request: ondewo_vtsi_calls_pb.ListListenersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.ListListenersResponse>;

  getListener(
    request: ondewo_vtsi_calls_pb.GetListenerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.Listener>;

  deleteListener(
    request: ondewo_vtsi_calls_pb.DeleteListenerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.DeleteListenerResponse>;

  deleteListeners(
    request: ondewo_vtsi_calls_pb.DeleteListenersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.DeleteListenersResponse>;

  startScheduledCaller(
    request: ondewo_vtsi_calls_pb.StartScheduledCallerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.StartScheduledCallerResponse>;

  startScheduledCallers(
    request: ondewo_vtsi_calls_pb.StartScheduledCallersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.StartScheduledCallersResponse>;

  stopCall(
    request: ondewo_vtsi_calls_pb.StopCallRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.StopCallResponse>;

  stopCalls(
    request: ondewo_vtsi_calls_pb.StopCallsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.StopCallsResponse>;

  stopAllCalls(
    request: ondewo_vtsi_calls_pb.StopAllCallsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.StopCallsResponse>;

  transferCall(
    request: ondewo_vtsi_calls_pb.TransferCallRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.TransferCallResponse>;

  transferCalls(
    request: ondewo_vtsi_calls_pb.TransferCallsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.TransferCallsResponse>;

  getCall(
    request: ondewo_vtsi_calls_pb.GetCallRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.Call>;

  listCalls(
    request: ondewo_vtsi_calls_pb.ListCallsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_calls_pb.ListCallsResponse>;

}

