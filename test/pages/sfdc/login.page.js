class LoginPage {

    //LOCATORS
    usernameTestBox = '#username';
    passwordTextBox = '#password';
    loginBtn = '#Login';
    nameLabel = '/html/body/div[4]/div[1]/section/div[1]/div[1]/one-appnav/div/div/div/span/span';

    async setUsername(value) {
        await $(this.usernameTestBox).setValue(value);
    }
    async setPassword(value) {
        await $(this.passwordTextBox).setValue(value);
    }
    async loginBtnClick() {
        await $(this.loginBtn).click();
    }
    async getNameLabel() {
        return await $(this.nameLabel).getText();
    }
}
module.exports = new LoginPage();