import { expect, tap } from 'tapbundle'
import * as smartversion from '../ts/index'

let localSmartVersion: smartversion.SmartVersion
tap.test('should create a valid SmartVersion', async () => {
  localSmartVersion = new smartversion.SmartVersion('3.2.1')
  expect(localSmartVersion).to.be.instanceof(smartversion.SmartVersion)
})

tap.test('should correctly classify greater and less than', async () => {
  // tslint:disable-next-line:no-unused-expression
  expect(localSmartVersion.greaterThanString('4.0.0')).to.be.false
  // tslint:disable-next-line:no-unused-expression
  expect(localSmartVersion.greaterThanString('3.0.0')).to.be.true
  // tslint:disable-next-line:no-unused-expression
  expect(localSmartVersion.lessThanString('v4.0.0')).to.be.true
  // tslint:disable-next-line:no-unused-expression
  expect(localSmartVersion.lessThanString('v3.0.0')).to.be.false

})

tap.start()
