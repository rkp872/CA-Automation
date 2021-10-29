var expect = require('chai').expect;
const proprietorPanAddressDetailsPage = require("../../../pages/mobile-ui/proprietor_pan_address_details.page");
const invalidTestData = require("../../../../test-data/screen_level_validation_invalid_data.json");
const validTestData = require("../../../../test-data/screen_level_validation_valid_data.json");
const errorMessages = require("../../../../test-data/error_messages.json");
describe("Proprietor Pan and Address Details Screen level validation", () => {
    it("PAN Number", () => {
        expect(proprietorPanAddressDetailsPage.getPanNumber()).to.be.not.null;
        for (number in invalidTestData.Input_Basic_Details.panNumber.length()) {
            await expect(await proprietorPanAddressDetailsPage.getPanErrorMessage(await proprietorPanAddressDetailsPage.setPanNumber(number))).to.be.equal(errorMessages.Input_Basic_Details.panNumberErrorMessage);
            await proprietorPanAddressDetailsPage.clearPanNumber();
        }
    });
    it("PAN Holder Name", () => {
        expect(proprietorPanAddressDetailsPage.getPanNumber()).to.be.not.null;
        for (number in invalidTestData.Input_Basic_Details.panNumber.length()) {
            await expect(await proprietorPanAddressDetailsPage.getPanErrorMessage(await proprietorPanAddressDetailsPage.setPanNumber(number))).to.be.equal(errorMessages.Input_Basic_Details.panNumberErrorMessage);
            await proprietorPanAddressDetailsPage.clearPanNumber();
        }
    });
    it("Document Type dropdown", () => {

    });
    it("Driving Licence Number", () => {
        for (number in invalidTestData.Proprietor_Pan_Address_Details.drivingLicenceNumber.length()) {
            await expect(await proprietorPanAddressDetailsPage.getDrivingLicenceNumberErrorMessage(await proprietorPanAddressDetailsPage.setDrivingLicenceNumber(number))).to.be.equal(errorMessages.Proprietor_Pan_Address_Details.drivingLicenceErrorMessage);
            await proprietorPanAddressDetailsPage.clearDrivingLicenceNumber();
        }
    });
    it("Date of Birth in Driving Licence", () => {
        for (date in invalidTestData.Proprietor_Pan_Address_Details.dateOfBirth.length()) {
            await expect(await proprietorPanAddressDetailsPage.getDateOfBirthErrorMessage(await proprietorPanAddressDetailsPage.setDateOfBirth(date))).to.be.equal(errorMessages.Proprietor_Pan_Address_Details.dateOfBirthErrorMessage);
            await proprietorPanAddressDetailsPage.clearDateOfBirth();
        }
    });
    it("Driving Licence Expiry Date", () => {
        for (date in invalidTestData.Proprietor_Pan_Address_Details.dateOfExpiry.length()) {
            await expect(await proprietorPanAddressDetailsPage.getDocumentExpiryDateErrorMessage(proprietorPanAddressDetailsPage.setDocumentExpiryDate(date))).to.be.equal(errorMessages.Proprietor_Pan_Address_Details.dateOfExpiryErrorMessage);
            await proprietorPanAddressDetailsPage.clearDocumentExpiryDate();
        }
    });
    it("Driving licence Upload", () => {

    });
});