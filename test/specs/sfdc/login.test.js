const loginPage = require("../../pages/sfdc/login.page");
const expect = require("chai").expect;
require("dotenv").config();
describe("Sample Test Suite", () => {
    it("Sample Test Case", async () => {
        await driver.url("/");
        await driver.maximizeWindow();
        await loginPage.setUsername(process.env.SF_USERNAME);
        await loginPage.setPassword(process.env.SF_PASSWORD);
        await loginPage.loginBtnClick();
        await expect(await loginPage.getNameLabel()).to.be.equal("IDFC CA Operations");
    });
});