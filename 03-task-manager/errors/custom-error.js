class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode; // Default status code
  }
} 

const createCustomError = (message, statusCode) => {
    return new CustomAPIError(message, statusCode);
};

module.exports = { CustomAPIError, createCustomError };