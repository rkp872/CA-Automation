class DigilockerNonDigilockerSelectionPage {
    constructor() {
        this.proceedViaDigilockerBtn = '#proceedViaDigilockerBtn';
        this.proceedWithoutDigilockerBtn = '#proceedWithoutDigilockerBtn';
    }

    async isProceedViaDigilockerBtnEnabled() {
        return await $(this.proceedViaDigilockerBtn).isEnabled();
    }
    async proceedViaDigilockerBtnClick() {
        return await $(this.proceedViaDigilockerBtn).click();
    }

    async isProceedWithoutDigilockerBtnEnabled() {
        return await $(this.proceedWithoutDigilockerBtn).isEnabled();
    }
    async proceedWithoutDigilockerBtnClick() {
        return await $(this.proceedWithoutDigilockerBtn).click();
    }
}
module.exports = new DigilockerNonDigilockerSelectionPage();