<div align="center">
  <table>
    <tr>
      <td>
        <a href="https://ondewo.com/en/products/natural-language-understanding/">
            <img width="400px" src="https://raw.githubusercontent.com/ondewo/ondewo-logos/master/ondewo_we_automate_your_phone_calls.png"/>
        </a>
      </td>
    </tr>
    <tr>
       <td align="center">
          <a href="https://www.linkedin.com/company/ondewo "><img width="40px" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"></a>
          <a href="https://www.facebook.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733547.png"></a>
          <a href="https://twitter.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733579.png"> </a>
          <a href="https://www.instagram.com/ondewo.ai/"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/174/174855.png"></a>
          <a href="https://badge.fury.io/js/%40ondewo%2Fvtsi-client-typescript"><img src="https://badge.fury.io/js/%40ondewo%2Fvtsi-client-typescript.svg" alt="npm version" height="32"></a>
       </td>
    </tr>
  </table>
  <h1 align="center">
    ONDEWO VTSI Client Typescript
  </h1>
</div>

## Overview

`@ondewo/vtsi-client-typescript` is a compiled version of the [ONDEWO VTSI API](https://github.com/ondewo/ondewo-vtsi-api) using the [ONDEWO PROTO COMPILER](https://github.com/ondewo/ondewo-proto-compiler). Here you can find the VTSI API [documentation](https://ondewo.github.io).

ONDEWO APIs use [Protocol Buffers](https://github.com/google/protobuf) version 3 (proto3) as their Interface Definition Language (IDL) to define the API interface and the structure of the payload messages. The same interface definition is used for gRPC versions of the API in all languages.

## Setup

Using NPM:

```shell
npm i --save @ondewo/vtsi-client-typescript
```

Using GitHub:

```shell
git clone https://github.com/ondewo/ondewo-vtsi-client-typescript.git ## Clone repository
cd ondewo-vtsi-client-typescript                                      ## Change into repo-directoy
make setup_developer_environment_locally                             ## Install dependencies
```

## Package structure

```
npm
├── api
│   ├── google
│   │   ├── api
│   │   │   ├── annotations_pb.d.ts
│   │   │   └── annotations_pb.js
│   │   ├── protobuf
│   │   │   ├── any_pb.d.ts
│   │   │   ├── any_pb.js
│   │   │   ├── empty_pb.d.ts
│   │   │   ├── empty_pb.js
│   │   │   ├── field_mask_pb.d.ts
│   │   │   ├── field_mask_pb.js
│   │   │   ├── struct_pb.d.ts
│   │   │   ├── struct_pb.js
│   │   │   ├── timestamp_pb.d.ts
│   │   │   └── timestamp_pb.js
│   │   ├── rpc
│   │   │   ├── status_pb.d.ts
│   │   │   └── status_pb.js
│   │   └── type
│   │       ├── latlng_pb.d.ts
│   │       └── latlng_pb.js
│   └── ondewo
│       ├── nlu
│       │   ├── agent_grpc_web_pb.d.ts
│       │   ├── agent_grpc_web_pb.js
│       │   ├── agent_pb.d.ts
│       │   ├── agent_pb.js
│       │   ├── aiservices_grpc_web_pb.d.ts
│       │   ├── aiservices_grpc_web_pb.js
│       │   ├── aiservices_pb.d.ts
│       │   ├── aiservices_pb.js
│       │   ├── common_pb.d.ts
│       │   ├── common_pb.js
│       │   ├── context_grpc_web_pb.d.ts
│       │   ├── context_grpc_web_pb.js
│       │   ├── context_pb.d.ts
│       │   ├── context_pb.js
│       │   ├── entity_type_grpc_web_pb.d.ts
│       │   ├── entity_type_grpc_web_pb.js
│       │   ├── entity_type_pb.d.ts
│       │   ├── entity_type_pb.js
│       │   ├── intent_grpc_web_pb.d.ts
│       │   ├── intent_grpc_web_pb.js
│       │   ├── intent_pb.d.ts
│       │   ├── intent_pb.js
│       │   ├── operation_metadata_pb.d.ts
│       │   ├── operation_metadata_pb.js
│       │   ├── operations_grpc_web_pb.d.ts
│       │   ├── operations_grpc_web_pb.js
│       │   ├── operations_pb.d.ts
│       │   ├── operations_pb.js
│       │   ├── project_role_grpc_web_pb.d.ts
│       │   ├── project_role_grpc_web_pb.js
│       │   ├── project_role_pb.d.ts
│       │   ├── project_role_pb.js
│       │   ├── project_statistics_grpc_web_pb.d.ts
│       │   ├── project_statistics_grpc_web_pb.js
│       │   ├── project_statistics_pb.d.ts
│       │   ├── project_statistics_pb.js
│       │   ├── server_statistics_grpc_web_pb.d.ts
│       │   ├── server_statistics_grpc_web_pb.js
│       │   ├── server_statistics_pb.d.ts
│       │   ├── server_statistics_pb.js
│       │   ├── session_grpc_web_pb.d.ts
│       │   ├── session_grpc_web_pb.js
│       │   ├── session_pb.d.ts
│       │   ├── session_pb.js
│       │   ├── user_grpc_web_pb.d.ts
│       │   ├── user_grpc_web_pb.js
│       │   ├── user_pb.d.ts
│       │   ├── user_pb.js
│       │   ├── utility_grpc_web_pb.d.ts
│       │   ├── utility_grpc_web_pb.js
│       │   ├── utility_pb.d.ts
│       │   ├── utility_pb.js
│       │   ├── webhook_grpc_web_pb.d.ts
│       │   ├── webhook_grpc_web_pb.js
│       │   ├── webhook_pb.d.ts
│       │   └── webhook_pb.js
│       ├── qa
│       │   ├── qa_grpc_web_pb.d.ts
│       │   ├── qa_grpc_web_pb.js
│       │   ├── qa_pb.d.ts
│       │   └── qa_pb.js
│       ├── s2t
│       │   ├── speech-to-text_grpc_web_pb.d.ts
│       │   ├── speech-to-text_grpc_web_pb.js
│       │   ├── speech-to-text_pb.d.ts
│       │   └── speech-to-text_pb.js
│       ├── sip
│       │   ├── sip_grpc_web_pb.d.ts
│       │   ├── sip_grpc_web_pb.js
│       │   ├── sip_pb.d.ts
│       │   └── sip_pb.js
│       ├── t2s
│       │   ├── text-to-speech_grpc_web_pb.d.ts
│       │   ├── text-to-speech_grpc_web_pb.js
│       │   ├── text-to-speech_pb.d.ts
│       │   └── text-to-speech_pb.js
│       └── vtsi
│           ├── voip_grpc_web_pb.d.ts
│           ├── voip_grpc_web_pb.js
│           ├── voip_pb.d.ts
│           └── voip_pb.js
├── LICENSE
├── package.json
├── public-api.d.ts
└── README.md

```

[comment]: <> (START OF GITHUB README)

## Build

The `make build` command is dependent on 2 `repositories` and their specified `version`:

- [ondewo-vtsi-api](https://github.com/ondewo/ondewo-vtsi-api) -- `VTSI_API_GIT_BRANCH` in `Makefile`
- [ondewo-proto-compiler](https://github.com/ondewo/ondewo-proto-compiler) -- `ONDEWO_PROTO_COMPILER_GIT_BRANCH` in `Makefile`

Other than creating the proto-code, `build` also installs the `dev-dependencies` and changes the owner of the proto-code-files from `root` to the `current user`.

In the case that some `google .protos` were not automatically generated, exists the option of creating a `proto-deps.txt` inside the `src` folder. There, import statements can be written the same way as they are in `.proto` files.

```
import "google/api/http.proto"; //Example
  <---- New Line
```

> :warning: The last line in the `proto-deps.txt` needs to be an empty new line, otherwise the compiler will fail

## GitHub Repository - Release Automation

The repository is published to GitHub and NPM by the Automated Release Process of ONDEWO.

TODO after PR merge:

- checkout master
  ```shell
  git checkout master
  ```
- pull the newest state
  ```shell
  git pull
  ```
- Adjust `ONDEWO_VTSI_VERSION` in the `Makefile` <br><br>
- Add new Release Notes to `src/RELEASE.md` in following format:

  ```
  ## Release ONDEWO VTSI Typescript Client X.X.X    <----- Beginning of Notes

  ...<NOTES>...

  *****************                             <----- End of Notes
  ```

- release
  ```shell
  make ondewo_release
  ```
  <br>
  The release process can be divided into 6 Steps:

1. `build` specified version of the `ondewo-vtsi-api`
2. `commit and push` all changes in code resulting from the `build`
3. Publish the created `npm` folder to `npmjs.com`
4. Create and push the `release branch` e.g. `release/1.3.20`
5. Create and push the `release tag` e.g. `1.3.20`
6. Create a new `Release` on GitHub

> :warning: The Release Automation checks if the build has created all the proto-code files, but it does not check the code-integrity. Please build and test the generated code prior to starting the release process.

[comment]: <> (END OF GITHUB README)
