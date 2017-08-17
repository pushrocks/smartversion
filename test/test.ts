import { expect, tap } from 'tapbundle'
import * as smartversion from '../ts/index'

let localSmartVersion: smartversion.SmartVersion
tap.test('should create a valid SmartVersion', async () => {
  localSmartVersion = new smartversion.SmartVersion('3.2.1')
  expect(localSmartVersion).to.be.instanceof(smartversion.SmartVersion)
})

tap.start()
