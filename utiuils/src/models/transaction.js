export default class Transaction {
    
    constructor(build) {
        this.investorId = build.investorId;
        this.investorName = build.investorName;
        this.gLDate = build.gLDate;
        this.effectiveDate = build.effectiveDate;
        this.eventName = build.eventName;
        this.amount = build.amount;
        this.transactionId = build.transactionId;
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
            withEventName(eventName) {
                this.eventName = eventName;
                return this;
            }
            withAmount(amount) {
                this.amount = amount;
                return this;
            }
            withGLDate(gLDate) {
                this.gLDate = gLDate;
                return this;
            }
            withEffectiveDate(effectiveDate) {
                this.effectiveDate = effectiveDate;
                return this;
            }
            withTransactionId(transactionId) {
                this.transactionId = transactionId;
                return this;
            }
            build() {
                return new Transaction(this);
            }
        }
        return Builder;
    }
}
