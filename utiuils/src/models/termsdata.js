export default class InvestorTermsData {
    
    constructor(build) {
        this.investorId = build.investorId;
        this.investorName = build.investorName;
        this.preferredReturn = build.preferredReturn;
        this.catchUpAllocation = build.catchUpAllocation; 
        this.catchUpTarget = build.catchUpTarget;
        this.finalSplit = build.finalSplit;
    }
    
    static get Builder() {
        
        class Builder {
            constructor() {}

            withInvestorId(investorId) {
                this.investorId = investorId;
                return this;
            }
            withInvestorName(investorName) {
                this.investorName = investorName;
                return this;
            }
            withPreferredReturn(preferredReturn) {
                this.preferredReturn = preferredReturn;
                return this;
            }
            withCatchUpAllocation(catchUpAllocation) {
                this.catchUpAllocation = catchUpAllocation;
                return this;
            }
            withCatchUpTarget(catchUpTarget) {
                this.catchUpTarget = catchUpTarget;
                return this;
            }
            withFinalSplit(finalSplit) {
                this.finalSplit = finalSplit;
                return this;
            }
            build() {
                return new InvestorTermsData(this);
            }
        }
        return Builder;
    }
}