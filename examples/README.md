# Examples

Minimal, self-contained examples for the ONDEWO VTSI TypeScript client.

## `listVtsiProjects.ts`

The reusable, transport-agnostic core: `fetchVtsiProjectDisplayNames(client, authorizationHeader)`
builds a full-view `ListVtsiProjectsRequest`, calls the `listVtsiProjects` RPC with the bearer
`Authorization` metadata, and returns the display name of every returned VTSI project. It depends
only on a structural `ProjectLister` interface, so it can be driven by a real `ProjectsPromiseClient`
or by a mock in tests.

## `runListVtsiProjects.ts`

The runnable end-to-end wiring for the current (D18 / Keycloak) auth flow: `login(...)` returns an
auto-refreshing offline-token provider, a `ProjectsPromiseClient` is constructed against the
gRPC-web endpoint, the projects are listed and printed, and the refresh loop is stopped. Configure
it via environment variables:

```shell
ONDEWO_VTSI_GRPC_WEB_URL=https://vtsi.example.com \
KEYCLOAK_URL=https://auth.example.com/auth KEYCLOAK_REALM=ondewo-ccai-platform \
KEYCLOAK_USERNAME=tech-user@example.com KEYCLOAK_PASSWORD=... \
node dist/examples/runListVtsiProjects.js
```

## `listVtsiProjects.spec.ts`

Unit test that proves the example works **without a live server**: the gRPC client is mocked, and the
canned response is built from the real generated protobuf classes. The test asserts the example
requests the full project view, forwards the bearer token as gRPC metadata, and maps the response to
display names. Run it (together with the auth provider coverage gate) with:

```shell
npm test
```
