# Release History

*****************

## Release ONDEWO VTSI Typescript Client 8.7.2

### New Features

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `createGrpcWebEndpoint({ host, port, useSecureChannel, withCredentials })`
  (`auth/grpcWebEndpoint`, re-exported from `auth/offlineTokenProvider` and the package entry point) builds the
  `hostname` URL and the client options a generated `*Client` / `*PromiseClient` takes. `https://` is the default;
  `useSecureChannel: false` builds `http://` and logs a warning naming `host:port`; a bare IPv6 host is bracketed;
  `host`, `port` and both flags are validated (`'false'` is refused, not read as `true`).
* TLS in a browser is the browser's TLS: the server certificate is checked against the browser / OS trust store and a
  client certificate (mutual TLS) comes from the browser's certificate store. A config carrying a non-empty
  `grpcCert` / `grpcClientCert` / `grpcClientKey` (or `grpc_cert` / `grpc_client_cert` / `grpc_client_key`) is
  therefore refused with an error naming the field, never the value; empty values are ignored. `withCredentials: true`
  lets a cross-origin call present the browser's client certificate. No error message renders a refused value.
* README section "TLS, mutual TLS and certificates": modes, the Envoy side of mutual TLS, a test PKI with openssl,
  security notes and troubleshooting. Documented gap: the generated clients need `XMLHttpRequest`, so gRPC calls run
  in browsers only; in Node.js only the Keycloak `login` helper is usable and there is no Node.js path for a custom CA
  or client certificate.

### Bug Fixes

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `OfflineTokenProvider` no longer leaks its tokens
  when logged: `JSON.stringify`, `console.log` and `util.inspect` of a provider (also nested in another object) render
  the access and refresh tokens as `***REDACTED***`. `getAuthorizationHeader()` is unchanged.
* The npm package now ships the hand-written `auth/` module: the Keycloak `login` helper / `OfflineTokenProvider`
  (`auth/offlineTokenProvider`) and `auth/grpcWebEndpoint`. Up to 8.7.1 `create_npm_package` never copied `auth/`
  into the package, while 8.7.1's entry point already re-exported `./auth/offlineTokenProvider`, so importing the
  package root could not resolve that module.

### Improvements

* Tests: the endpoint helper's edge cases, including calls through the real grpc-web runtime with a recording
  `XMLHttpRequest`, and the token redaction. `tests/releaseNotes.spec.ts` pins the RELEASE.md heading spelling the
  Makefile slices, a `*****` separator ending every section, and non-empty notes for the version being released.
* RELEASE.md: every section now ends at its separator (the last one ran to the end of the file).
* Regenerated with [ondewo-proto-compiler 5.15.2](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.15.2)
  (8.7.1: 5.14.0); `google-protobuf` stays at 4.0.2.
* Tracking API Version [8.7.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.7.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Typescript Client 8.7.1

### Bug Fixes

* **8.7.0 could not deserialize a single string field.** The generated `_pb.js` modules call
  `reader.readStringRequireUtf8()`, a method that does not exist in `google-protobuf` 3.21.4 -- which
  this package pinned EXACTLY. Every `deserializeBinary` on a message carrying a string threw
  `TypeError: reader.readStringRequireUtf8 is not a function`. The pin is `4.0.2` now; no generated
  code and no proto content changed.
* **A guard was added, because nothing here could see it.** The `.proto` sources, the generated code,
  the auth suite and its 100% coverage gate were all correct -- the generated code and the RUNTIME
  DEPENDENCY simply disagreed, and only decoding a real message exercises that seam.
  `tests/bundleStringRoundTrip.spec.ts` round-trips a string with multi-byte characters and is
  verified falsifiable: against google-protobuf 3.21.4 it reports 0 passed, 2 failed with that exact
  TypeError.

*****************

## Release ONDEWO VTSI Typescript Client 8.7.0

### Improvements

* Built against [ondewo-vtsi-api 8.7.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.7.0),
  which re-vendors [ondewo-nlu-api 7.1.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/7.1.0)
  (was 7.0.0) and [ondewo-s2t-api 7.5.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/7.5.0)
  (was 7.4.0). `ondewo/vtsi/**` is unchanged in that API release, so the VTSI service surface is
  identical and this client stays wire-compatible with 8.6.0.
* What the re-exported surface gains: `speech-to-text.proto` adds the `VadMethod` and `TsdMethod`
  enums and the `Silero` and `WespeakerTsd` messages (voice-activity and turn-shift detection
  configuration); `rag.proto` adds `RagCrawlerIncrementalConfig`.
* `RagCrawlerFilters` re-declares four fields as `[deprecated = true]` -- `allow_internal_links`,
  `allow_social_media_links`, `allowed_paths` and `disallowed_paths`. Every field number, name and
  type is preserved and no number is reused, so nothing on the wire changes; the two path lists are
  superseded by `allowed_regex` / `disallowed_regex`.

*****************

## Release ONDEWO VTSI Typescript Client 8.6.0

### Improvements

* Tracking API Version [8.6.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.6.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Typescript Client 8.5.0

### Improvements

* Tracking API Version [8.5.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.5.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Typescript Client 8.4.0

### Improvements

* Tracking API Version [8.4.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.4.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Typescript Client 8.3.0

### Improvements

* Tracking API Version [8.3.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.3.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )
* Added the generated client for `ondewo/vtsi/logs.proto` (container log capture and streaming)
* Added the optional field `asterisk_version` to `AsteriskConfigs`. It carries the docker image tag of the
  ONDEWO Asterisk image a VTSI project should start (e.g. `alpine-3.18-18.20.2`), so the Asterisk version is a
  per-project setting instead of a server-wide one. Leaving it unset keeps the server default
  (`ONDEWO_VTSI_ASTERISK_IMAGE_TAG`); an empty string is rejected
* The field has **explicit presence**: use `hasAsteriskVersion()` / `clearAsteriskVersion()`, because
  `getAsteriskVersion()` returns `''` both for "unset" and for "explicitly empty" and cannot tell them apart

*****************

## Release ONDEWO VTSI Typescript Client 8.2.0

### Improvements

* Tracking API Version [8.2.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.2.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Typescript Client 8.1.0

### Improvements

* Tracking API Version [8.1.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.1.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Typescript Client 8.0.0

### Improvements

* Tracking API Version [8.0.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.0.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Typescript Client 5.0.0

### Improvements

* Tracking API Version [5.0.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/5.0.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Typescript Client 4.0.0

### Improvements

* Update to VTSI client version tag 4.0.0
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************
