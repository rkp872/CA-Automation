class LoginPage {
    constructor() {
        this.username = '#username';
        this.password = '#password';
        this.loginBtn = '#loginBtn';
    }

    async setUsername(username) {
        return await $(this.username).setValue(username);
    }

    async clearUsername() {
        return await $(this.username).clearValue();
    }

    async setPassword(password) {
        return await $(this.password).setValue(password);
    }

    async clearPassword() {
        return await $(this.password).clearValue();
    }

    async isLoginBtnEnabled() {
        return await $(this.loginBtn).isEnabled();
    }

    async loginBtnClick() {
        return await $(this.loginBtn).click();
    }
}

module.exports = new LoginPage();