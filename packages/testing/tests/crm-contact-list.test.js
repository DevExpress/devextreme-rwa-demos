/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { Selector, ClientFunction } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { packages, screenModes, timeoutSecond } from '../config.js';

fixture`List`;

const setEmbeddedMode = ClientFunction((embed) => {
  if (!embed) return;
  window.document.getElementsByTagName('body')[0].classList.add('embedded');
});

packages.forEach((pkg) => {
  [false, true].forEach((embedded) => {
    screenModes.forEach((screenMode) => {
      test(`Crm contact list (${pkg.name}, embed=${embedded}, ${screenMode[0]})`, async (t) => {
        const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

        await t.resizeWindow(...screenMode);

        await t.navigateTo(`http://localhost:${pkg.port}`);

        await setEmbeddedMode(embedded);

        await t.wait(timeoutSecond);

        await t.expect(Selector('body.dx-device-generic').count).eql(1);
        await t.expect(Selector('tr.dx-data-row').count).eql(embedded ? 18 : 16);
        await takeScreenshot(`crm-contact-list-${pkg.name}-embed=${embedded}-${screenMode[0]}`, 'body');

        await t.click('tr.dx-data-row:first-child');
        await t.expect(Selector('.contact-name').withText('Amelia Harper').count).eql(1);
        await takeScreenshot(`crm-contact-list-form-${pkg.name}-embed=${embedded}-${screenMode[0]}`, Selector('.data-wrapper'));

        await t
          .expect(compareResults.isValid())
          .ok(compareResults.errorMessages());
      });
    });
  });
});
