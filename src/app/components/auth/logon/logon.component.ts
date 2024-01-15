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

@Component({
  selector: 'app-logon',
  standalone: true,
  imports: [NgIf, NgClass, TermsSignComponent, CpfMaskPipe, FormsModule],
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
  confirmEmail: string = '';
  confirmPassword: string = '';

  step = 1;
  termsSign = false;

  constructor(private loaderService: LoaderService) {}

  subscribe(signedTerms: ITermSign[]) {
    this.loaderService.showLoader();
    this.createSignerUserData.cpf = '12';
    this.termsSign = false;
  }

  maskCpf() {
    console.log('sim');
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
