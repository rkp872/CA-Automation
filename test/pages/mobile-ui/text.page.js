class TextData {
    appBtn = '//android.widget.TextView[@content-desc="App"]';
    activityBtn = '//android.widget.TextView[@content-desc="Activity"]';
    helloWorldBtn = '//android.widget.TextView[@content-desc="Hello World"]';
    labelText = '//android.widget.TextView[@content-desc="Hello, World!"]';

    async appBtnClick() {
        return await $(this.appBtn).click();
    }
    async activityBtnClick() {
        return await $(this.activityBtn).click();
    }
    async helloWorldBtnClick() {
        return await $(this.helloWorldBtn).click();
    }
    async getLabelText() {
        return await $(this.labelText).getText();
    }
}
module.exports = new TextData();