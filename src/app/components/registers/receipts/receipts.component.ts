import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridHeaderComponent } from '../../shared/grid-header/grid-header.component';
import { ReceiptsUtils } from './receipts.utils';
import { NgFor } from '@angular/common';
import { UpdateFormComponent } from '../../shared/update-form/update-form.component';
import { InputOneFormItemComponent } from '../../shared/input-one-form-item/input-one-form-item.component';
import { ITinyReceipt } from './types';

@Component({
  selector: 'app-receipts',
  standalone: true,
  imports: [
    RouterOutlet,
    GridHeaderComponent,
    UpdateFormComponent,
    InputOneFormItemComponent,
    NgFor,
  ],
  templateUrl: './receipts.component.html',
  styleUrl: './receipts.component.css',
})
export class ReceiptsComponent {
  @Input() receipts: ITinyReceipt[] = [];

  headers = this.utils.headers;

  constructor(public utils: ReceiptsUtils) {}
}
