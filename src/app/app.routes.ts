import { Routes } from '@angular/router';
import { ContainerComponent } from './components/shared/container/container.component';
import { RegistersComponent } from './components/registers/registers.component';
import { LogonComponent } from './components/auth/logon/logon.component';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
  { path: 'logon', component: LogonComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastros', component: RegistersComponent },
  { path: '', component: RegistersComponent },
];
