var expect = require('chai').expect;
const invalidTestData = require("../../../../test-data/screen_level_validation_invalid_data.json");
const validTestData = require("../../../../test-data/screen_level_validation_valid_data.json");
const errorMessages = require("../../../../test-data/error_messages.json");
const inputBasicDetailsPage = require("../../../pages/mobile-ui/input_basic_details.page");

describe("Input basic detail screen level validation ", () => {
    it("Entity type", async () => {
        expect(await inputBasicDetailsPage.getEntityTypeTextValue()).to.be.equal("Sole Proprietor");
        expect(await inputBasicDetailsPage.isEntityTypeClickable).to.be.false;
    });
    it("First name", async () => {
        expect(await inputBasicDetailsPage.getFirstNameTextValue()).to.be.equal("First Name");
        for (let name in invalidTestData.Input_Basic_Details.firstName.length()) {
            await expect(await inputBasicDetailsPage.getFirstNameErrorMessage(await inputBasicDetailsPage.setFirstName(name))).to.be.equal(errorMessages.Input_Basic_Details.firstNameErrorMessage);
            await inputBasicDetailsPage.clearFirstName();
        }
    });
    it("Middle name", async () => {
        expect(await inputBasicDetailsPage.getMiddleNameTextValue()).to.be.equal("Middle Name (Optional)");
        for (let name in invalidTestData.Inbut_Basic_Details.middleName.length()) {
            await expect(await inputBasicDetailsPage.getMiddleNameErrorMessage(await inputBasicDetailsPage.setMiddleName(name))).to.be.equal(errorMessages.Input_Basic_Details.middleNameErrorMessage);
            await inputBasicDetailsPage.clearMiddleName();
        }
    });
    it("Last name", async () => {
        expect(await inputBasicDetailsPage.getLastNameTextValue()).to.be.equal("Last Name");
        for (let name in invalidTestData.Inbut_Basic_Details.lastName.length()) {
            await expect(await inputBasicDetailsPage.getLastNameErrorMessage(await inputBasicDetailsPage.setLastName(name))).to.be.equal(errorMessages.Input_Basic_Details.lastNameErrorMessage);
            await inputBasicDetailsPage.clearLastName();
        }
    });
    it("Mobile number", async () => {
        for (mobileNumber in invalidTestData.Input_Basic_Details.mobileNumber.length()) {
            await expect(await inputBasicDetailsPage.getMobileNumberErrorMessage(await inputBasicDetailsPage.setMobileNumber(mobileNumber))).to.be.equal(errorMessages.Input_Basic_Details.mobileNumberErrorMessage);
            await inputBasicDetailsPage.clearMobileNumber();
        }
    });
    it("PAN", async () => {
        expect(await inputBasicDetailsPage.getPanTextValue()).to.be.equal("PAN");
        for (number in invalidTestData.Input_Basic_Details.panNumber.length()) {
            await expect(await inputBasicDetailsPage.getPanErrorMessage(await inputBasicDetailsPage.setPan(number))).to.be.equal(errorMessages.Input_Basic_Details.panNumberErrorMessage);
            await inputBasicDetailsPage.clearPan();
        }
    });
    it("Submit Button", async () => {
        expect(await inputBasicDetailsPage.getSubmitBtnTextValue()).to.be.equal("Submit");
        expect(await inputBasicDetailsPage.isSubmitBtnEnabled()).to.be.false;
    });

    it("Submit valid data", async () => {
        await inputBasicDetailsPage.setFirstName(validTestData.Input_Basic_Details.firstName);
        await inputBasicDetailsPage.setMiddleName(validTestData.Input_Basic_Details.middleName);
        await inputBasicDetailsPage.setLastName(validTestData.Input_Basic_Details.lastName);
        await inputBasicDetailsPage.setMobileNumber(validTestData.Input_Basic_Details.mobileNumber);
        await inputBasicDetailsPage.setPan(validTestData.Input_Basic_Details.panNumber);
        await inputBasicDetailsPage.submitBtnClick();
    });

});