import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TermsSignComponent } from '../terms-sign/terms-sign.component';
import { ITermSign } from '../terms-sign/types';
import { LoaderService } from '../../shared/loader/loader.service';
import { CpfMaskPipe } from '../../../pipes/cpf-mask.pipe';
import { FormsModule } from '@angular/forms';
import { Masks } from '../../shared/utils/masks';
import { CreateSignerUserDto } from './types';
import { IFormErrors } from '../../shared/form-error/types';
import { FormErrorComponent } from '../../shared/form-error/form-error.component';
import { LogonService } from './logon.service';
import { AlertsService } from '../../shared/alerts/alerts.service';
import { HttpClientModule } from '@angular/common/http';
import { LogonUtils } from './logon.utils';
import { FormErrorService } from '../../shared/form-error/form-error.service';
import { FormsUtils } from '../../shared/utils/formsUtils';

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
    HttpClientModule,
  ],
  providers: [LogonService, LogonUtils],
  templateUrl: './logon.component.html',
  styleUrl: './logon.component.css',
})
export class LogonComponent {
  @ViewChild('logonName') logonName!: ElementRef;

  createSignerUserData: CreateSignerUserDto =
    this.logonUtils.newCreateUserDto();

  form1Errors: IFormErrors = {
    name: {
      errorText: ['O nome deve possuir pelo menos 3 caracteres'],
      active: [],
    },
    surname: {
      errorText: ['O sobrenome deve possuir pelo menos 3 caracteres'],
      active: [],
    },
    cpf: {
      errorText: ['CPF inválido'],
      active: [],
    },
    cellphone: {
      errorText: ['Celular inválido'],
      active: [],
    },
    email: {
      errorText: ['Email inválido'],
      active: [],
    },
    emailConfirm: {
      errorText: ['emails não conferem'],
      active: [],
    },
    password: {
      errorText: [
        `A senha deve ter entre 8 e 16 caracteres e ter pelo menos uma letra maiúscula, uma letra minúscula, um número e um dos seguintes caracteres especiais: !@#$%^&*()_+{}[]|\:;"'<>,.?/`,
      ],
      active: [],
    },
    passwordConfirm: {
      errorText: ['Senhas não conferem'],
      active: [],
    },
  };

  form2Errors: IFormErrors = {
    name: {
      errorText: ['O nome deve possuir pelo menos 3 caracteres'],
      active: [],
    },
    personType: {
      errorText: ['Tipo inválido'],
      active: [],
    },
  };

  confirmEmail: string = '';
  confirmPassword: string = '';

  step = 1;
  termsSign = false;

  constructor(
    private loaderService: LoaderService,
    public logonService: LogonService,
    private alertsService: AlertsService,
    public logonUtils: LogonUtils,
    public formErrorService: FormErrorService,
    public formsUtils: FormsUtils
  ) {}

  subscribe(signedTerms: ITermSign[]) {
    this.loaderService.showLoader();
    this.termsSign = false;

    const terms = signedTerms.map((term) => term.termId);
    this.createSignerUserData.signedTermsIds = terms;

    this.createSignerUserData.cpf = this.createSignerUserData.cpf.replace(
      /\D/g,
      ''
    );

    this.logonService.createSignerUser(this.createSignerUserData).subscribe({
      next: (res) => {
        this.alertsService.showAlerts('success', 'Usuário criado com sucesso', [
          'Usuário criado com sucesso',
        ]);
        this.createSignerUserData = this.logonUtils.newCreateUserDto();
        this.step = 1;
        this.loaderService.hideLoader();
      },
      error: (err) => {
        this.alertsService.showAlerts('error', 'Erro ao criar o usuário', [
          err.message,
        ]);
        this.loaderService.hideLoader();
      },
    });
  }

  goToStep2() {
    this.loaderService.showLoader();
    const errorMensage = this.logonUtils.validateForm1(
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
      this.loaderService.hideLoader();
      return;
    }
    this.step = 2;

    this.loaderService.hideLoader();
  }

  gotoStep3() {
    this.loaderService.showLoader();
    const errorMensage = this.logonUtils.validateForm2(
      this.createSignerUserData
    );

    if (errorMensage.length > 0) {
      this.alertsService.showAlerts(
        'error',
        'Dados inconsistentes',
        errorMensage
      );
      this.loaderService.hideLoader();
      return;
    }

    this.termsSign = true;
    this.loaderService.hideLoader();
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
