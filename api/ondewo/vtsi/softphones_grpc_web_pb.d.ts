import * as grpcWeb from 'grpc-web';

import * as ondewo_vtsi_softphones_pb from '../../ondewo/vtsi/softphones_pb'; // proto import: "ondewo/vtsi/softphones.proto"


export class SoftphonesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSoftphoneAccount(
    request: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse>;

  getSoftphoneAccount(
    request: ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_softphones_pb.SoftphoneAccount>;

  updateSoftphoneAccount(
    request: ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_softphones_pb.SoftphoneAccount) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_softphones_pb.SoftphoneAccount>;

  deleteSoftphoneAccount(
    request: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse>;

  listSoftphoneAccounts(
    request: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse>;

  rotateSoftphoneCredentials(
    request: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse>;

  listSoftphoneCertificates(
    request: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse>;

  getSoftphoneCertificate(
    request: ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_softphones_pb.SoftphoneCertificate>;

  revokeSoftphoneCertificate(
    request: ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_softphones_pb.SoftphoneCertificate) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_softphones_pb.SoftphoneCertificate>;

  getSoftphoneProvisioning(
    request: ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_softphones_pb.SoftphoneProvisioning) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_softphones_pb.SoftphoneProvisioning>;

}

export class SoftphonesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createSoftphoneAccount(
    request: ondewo_vtsi_softphones_pb.CreateSoftphoneAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_softphones_pb.CreateSoftphoneAccountResponse>;

  getSoftphoneAccount(
    request: ondewo_vtsi_softphones_pb.GetSoftphoneAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_softphones_pb.SoftphoneAccount>;

  updateSoftphoneAccount(
    request: ondewo_vtsi_softphones_pb.UpdateSoftphoneAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_softphones_pb.SoftphoneAccount>;

  deleteSoftphoneAccount(
    request: ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_softphones_pb.DeleteSoftphoneAccountResponse>;

  listSoftphoneAccounts(
    request: ondewo_vtsi_softphones_pb.ListSoftphoneAccountsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_softphones_pb.ListSoftphoneAccountsResponse>;

  rotateSoftphoneCredentials(
    request: ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_softphones_pb.RotateSoftphoneCredentialsResponse>;

  listSoftphoneCertificates(
    request: ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_softphones_pb.ListSoftphoneCertificatesResponse>;

  getSoftphoneCertificate(
    request: ondewo_vtsi_softphones_pb.GetSoftphoneCertificateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_softphones_pb.SoftphoneCertificate>;

  revokeSoftphoneCertificate(
    request: ondewo_vtsi_softphones_pb.RevokeSoftphoneCertificateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_softphones_pb.SoftphoneCertificate>;

  getSoftphoneProvisioning(
    request: ondewo_vtsi_softphones_pb.GetSoftphoneProvisioningRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_softphones_pb.SoftphoneProvisioning>;

}

