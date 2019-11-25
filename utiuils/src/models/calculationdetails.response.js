function cdCalculationDetails() {
    return [{
        'Worksheet Name': 'ROC - Investments',
        'Column Name': 'Amount',
        'Calculation Details': 'Aggregated \'Amount\' from Realized Investment Contribution transactions based on Investor ID and Deal ID'
      },
      {
        'Worksheet Name': 'ROC - Write-Offs',
        'Column Name': 'Amount',
        'Calculation Details': 'Aggregated \'Amount\' from Write-Off transactions based on Investor ID and Deal ID'
      },
      {
        'Worksheet Name': 'Allocable Fees + Expenses',
        'Column Name': 'AFE Numerator',
        'Calculation Details': 'Aggregated \'Amount\' from AFE Numerator transactions based on Investor ID'
      },
      {
        'Worksheet Name': 'Allocable Fees + Expenses',
        'Column Name': 'AFE Denominator',
        'Calculation Details': 'Aggregated \'Amount\' from AFE Denominator transactions based on Investor ID'
      },
      {
        'Worksheet Name': 'Allocable Fees + Expenses',
        'Column Name': 'AFE Ratio',
        'Calculation Details': 'AFE Ratio = AFE Numerator / AFE Denominator'
      },
      {
        'Worksheet Name': 'Allocable Fees + Expenses',
        'Column Name': 'Total Calls for Expenses',
        'Calculation Details': 'Aggregated \'Amount\' from Expense Contribution transactions based on Investor ID'
      },
      {
        'Worksheet Name': 'Allocable Fees + Expenses',
        'Column Name': 'AFE Target',
        'Calculation Details': 'AFE Target = AFE Ratio * Total Calls for Expenses'
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Capital Activity',
        'Calculation Details': 'Capital Activity = Netted Transaction Amounts, aggregated by Waterfall Bucket, Investor ID, Deal ID, and Effective Date'
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Contra Contribution FIFO Allocation',
        'Calculation Details': 'Allocation of negative Investment Contributions vs. positive Investment Contributions based on FIFO logic'
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Netted Value',
        'Calculation Details': 'Netted Value\' = \'Amount\' + \'Contra Contribution FIFO Allocation\' if Waterfall Bucket is a Contribution, else 0'
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Allocation - Investments',
        'Calculation Details': 'Allocation of Realized Investment Contributions vs. Investment Contributions, capped at \'Netted Value\' based on FIFO logic'
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Allocation - Writedowns',
        'Calculation Details': 'Allocation of Write-Offs vs. Investment Contributions, capped at (\'Netted Value\' - \'Allocation - Investments\'), using FIFO logic'
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Allocation - AFE',
        'Calculation Details': 'Allocation of AFE Target Value vs. Expense Contributions using FIFO logic'
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Distributions',
        'Calculation Details': 'Realized Investment Contribution amounts that were allocated to Investment Contributions via FIFO.\n\n Equal to \'Amount\' column for Realized Gains / Losses transactions.'
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Preferred Return Basis',
        'Calculation Details': 'Preferred Return Basis = \'Allocation - Investments\' + \'Allocation - Writedowns\' + \'Allocation - AFE\' + \'Distributions\''
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Day Interval',
        'Calculation Details': 'If Calc Method = Custom, then \'Day Interval\' = \'Event Date\' - \'Effective Date\' + \'Day Interval Adjustment\'\n\nIf Calc Method = Simple or IRR, then \'Day Interval\' = \'Event Date\' - \'Effective Date\'\n\nIf Calc Method = Multiplier, then \'Day Interval\' is blank'
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Compounding Factor or Preferred Return Factor',
        'Calculation Details': 'If Calc Method = Simple Interest, then \'Pref. Return Factor\' = \'Preferred Return % to LP\' * \'Day Interval\' / \'Day Count Method\'\n\nIf Calc Method = IRR, then \'Compounding Factor\' = [(1 + \'Preferred Return % to LP\') ^ (\'Day Interval\' / 365) - 1]\n\nIf Calc Method = Custom, then \'Compounding Factor\' = [(1 + \'Preferred Return % to LP\' / \'Compounding Frequency\') ^ (\'Day Interval\' / \'Day Count Method\' * \'Compounding Frequency\') - 1]\n\nIf Calc Method = Muliplier, then \'Pref. Return Factor\' = \'Preferred Return X to LP\''
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Preferred Return',
        'Calculation Details': 'Preferred Return = \'Capital Activity\' * \'Compounding Factor\' or \'Preferred Return Factor\''
      },
      {
        'Worksheet Name': 'CIP Catch-Up',
        'Column Name': 'CIP Catch-Up Allocation Ratio',
        'Calculation Details': 'CIP Catch-Up Allocation Ratio = (\'CIP Catch-Up Allocation %\' * \'CIP Catch-Up Target %\') / (\'CIP Catch-Up Allocation %\' - \'CIP Catch-Up Target %\')'
      },
      {
        'Worksheet Name': 'CIP Catch-Up',
        'Column Name': 'CIP Catch-Up Allocation Target',
        'Calculation Details': 'CIP Catch-Up Allocation Target = { (sum all prior LP Pref and Catch Up Targets) - [ (sum of all prior CIP Pref and Catch Up Targets) / \'CIP Catch-Up Target\') * (1 - \'CIP Catch-Up Target\') ] } * \'CIP Catch-Up Allocation Ratio\''
      },
      {
        'Worksheet Name': 'CIP Catch-Up',
        'Column Name': 'LP Catch-Up Allocation Target',
        'Calculation Details': 'LP Catch-Up Allocation Target = \'CIP Catch-Up Allocation Target\' * (1 - \'CIP Catch-Up Allocation %\') / \'CIP Catch-Up Allocation %\''
      }]
  }
  
  function udCalculationDetails() {
    return [{
        'Worksheet Name': 'ROC - Investments',
        'Column Name': 'Amount',
        'Calculation Details': 'Aggregated \'Amount\' from Investment Contribution transactions based on Investor ID and Deal ID'
      },
      {
        'Worksheet Name': 'ROC - Write-Offs',
        'Column Name': 'Amount',
        'Calculation Details': 'No \'ROC - Write-Offs\' tier for an Unrealized Distribution'
      },
      {
        'Worksheet Name': 'Allocable Fees + Expenses',
        'Column Name': 'AFE Ratio',
        'Calculation Details': 'AFE Ratio = 100% for an Unrealized Distribution'
      },
      {
        'Worksheet Name': 'Allocable Fees + Expenses',
        'Column Name': 'Total Calls for Expenses',
        'Calculation Details': 'Aggregated \'Amount\' from Expense Contribution transactions based on Investor ID'
      },
      {
        'Worksheet Name': 'Allocable Fees + Expenses',
        'Column Name': 'AFE Target',
        'Calculation Details': 'AFE Target = AFE Ratio * Total Calls for Expenses'
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Capital Activity',
        'Calculation Details': 'Capital Activity = Netted Transaction Amounts, aggregated by Waterfall Bucket, Investor ID, Deal ID, and Effective Date'
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Preferred Return Basis',
        'Calculation Details': 'Preferred Return Basis = \'Amount\' column'
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Day Interval',
        'Calculation Details': 'If Calc Method = Custom, then \'Day Interval\' = \'Event Date\' - \'Effective Date\' + \'Day Interval Adjustment\'\n\nIf Calc Method = Simple or IRR, then \'Day Interval\' = \'Event Date\' - \'Effective Date\'\n\nIf Calc Method = Multiplier, then \'Day Interval\' is blank'
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Compounding Factor or Preferred Return Factor',
        'Calculation Details': 'If Calc Method = Simple Interest, then \'Pref. Return Factor\' = \'Preferred Return % to LP\' * \'Day Interval\' / \'Day Count Method\'\n\nIf Calc Method = IRR, then \'Compounding Factor\' = [(1 + \'Preferred Return % to LP\') ^ (\'Day Interval\' / 365) - 1]\n\nIf Calc Method = Custom, then \'Compounding Factor\' = [(1 + \'Preferred Return % to LP\' / \'Compounding Frequency\') ^ (\'Day Interval\' / \'Day Count Method\' * \'Compounding Frequency\') - 1]\n\nIf Calc Method = Muliplier, then \'Pref. Return Factor\' = \'Preferred Return X to LP\''
      },
      {
        'Worksheet Name': 'Preferred Return',
        'Column Name': 'Preferred Return',
        'Calculation Details': 'Preferred Return = \'Capital Activity\' * \'Compounding Factor\' or \'Preferred Return Factor\''
      },
      {
        'Worksheet Name': 'CIP Catch-Up',
        'Column Name': 'CIP Catch-Up Allocation Ratio',
        'Calculation Details': 'CIP Catch-Up Allocation Ratio = (\'CIP Catch-Up Allocation %\' * \'CIP Catch-Up Target %\') / (\'CIP Catch-Up Allocation %\' - \'CIP Catch-Up Target %\')'
      },
      {
        'Worksheet Name': 'CIP Catch-Up',
        'Column Name': 'CIP Catch-Up Allocation Target',
        'Calculation Details': 'CIP Catch-Up Allocation Target = { (sum all prior LP Pref and Catch Up Targets) - [ (sum of all prior CIP Pref and Catch Up Targets) / \'CIP Catch-Up Target\') * (1 - \'CIP Catch-Up Target\') ] } * \'CIP Catch-Up Allocation Ratio\''
      },
      {
        'Worksheet Name': 'CIP Catch-Up',
        'Column Name': 'LP Catch-Up Allocation Target',
        'Calculation Details': 'LP Catch-Up Allocation Target = \'CIP Catch-Up Allocation Target\' * (1 - \'CIP Catch-Up Allocation %\') / \'CIP Catch-Up Allocation %\''
      }]
  }

  function cdCalculationDetailsTotalReturn() {
    return [{
      'Worksheet Name': 'Preferred Return',
      'Column Name': 'Capital Activity',
      'Calculation Details': 'Capital Activity = Netted Transaction Amounts, aggregated by Waterfall Bucket, Investor ID, and Effective Date'
    },
    {
      'Worksheet Name': 'Preferred Return',
      'Column Name': 'Day Interval',
      'Calculation Details': 'If Calc Method = Custom, then \'Day Interval\' = \'Event Date\' - \'Effective Date\' + \'Day Interval Adjustment\'\n\nIf Calc Method = Simple or IRR, then \'Day Interval\' = \'Event Date\' - \'Effective Date\'\n\nIf Calc Method = Multiplier, then \'Day Interval\' is blank'
    },
    {
      'Worksheet Name': 'Preferred Return',
      'Column Name': 'Compounding Factor or Preferred Return Factor',
      'Calculation Details': 'If Calc Method = Simple Interest, then \'Pref. Return Factor\' = \'Preferred Return % to LP\' * \'Day Interval\' / \'Day Count Method\'\n\nIf Calc Method = IRR, then \'Compounding Factor\' = [(1 + \'Preferred Return % to LP\') ^ (\'Day Interval\' / 365) - 1]\n\nIf Calc Method = Custom, then \'Compounding Factor\' = [(1 + \'Preferred Return % to LP\' / \'Compounding Frequency\') ^ (\'Day Interval\' / \'Day Count Method\' * \'Compounding Frequency\') - 1]\n\nIf Calc Method = Muliplier, then \'Pref. Return Factor\' = \'Preferred Return X to LP\'\n\n'
    },
    {
      'Worksheet Name': 'Preferred Return',
      'Column Name': 'Preferred Return',
      'Calculation Details': 'Preferred Return = \'Capital Activity\' * \'Compounding Factor\' or \'Preferred Return Factor\''
    },
    {
      'Worksheet Name': 'CIP Catch-Up',
      'Column Name': 'CIP Catch-Up Allocation Ratio',
      'Calculation Details': 'CIP Catch-Up Allocation Ratio = (\'CIP Catch-Up Allocation %\' * \'CIP Catch-Up Target %\') / (\'CIP Catch-Up Allocation %\' - \'CIP Catch-Up Target %\')'
    },
    {
      'Worksheet Name': 'CIP Catch-Up',
      'Column Name': 'CIP Catch-Up Allocation Target',
      'Calculation Details': 'CIP Catch-Up Allocation Target = { (sum all prior LP Pref and Catch Up Targets) - [ (sum of all prior CIP Pref and Catch Up Targets) / \'CIP Catch-Up Target\') * (1 - \'CIP Catch-Up Target\') ] } * \'CIP Catch-Up Allocation Ratio\''
    },
    {
      'Worksheet Name': 'CIP Catch-Up',
      'Column Name': 'LP Catch-Up Allocation Target',
      'Calculation Details': 'LP Catch-Up Allocation Target = \'CIP Catch-Up Allocation Target\' * (1 - \'CIP Catch-Up Allocation %\') / \'CIP Catch-Up Allocation %\''
    }]
  }
  
  function udCalculationDetailsTotalReturn() {
    return [{
      'Worksheet Name': 'Preferred Return',
      'Column Name': 'Capital Activity',
      'Calculation Details': 'Capital Activity = Netted Transaction Amounts, aggregated by Waterfall Bucket, Investor ID, and Effective Date'
    },
    {
      'Worksheet Name': 'Preferred Return',
      'Column Name': 'Day Interval',
      'Calculation Details': 'If Calc Method = Custom, then \'Day Interval\' = \'Event Date\' - \'Effective Date\' + \'Day Interval Adjustment\'\n\nIf Calc Method = Simple or IRR, then \'Day Interval\' = \'Event Date\' - \'Effective Date\'\n\nIf Calc Method = Multiplier, then \'Day Interval\' is blank'
    },
    {
      'Worksheet Name': 'Preferred Return',
      'Column Name': 'Compounding Factor or Preferred Return Factor',
      'Calculation Details': 'If Calc Method = Simple Interest, then \'Pref. Return Factor\' = \'Preferred Return % to LP\' * \'Day Interval\' / \'Day Count Method\'\n\nIf Calc Method = IRR, then \'Compounding Factor\' = [(1 + \'Preferred Return % to LP\') ^ (\'Day Interval\' / 365) - 1]\n\nIf Calc Method = Custom, then \'Compounding Factor\' = [(1 + \'Preferred Return % to LP\' / \'Compounding Frequency\') ^ (\'Day Interval\' / \'Day Count Method\' * \'Compounding Frequency\') - 1]\n\nIf Calc Method = Muliplier, then \'Pref. Return Factor\' = \'Preferred Return X to LP\'\n\n'
    },
    {
      'Worksheet Name': 'Preferred Return',
      'Column Name': 'Preferred Return',
      'Calculation Details': 'Preferred Return = \'Capital Activity\' * \'Compounding Factor\' or \'Preferred Return Factor\''
    },
    {
      'Worksheet Name': 'CIP Catch-Up',
      'Column Name': 'CIP Catch-Up Allocation Ratio',
      'Calculation Details': 'CIP Catch-Up Allocation Ratio = (\'CIP Catch-Up Allocation %\' * \'CIP Catch-Up Target %\') / (\'CIP Catch-Up Allocation %\' - \'CIP Catch-Up Target %\')'
    },
    {
      'Worksheet Name': 'CIP Catch-Up',
      'Column Name': 'CIP Catch-Up Allocation Target',
      'Calculation Details': 'CIP Catch-Up Allocation Target = { (sum all prior LP Pref and Catch Up Targets) - [ (sum of all prior CIP Pref and Catch Up Targets) / \'CIP Catch-Up Target\') * (1 - \'CIP Catch-Up Target\') ] } * \'CIP Catch-Up Allocation Ratio\''
    },
    {
      'Worksheet Name': 'CIP Catch-Up',
      'Column Name': 'LP Catch-Up Allocation Target',
      'Calculation Details': 'LP Catch-Up Allocation Target = \'CIP Catch-Up Allocation Target\' * (1 - \'CIP Catch-Up Allocation %\') / \'CIP Catch-Up Allocation %\''
    }]
  }
  
  
  export default { cdCalculationDetails, udCalculationDetails, cdCalculationDetailsTotalReturn, udCalculationDetailsTotalReturn};
  