import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../shared/container/container.component';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';
import { MenuItem } from '../shared/side-bar/types';
import { TermsTypesComponent } from './terms-types/terms-types.component';
import { NgIf } from '@angular/common';
import { OperationalContainerComponent } from '../shared/operational-container/operational-container.component';
import { Components } from '../shared/content-manager/types';
import { ContentManagerComponent } from '../shared/content-manager/content-manager.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-registers',
  standalone: true,
  imports: [
    NgIf,
    ContainerComponent,
    SideBarComponent,
    TermsTypesComponent,
    OperationalContainerComponent,
    ContentManagerComponent,
    RouterOutlet,
  ],
  templateUrl: './registers.component.html',
  styleUrl: './registers.component.css',
})
export class RegistersComponent {
  menuItens: MenuItem[] = [
    {
      alt: 'Icone de um papel com setas em várias direções',
      icon: 'assets/icons/termTypeIcon.svg',
      path: 'tipos-termos',
      text: 'Tipos de termos',
      role: 'superadmin',
    },
    {
      alt: 'Ícone de uma caneta assinando um papel',
      icon: 'assets/icons/subscriptionIcon.svg',
      path: 'assinaturas',
      text: 'Assinaturas',
      role: 'subscriber',
    },
  ];
}
