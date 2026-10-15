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
// THE ONDEWO VTSI API SURFACE IS REACHABLE THROUGH THE GENERATED CLIENTS.
//
// The expectations are DERIVED from the protos the client was generated from
// (`src/ondewo-vtsi-api/ondewo/vtsi/*.proto`, the api submodule at VTSI_API_GIT_BRANCH), so an API release
// that adds an RPC is checked without editing this file -- the 9.0.0 lists this file used to hard-code
// silently missed the six RPCs 9.1.0 added. What is pinned by hand is only what must NOT go away:
//   * every `service` has a callback and a promise client carrying one method per RPC gRPC-web can express
//     (unary and server-streaming); a client- or bidirectional-streaming RPC has no method;
//   * the entry point re-exports every generated vtsi module;
//   * the breaking rename `sip_conf_file_string` -> `pjsip_conf_file_string`, the explicit presence of the
//     `optional` fields, and binary round trips of the 9.0.0 messages.
//
// Message TYPES are imported through the package entry point `../public-api`, never from the module that
// happens to define them today (a message moving between .proto files is not an API change). The entry
// point is ESM for bundlers and cannot be required by node, so the runtime VALUES are looked up by name
// across the generated vtsi modules.
//
// Loading the `*_grpc_web_pb` modules is part of the check: `calls_grpc_web_pb` reaches
// `google/api/annotations_pb`, which requires `google/api/http_pb` (generated since proto-compiler 5.15.6).
//
//   node --test .test-build/vtsiApiSurface.spec.js

import nodeTest from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'module';
import { existsSync, readdirSync, readFileSync } from 'fs';
import { dirname, join } from 'path';

import type {
	AsteriskConfigsFiles,
	AsteriskConfigsVariables,
	Campaign,
	MessageBrokerServicesActivationConfig,
	SipTrunkTransport,
	SoftphoneAccount
} from '../public-api';

/**
 * @param start - The directory to start from.
 * @returns The closest ancestor directory holding the Makefile (the repository root).
 */
function findRepoRoot(start: string): string {
	let dir: string = start;
	while (!existsSync(join(dir, 'Makefile'))) {
		dir = dirname(dir);
	}
	return dir;
}

/** The repository root (the compiled spec runs from a build directory below it). */
const REPO_ROOT: string = findRepoRoot(__dirname);
/** The vtsi protos the committed `api/` was generated from. */
const PROTO_DIR: string = join(REPO_ROOT, 'src', 'ondewo-vtsi-api', 'ondewo', 'vtsi');
/** The generated vtsi modules. */
const API_DIR: string = join(REPO_ROOT, 'api', 'ondewo', 'vtsi');
/** Host the clients are constructed against; construction opens no connection. */
const HOST: string = 'http://localhost:8080';
/** Loads a generated CommonJS module by path. */
const loadModule: NodeJS.Require = createRequire(__filename);

/** One `rpc` line of a `service`. */
interface ProtoRpc {
	/** The RPC name as written in the proto. */
	name: string;
	/** True for a client- or bidirectional-streaming RPC, which gRPC-web cannot express. */
	clientStreaming: boolean;
}

/** One `service` block. */
interface ProtoService {
	/** The proto file name without `.proto`. */
	file: string;
	/** The service name. */
	name: string;
	/** Its RPCs. */
	rpcs: ProtoRpc[];
}

/** A generated client constructor, as both the callback and the promise flavour declare it. */
type ClientConstructor = new (hostname: string) => object;

/**
 * @param text - Proto source.
 * @returns The source with `//` and `/* *\/` comments blanked, string literals left intact.
 */
