import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFormError } from '../form-error/types';
import { FormErrorComponent } from '../form-error/form-error.component';
import { TimeStampsPipe } from '../../../pipes/time-stamps.pipe';
import { MoneyPipe } from '../../../pipes/money.pipe';

@Component({
  selector: 'app-input-one-form-item',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    NgIf,
    FormErrorComponent,
    TimeStampsPipe,
    MoneyPipe,
  ],
  templateUrl: './input-one-form-item.component.html',
  styleUrl: './input-one-form-item.component.css',
})
export class InputOneFormItemComponent {
  @Input() idx: number = 0;
  @Input() value: string = '';
  @Input() booleanValue: boolean = false;
  @Input() numberValue: number = 0;
  @Input() label: string | null = null;
  @Input() inputClass: string[] = ['mediumField'];
  @Input() inputType: string = 'text';
  @Input() inputName: string = 'inputName';
  @Input() formError: IFormError = {
    errorText: ['ocorreu um erro'],
    active: [],
  };
  @Input() disabled: boolean = false;

  @Output() blurEmitter = new EventEmitter<void>();
  @Output() inputEmitter = new EventEmitter<string>();
  @Output() inputBooleanEmitter = new EventEmitter<boolean>();
  @Output() inputNumberEmitter = new EventEmitter<number>();
}
