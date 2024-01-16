export interface IFormError {
  errorText: string[];
  active: boolean;
}

export interface IFormErrors {
  [key: string]: IFormError;
}
