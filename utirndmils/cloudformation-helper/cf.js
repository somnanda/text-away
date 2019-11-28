var CloudFormationHelper = require('./CloudFormationHelper');

var args = process.argv.slice(2);

const ACTION = args[0];
const STACK_NAME = args[1]
const TEMPLATE = args[2]
const PARAMS = args[3];

let helper = new CloudFormationHelper(STACK_NAME, TEMPLATE, PARAMS);


helper.run(ACTION);
    
	