import * as grpcWeb from 'grpc-web';

import * as ondewo_vtsi_ivr_menus_pb from '../../ondewo/vtsi/ivr_menus_pb'; // proto import: "ondewo/vtsi/ivr_menus.proto"


export class IvrMenusClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_ivr_menus_pb.IvrMenu>;

  getIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_ivr_menus_pb.IvrMenu>;

  updateIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_ivr_menus_pb.IvrMenu>;

  deleteIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse>;

  listIvrMenus(
    request: ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse>;

  validateIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse>;

  publishIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_ivr_menus_pb.IvrMenu>;

  cloneIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_ivr_menus_pb.IvrMenu) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_ivr_menus_pb.IvrMenu>;

  listIvrMenuRevisions(
    request: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse>;

  testIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_ivr_menus_pb.IvrMenuTest>;

  getIvrMenuTest(
    request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_ivr_menus_pb.IvrMenuTest) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_ivr_menus_pb.IvrMenuTest>;

  getIvrMenuDialplan(
    request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse>;

}

export class IvrMenusPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.CreateIvrMenuRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_ivr_menus_pb.IvrMenu>;

  getIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_ivr_menus_pb.IvrMenu>;

  updateIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.UpdateIvrMenuRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_ivr_menus_pb.IvrMenu>;

  deleteIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_ivr_menus_pb.DeleteIvrMenuResponse>;

  listIvrMenus(
    request: ondewo_vtsi_ivr_menus_pb.ListIvrMenusRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_ivr_menus_pb.ListIvrMenusResponse>;

  validateIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_ivr_menus_pb.ValidateIvrMenuResponse>;

  publishIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.PublishIvrMenuRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_ivr_menus_pb.IvrMenu>;

  cloneIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.CloneIvrMenuRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_ivr_menus_pb.IvrMenu>;

  listIvrMenuRevisions(
    request: ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_ivr_menus_pb.ListIvrMenuRevisionsResponse>;

  testIvrMenu(
    request: ondewo_vtsi_ivr_menus_pb.TestIvrMenuRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_ivr_menus_pb.IvrMenuTest>;

  getIvrMenuTest(
    request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuTestRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_ivr_menus_pb.IvrMenuTest>;

  getIvrMenuDialplan(
    request: ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_ivr_menus_pb.GetIvrMenuDialplanResponse>;

}

