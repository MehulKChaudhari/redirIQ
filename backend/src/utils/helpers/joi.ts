import { ValidationError } from 'joi';

interface ErrorDetail {
  label: string;
  message: string;
}

function getErrorDetails(error: ValidationError): ErrorDetail[] {
  const { details } = error;
  return details.map(err => ({
    label: err.context?.label || '',
    message: err.message,
  }));
}

export default {
  getErrorDetails,
};
