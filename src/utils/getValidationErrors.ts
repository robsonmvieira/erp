import {ValidationError} from 'yup';

interface Errors {
  [key: string]: string;
}
export default function getValidationErrors(err: ValidationError): Errors{
  const validationErrors: Errors = {}
  
  err.inner.forEach(err => {
    validationErrors[err.path] = err.message
  })
  return validationErrors
}