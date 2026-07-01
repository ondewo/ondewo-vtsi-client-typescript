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

// Runnable end-to-end demonstration of the current (D18 / Keycloak) auth flow: log in once via the
// public SDK client to obtain an auto-refreshing offline token, construct a ProjectsPromiseClient
// against the gRPC-web endpoint, list the VTSI projects, print their display names, then stop the
// background refresh loop.
//
// No network calls happen at import time -- main() runs only when this file is executed directly, so
// importing the reusable core (listVtsiProjects.ts) in tests never contacts Keycloak or a server.
//
// To run against a real deployment, compile the package with its TypeScript toolchain (CommonJS)
// and execute the emitted JavaScript, e.g. after `make build`:
//
//   ONDEWO_VTSI_GRPC_WEB_URL=https://vtsi.example.com \
//   KEYCLOAK_URL=https://auth.example.com/auth KEYCLOAK_REALM=ondewo-ccai-platform \
//   KEYCLOAK_USERNAME=tech-user@example.com KEYCLOAK_PASSWORD=... \
//   node dist/examples/runListVtsiProjects.js

import { login, OfflineTokenProvider } from "../auth/offlineTokenProvider";
import { ProjectsPromiseClient } from "../api/ondewo/vtsi/projects_grpc_web_pb";
import { fetchVtsiProjectDisplayNames, type ProjectLister } from "./listVtsiProjects";

/**
 * Read a required environment variable or throw a descriptive error.
 *
 * @param name - The environment variable name.
 * @returns The non-empty environment variable value.
 */
function requireEnv(name: string): string {
  const value: string | undefined = process.env[name];
  if (value === undefined || value.length === 0) {
    throw new Error(`Missing required environment variable ${name}`);
  }
  return value;
}

/** Log in, list the VTSI projects, print their display names, and stop the token-refresh loop. */
async function main(): Promise<void> {
  const provider: OfflineTokenProvider = await login({
    keycloakUrl: requireEnv("KEYCLOAK_URL"),
    realm: requireEnv("KEYCLOAK_REALM"),
    // Public headless-SDK client (no client_secret); the technical user must be 2FA-exempt.
    clientId: "ondewo-nlu-cai-sdk-public",
    username: requireEnv("KEYCLOAK_USERNAME"),
    password: requireEnv("KEYCLOAK_PASSWORD")
  });

  try {
    // The real ProjectsPromiseClient satisfies the ProjectLister the example core depends on.
    const client: ProjectLister = new ProjectsPromiseClient(requireEnv("ONDEWO_VTSI_GRPC_WEB_URL"));
    const displayNames: string[] = await fetchVtsiProjectDisplayNames(client, provider.getAuthorizationHeader());
    process.stdout.write(`VTSI projects (${displayNames.length}): ${displayNames.join(", ")}\n`);
  } finally {
    provider.stop();
  }
}

if (require.main === module) {
  main().catch((error: unknown): void => {
    process.stderr.write(`${String(error)}\n`);
    process.exitCode = 1;
  });
}
