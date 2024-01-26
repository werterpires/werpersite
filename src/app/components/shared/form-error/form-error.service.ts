import { Injectable } from '@angular/core';
import { IFormErrors } from './types';
import { Validates } from '../utils/validates';
import { CreateSignerUserDto } from '../../auth/logon/types';

@Injectable({
  providedIn: 'root',
})
export class FormErrorService {
  constructor() {}
  validateNames(errorForm: IFormErrors, name: string, field: string) {
    errorForm[field].active = !Validates.validateNames(name.trim());
  }

  validateCompanyName(errorForm: IFormErrors, name: string, field: string) {
    errorForm[field].active = !Validates.validateComanyNames(name.trim());
  }

  validateCpf(errorForm: IFormErrors, cpf: string, field: string) {
    errorForm[field].active = !Validates.validateCpfData(cpf.trim());
  }

  validateCellPhone(errorForm: IFormErrors, cellphone: string, field: string) {
    errorForm[field].active = !Validates.validatePhoneNumber(cellphone.trim());
  }

  validateEmail(errorForm: IFormErrors, email: string, field: string) {
    errorForm[field].active = !Validates.validateEmailData(email.trim());
  }

  validateIsEqual(
    errorForm: IFormErrors,
    string1: string,
    string2: string,
    field: string
  ) {
    errorForm[field].active = !Validates.validateIsEqual(
      string1.trim(),
      string2.trim()
    );
  }

  validatePassword(errorForm: IFormErrors, password: string, field: string) {
    errorForm[field].active = !Validates.validatePasswordData(password.trim());
  }

  validatePersonType(
    errorForm: IFormErrors,
    personType: string,
    field: string
  ) {
    errorForm[field].active = !Validates.validatePersonType(personType.trim());
  }

  validateMinMax(
    errorForm: IFormErrors,
    min: number,
    max: number,
    value: string,
    field: string
  ) {
    errorForm[field].active = !Validates.validateMinMax(min, max, value.trim());
  }
}
