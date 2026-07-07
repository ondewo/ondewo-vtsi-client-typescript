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
gRPC-web endpoint, the projects are listed and printed, and the refresh loop is stopped. It logs
progress with `console.log`, reports failures with `console.error`, and exits non-zero on error.

Configuration is read from [`environment.env`](./environment.env), which is loaded automatically via
`dotenv` (the path is resolved relative to the script, so the working directory does not matter).
Fill in the blank placeholders in that file, then run the compiled example:

```shell
node dist/examples/runListVtsiProjects.js
```

`environment.env` uses the canonical variable names:

| Variable                    | Purpose                                                     |
| --------------------------- | ----------------------------------------------------------- |
| `ONDEWO_HOST`               | VTSI gRPC-web host                                          |
| `ONDEWO_PORT`               | VTSI gRPC-web port                                          |
| `ONDEWO_USE_SECURE_CHANNEL` | `true` for an `https` channel, `false` for `http`           |
| `KEYCLOAK_URL`              | Base Keycloak URL                                           |
| `KEYCLOAK_REALM`            | Keycloak realm                                              |
| `KEYCLOAK_CLIENT_ID`        | Public headless-SDK client id                               |
| `KEYCLOAK_USER_NAME`        | 2FA-exempt technical-user email                             |
| `KEYCLOAK_PASSWORD`         | Technical-user password                                     |
| `KEYCLOAK_VERIFY_SSL`       | `true` to verify the Keycloak TLS certificate, else `false` |

## `listVtsiProjects.spec.ts`

Unit test that proves the example works **without a live server**: the gRPC client is mocked, and the
canned response is built from the real generated protobuf classes. The test asserts the example
requests the full project view, forwards the bearer token as gRPC metadata, and maps the response to
display names. Run it (together with the auth provider coverage gate) with:

```shell
npm test
```
