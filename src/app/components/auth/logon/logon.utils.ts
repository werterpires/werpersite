import { Injectable } from '@angular/core';
import { CreateSignerUserDto } from './types';
import { Validates } from '../../shared/utils/validates';

@Injectable({
  providedIn: 'root',
})
export class LogonUtils {
  newCreateUserDto(): CreateSignerUserDto {
    return {
      cellphone: '',
      name: '',
      surname: '',
      email: '',
      password: '',
      cpf: '',
      phone: '',
      companyPerson: {
        name: '',
        personType: 'j',
      },
      personType: 'f',
      occupationsPermissions: [],
      signedTermsIds: [],
    };
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
