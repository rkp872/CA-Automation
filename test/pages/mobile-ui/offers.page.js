class OfferPage {
    constructor() {
        this.learnMoreBtn1 = "#learnMoreBtn1";
        this.learnMoreBtn2 = "#learnMoreBtn2";
        this.learnMoreBtn3 = "#learnMoreBtn3";
        this.startBtn = "#startBtn";
    }
    async isLearnMoreBtn1Enabled() {
        return await $(this.learnMoreBtn3).isEnabled();
    }

    async learnMoreBtn1Click() {
        return await $(this.learnMoreBtn1).click();
    }

    async isLearnMoreBtn2Enabled() {
        return await $(this.learnMoreBtn3).isEnabled();
    }

    async learnMoreBtn2Click() {
        return await $(this.learnMoreBtn2).click();
    }

    async isLearnMoreBtn3Enabled() {
        return await $(this.learnMoreBtn3).isEnabled();
    }

    async learnMoreBtn3Click() {
        return await $(this.learnMoreBtn3).click();
    }

    async isStartBtnEnabled() {
        return await $(this.startBtn).isEnabled();
    }

    async startBtnClick() {
        return await $(this.startBtn).click();
    }
}
module.exports = new OfferPage();