class EntityIdentityAndAddressProofPage {
    constructor() {
        this.identityProofDocumentType = '#identityProofDocumentType';
        this.addressProofDocumentType = '#addressProofDocumentType';
        this.documentIdNumber = '#documentIdNumber';
        this.uploadGstDocument = '#uploadGstDocument';
        this.uploadItrDocument = '#uploadItrDocument';
        this.uploadAcknowledgementReceipt = '#uploadAcknowledgementReceipt';
        this.utilityBillType = '#utilityBillType';
        this.dateOfBirth = '#dateOfBirth';
        this.uploadRentAgreementDocument = '#uploadRentAgreementDocument';
        this.uploadUtilityBillDocument = '#uploadUtilityBillDocument';
        this.uploadPropertyTaxBillDocument = '#uploadPropertyTaxBillDocument';
        this.uploadBankStatement = '#uploadBankStatement';
        this.uploadGasConnectionBookCopy = '#uploadGasConnectionBookCopy';
        this.communicationAddressSameAsBusinessAddress = '#communicationAddressSameAsBusinessAddress';
        this.communicationAddressNotSameAsBusinessAddress = '#communicationAddressNotSameAsBusinessAddress';

        this.communicationAddDocumentType = '#communicationAddDocumentType';
        this.drivingLicenceNumber = '#drivingLicenceNumber';
        this.dateOfBirth = '#dateOfBirth';
        this.documentExpiryDate = '#documentExpiryDate';
        this.uploadDrivingLicence = '#uploadDrivingLicence';
        this.voterIdNumber = '#voterIdNumber';
        this.uploadVoterId = '#uploadVoterId';
        this.passportNumber = '#passportNumber';
        this.uploadNprLetter = '#uploadNprLetter';
    }

    async selectIdentityProofDocument() {
        return await $(this.identityProofDocumentType).selectByIndex(1);
    }
    async selectIdentityProofDocument() {
        return await $(this.identityProofDocumentType).selectByIndex(2);
    }
    async selectIdentityProofDocument() {
        return await $(this.identityProofDocumentType).selectByIndex(3);
    }
    async selectIdentityProofDocument() {
        return await $(this.identityProofDocumentType).selectByIndex(4);
    }
    async selectIdentityProofDocument() {
        return await $(this.identityProofDocumentType).selectByIndex(5);
    }
    async setDocumentIdNumber(documentIdNumber) {
        return await $(this.documentIdNumber).setValue(documentIdNumber);
    }
    async clearDocumentIdNumber() {
        return await $(this.documentIdNumber).clearValue();
    }

    async gstDocumentUpload(filePath) {
        return await $(this.uploadGstDocument).setValue(filePath);
    }

    async itrDocumentUpload(filePath) {
        return await $(this.itrDocumentUpload).setValue(filePath);
    }

    async acknowledgementReceiptUpload(filePath) {
        return await $(this.uploadAcknowledgementReceipt).setValue(filePath);
    }

    async selectAddressProofDocumentType(index) {
        return await $(this.addressProofDocumentType).selectByIndex(index);
    }
    async setDateOfBirth(dateOfBirth) {
        return await $(this.dateOfBirth).setValue(dateOfBirth);
    }
    async clearDateOfBirth() {
        return await $(this.dateOfBirth).clearValue();
    }

    async rentAgreementDocumentUpload(filePath) {
        return await $(this.uploadRentAgreementDocument).setValue(filePath);
    }

    async utilityBillUpload(filePath) {
        return await $(this.uploadUtilityBillDocument).setValue(filePath);
    }

    async propertyTaxBillUpload(filePath) {
        return await $(this.uploadPropertyTaxBillDocument).setValue(filePath);
    }

    async bankStatementUpload(filePath) {
        return await $(this.uploadBankStatement).setValue(filePath);
    }

    async gasConnectionBookCopyUpload(filePath) {
        return await $(this.uploadGasConnectionBookCopy).setValue(filePath);
    }

    async isCommunicationAddressSameAsBusinessAddress() {
        return await $(this.communicationAddressSameAsBusinessAddress).isSelected();
    }
    async selectCommunicationAddressSameAsBusinessAddress() {
        return await $(this.communicationAddressSameAsBusinessAddress).click();
    }
    async isCommunicationAddressNotSameAsBusinessAddress() {
        return await $(this.communicationAddressNotSameAsBusinessAddress).isSelected();
    }
    async selectCommunicationAddressNotSameAsBusinessAddress() {
        return await $(this.communicationAddressNotSameAsBusinessAddress).click();
    }

    async selectCommunicationAddDocumentTypeAsAadharCard() {
        return await $(this.communicationAddDocumentType).selectByVisibleText("Aadhar Card");
    }
    async selectDocumentTypeAsDrivingLicence() {
        return await $(this.communicationAddDocumentType).selectByVisibleText("Driving License");
    }
    async setDrivingLicenceNumber(drivingLicenceNumber) {
        return await $(this.drivingLicenceNumber).setValue(drivingLicenceNumber);
    }
    async clearDrivingLicenceNumber() {
        return await $(this.drivingLicenceNumber).clearDrivingLicenceNumber();
    }
    async setDateOfBirth(dateOfBirth) {
        return await $(this.dateOfBirth).setValue(dateOfBirth);
    }
    async clearDateOfBirth() {
        return await $(this.dateOfBirth).clearValue();
    }
    async setDocumentExpiryDate(documentExpiryDate) {
        return await $(this.documentExpiryDate).setDocumentExpiryDate(documentExpiryDate);
    }
    async clearDocumentExpiryDate() {
        return await $(this.documentExpiryDate).clearValue();
    }

    async drivingLicenceUpload(filePath) {
        return await $(this.uploadDrivingLicence).setValue(filePath);
    }

    async selectCommunicationAddDocumentTypeAsVoterId() {
        return await $(this.communicationAddDocumentType).selectByVisibleText("Voter ID");
    }
    async setVoterIdNumber(voterIdNumber) {
        return await $(this.voterIdNumber).setValue(voterIdNumber);
    }
    async clearVoterIdNumber() {
        return await $(this.voterIdNumber).clearValue();
    }

    async voteridCardUpload(filePath) {
        return await $(this.uploadVoterId).setValue(filePath);
    }
    async selectCommunicationAddDocumentTypeAsPassport() {
        return await $(this.communicationAddDocumentType).selectByVisibleText("Passport");
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

    async selectCommunicationAddDocumentTypeAsNprLetter() {
        return await $(this.communicationAddDocumentType).selectByVisibleText("NPR Letter");
    }

    async nprLetterUpload(filePath) {
        return await $(this.uploadNPRLetter).setValue(filePath);
    }
}
module.exports = new EntityIdentityAndAddressProofPage();