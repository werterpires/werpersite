import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from './types';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  @Input() menuItens: MenuItem[] = [];
  @Output() choiceEmitter = new EventEmitter<string>();
}
