import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { MenuItem } from '../side-bar/types';
import { Components } from './types';
import { OperationalContainerComponent } from '../operational-container/operational-container.component';
import { RouterOutlet } from '@angular/router';

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
export class ContentManagerComponent {
  @Input() menuItens: MenuItem[] = [];
  @Input() components!: Components;

  @Output() choiceEmitter = new EventEmitter<string>();

  choiceComponent(component: string) {
    Object.keys(this.components).forEach((key) => {
      this.components[key] = false;
    });
    this.components[component] = true;
  }
}
