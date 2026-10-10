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
// THE ONDEWO VTSI API 9.0.0 SURFACE IS REACHABLE THROUGH THE GENERATED CLIENTS.
//
// Pins that the committed `api/` was regenerated from ondewo-vtsi-api 9.0.0:
//   * the three new services (Softphones, Campaigns, Events) have generated clients carrying every RPC
//     gRPC-web can express, and the new Calls RPCs are on the Calls clients;
//   * the bidirectional `Calls.StreamCallAudio` has no gRPC-web method (gRPC-web cannot express it);
//   * the breaking rename `sip_conf_file_string` -> `pjsip_conf_file_string` and the explicit presence of
//     the new optional fields reached the stubs;
//   * the new messages survive a binary round trip.
//
// Loading `calls_grpc_web_pb` is part of the check: it reaches `google/api/annotations_pb`, which requires
// `google/api/http_pb`. The proto compiler collects only DIRECT google/ imports, so `http_pb` was never
// generated and this file failed with MODULE_NOT_FOUND until `src/proto-deps.txt` pre-seeded it.
//
//   node --test .test-build/vtsiApiSurface.spec.js

import nodeTest from 'node:test';
import assert from 'node:assert/strict';

import { CallsClient, CallsPromiseClient } from '../api/ondewo/vtsi/calls_grpc_web_pb';
import { CampaignsClient, CampaignsPromiseClient } from '../api/ondewo/vtsi/campaigns_grpc_web_pb';
import { EventsClient, EventsPromiseClient } from '../api/ondewo/vtsi/events_grpc_web_pb';
import { SoftphonesClient, SoftphonesPromiseClient } from '../api/ondewo/vtsi/softphones_grpc_web_pb';
import { MessageBrokerServicesActivationConfig } from '../api/ondewo/vtsi/calls_pb';
import { Campaign } from '../api/ondewo/vtsi/campaigns_pb';
import { AsteriskConfigsFiles, AsteriskConfigsVariables, SipTrunkTransport } from '../api/ondewo/vtsi/projects_pb';
import { SoftphoneAccount } from '../api/ondewo/vtsi/softphones_pb';

/** Host the clients are constructed against; construction opens no connection. */
const HOST: string = 'http://localhost:8080';

/** A generated client constructor, as both the callback and the promise flavour declare it. */
type ClientConstructor = new (hostname: string) => object;

/** Every service client with the RPC methods ondewo-vtsi-api 9.0.0 adds to it. */
const NEW_METHODS: [string, ClientConstructor[], string[]][] = [
	[
		'Softphones',
		[SoftphonesClient, SoftphonesPromiseClient],
		[
			'createSoftphoneAccount',
			'getSoftphoneAccount',
			'updateSoftphoneAccount',
			'deleteSoftphoneAccount',
			'listSoftphoneAccounts',
			'rotateSoftphoneCredentials',
			'listSoftphoneCertificates',
			'getSoftphoneCertificate',
			'revokeSoftphoneCertificate',
			'getSoftphoneProvisioning'
		]
	],
	[
		'Campaigns',
		[CampaignsClient, CampaignsPromiseClient],
		[
			'createCampaign',
			'getCampaign',
			'updateCampaign',
			'deleteCampaign',
			'listCampaigns',
			'getCampaignStatistics',
			'listCampaignCalls',
			'startCampaign',
			'stopCampaign',
			'hardStopCampaign',
			'resumeCampaign',
			'streamCampaignStatus'
		]
	],
	[
		'Events',
		[EventsClient, EventsPromiseClient],
		[
			'createVtsiEventSubscription',
			'getVtsiEventSubscription',
			'updateVtsiEventSubscription',
			'deleteVtsiEventSubscription',
			'listVtsiEventSubscriptions',
			'createWebhook',
			'getWebhook',
			'updateWebhook',
			'deleteWebhook',
			'listWebhooks',
			'testWebhook',
			'subscribeVtsiEvents'
		]
	],
	[
		'Calls',
		[CallsClient, CallsPromiseClient],
		[
			'addCallersToCampaign',
			'addScheduledCallersToCampaign',
			'streamCallerStatus',
			'streamListenerStatus',
			'streamScheduledCallerStatus',
			'inviteToCall',
			'removeCallParticipant',
			'setCallMediaControl',
			'listenCallAudio'
		]
	]
];

