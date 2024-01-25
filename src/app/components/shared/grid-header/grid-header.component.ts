import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGridHeader } from './types';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-grid-header',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './grid-header.component.html',
  styleUrl: './grid-header.component.css',
})
export class GridHeaderComponent {
  @Input() headers: IGridHeader[] = [];
	@Output() addEmitter = new EventEmitter();
}
