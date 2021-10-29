class FiveStepJourneyPage {
    constructor() {
        this.kycEntityAndProprietorDetails = '#kycEntityAndProprietorDetails';
        this.productSelection = '#productSelection';
        this.declarationAndReview = '#declarationAndReview';
        this.accountAndOffers = '#accountAndOffers';
        this.internalProcessAndSubmission = '#internalProcessAndSubmission';
    }

    async isKycEntityAndProprietorDetailsEnabled() {
        return await $(this.kycEntityAndProprietorDetails).isEnabled();
    }
    async kycEntityAndProprietorDetailsClick() {
        return await $(this.kycEntityAndProprietorDetails).click();
    }

    async isProductSelectionEnabled() {
        return await $(this.productSelection).isEnabled();
    }
    async productSelectionClick() {
        return await $(this.productSelection).click();
    }

    async isDeclarationAndReviewEnabled() {
        return await $(this.declarationAndReview).isEnabled();
    }
    async declarationAndReviewClick() {
        return await $(this.declarationAndReview).click();
    }

    async isAccountAndOffersEnabled() {
        return await $(this.accountAndOffers).isEnabled();
    }
    async accountAndOffersClick() {
        return await $(this.accountAndOffers).click();
    }

    async internalProcessAndSubmissionEnabled() {
        return await $(this.internalProcessAndSubmission).isEnabled();
    }
    async internalProcessAndSubmissionClick() {
        return await $(this.internalProcessAndSubmission).click();
    }

}
module.exports = new FiveStepJourneyPage();