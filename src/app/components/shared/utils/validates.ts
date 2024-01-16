import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Validates {
  public static validateString(length: number, text: string): boolean {
    return text.length >= length;
  }

  public static validateNames(name: string) {
    const nameRegex =
      /^[a-zA-ZáàâãéèêíïóôõöúüçñÁÀÂÃÉÈÍÏÓÔÕÖÚÜÇÑ]{3,16}(?:\s[a-zA-ZáàâãéèêíïóôõöúüçñÁÀÂÃÉÈÍÏÓÔÕÖÚÜÇÑ]{3,16}){0,4}$/;
    return nameRegex.test(name);
  }

  public static validateCpfData(cpf: string) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

    const cpfRegex = /^\d{11}$/;
    // Verifica se a senha é válido
    if (!cpfRegex.test(cpf)) {
      console.log(cpf);
      return false;
    }
    if (/^(\d)\1+$/.test(cpf)) {
      console.log(2);
      return false;
    }

    // Calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit1 = 11 - (sum % 11);
    if (digit1 > 9) {
      digit1 = 0;
    }

    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let digit2 = 11 - (sum % 11);
    if (digit2 > 9) {
      digit2 = 0;
    }

    // Verifica se os dígitos verificadores calculados são iguais aos dígitos do CPF
    if (
      digit1 !== parseInt(cpf.charAt(9)) ||
      digit2 !== parseInt(cpf.charAt(10))
    ) {
      console.log(4);
      return false;
    }

    return true;
  }

  public static validatePhoneNumber(phoneNumber: string) {
    const phoneNumberRegex = /^(\d{2})(\d{4,5})\d{4}$/;
    phoneNumber = phoneNumber.replace(/\D/g, ''); // Remover não dígitos
    return phoneNumberRegex.test(phoneNumber);
  }

  public static validateEmailData(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  public static validateIsEqual(string1: string, string2: string) {
    return string1 === string2;
  }

  public static validatePasswordData(password: string) {
    const passwordRegex =
      /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    return passwordRegex.test(password);
  }
}
