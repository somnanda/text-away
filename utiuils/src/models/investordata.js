export default class InvestorData {
    
    constructor(build) {
        this.investorId = build.investorId;
        this.investorName = build.investorName; 
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
            build() {
                return new InvestorData(this);
            }
        }
        return Builder;
    }
}