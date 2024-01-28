import { Injectable } from '@angular/core';
import { IFormErrors } from './types';
import { Validates } from '../utils/validates';
import { CreateSignerUserDto } from '../../auth/logon/types';

@Injectable({
  providedIn: 'root',
})
export class FormErrorService {
  constructor() {}
  validateNames(
    errorForm: IFormErrors,
    name: string,
    field: string,
    idx: number
  ) {
    errorForm[field].active[idx] = !Validates.validateNames(name.trim());
  }

  validateCompanyName(
    errorForm: IFormErrors,
    name: string,
    field: string,
    idx: number
  ) {
    errorForm[field].active[idx] = !Validates.validateComanyNames(name.trim());
  }

  validateCpf(errorForm: IFormErrors, cpf: string, field: string, idx: number) {
    errorForm[field].active[idx] = !Validates.validateCpfData(cpf.trim());
  }

  validateCellPhone(
    errorForm: IFormErrors,
    cellphone: string,
    field: string,
    idx: number
  ) {
    errorForm[field].active[idx] = !Validates.validatePhoneNumber(
      cellphone.trim()
    );
  }

  validateEmail(
    errorForm: IFormErrors,
    email: string,
    field: string,
    idx: number
  ) {
    errorForm[field].active[idx] = !Validates.validateEmailData(email.trim());
  }

  validateIsEqual(
    errorForm: IFormErrors,
    string1: string,
    string2: string,
    field: string,
    idx: number
  ) {
    errorForm[field].active[idx] = !Validates.validateIsEqual(
      string1.trim(),
      string2.trim()
    );
  }

  validatePassword(
    errorForm: IFormErrors,
    password: string,
    field: string,
    idx: number
  ) {
    errorForm[field].active[idx] = !Validates.validatePasswordData(
      password.trim()
    );
  }

  validatePersonType(
    errorForm: IFormErrors,
    personType: string,
    field: string,
    idx: number
  ) {
    errorForm[field].active[idx] = !Validates.validatePersonType(
      personType.trim()
    );
  }

  validateMinMax(
    errorForm: IFormErrors,
    min: number,
    max: number,
    value: string,
    field: string,
    idx: number
  ) {
    errorForm[field].active[idx] = !Validates.validateMinMax(
      min,
      max,
      value.trim()
    );
  }

  validateIsBoolean(
    errorForm: IFormErrors,
    value: any,
    field: string,
    idx: number
  ) {
    errorForm[field].active[idx] = !Validates.validateIsBoolean(value);
  }

  validateIsNumber(
    errorForm: IFormErrors,
    value: any,
    field: string,
    idx: number
  ) {
    errorForm[field].active[idx] = !Validates.validateIsNumber(value);
  }
}
