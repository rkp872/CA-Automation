class ProprietorPanAddressDetails {
    constructor() {
        this.panNumber = '#panNumber';
        this.panHolderName = '#panHolderName';
        this.panErrorMessage = '#panErrorMessage';
        this.documentType = '#documentType';
        this.drivingLicenceNumber = '#drivingLicenceNumber';
        this.dateOfBirth = '#dateOfBirth';
        this.documentExpiryDate = '#documentExpiryDate';
        this.uploadDrivingLicence = '#uploadDrivingLicence';
        this.voterIdNumber = '#voterIdNumber';
        this.uploadVoterId = '#uploadVoterId';
        this.passportNumber = '#passportNumber';
        this.uploadNprLetter = '#uploadNprLetter';
        this.drivingLicenceNumberErrorMessage = '#drivingLicenceNumberErrorMessage';
        this.dateOfBirthErrorMessage = '#dateOfBirthErrorMessage';
        this.documentExpiryDateErrorMessage = '#documentExpiryDateErrorMessage';
        this.uploadDrivingLicenceErrorMessage = '#uploadDrivingLicenceErrorMessage';
        this.voterIdNumberErrorMessage = '#voterIdNumberErrorMessage';
        this.uploadVoterIdErrorMessage = '#uploadVoterIdErrorMessage';
        this.passportNumberErrorMessage = '#passportNumberErrorMessage';
        this.uploadNprLetterErrorMessage = '#uploadNprLetterErrorMessage';
        this.proceedBtn = '#proceedBtn';
    }

    async setPanNumber(panNumber) {
        return await $(this.panNumber).setValue(panNumber);
    }
    async getPanNumber() {
        return await $(this.panNumber).getText();
    }
    async clearPanNumber() {
        return await $(this.panNumber).clearValue();
    }
    async setPanHolderName(panHolderName) {
        return await $(this.panHolderName).setValue(panHolderName);
    }
    async getPanHolderName() {
        return await $(this.panHolderName).getText();
    }
    async clearPanHolderName() {
        return await $(this.panHolderName).clearValue();
    }
    async getPanErrorMessage() {
        return await $(this.panErrorMessage).getText();
    }
    async getPanHolderNameErrorMessage() {
        return await $(this.panErrorMessage).getText();
    }

    async selectDocumentTypeAsAadharCard() {
        return await $(this.documentType).selectByVisibleText("Aadhar Card");
    }
    async selectDocumentTypeAsDrivingLicence() {
        return await $(this.documentType).selectByVisibleText("Driving License");
    }
    async setDrivingLicenceNumber(drivingLicenceNumber) {
        return await $(this.drivingLicenceNumber).setValue(drivingLicenceNumber);
    }
    async getDrivingLicenceNumber() {
        return await $(this.drivingLicenceNumber).getText();
    }
    async getDrivingLicenceNumberErrorMessage() {
        return await $(this.drivingLicenceNumberErrorMessage).getText();
    }
    async clearDrivingLicenceNumber() {
        return await $(this.drivingLicenceNumber).clearDrivingLicenceNumber();
    }
    async setDateOfBirth(dateOfBirth) {
        return await $(this.dateOfBirth).setValue(dateOfBirth);
    }
    async getDateOfBirth() {
        return await $(this.dateOfBirth).setValue();
    }
    async getDateOfBirthErrorMessage() {
        return await $(this.dateOfBirthErrorMessage).setValue();
    }
    async getDateOfBirth() {
        return await $(this.dateOfBirth).getText();
    }
    async clearDateOfBirth() {
        return await $(this.dateOfBirth).clearValue();
    }
    async setDocumentExpiryDate(documentExpiryDate) {
        return await $(this.documentExpiryDate).setValue(documentExpiryDate);
    }
    async getDocumentExpiryDate() {
        return await $(this.documentExpiryDate).getText();
    }
    async getDocumentExpiryDateErrorMessage() {
        return await $(this.documentExpiryDateErrorMessage).getText();
    }
    async clearDocumentExpiryDate() {
        return await $(this.documentExpiryDate).clearValue();
    }

    async drivingLicenceUpload(filePath) {
        return await $(this.uploadDrivingLicence).setValue(filePath);
    }

    async selectDocumentTypeAsVoterId() {
        return await $(this.documentType).selectByVisibleText("Voter ID");
    }
    async setVoterIdNumber(voterIdNumber) {
        return await $(this.voterIdNumber).setValue(voterIdNumber);
    }
    async getVoterIdNumber() {
        return await $(this.voterIdNumber).getText();
    }
    async getVoterIdNumberErrorMessage() {
        return await $(this.voterIdNumberErrorMessage).getText();
    }
    async clearVoterIdNumber() {
        return await $(this.voterIdNumber).clearValue();
    }

    async voteridCardUpload(filePath) {
        return await $(this.uploadVoterId).setValue(filePath);
    }

    async selectDocumentTypeAsPassport() {
        return await $(this.documentType).selectByVisibleText("Passport");
    }
    async setPassportNUmber(passportNumber) {
        return await $(this.passportNumber).setValue(passportNumber);
    }
    async clearPassportNUmber() {
        return await $(this.passportNumber).clearValue();
    }

    async passportUpload(filePath) {
        return await $(this.uploadPassport).setValue(filePath);
    }

    async selectDocumentTypeAsNprLetter() {
        return await $(this.documentType).selectByVisibleText("NPR Letter");
    }

    async nprLetterUpload(filePath) {
        return await $(this.uploadNPRLetter).setValue(filePath);
    }

    async isProceedBtnEnabled() {
        return await $(this.proceedBtn).isEnabled();
    }
    async proceedBtn() {
        return await $(this.proceedBtn).click();
    }
}
module.exports = new ProprietorPanAddressDetails();