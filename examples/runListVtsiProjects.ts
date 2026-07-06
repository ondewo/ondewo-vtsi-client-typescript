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
// Configuration is read from examples/environment.env (loaded via dotenv below), using the canonical
// variable names: ONDEWO_HOST, ONDEWO_PORT, ONDEWO_USE_SECURE_CHANNEL for the gRPC-web endpoint and
// KEYCLOAK_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENT_ID, KEYCLOAK_USER_NAME, KEYCLOAK_PASSWORD,
// KEYCLOAK_VERIFY_SSL for the login.
//
// To run against a real deployment, fill in examples/environment.env, compile the package with its
// TypeScript toolchain (CommonJS), and execute the emitted JavaScript, e.g. after `make build`:
//
//   node dist/examples/runListVtsiProjects.js

import * as path from 'path';
import * as dotenv from 'dotenv';

import { login, OfflineTokenProvider } from '../auth/offlineTokenProvider';
import { ProjectsPromiseClient } from '../api/ondewo/vtsi/projects_grpc_web_pb';
import { fetchVtsiProjectDisplayNames, type ProjectLister } from './listVtsiProjects';

// Load examples/environment.env with a script-relative path so the working directory does not matter.
dotenv.config({ path: path.join(__dirname, 'environment.env') });

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

/**
 * Read an optional environment variable, falling back to a default when unset or empty.
 *
 * @param name - The environment variable name.
 * @param defaultValue - The value to use when the variable is unset or empty.
 * @returns The environment variable value or the provided default.
 */
function optionalEnv(name: string, defaultValue: string): string {
	const value: string | undefined = process.env[name];
	return value === undefined || value.length === 0 ? defaultValue : value;
}

/**
 * Read a boolean environment variable ("true"/"false", case-insensitive), falling back to a default.
 *
 * @param name - The environment variable name.
 * @param defaultValue - The value to use when the variable is unset or empty.
 * @returns `true` when the value is "true" (case-insensitive), otherwise `false` or the default.
 */
function booleanEnv(name: string, defaultValue: boolean): boolean {
	const value: string | undefined = process.env[name];
	if (value === undefined || value.length === 0) {
		return defaultValue;
	}
	return value.trim().toLowerCase() === 'true';
}

/**
 * Build the VTSI gRPC-web endpoint URL from the canonical connection variables.
 *
 * @returns "<https|http>://ONDEWO_HOST:ONDEWO_PORT" depending on ONDEWO_USE_SECURE_CHANNEL.
 */
function buildGrpcWebUrl(): string {
	const host: string = requireEnv('ONDEWO_HOST');
	const port: string = requireEnv('ONDEWO_PORT');
	const useSecureChannel: boolean = booleanEnv('ONDEWO_USE_SECURE_CHANNEL', true);
	const scheme: string = useSecureChannel ? 'https' : 'http';
	return `${scheme}://${host}:${port}`;
}

/** Log in, list the VTSI projects, print their display names, and stop the token-refresh loop. */
async function main(): Promise<void> {
	const keycloakUrl: string = requireEnv('KEYCLOAK_URL');
	console.log(`START: logging in to Keycloak at ${keycloakUrl} ...`);
	const provider: OfflineTokenProvider = await login({
		keycloakUrl,
		realm: requireEnv('KEYCLOAK_REALM'),
		// Public headless-SDK client (no client_secret); the technical user must be 2FA-exempt.
		clientId: optionalEnv('KEYCLOAK_CLIENT_ID', 'ondewo-nlu-cai-sdk-public'),
		username: requireEnv('KEYCLOAK_USER_NAME'),
		password: requireEnv('KEYCLOAK_PASSWORD'),
		keycloakVerifySsl: booleanEnv('KEYCLOAK_VERIFY_SSL', true)
	});
	console.log('DONE: Keycloak login succeeded; offline-token refresh loop started.');

	try {
		const grpcWebUrl: string = buildGrpcWebUrl();
		console.log(`START: listing VTSI projects at ${grpcWebUrl} ...`);
		// The real ProjectsPromiseClient satisfies the ProjectLister the example core depends on.
		const client: ProjectLister = new ProjectsPromiseClient(grpcWebUrl);
		const displayNames: string[] = await fetchVtsiProjectDisplayNames(client, provider.getAuthorizationHeader());
		console.log(`DONE: found ${displayNames.length} VTSI project(s): ${displayNames.join(', ')}`);
	} finally {
		provider.stop();
	}
}

if (require.main === module) {
	main().catch((error: unknown): void => {
		console.error('FAILED: could not list VTSI projects.');
		console.error(error instanceof Error ? `${error.name}: ${error.message}` : String(error));
		process.exit(1);
	});
}
