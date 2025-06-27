function getErrorDetails(error: any) {
  const { details } = error;
  const extractedErrors = details.map((err: any) => ({
    label: err.context.label,
    message: err.message
  }));
  return extractedErrors;
}

export default {
  getErrorDetails,
}; 