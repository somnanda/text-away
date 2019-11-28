const cmd = require('cmd-promise')
const fs = require('fs');


function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

class CloudFormationHelper {

  constructor(stackName, template, params) {

    process.env.AWS_REGION = 'eu-west-1';

    let paramObject = params;
    if (typeof params === 'string') {
      console.log('================' + params);
      //In this case params is not an object but a path to a file containing the params.           
      paramObject = JSON.parse(fs.readFileSync(params, 'utf8'));
    }

    this.DELETE_COMMAND = `
        aws cloudformation delete-stack
        --region ${process.env.AWS_REGION}  
        --role-arn arn:aws:iam::911962207156:role/A5-DevOps-App-Stack 
        --stack-name ${stackName}        
        `;
    this.DELETE_WAIT_COMMAND = `
      aws cloudformation wait stack-delete-complete 
      --stack-name ${stackName} 
      --region ${process.env.AWS_REGION}  
      `;

    this.CREATE_COMMAND = `
        aws cloudformation create-stack
        --region ${process.env.AWS_REGION}  
        --role-arn arn:aws:iam::911962207156:role/A5-DevOps-App-Stack 
        --stack-name ${stackName}
		    --capabilities CAPABILITY_NAMED_IAM
        --template-body file://${template} 
        ${this.parseParameters(paramObject)}
        `;
    this.CREATE_WAIT_COMMAND = `
      aws cloudformation wait stack-create-complete 
      --stack-name ${stackName} 
      --region ${process.env.AWS_REGION}  
      `;

    this.OUTPUT_COMMAND = `
      aws cloudformation describe-stacks 
      --stack-name ${stackName} 
      --region ${process.env.AWS_REGION} 
      --query Stacks[0].Outputs[*]
    `

    this.UPDATE_COMMAND = `
        aws cloudformation update-stack
        --region ${process.env.AWS_REGION} 
        --role-arn arn:aws:iam::911962207156:role/A5-DevOps-App-Stack 
        --stack-name ${stackName}
		--capabilities CAPABILITY_NAMED_IAM
        --template-body file://${template} 
        ${this.parseParameters(paramObject)}
        `;
    this.UPDATE_WAIT_COMMAND = `
        aws cloudformation wait stack-update-complete 
        --stack-name ${stackName} 
        --region ${process.env.AWS_REGION}  
        `
  }

  parseParameters(params) {
    if (params) {
      let paramsList = [];
      for (let [key, value] of entries(params)) {
        if (Array.isArray(value)) {
          paramsList.push(`\t\nParameterKey=${key},ParameterValue=\\"${value.join(',')}\\"`);
        } else {
          paramsList.push(`\t\nParameterKey=${key},ParameterValue=${value}`);
        }
      }
      return '--parameters ' + paramsList.join('');
    } else {
      return '';
    }
  }

  removeFormatting(formattedCommand) {
    return formattedCommand.split("\n").join(" ").split("\r").join('').split('\t').join('');
  }

  async run(commandType, callback) {

    let validActions = { UPDATE: true, DELETE: true, CREATE: true };
    if (!validActions[commandType.toUpperCase()]) {
      throw new Error("The first paramter is an invalid action.")
    }

    let command = this[`${commandType}_COMMAND`];
    let waitCommand = this[`${commandType}_WAIT_COMMAND`];
    let outputCommand = this.OUTPUT_COMMAND;

    try {
      console.log(command);
      let out = await cmd(this.removeFormatting(command));
      console.log(out.stdout);

      console.log(waitCommand)
      out = await cmd(this.removeFormatting(waitCommand));
      console.log(out.stdout);

      if (commandType === 'CREATE' || commandType === 'UPDATE') {
        console.log(outputCommand)
        out = await cmd(this.removeFormatting(outputCommand));
        console.log(out.stdout);
      }
    } catch (e) {
      console.log('error =', e)
    }

  }
}



module.exports = CloudFormationHelper;
