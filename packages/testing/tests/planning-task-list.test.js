/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { Selector, ClientFunction } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { packages, screenModes, timeoutSecond } from '../config.js';

fixture`Planning List`;

const setEmbeddedMode = ClientFunction((embed) => {
  if (!embed) return;
  window.document.getElementsByTagName('body')[0].classList.add('embedded');
});

packages.forEach((pkg) => {
  [false, true].forEach((embedded) => {
    screenModes.forEach((screenMode) => {
      test(`Planning task list (${pkg.name}, embed=${embedded}, ${screenMode[0]})`, async (t) => {
        const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

        await t.resizeWindow(...screenMode);

        await t.navigateTo(`http://localhost:${pkg.port}/#/planning-task-list`);

        await setEmbeddedMode(embedded);

        await t.wait(timeoutSecond);

        await t.expect(Selector('body.dx-device-generic').count).eql(1);
        await takeScreenshot(`planning-task-grid-${pkg.name}-embed=${embedded}-${screenMode[0]}`, 'body');
        await t.click(Selector('.content .dx-toolbar .dx-tabs .dx-item').nth(1));
        await takeScreenshot(`planning-task-kanban-${pkg.name}-embed=${embedded}-${screenMode[0]}`, 'body');

        await t
          .expect(compareResults.isValid())
          .ok(compareResults.errorMessages());
      });
    });
  });
});
