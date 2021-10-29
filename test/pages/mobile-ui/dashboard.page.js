class DashboardPage {
    constructor() {
        this.newJourneyBtn = '#newJourneyBtn';
    }

    async isNewJourneyBtnEnabled() {
        return await $(this.newJourneyBtn).isEnabled();
    }

    async newJourneyBtnClick() {
        return await $(this.newJourneyBtn).click();
    }
}
module.exports = new DashboardPage();