/** Reads a method off a constructed client without widening the generated type. */
function methodOf(client: object, method: string): unknown {
	return (client as Record<string, unknown>)[method];
}

nodeTest('every RPC added in ondewo-vtsi-api 9.0.0 is on both generated clients of its service', (): void => {
	for (const [service, constructors, methods] of NEW_METHODS) {
		for (const Client of constructors) {
			const client: object = new Client(HOST);
			for (const method of methods) {
				assert.equal(typeof methodOf(client, method), 'function', `${service}.${method} is missing`);
			}
		}
	}
});

nodeTest('the bidirectional Calls.StreamCallAudio RPC has no gRPC-web method', (): void => {
	assert.equal(typeof methodOf(new CallsPromiseClient(HOST), 'streamCallAudio'), 'undefined');
});

nodeTest('AsteriskConfigsFiles carries pjsipConfFileString and no longer sipConfFileString', (): void => {
	const files: AsteriskConfigsFiles = new AsteriskConfigsFiles();
	files.setPjsipConfFileString('[transport-tls]');
	const decoded: AsteriskConfigsFiles = AsteriskConfigsFiles.deserializeBinary(files.serializeBinary());
	assert.equal(decoded.getPjsipConfFileString(), '[transport-tls]');
	assert.equal(methodOf(decoded, 'getSipConfFileString'), undefined);
	assert.equal(methodOf(decoded, 'setSipConfFileString'), undefined);
});

nodeTest('a scalar that gained `optional` distinguishes an explicit false from unset', (): void => {
	const unset: MessageBrokerServicesActivationConfig = MessageBrokerServicesActivationConfig.deserializeBinary(
		new MessageBrokerServicesActivationConfig().serializeBinary()
	);
	assert.equal(unset.hasActivateSip(), false);

	const config: MessageBrokerServicesActivationConfig = new MessageBrokerServicesActivationConfig();
	config.setActivateSip(false);
	const decoded: MessageBrokerServicesActivationConfig = MessageBrokerServicesActivationConfig.deserializeBinary(
		config.serializeBinary()
	);
	assert.equal(decoded.hasActivateSip(), true);
	assert.equal(decoded.getActivateSip(), false);
});

nodeTest('the new trunk fields of AsteriskConfigsVariables survive a binary round trip', (): void => {
	const variables: AsteriskConfigsVariables = new AsteriskConfigsVariables();
	assert.equal(variables.getSipTrunkTransport(), SipTrunkTransport.SIP_TRUNK_TRANSPORT_UNSPECIFIED);
	variables.setSipTrunkTransport(SipTrunkTransport.SIP_TRUNK_TRANSPORT_UDP);
	variables.setSipTrunkSourceCidr('203.0.113.7/32');
	variables.setSipTrunkVerifyServer(false);

	const decoded: AsteriskConfigsVariables = AsteriskConfigsVariables.deserializeBinary(variables.serializeBinary());
	assert.equal(decoded.getSipTrunkTransport(), SipTrunkTransport.SIP_TRUNK_TRANSPORT_UDP);
	assert.equal(decoded.getSipTrunkSourceCidr(), '203.0.113.7/32');
	assert.equal(decoded.hasSipTrunkVerifyServer(), true);
	assert.equal(decoded.hasSipTrunkCaCertificatesPem(), false);
});

nodeTest('Campaign and SoftphoneAccount survive a binary round trip', (): void => {
	const campaign: Campaign = new Campaign();
	campaign.setDisplayName('kampagne-äöü');
	campaign.setMaxParallelCalls(10);
	const decodedCampaign: Campaign = Campaign.deserializeBinary(campaign.serializeBinary());
	assert.equal(decodedCampaign.getDisplayName(), 'kampagne-äöü');
	assert.equal(decodedCampaign.getMaxParallelCalls(), 10);

	const account: SoftphoneAccount = new SoftphoneAccount();
	account.setDisplayName('agent-äöü');
	account.setEnabled(false);
	const decodedAccount: SoftphoneAccount = SoftphoneAccount.deserializeBinary(account.serializeBinary());
	assert.equal(decodedAccount.getDisplayName(), 'agent-äöü');
	assert.equal(decodedAccount.hasEnabled(), true);
	assert.equal(decodedAccount.getEnabled(), false);
});
