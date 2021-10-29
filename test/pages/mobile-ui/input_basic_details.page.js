class InputBasicDetailsPage {
    constructor() {
        this.entityType = '#entityType';
        this.firstName = '#firstName';
        this.firstNameErrorMessage = '#firstNameErrorMessage';
        this.middleName = '#middleName';
        this.middleNameErrorMessage = '#middleNameErrorMessage';
        this.lastName = '#lastName';
        this.lastNameErrorMessage = '#lastNameErrorMessage';
        this.mobileNumber = '#mobileNumber';
        this.mobileNumberErrorMessage = '#mobileNumberErrorMessage';
        this.pan = '#pan';
        this.panErrorMessage = '#panErrorMessage';
        this.submitBtn = '#submitBtn';
    }

    //Entity type methods
    async getEntityTypeTextValue() {
        return await $(this.entityType).setText();
    }
    async isEntityTypeClickable() {
        return await $(this.entityType).isClickable();
    }

    async setFirstName(firstName) {
        return await $(this.firstName).setValue(firstName);
    }

    async getFirstNameTextValue() {
        return await $(this.firstName).getText();
    }

    async clearFirstName() {
        return await $(this.firstName).clearValue();
    }

    async getFirstNameErrorMessage() {
        return await $(this.firstNameErrorMessage).getText();
    }

    async getMiddleNameTextValue() {
        return await $(this.middleName).getText();
    }

    async setMiddleName(middleName) {
        return await $(this.middleName).setValue(middleName);
    }

    async clearMiddleName() {
        return await $(this.middleName).clearValue();
    }
    async getMiddleNameErrorMessage() {
        return await $(this.middleNameErrorMessage).getText();
    }

    async getLastNameTextValue() {
        return await $(this.lastName).getText();
    }

    async setLastName(lastName) {
        return await $(this.lastName).setValue(lastName);
    }

    async clearLastName() {
        return await $(this.lastName).clearValue();
    }
    async getLastNameErrorMessage() {
        return await $(this.lastNameErrorMessage).getText();
    }

    async getMobileNumberTextValue() {
        return await $(this.mobileNumber).getText();
    }

    async setMobileNumber(mobileNumber) {
        return await $(this.mobileNumber).setValue(mobileNumber);
    }

    async clearMobileNumber() {
        return await $(this.mobileNumber).clearValue();
    }
    async getMobileNumberErrorMessage() {
        return await $(this.mobileNumberErrorMessage).getText();
    }

    async getPanTextValue() {
        return await $(this.pan).getText();
    }

    async setPan(pan) {
        return await $(this.pan).setValue(pan);
    }

    async clearPan(pan) {
        return await $(this.pan).clearValue();
    }
    async getPanErrorMessage() {
        return await $(this.panErrorMessage).getText();
    }
    async getSubmitBtnTextValue() {
        return await $(this.submitBtn).getText();
    }

    async isSubmitBtnEnabled() {
        return await $(this.submitBtn).isEnabled();
    }

    async submitBtnClick() {
        return await $(this.submitBtn).click();
    }
}
module.exports = new InputBasicDetailsPage();