function stripComments(text: string): string {
	let out: string = '';
	let index: number = 0;
	while (index < text.length) {
		let stop: number = index + 1;
		if (text[index] === '"') {
			stop = text.indexOf('"', index + 1) + 1;
			out += text.slice(index, stop);
		} else if (text.startsWith('//', index)) {
			stop = text.indexOf('\n', index);
		} else if (text.startsWith('/*', index)) {
			stop = text.indexOf('*/', index + 2) + 2;
		} else {
			out += text[index];
		}
		if (stop <= index) {
			break;
		}
		index = stop;
	}
	return out;
}

/**
 * @param text - Comment-free proto source.
 * @param open - Index of a `{`.
 * @returns The text between that brace and its matching `}`.
 */
function blockBody(text: string, open: number): string {
	let depth: number = 0;
	for (let index: number = open; index < text.length; index += 1) {
		if (text[index] === '{') {
			depth += 1;
		} else if (text[index] === '}') {
			depth -= 1;
			if (depth === 0) {
				return text.slice(open + 1, index);
			}
		}
	}
	throw new Error('unbalanced braces in a proto service');
}

/** @returns Every service of every vtsi proto, with its RPCs. */
function protoServices(): ProtoService[] {
	return readdirSync(PROTO_DIR)
		.filter((file: string): boolean => file.endsWith('.proto'))
		.sort()
		.flatMap((file: string): ProtoService[] => {
			const text: string = stripComments(readFileSync(join(PROTO_DIR, file), 'utf8'));
			return [...text.matchAll(/\bservice\s+(\w+)\s*\{/g)].map((service: RegExpExecArray): ProtoService => {
				const body: string = blockBody(text, service.index + service[0].length - 1);
				const rpcs: ProtoRpc[] = [
					...body.matchAll(/\brpc\s+(\w+)\s*\(\s*(stream\s+)?[\w.]+\s*\)\s*returns\s*\(\s*(?:stream\s+)?[\w.]+\s*\)/g)
				].map((rpc: RegExpExecArray): ProtoRpc => ({ name: rpc[1], clientStreaming: rpc[2] !== undefined }));
				return { file: file.replace(/\.proto$/, ''), name: service[1], rpcs };
			});
		});
}

/**
 * @param name - An RPC name.
 * @returns The method name protoc-gen-grpc-web generates for it (first letter lower-cased).
 */
function methodName(name: string): string {
	return name.charAt(0).toLowerCase() + name.slice(1);
}

/** Reads a member off an object without widening the generated type. */
function memberOf(owner: object, name: string): unknown {
	return (owner as Record<string, unknown>)[name];
}

/**
 * @param file - A generated module path relative to `api/ondewo/vtsi`, without `.js`.
 * @returns The module's exports.
 */
function generatedModule(file: string): Record<string, unknown> {
	return loadModule(join(API_DIR, file)) as Record<string, unknown>;
}

/**
 * @param name - An exported message or enum name.
 * @returns The one generated vtsi message module export of that name.
 */
function generatedExport<T>(name: string): T {
	// goog's generated modules share one `proto.ondewo.vtsi` namespace and each re-exports all of it, so the
	// same constructor shows up under several modules: what must be unique is the VALUE.
	const values: Set<unknown> = new Set(
		readdirSync(API_DIR)
			.filter((file: string): boolean => file.endsWith('_pb.js') && !file.endsWith('_grpc_web_pb.js'))
			.map((file: string): unknown => generatedModule(file.replace(/\.js$/, ''))[name])
			.filter((value: unknown): boolean => value !== undefined)
	);
	assert.equal(values.size, 1, `the generated vtsi modules export exactly one ${name}`);
	return [...values][0] as T;
}

/** The services of the protos, parsed once. */
const SERVICES: ProtoService[] = protoServices();

nodeTest('the vtsi protos declare the services this client must keep', (): void => {
	const names: string[] = SERVICES.map((service: ProtoService): string => service.name);
	for (const required of ['Calls', 'Campaigns', 'Events', 'Logs', 'Projects', 'Softphones']) {
		assert.ok(names.includes(required), `service ${required} is missing from ${PROTO_DIR}`);
	}
	for (const service of SERVICES) {
		assert.ok(service.rpcs.length > 0, `no rpc parsed from service ${service.name}`);
	}
});

nodeTest('the parser sees the RPCs this client must keep, and StreamCallAudio as bidirectional', (): void => {
	const rpcs: Map<string, ProtoRpc> = new Map(
		SERVICES.flatMap((service: ProtoService): [string, ProtoRpc][] =>
			service.rpcs.map((rpc: ProtoRpc): [string, ProtoRpc] => [`${service.name}.${rpc.name}`, rpc])
		)
	);
	for (const required of [
		'Calls.ListenCallAudio',
		'Calls.StreamCallerStatus',
		'Campaigns.StreamCampaignStatus',
		'Events.SubscribeVtsiEvents',
		'Projects.ListVtsiProjects',
		'Softphones.CreateSoftphoneAccount'
	]) {
		assert.equal(rpcs.get(required)?.clientStreaming, false, `${required} is missing or not gRPC-web capable`);
	}
	assert.equal(rpcs.get('Calls.StreamCallAudio')?.clientStreaming, true);
});

nodeTest('every RPC gRPC-web can express is on both generated clients of its service', (): void => {
	const missing: string[] = [];
	for (const service of SERVICES) {
		const exports: Record<string, unknown> = generatedModule(`${service.file}_grpc_web_pb`);
		for (const flavour of ['Client', 'PromiseClient']) {
			const Client: ClientConstructor = exports[`${service.name}${flavour}`] as ClientConstructor;
			assert.equal(typeof Client, 'function', `${service.name}${flavour} is not generated`);
			const client: object = new Client(HOST);
			for (const rpc of service.rpcs.filter((candidate: ProtoRpc): boolean => !candidate.clientStreaming)) {
				if (typeof memberOf(client, methodName(rpc.name)) !== 'function') {
					missing.push(`${service.name}${flavour}.${methodName(rpc.name)}`);
				}
			}
		}
	}
	assert.deepEqual(missing, []);
});

nodeTest('a client- or bidirectional-streaming RPC has no gRPC-web method', (): void => {
	const present: string[] = [];
	for (const service of SERVICES) {
		const exports: Record<string, unknown> = generatedModule(`${service.file}_grpc_web_pb`);
		for (const flavour of ['Client', 'PromiseClient']) {
			const client: object = new (exports[`${service.name}${flavour}`] as ClientConstructor)(HOST);
			for (const rpc of service.rpcs.filter((candidate: ProtoRpc): boolean => candidate.clientStreaming)) {
				if (memberOf(client, methodName(rpc.name)) !== undefined) {
					present.push(`${service.name}${flavour}.${methodName(rpc.name)}`);
				}
			}
		}
	}
	assert.deepEqual(present, []);
});

nodeTest('the entry point re-exports every generated vtsi module', (): void => {
	const protoFiles: string[] = readdirSync(PROTO_DIR)
		.filter((file: string): boolean => file.endsWith('.proto'))
		.map((file: string): string => file.replace(/\.proto$/, ''));
	const expected: string[] = [
		...protoFiles.map((file: string): string => `${file}_pb`),
		...SERVICES.map((service: ProtoService): string => `${service.file}_grpc_web_pb`)
	];
	const missing: string[] = [];
	for (const [entryPoint, suffix] of [
		['public-api.js', ''],
		['public-api.d.ts', '.d']
	]) {
		const text: string = readFileSync(join(REPO_ROOT, entryPoint), 'utf8');
		for (const module of expected) {
			if (!text.includes(`export * from './api/ondewo/vtsi/${module}${suffix}';`)) {
				missing.push(`${entryPoint}: ${module}`);
			}
		}
	}
	assert.deepEqual(missing, []);
});

nodeTest('AsteriskConfigsFiles carries pjsipConfFileString and no longer sipConfFileString', (): void => {
	const Files: typeof AsteriskConfigsFiles = generatedExport<typeof AsteriskConfigsFiles>('AsteriskConfigsFiles');
	const files: AsteriskConfigsFiles = new Files();
	files.setPjsipConfFileString('[transport-tls]');
	const decoded: AsteriskConfigsFiles = Files.deserializeBinary(files.serializeBinary());
	assert.equal(decoded.getPjsipConfFileString(), '[transport-tls]');
	assert.equal(memberOf(decoded, 'getSipConfFileString'), undefined);
	assert.equal(memberOf(decoded, 'setSipConfFileString'), undefined);
});

nodeTest('a scalar that gained `optional` distinguishes an explicit false from unset', (): void => {
	const Config: typeof MessageBrokerServicesActivationConfig = generatedExport<
		typeof MessageBrokerServicesActivationConfig
	>('MessageBrokerServicesActivationConfig');
	const unset: MessageBrokerServicesActivationConfig = Config.deserializeBinary(new Config().serializeBinary());
	assert.equal(unset.hasActivateSip(), false);

	const config: MessageBrokerServicesActivationConfig = new Config();
	config.setActivateSip(false);
	const decoded: MessageBrokerServicesActivationConfig = Config.deserializeBinary(config.serializeBinary());
	assert.equal(decoded.hasActivateSip(), true);
	assert.equal(decoded.getActivateSip(), false);
});

nodeTest('the new trunk fields of AsteriskConfigsVariables survive a binary round trip', (): void => {
	const Variables: typeof AsteriskConfigsVariables =
		generatedExport<typeof AsteriskConfigsVariables>('AsteriskConfigsVariables');
	const Transport: typeof SipTrunkTransport = generatedExport<typeof SipTrunkTransport>('SipTrunkTransport');
	const variables: AsteriskConfigsVariables = new Variables();
	assert.equal(variables.getSipTrunkTransport(), Transport.SIP_TRUNK_TRANSPORT_UNSPECIFIED);
	variables.setSipTrunkTransport(Transport.SIP_TRUNK_TRANSPORT_UDP);
	variables.setSipTrunkSourceCidr('203.0.113.7/32');
	variables.setSipTrunkVerifyServer(false);

	const decoded: AsteriskConfigsVariables = Variables.deserializeBinary(variables.serializeBinary());
	assert.equal(decoded.getSipTrunkTransport(), Transport.SIP_TRUNK_TRANSPORT_UDP);
	assert.equal(decoded.getSipTrunkSourceCidr(), '203.0.113.7/32');
	assert.equal(decoded.hasSipTrunkVerifyServer(), true);
	assert.equal(decoded.hasSipTrunkCaCertificatesPem(), false);
});

nodeTest('Campaign and SoftphoneAccount survive a binary round trip', (): void => {
	const CampaignMessage: typeof Campaign = generatedExport<typeof Campaign>('Campaign');
	const campaign: Campaign = new CampaignMessage();
	campaign.setDisplayName('kampagne-äöü');
	campaign.setMaxParallelCalls(10);
	const decodedCampaign: Campaign = CampaignMessage.deserializeBinary(campaign.serializeBinary());
	assert.equal(decodedCampaign.getDisplayName(), 'kampagne-äöü');
	assert.equal(decodedCampaign.getMaxParallelCalls(), 10);

	const Account: typeof SoftphoneAccount = generatedExport<typeof SoftphoneAccount>('SoftphoneAccount');
	const account: SoftphoneAccount = new Account();
	account.setDisplayName('agent-äöü');
	account.setEnabled(false);
	const decodedAccount: SoftphoneAccount = Account.deserializeBinary(account.serializeBinary());
	assert.equal(decodedAccount.getDisplayName(), 'agent-äöü');
	assert.equal(decodedAccount.hasEnabled(), true);
	assert.equal(decodedAccount.getEnabled(), false);
});
