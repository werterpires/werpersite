import { Injectable } from '@angular/core';
import { IFormErrors } from '../../shared/form-error/types';
import { Validates } from '../../shared/utils/validates';
import { CreateSignerUserDto } from './types';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from '../../shared/sharedTypes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogonService {
  constructor(private readonly http: HttpClient) {}

  createSignerUser(
    createSignerUserData: CreateSignerUserDto
  ): Observable<IUser[]> {
    return this.http
      .post<IUser[]>(
        'http://localhost:3000/users/signer/',
        createSignerUserData
      )
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(error.error.message));
        })
      );
  }

  //-------------------------Validates------------------------------------------
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

  validateForm1(
    createSignerUserData: CreateSignerUserDto,
    emailConfirm: string,
    passwordConfirm: string
  ) {
    let errorMensage: string[] = [];
    if (
      !Validates.validateNames(createSignerUserData.name) ||
      !Validates.validateNames(createSignerUserData.surname)
    ) {
      errorMensage.push('O nome deve possuir pelo menos 3 caracteres');
    }

    if (!Validates.validateCpfData(createSignerUserData.cpf)) {
      errorMensage.push('CPF inválido');
    }

    if (!Validates.validatePhoneNumber(createSignerUserData.cellphone)) {
      errorMensage.push('Celular inválido');
    }

    if (!Validates.validateEmailData(createSignerUserData.email)) {
      errorMensage.push('Email inválido');
    }

    if (!Validates.validateIsEqual(createSignerUserData.email, emailConfirm)) {
      errorMensage.push('emails não conferem');
    }

    if (!Validates.validatePasswordData(createSignerUserData.password)) {
      errorMensage.push('Senha inválida');
    }

    if (
      !Validates.validateIsEqual(createSignerUserData.password, passwordConfirm)
    ) {
      errorMensage.push('Senhas não conferem');
    }

    return errorMensage;
  }

  validateForm2(createSignerUserData: CreateSignerUserDto) {
    let errorMensage: string[] = [];
    if (
      !Validates.validateComanyNames(createSignerUserData.companyPerson.name)
    ) {
      errorMensage.push('O nome deve possuir pelo menos 3 caracteres');
    }
    if (!Validates.validatePersonType(createSignerUserData.personType)) {
      errorMensage.push('Tipo de pessoa inválido');
    }
    return errorMensage;
  }
}
