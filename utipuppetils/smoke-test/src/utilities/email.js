const aws = require('aws-sdk')
aws.config.update({ sslEnabled: false, region: 'eu-west-1' });
const sns = new aws.SNS({ apiVersion: '2010-03-31' })
const { emailBodyHandler } = require('./email.body');


function errorEmailHandler(error) {
    let emailBody = emailBodyHandler(error);
    // Publish parameters
    let email_params = {
        Subject: process.env.ENV + ' - Synthetic Test Alert',
        Message: emailBody,
        TopicArn: process.env.SNS_TOPIC_EMAIL_ARN
    };

    var publishTextPromise = sns.publish(email_params).promise();

    publishTextPromise.then(
        function (data) {
            console.log(`Message ${email_params.Message} send sent to the topic ${email_params.TopicArn}`);
            console.log("MessageID is " + data.MessageId);
        }).catch(function (err) {
            console.error(err, err.stack);
        });
}

function successEmailHandler() {
    // Publish parameters
    let email_params = {
        Subject: 'Synthetic Test Success Alert Email',
        Message: 'Synthetic Test Success Email Content',
        TopicArn: process.env.SNS_TOPIC_EMAIL_ARN
    };

    var publishTextPromise = sns.publish(email_params).promise();

    publishTextPromise.then(
        function (data) {
            console.log(`Message ${email_params.Message} send sent to the topic ${email_params.TopicArn}`);
            console.log("MessageID is " + data.MessageId);
        }).catch(function (err) {
            console.error(err, err.stack);
        });
}

module.exports = { errorEmailHandler, successEmailHandler };