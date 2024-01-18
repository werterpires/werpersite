import { Injectable } from '@angular/core';
import { LoginData } from './types';
import { Validates } from '../../shared/utils/validates';

@Injectable({
  providedIn: 'root',
})
export class LoginUtils {
  newLoginDto(): LoginData {
    return {
      email: '',
      password: '',
    };
  }

  validateForm(loginData: LoginData) {
    let errorMensage: string[] = [];
    if (!Validates.validateEmailData(loginData.email)) {
      errorMensage.push('Email inválido');
    }
    if (!Validates.validatePasswordData(loginData.password)) {
      errorMensage.push('Senha inválida');
    }
    return errorMensage;
  }
}
