import * as grpcWeb from 'grpc-web';

import * as ondewo_vtsi_projects_pb from '../../ondewo/vtsi/projects_pb'; // proto import: "ondewo/vtsi/projects.proto"


export class ProjectsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createVtsiProject(
    request: ondewo_vtsi_projects_pb.CreateVtsiProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_projects_pb.CreateVtsiProjectResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_projects_pb.CreateVtsiProjectResponse>;

  getVtsiProject(
    request: ondewo_vtsi_projects_pb.GetVtsiProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_projects_pb.VtsiProject) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_projects_pb.VtsiProject>;

  updateVtsiProject(
    request: ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse>;

  deleteVtsiProject(
    request: ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse>;

  deployVtsiProject(
    request: ondewo_vtsi_projects_pb.DeployVtsiProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_projects_pb.DeployVtsiProjectResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_projects_pb.DeployVtsiProjectResponse>;

  undeployVtsiProject(
    request: ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse>;

  listVtsiProjects(
    request: ondewo_vtsi_projects_pb.ListVtsiProjectsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_vtsi_projects_pb.ListVtsiProjectsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_vtsi_projects_pb.ListVtsiProjectsResponse>;

}

export class ProjectsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createVtsiProject(
    request: ondewo_vtsi_projects_pb.CreateVtsiProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_projects_pb.CreateVtsiProjectResponse>;

  getVtsiProject(
    request: ondewo_vtsi_projects_pb.GetVtsiProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_projects_pb.VtsiProject>;

  updateVtsiProject(
    request: ondewo_vtsi_projects_pb.UpdateVtsiProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_projects_pb.UpdateVtsiProjectResponse>;

  deleteVtsiProject(
    request: ondewo_vtsi_projects_pb.DeleteVtsiProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_projects_pb.DeleteVtsiProjectResponse>;

  deployVtsiProject(
    request: ondewo_vtsi_projects_pb.DeployVtsiProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_projects_pb.DeployVtsiProjectResponse>;

  undeployVtsiProject(
    request: ondewo_vtsi_projects_pb.UndeployVtsiProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_projects_pb.UndeployVtsiProjectResponse>;

  listVtsiProjects(
    request: ondewo_vtsi_projects_pb.ListVtsiProjectsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_vtsi_projects_pb.ListVtsiProjectsResponse>;

}

