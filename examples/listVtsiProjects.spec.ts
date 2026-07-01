// Copyright 2021-2026 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

// Unit test for the listVtsiProjects example. The ProjectsPromiseClient is replaced by a mock that
// records the request + metadata it received and returns a canned response built from the REAL
// generated protobuf classes -- there is NO gRPC backend and NO network access.

import { test as runTestCase } from "node:test";
import assert from "node:assert/strict";

import { fetchVtsiProjectDisplayNames, type ProjectLister } from "./listVtsiProjects";
import {
  ListVtsiProjectsRequest,
  ListVtsiProjectsResponse,
  VtsiProject,
  VtsiProjectView
} from "../api/ondewo/vtsi/projects_pb";

/** The `Authorization` header value the example is expected to forward as gRPC metadata. */
const BEARER_HEADER: string = "Bearer test-access-token";

/** A single call captured by the mock client, for post-hoc assertions. */
interface RecordedCall {
  /** The request the example built and sent. */
  request: ListVtsiProjectsRequest;
  /** The gRPC metadata the example attached (must carry the bearer token). */
  metadata: Record<string, string>;
}

/** A mock ProjectLister paired with the list of calls it recorded. */
interface MockClient {
  /** The injectable client passed to {@link fetchVtsiProjectDisplayNames}. */
  client: ProjectLister;
  /** Calls recorded so far, in order. */
  calls: RecordedCall[];
}

/**
 * Build a mock ProjectLister that records every call and answers with a response whose projects have
 * the given display names.
 *
 * @param displayNames - Display names to expose as VtsiProjects in the canned response.
 * @returns A {@link MockClient} exposing the injectable client and its recorded calls.
 */
function makeMockClient(displayNames: string[]): MockClient {
  const calls: RecordedCall[] = [];
  const client: ProjectLister = {
    listVtsiProjects(
      request: ListVtsiProjectsRequest,
      metadata: Record<string, string>
    ): Promise<ListVtsiProjectsResponse> {
      calls.push({ request, metadata });
      const response: ListVtsiProjectsResponse = new ListVtsiProjectsResponse();
      response.setVtsiProjectsList(
        displayNames.map((displayName: string): VtsiProject => {
          const project: VtsiProject = new VtsiProject();
          project.setDisplayName(displayName);
          return project;
        })
      );
      return Promise.resolve(response);
    }
  };
  return { client, calls };
}

/** The example asks for the full project view and forwards the bearer token as gRPC metadata. */
runTestCase("fetchVtsiProjectDisplayNames requests the full view with bearer auth metadata", async () => {
  const mockClient: MockClient = makeMockClient(["Alpha", "Beta"]);

  const displayNames: string[] = await fetchVtsiProjectDisplayNames(mockClient.client, BEARER_HEADER);

  assert.equal(mockClient.calls.length, 1);
  assert.equal(mockClient.calls[0].request.getVtsiProjectView(), VtsiProjectView.VTSI_PROJECT_VIEW_FULL);
  assert.equal(mockClient.calls[0].metadata.Authorization, BEARER_HEADER);
  assert.deepEqual(displayNames, ["Alpha", "Beta"]);
});

/** An empty server response maps to an empty list of display names (no throw). */
runTestCase("fetchVtsiProjectDisplayNames returns an empty list when the server has no projects", async () => {
  const mockClient: MockClient = makeMockClient([]);

  const displayNames: string[] = await fetchVtsiProjectDisplayNames(mockClient.client, BEARER_HEADER);

  assert.equal(mockClient.calls.length, 1);
  assert.deepEqual(displayNames, []);
});
