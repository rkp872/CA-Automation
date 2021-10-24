class Dialog {

    //LOCATORS
    appBtn = "~App";
    alertDialogBtn = '//android.widget.TextView[@content-desc="Alert Dialogs"]';
    textEntryDialogBtn = '//android.widget.Button[@content-desc="Text Entry dialog"]';
    userNameField = '//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]';
    passwordField = '//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]';
    okBtn = '//android.widget.Button[@resource-id="android:id/button1"]';

    async appBtnClick() {
        return await $(this.appBtn).click();
    }

    async alertDialogBtnClick() {
        return await $(this.alertDialogBtn).click();
    }

    async textEntryDialogBtnClick() {
        return await $(this.textEntryDialogBtn).click();
    }

    async userNameEntry(userName) {
        await $(this.userNameField).addValue(userName);
        return await $(this.userNameField).getText();
    }

    async userNameClear() {
        return await $(this.userNameField).clearValue();
    }

    async passwordEntry(password) {
        await $(this.passwordField).addValue(password);
        return await $(this.passwordField).getText();
    }

    async passwordClear() {
        return await $(this.passwordField).clearValue();
    }

    async okBtnClick() {
        return await $(this.okBtn).click();
    }




}
module.exports = new Dialog();