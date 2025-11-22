#!/usr/bin/env node

/**
 * This is a sample HTTP server.
 * Replace this with your implementation.
 */

import 'dotenv/config'

import { IncomingMessage, ServerResponse, createServer } from 'http'

import { Config } from './config.js'
import Path from 'path'

const nodePath = Path.resolve(process.argv[1])
const modulePath = Path.resolve(__dirname)
const isCLI = nodePath === modulePath

export const myPackage = (taco = ''): string => `${taco} from my package`

export default function main(port: number = Config.port) {
  const requestListener = (request: IncomingMessage, response: ServerResponse) => {
    response.setHeader('content-type', 'text/plain;charset=utf8')
    response.writeHead(200, 'OK')
    response.end('Olá, Hola, Hello!')
  }

  const server = createServer(requestListener)

  if (isCLI) {
    server.listen(port)
    // eslint-disable-next-line no-console
    console.log(`Listening on port: ${port}`)
  }

  return server
}

if (isCLI) {
  main()
}
