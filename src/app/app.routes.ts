import { Routes } from '@angular/router';
import { ContainerComponent } from './components/shared/container/container.component';
import { RegistersComponent } from './components/registers/registers.component';
import { LogonComponent } from './components/auth/logon/logon.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TermsTypesComponent } from './components/registers/terms-types/terms-types.component';
import { SubscriptionsComponent } from './components/registers/subscriptions/subscriptions.component';
import { OneSubscriptionComponent } from './components/registers/subscriptions/one-subscription/one-subscription.component';

export const routes: Routes = [
  { path: 'logon', component: LogonComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'cadastros',
    component: RegistersComponent,
    children: [
      { path: 'tipos-termos', component: TermsTypesComponent },
      { path: 'assinaturas', component: SubscriptionsComponent },
      { path: 'assinaturas/:id', component: OneSubscriptionComponent },
    ],
  },
  { path: '', component: LoginComponent },
];
