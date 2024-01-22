import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { MenuItem } from '../side-bar/types';
import { Components } from './types';
import { OperationalContainerComponent } from '../operational-container/operational-container.component';
import { RouterOutlet } from '@angular/router';
import { IUserFromJwt } from '../sharedTypes';

@Component({
  selector: 'app-content-manager',
  standalone: true,
  imports: [
    ContainerComponent,
    SideBarComponent,
    OperationalContainerComponent,
    RouterOutlet,
  ],
  templateUrl: './content-manager.component.html',
  styleUrl: './content-manager.component.css',
})
export class ContentManagerComponent implements OnInit {
  @Input() menuItens: MenuItem[] = [];
  @Input() components!: Components;

  @Output() choiceEmitter = new EventEmitter<string>();

  user: IUserFromJwt | null = null;

  ngOnInit(): void {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      this.user = JSON.parse(atob(accessToken.split('.')[1])) as IUserFromJwt;
    }
  }
}
