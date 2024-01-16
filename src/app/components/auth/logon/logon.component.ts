import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TermsSignComponent } from '../terms-sign/terms-sign.component';
import { ITermSign } from '../terms-sign/types';
import { LoaderService } from '../../shared/loader/loader.service';
import { CpfMaskPipe } from '../../../pipes/cpf-mask.pipe';
import { FormsModule } from '@angular/forms';
import { Masks } from '../../shared/utils/masks';
import { Validates } from '../../shared/utils/validates';
import { CreateSignerUserDto } from './types';
import { IFormErrors } from '../../shared/form-error/types';
import { FormErrorComponent } from '../../shared/form-error/form-error.component';
import { LogonService } from './logon.service';
import { AlertsService } from '../../shared/alerts/alerts.service';

@Component({
  selector: 'app-logon',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    TermsSignComponent,
    CpfMaskPipe,
    FormsModule,
    FormErrorComponent,
  ],
  templateUrl: './logon.component.html',
  styleUrl: './logon.component.css',
})
export class LogonComponent {
  @ViewChild('logonName') logonName!: ElementRef;

  createSignerUserData: CreateSignerUserDto = {
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

  formErrors: IFormErrors = {
    name: {
      errorText: ['O nome deve possuir pelo menos 3 caracteres'],
      active: false,
    },
    surname: {
      errorText: ['O sobrenome deve possuir pelo menos 3 caracteres'],
      active: false,
    },
    cpf: {
      errorText: ['CPF inválido'],
      active: false,
    },
    cellphone: {
      errorText: ['Celular inválido'],
      active: false,
    },
    email: {
      errorText: ['Email inválido'],
      active: false,
    },
    emailConfirm: {
      errorText: ['emails não conferem'],
      active: false,
    },
    password: {
      errorText: [
        `A senha deve ter entre 8 e 16 caracteres e ter pelo menos uma letra maiúscula, uma letra minúscula, um número e um dos seguintes caracteres especiais: !@#$%^&*()_+{}[]|\:;"'<>,.?/`,
      ],
      active: false,
    },
    passwordConfirm: {
      errorText: ['Senhas não conferem'],
      active: false,
    },
  };
  confirmEmail: string = '';
  confirmPassword: string = '';

  step = 2;
  termsSign = false;

  constructor(
    private loaderService: LoaderService,
    public logonService: LogonService,
    private alertsService: AlertsService
  ) {}

  subscribe(signedTerms: ITermSign[]) {
    this.loaderService.showLoader();
    this.createSignerUserData.cpf = '12';
    this.termsSign = false;
  }

  goToStep2() {
    const errorMensage = this.logonService.validateForm1(
      this.createSignerUserData,
      this.confirmEmail,
      this.confirmPassword
    );

    if (errorMensage.length > 0) {
      this.alertsService.showAlerts(
        'error',
        'Dados inconsistentes',
        errorMensage
      );
      return;
    }
    this.step = 2;
  }

  //------------------Masks------------------------------------------------------
  maskCpf() {
    this.createSignerUserData.cpf = Masks.cpfMask(
      this.createSignerUserData.cpf
    );
  }

  maskPhone() {
    this.createSignerUserData.cellphone = Masks.phoneMask(
      this.createSignerUserData.cellphone
    );
  }
}
