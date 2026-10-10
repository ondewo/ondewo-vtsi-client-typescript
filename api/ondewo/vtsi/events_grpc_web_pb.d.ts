import * as grpcWeb from 'grpc-web';

import * as ondewo_vtsi_events_pb from '../../ondewo/vtsi/events_pb'; // proto import: "ondewo/vtsi/events.proto"


export class EventsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createVtsiEventSubscription(
    request: ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_events_pb.VtsiEventSubscription>;

  getVtsiEventSubscription(
    request: ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_events_pb.VtsiEventSubscription>;

  updateVtsiEventSubscription(
    request: ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_events_pb.VtsiEventSubscription) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_events_pb.VtsiEventSubscription>;

  deleteVtsiEventSubscription(
    request: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse>;

  listVtsiEventSubscriptions(
    request: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse>;

  createWebhook(
    request: ondewo_vtsi_events_pb.CreateWebhookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_events_pb.Webhook) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_events_pb.Webhook>;

  getWebhook(
    request: ondewo_vtsi_events_pb.GetWebhookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_events_pb.Webhook) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_events_pb.Webhook>;

  updateWebhook(
    request: ondewo_vtsi_events_pb.UpdateWebhookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_events_pb.Webhook) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_events_pb.Webhook>;

  deleteWebhook(
    request: ondewo_vtsi_events_pb.DeleteWebhookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_events_pb.DeleteWebhookResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_events_pb.DeleteWebhookResponse>;

  listWebhooks(
    request: ondewo_vtsi_events_pb.ListWebhooksRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_events_pb.ListWebhooksResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_events_pb.ListWebhooksResponse>;

  testWebhook(
    request: ondewo_vtsi_events_pb.TestWebhookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_events_pb.TestWebhookResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_events_pb.TestWebhookResponse>;

  subscribeVtsiEvents(
    request: ondewo_vtsi_events_pb.SubscribeVtsiEventsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_events_pb.SubscribeVtsiEventsResponse>;

}

export class EventsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createVtsiEventSubscription(
    request: ondewo_vtsi_events_pb.CreateVtsiEventSubscriptionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_events_pb.VtsiEventSubscription>;

  getVtsiEventSubscription(
    request: ondewo_vtsi_events_pb.GetVtsiEventSubscriptionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_events_pb.VtsiEventSubscription>;

  updateVtsiEventSubscription(
    request: ondewo_vtsi_events_pb.UpdateVtsiEventSubscriptionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_events_pb.VtsiEventSubscription>;

  deleteVtsiEventSubscription(
    request: ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_events_pb.DeleteVtsiEventSubscriptionResponse>;

  listVtsiEventSubscriptions(
    request: ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_events_pb.ListVtsiEventSubscriptionsResponse>;

  createWebhook(
    request: ondewo_vtsi_events_pb.CreateWebhookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_events_pb.Webhook>;

  getWebhook(
    request: ondewo_vtsi_events_pb.GetWebhookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_events_pb.Webhook>;

  updateWebhook(
    request: ondewo_vtsi_events_pb.UpdateWebhookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_events_pb.Webhook>;

  deleteWebhook(
    request: ondewo_vtsi_events_pb.DeleteWebhookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_events_pb.DeleteWebhookResponse>;

  listWebhooks(
    request: ondewo_vtsi_events_pb.ListWebhooksRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_events_pb.ListWebhooksResponse>;

  testWebhook(
    request: ondewo_vtsi_events_pb.TestWebhookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_events_pb.TestWebhookResponse>;

  subscribeVtsiEvents(
    request: ondewo_vtsi_events_pb.SubscribeVtsiEventsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_events_pb.SubscribeVtsiEventsResponse>;

}

