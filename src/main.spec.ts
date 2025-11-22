/**
 * This is a sample test suite.
 * Replace this with your implementation.
 */

import Path from 'path'
import SuperTest from 'supertest'
import main from './main.js'
import { spawn } from 'child_process'

describe('Example Test', function () {
  it('should GET / with 200 OK', function () {
    return SuperTest(main(0))
      .get('/')
      .expect(response => {
        expect(response.status).toEqual(200)
        expect(response.text).toEqual('Olá, Hola, Hello!')
      })
  })

  it('should init without errors', async function () {
    process.env.PORT = '0'

    const dir = Path.resolve(__dirname)
    const index = Path.resolve(dir, 'main.ts')
    const tsNodeExe = process.platform === 'win32' ? 'ts-node' : './node_modules/.bin/ts-node'
    const spawnOptions = process.platform === 'win32' ? { shell: true } : {}
    const proc = spawn(tsNodeExe, [index], spawnOptions)

    expect(proc.pid).toBeDefined()

    process.kill(proc.pid || 0, 'SIGTERM')
  })
})
