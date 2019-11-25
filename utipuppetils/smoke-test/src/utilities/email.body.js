function emailBodyHandler(errorStack) {
  const confluenceLink = 'http://confluence/display/Waterfall/PROD+Smoke+Test';
  const nexaLink = 'http://nexa/Waterfall';
  if (errorStack['name'] === 'Error') {
    let body = `There seems to be an error when running Synthetic Tests in ${process.env.NODE_ENV}.\nKindly notify Waterfall-Dev team of the issue (waterfalldev@citco.com).\n\n\n${errorStack['name']} Message:   \n\n${errorStack}\n\n${errorStack.data.causedBy.stack}\n\nNexa Waterfall Dashboard - ${nexaLink}\n\nError Code Reference - ${confluenceLink}\n\n\n`;
    return body;
  } else if (errorStack['name'] === 'TimeoutError') {
    let body = `There seems to be an error when running Synthetic Tests in ${process.env.NODE_ENV}.\n\nProbably one of the web-pages did not load properly.\nKindly notify Waterfall-Dev team of the issue (waterfalldev@citco.com).\n\n\n${errorStack['name']} Message:   \n\n${errorStack}\n\n${errorStack.data.causedBy.stack}\n\nNexa Waterfall Dashboard - ${nexaLink}\n\nError Code Reference - ${confluenceLink}\n\n\n`;
    return body;
  } else {
    let body = `There seems to be an error when running Synthetic Tests in ${process.env.NODE_ENV}.\nKindly notify Waterfall-Dev team of the issue (waterfalldev@citco.com).\n\n\n${errorStack['name']} Message:   \n\n${errorStack}\n\n${errorStack.data.causedBy.stack}\n\nNexa Waterfall Dashboard - ${nexaLink}\n\nError Code Reference - ${confluenceLink}\n\n\n`;
    return body;
  }
}

module.exports = { emailBodyHandler };
