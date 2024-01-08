import { Component } from '@angular/core';
import { ContainerComponent } from '../shared/container/container.component';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';
import { MenuItem } from '../shared/side-bar/types';
import { Components } from './types';
import { TermsTypesComponent } from './terms-types/terms-types.component';
import { NgIf } from '@angular/common';
import { OperationalContainerComponent } from '../shared/operational-container/operational-container.component';

@Component({
  selector: 'app-registers',
  standalone: true,
  imports: [
    NgIf,
    ContainerComponent,
    SideBarComponent,
    TermsTypesComponent,
    OperationalContainerComponent,
  ],
  templateUrl: './registers.component.html',
  styleUrl: './registers.component.css',
})
export class RegistersComponent {
  menuItens: MenuItem[] = [
    {
      alt: 'Icone de um papel com setas em várias direções',
      icon: 'assets/icons/termTypeIcon.svg',
      path: 'termsTypes',
      text: 'Tipos de termos',
    },
  ];

  components: Components = {
    termsTypes: false,
  };

  choiceComponent(component: string) {
    Object.keys(this.components).forEach((key) => {
      this.components[key] = false;
    });
    this.components[component] = true;
  }
}
