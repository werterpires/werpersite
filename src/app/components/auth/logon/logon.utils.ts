import { Injectable } from '@angular/core';
import { CreateSignerUserDto } from './types';

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

  changeInputType(element: HTMLInputElement) {
    if (element.type === 'password') {
      element.type = 'text';

      element.style.border = 'none';
    } else {
      element.type = 'password';
      element.style.border = '2px solid var(--darkGreen)';
    }
  }
}
