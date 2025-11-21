<h1 align="center">Bido Node.js Package Toolkit</h1>

<p align="center">
    <i>Starter Project for a Node.js application using <strong>TypeScript</strong> with all boring stuff already configured.</i>
</p>

<p align="center">
  <a href="https://github.com/topazdom/bido-nodejs-package-toolkit/actions/workflows/ci.yml">
    <img src="https://github.com/topazdom/bido-nodejs-package-toolkit/actions/workflows/ci.yml/badge.svg" alt="GitHub Action Status" />
  </a>
  <a href="https://www.npmjs.com/package/bido-nodejs-package-toolkit">
    <img src="https://img.shields.io/npm/v/bido-nodejs-package-toolkit.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen" alt="npm" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="Prettier"/>
  </a>
  <a href="https://conventionalcommits.org">
    <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits"/>
  </a>
</p>

## Overview

Starter project for **Node.js** applications using **TypeScript** with test, lint, code formatter already configured.
Check the [tooling](#tooling) section for more details.
The preferable way to use this boilerplate is using `npx` command. You can use `npm init` too.
Use the following commands to bootstrap a new project:

### NPX

```
npx bido-node-package --no --app=your-app
```

### NPM Init

```
npm init nodejs-ts -- --app=your-app
```

Without parameters, the project will be created on a folder **my-app** in the same directory where you executed the
command.
All parameters available:

```
--destination=<FOLDER_DESTINATION> Defaults to the current directory
--app=<APP_NAME> Defaults to my-app
```

The final folder will the parameter `destination`, if provided, concatenated with the parameter `app`.

## ESM

The project template now uses **ESM** by default.

## Docker

Minimalist docker image generation.
Check this [Dockerfile](build/docker/Dockerfile).

## Local Dev Environment

Run `make up` to spin up a local environment with **Docker Compose**.
Check this [docker-compose.yml](deployments/dev/docker-compose.yml) for more details.

## Tooling

- ESM
- TypeScript
- Jest
- EsLint
- Husky
- Commit Lint
- Lint Staged
- Prettier
- Nodemon
- Docker | Docker Compose

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftopazdom%2Fnodejs-boilerplate.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Ftopazdom%2Fnodejs-boilerplate?ref=badge_shield)

This project is [MIT Licensed](LICENSE).

> **Remove everything from here and above**

---

<h1 align="center">My Package Name</h1>

<p align="center">
   <> <i>My Awesome Node.js Module built with <strong>TypeScript</strong> and effective tooling foundations.</i> <>
</p>

<p align="center">
  <a href="https://github.com/topazdom/bido-nodejs-package-toolkit/actions/workflows/ci.yml">
    <img src="https://github.com/topazdom/bido-nodejs-package-toolkit/actions/workflows/ci.yml/badge.svg" alt="GitHub Action Status" />
  </a>
  <a href="https://github.com/topazdom/bido-nodejs-package-toolkit/issues">
    <img src="https://img.shields.io/github/issues/topazdom/bido-nodejs-package-toolkit" alt="Issues" />
  </a>
  <a href="https://www.npmtrends.com/bido-nodejs-package-toolkit">
    <img src="https://img.shields.io/npm/dt/bido-nodejs-package-toolkit" alt="Downloads" />
  </a>
  <a href="https://www.npmjs.com/package/bido-nodejs-package-toolkit">
    <img src="https://img.shields.io/npm/v/bido-nodejs-package-toolkit.svg?logo=npm&logoColor=fff&label=NPM&color=limegreen" alt="npm" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="Prettier"/>
  </a>
  <a href="https://conventionalcommits.org">
    <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits"/>
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="Semantic Release" />
  </a>
</p>

> My awesome module

## Install

```bash
npm install my-package-name
```

## Usage

```ts
import { myPackage } from 'my-package-name';

myPackage('hello');
//=> 'hello from my package'
```

## API

### myPackage(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftopazdom%2Fnodejs-boilerplate.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Ftopazdom%2Fnodejs-boilerplate?ref=badge_shield)

This project is [MIT Licensed](LICENSE).
