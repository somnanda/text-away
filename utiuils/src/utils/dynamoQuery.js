

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set the region 
AWS.config.update({region: 'eu-west-1a'});

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const output = [];
var params = {
  ExpressionAttributeValues: {
    ':accountId' : {S: '19f96a1e-8090-11e8-adc0-fa7ae01bbebc'},
    ':investorId' : {S: '<investorId>'},
   },
 KeyConditionExpression: 'accountId= :accountId',
 TableName: 'DEV_cwf_investor'
};


ddb.query(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      data.Items.forEach(function(element, index, array) {
      const response = {
      investorId: element.investorId.S,
      investorName: element.investorName.S
      }
      output.push(response);
      });
    }
  });


  excelsheetparseddata = [];
  excelsheetparseddata  = output;
  