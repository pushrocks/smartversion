import { expect, tap } from '@pushrocks/tapbundle';
import * as smartversion from '../ts/index';

tap.test('should create a valid SmartVersion', async () => {
  const localSmartVersion = new smartversion.SmartVersion('3.2.1');
  expect(localSmartVersion).to.be.instanceof(smartversion.SmartVersion);
  // tslint:disable-next-line:no-unused-expression
  expect(localSmartVersion.greaterThanString('4.0.0')).to.be.false;
  // tslint:disable-next-line:no-unused-expression
  expect(localSmartVersion.greaterThanString('3.0.0')).to.be.true;
  // tslint:disable-next-line:no-unused-expression
  expect(localSmartVersion.lessThanString('v4.0.0')).to.be.true;
  // tslint:disable-next-line:no-unused-expression
  expect(localSmartVersion.lessThanString('v3.0.0')).to.be.false;
});

tap.test('should create a valid SmartVersion', async () => {
  const localSmartVersion = smartversion.SmartVersion.fromFuzzyString('4');
  expect(localSmartVersion).to.be.instanceof(smartversion.SmartVersion);
  console.log(localSmartVersion.versionString);
});

tap.test('should create a valid SmartVersion', async () => {
  const localSmartVersion = smartversion.SmartVersion.fromFuzzyString('4.x');
  const bestMatch = localSmartVersion.getBestMatch(['4.0.1', '4.7.5', '4.3.0']);
  console.log(bestMatch);
  expect(bestMatch).to.equal('4.7.5');
});

tap.start();
