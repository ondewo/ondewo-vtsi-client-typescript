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

// Example: list the VTSI projects on a server and return their display names.
//
// This module holds the reusable, transport-agnostic core of the example so it can be unit tested
// with a mocked gRPC client (see listVtsiProjects.spec.ts) -- there is no live backend. The runnable
// end-to-end wiring (Keycloak offline-token login + a real ProjectsPromiseClient) lives in
// runListVtsiProjects.ts.

import {
	ListVtsiProjectsRequest,
	VtsiProjectView,
	type ListVtsiProjectsResponse,
	type VtsiProject
} from '../api/ondewo/vtsi/projects_pb';

/**
 * The subset of the generated `ProjectsPromiseClient` this example depends on. Declaring it as a
 * structural interface lets the unit test inject a mock without a live gRPC backend, while the real
 * `ProjectsPromiseClient` still satisfies it (checked at compile time in runListVtsiProjects.ts).
 */
export interface ProjectLister {
	/**
	 * List the VTSI projects visible to the caller.
	 *
	 * @param request - The (view-scoped) list request.
	 * @param metadata - gRPC metadata; carries the `Authorization: Bearer <token>` header.
	 * @returns A promise resolving to the list response.
	 */
	listVtsiProjects(
		request: ListVtsiProjectsRequest,
		metadata: Record<string, string>
	): Promise<ListVtsiProjectsResponse>;
}

/**
 * List every VTSI project on the server and return their display names.
 *
 * Builds a full-view {@link ListVtsiProjectsRequest}, calls the `listVtsiProjects` RPC with the
 * bearer `Authorization` metadata, and maps the response to the project display names.
 *
 * @param client - A gRPC client exposing `listVtsiProjects` (a real ProjectsPromiseClient or a mock).
 * @param authorizationHeader - The `Bearer <access_token>` value from the offline-token provider.
 * @returns A promise resolving to the display name of every returned VTSI project.
 */
export async function fetchVtsiProjectDisplayNames(
	client: ProjectLister,
	authorizationHeader: string
): Promise<string[]> {
	const request: ListVtsiProjectsRequest = new ListVtsiProjectsRequest();
	request.setVtsiProjectView(VtsiProjectView.VTSI_PROJECT_VIEW_FULL);

	const metadata: Record<string, string> = { Authorization: authorizationHeader };
	const response: ListVtsiProjectsResponse = await client.listVtsiProjects(request, metadata);

	return response.getVtsiProjectsList().map((project: VtsiProject): string => project.getDisplayName());
}
