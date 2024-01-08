import { Routes } from '@angular/router';
import { ContainerComponent } from './components/shared/container/container.component';
import { RegistersComponent } from './components/registers/registers.component';

export const routes: Routes = [
  { path: 'cadastros', component: RegistersComponent },
  { path: '', component: RegistersComponent },
];
