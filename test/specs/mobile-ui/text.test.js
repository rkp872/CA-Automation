var expect = require('chai').expect;
const textPage = require("../../pages/mobile-ui/text.page");

describe("Read data ", () => {
    it("Read data of text label", async () => {
        await textPage.appBtnClick();
        await textPage.activityBtnClick();
        await textPage.helloWorldBtnClick();
        await expect(await textPage.getLabelText()).to.be.equal("Hello, World!");
    });
});