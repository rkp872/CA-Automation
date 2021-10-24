const dialog = require("../../pages/mobile-ui/dialog.page");

var expect = require('chai').expect;

describe('Dialog', () => {
    it('Verify that the text entry dialog username & password fields are editable', async () => {
        await dialog.appBtnClick();
        await dialog.alertDialogBtnClick();
        await dialog.textEntryDialogBtnClick();

        await expect(await dialog.userNameEntry("Test User")).to.be.equal("Test User");
        await dialog.userNameClear();
        await expect(await dialog.userNameEntry("Actual User")).to.be.equal("Actual User");

        await dialog.passwordEntry("Test Password");
        await dialog.passwordClear();
        await dialog.passwordEntry("Actual Password");

        await dialog.okBtnClick();
    });

    it('Verify that the app adjust when orientation is switched', async () => {
        console.log("##############################  ORIENTATION : #################################  ", await driver.getOrientation());

        await driver.setOrientation("LANDSCAPE");
        await driver.saveScreenshot('./test-execution_report/mobile-ui/screenshot/landscape.png');

        await driver.setOrientation("PORTRAIT");
        await driver.saveScreenshot("./test-execution_report/mobile-ui/screenshot/portrait.png");
    });

});
