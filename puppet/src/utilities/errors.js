class DomainError extends Error {
  constructor(message) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
}

class LoginError extends DomainError {
  constructor(message) {
    super('E001');
    this.data = {
      errorCode: 'E001',
      errorType: 'Unable to Login',
      instructions: 'http://confluence/display/Waterfall/PROD+Smoke+Test',
      causedBy: { name: 'LoginError', stack: message.stack },
    };
  }
}

class ClientSelectionError extends DomainError {
  constructor(message) {
    super(`E002`);
    this.data = {
      errorCode: 'E002',
      errorType: 'Unable to select a Client',
      instructions: 'http://confluence/display/Waterfall/PROD+Smoke+Test',
      causedBy: { name: 'ClientSelectionError', stack: message.stack },
    };
  }
}

class ApplicationError extends DomainError {
  constructor(message) {
    super('E003');
    this.data = {
      errorCode: 'E003',
      errorType: 'Waterfall Application Error',
      instructions: 'http://confluence/display/Waterfall/PROD+Smoke+Test',
      causedBy: { name: 'ApplicationError', stack: message.stack },
    };
  }
}

function customError(errorStack) {
  let errorMessage = '';
  if (JSON.stringify(errorStack).includes('E001')) {
    errorMessage = 'LoginError';
  } else if (JSON.stringify(errorStack).includes('E002')) {
    errorMessage = 'ClientSelectionError';
  } else {
    errorMessage = 'ApplicationError';
    return JSON.parse(
      JSON.stringify({
        errorCode: 'E003',
        errorType: 'Waterfall Application Error',
        instructions: 'http://confluence/display/Waterfall/PROD+Smoke+Test',
        causedBy: {
          message: errorMessage,
          stack: errorStack.stack.split('\n'),
        },
      })
    );
  }

  return JSON.parse(
    JSON.stringify({
      errorCode: errorStack.data.errorCode,
      errorType: errorStack.data.errorType,
      instructions: errorStack.data.instructions,
      causedBy: {
        message: errorMessage,
        stack: errorStack.data.causedBy.stack.split('\n'),
      },
    })
  );
}

function nexaError(errorStack) {
  let errorMessage = 'NexaPostError';
  return JSON.parse(
    JSON.stringify({
      errorCode: 'E004',
      errorType: 'Nexa POST Error',
      instructions: 'http://confluence/display/Waterfall/PROD+Smoke+Test',
      causedBy: { message: errorMessage, stack: errorStack.stack.split('\n') },
    })
  );
}

module.exports = {
  ApplicationError,
  LoginError,
  ClientSelectionError,
  customError,
  nexaError,
};
