#!/usr/bin/env node

import Path, { dirname } from 'path'

import FsExt from 'fs-extra'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const paramOr = (map, arg, def) => map.get(arg) || def
const makePath = (...p) => Path.join(...p)
const ignoreContent =
  (...values) =>
  source =>
    !values.some(x => source === x)

const FilesToIgnore = [
  '.git',
  '.idea',
  '.vscode',
  '.husky/_',
  '.yarn',
  '.yarn/cache',
  '.yarn/build-state.yml',
  '.yarn/install-state.gz',
  '.yarnrc.yml',
  '.versionrc.js',
  'cmd',
  'coverage',
  'dist',
  'docs',
  'node_modules',
  'scripts',
  'templates',
  'tools',
  '.codeclimate.yml',
  '.npmignore',
  '.env',
  'CHANGELOG.md',
  'README.md',
  'package.json',
  'package-lock.json',
  'yarn.lock',
  'tsconfig.build.tsbuildinfo',
]

const DepsToIgnore = ['fs-extra', '@types/fs-extra', 'standard-release']

const Templates = [
  { file: 'ci.yml', copyTo: '.github/workflows/ci.yml' },
  { file: '.gitignore.husky', copyTo: '.husky/.gitignore' },
  { file: '.gitignore.root', copyTo: '.gitignore' },
  { file: '.dockerignore.root', copyTo: '.dockerignore' },
]

const PkgFieldsToKeep = ['type', 'main', 'types', 'scripts', 'dependencies', 'devDependencies']

const bidoAscii = `
  ____  _     _       
 |  _ \\(_)   | |      
 | |_) |_  __| | ___  
 |  _ <| |/ _\` |/ _ \\ 
 | |_) | | (_| | (_) |
 |____/|_|\\__,_|\\___/ 
`

function main() {
  console.log('\x1b[36m%s\x1b[0m', bidoAscii)
  console.log('\x1b[33m%s\x1b[0m', 'NodeJS Package Toolkit - Bootstrapping New Project\n')

  const argv = process.argv.slice(2)
  const args = new Map()

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]

    if (/^--.+=/.test(arg)) {
      const match = arg.match(/^--([^=]+)=([\s\S]*)$/)
      const key = match[1]
      const value = match[2]

      args.set(key, value)
    } else if (/^--.+/.test(arg)) {
      const key = arg.match(/^--(.+)/)[1]
      const next = argv[i + 1]

      args.set(key, next)
    }
  }

  const source = makePath(__dirname, '..')
  const dest = paramOr(args, 'destination', process.cwd()).trim()
  const app = paramOr(args, 'app', 'my-app').trim()
  const destination = makePath(dest, app)

  console.log('\x1b[33m%s\x1b[0m', '📋 Summary:')
  console.log('   Destination: \x1b[32m%s\x1b[0m', destination)
  console.log('   App Name: \x1b[32m%s\x1b[0m', app)
  console.log('')

  console.log('\x1b[34m%s\x1b[0m', '📂 Copying Project Files ...')

  FsExt.copySync(source, destination, { filter: ignoreContent(...FilesToIgnore.map(x => makePath(source, x))) })

  console.log('\x1b[34m%s\x1b[0m', '📄 Copying Templates ...')

  for (const x of Templates) {
    FsExt.copySync(makePath(source, 'templates', x.file), makePath(destination, x.copyTo))
  }

  console.log('\x1b[34m%s\x1b[0m', '📦 Preparing package.json ...')

  const pkg = FsExt.readJsonSync(makePath(source, 'package.json'))
  const newPkg = {
    name: app,
  }

  for (const field of PkgFieldsToKeep) {
    if (typeof pkg[field] !== 'undefined') {
      newPkg[field] = pkg[field]
    }
  }

  for (const dep of DepsToIgnore) {
    if (newPkg.dependencies[dep]) {
      delete newPkg.dependencies[dep]
    }

    if (newPkg.devDependencies[dep]) {
      delete newPkg.devDependencies[dep]
    }
  }

  delete newPkg.scripts.release

  FsExt.writeJsonSync(makePath(destination, 'package.json'), newPkg, { spaces: 2 })

  console.log('\n\x1b[32m%s\x1b[0m', '✅ Done! Your project is ready.')
  console.log('\x1b[36m%s\x1b[0m', '\nNext steps:')
  console.log('   cd ' + app)
  console.log('   npm install')
  console.log('   npm run start:dev\n')

  return Promise.resolve()
}

await main()
