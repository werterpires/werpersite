import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateSignerUserDto } from '../logon/types';
import { FormErrorComponent } from '../../shared/form-error/form-error.component';
import { FormErrorService } from '../../shared/form-error/form-error.service';
import { IFormErrors } from '../../shared/form-error/types';
import { NgIf } from '@angular/common';
import { FormsUtils } from '../../shared/utils/formsUtils';
import { LoginData } from './types';
import { LoginUtils } from './login.utils';
import { LoaderService } from '../../shared/loader/loader.service';
import { AlertsService } from '../../shared/alerts/alerts.service';
import { LoginService } from './login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../shared/sharedServices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, FormErrorComponent, NgIf, HttpClientModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginData: LoginData = {
    email: '',
    password: '',
  };

  formErrors: IFormErrors = {
    email: {
      errorText: ['Email inválido'],
      active: false,
    },
    password: {
      errorText: ['Senha inválida'],
      active: false,
    },
  };

  constructor(
    public formErrorService: FormErrorService,
    public formsUtils: FormsUtils,
    public loginUtils: LoginUtils,
    private loaderService: LoaderService,
    private alertsService: AlertsService,
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.loaderService.showLoader();
    const errorMessage = this.loginUtils.validateForm(this.loginData);

    if (errorMessage.length > 0) {
      this.alertsService.showAlerts(
        'error',
        'Dados inconsistentes',
        errorMessage
      );
      this.loaderService.hideLoader();
      return;
    }

    this.loginService.login(this.loginData).subscribe({
      next: (data) => {
        this.authService.getUserFromJwt(data.accessToken);
        this.router.navigate(['/']);
        this.loaderService.hideLoader();
      },
      error: (err) => {
        this.alertsService.showAlerts('error', 'Erro ao fazer o login', [
          err.message,
        ]);
        this.loaderService.hideLoader();
      },
    });
  }
}
