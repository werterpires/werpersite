import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from './types';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  @Input() menuItens: MenuItem[] = [];
  @Output() choiceEmitter = new EventEmitter<string>();
}
