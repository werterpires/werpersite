import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateSignerUserDto } from '../logon/types';
import { FormErrorComponent } from '../../shared/form-error/form-error.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, FormErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  createSignerUserData = {
    email: '',
    password: '',
  };
}
