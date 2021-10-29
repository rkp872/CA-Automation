const invalidDataFile = require("../../../../test-data/screen_level_validation_invalid_data.json");
const loginPage = require("../../../pages/mobile-ui/login.page");
describe("Login page", () => {
    it("Login", () => {
        console.log("###### DATA ########", invalidDataFile.Inbut_Basic_Details.firstName[1]);
        loginPage.setUsername(invalidDataFile.Inbut_Basic_Details.firstName[1]);
        loginPage.loginBtnClick();
    });
});