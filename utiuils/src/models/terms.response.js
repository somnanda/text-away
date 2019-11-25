function termsTemplateResultDetails() {
    return [ { 'Legal Entity': '',
    'Investor Name': '',
    'Investor Id': '',
    'Investor Type': '',
    'Total Committed Capital': '',
    'Pref. Return Target % to LP': '1',
    'Pref. Return Alloc. % to CIP': '',
    'Catch-Up Alloc. % to CIP': '1',
    'Catch-Up Target % to CIP': '1',
    'Final Split Alloc. % to CIP': '1' } ];
}

function termsDownloadDetails() {
    return [ { 'Investor Name': 'Investor 2',
    'Investor Id': '47104',
    'Preferred Return (% to LP)': '0.07',
    'Preferred Allocation (% to CIP)': '0',
    'Catch-Up Allocation (% to CIP)': '0.7',
    'Catch-Up Target (% to CIP)': '0.15',
    'Final Split (% to CIP)': '0.25'},
  { 'Investor Name': 'Investor 1',
    'Investor Id': '60963',
    'Preferred Return (% to LP)': '0.08',
    'Preferred Allocation (% to CIP)': '0',
    'Catch-Up Allocation (% to CIP)': '0.8',
    'Catch-Up Target (% to CIP)': '0.2',
    'Final Split (% to CIP)': '0.25'} ];
  }
  
export default { termsTemplateResultDetails, termsDownloadDetails };
