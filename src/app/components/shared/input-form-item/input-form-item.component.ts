import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFormError } from '../form-error/types';
import { FormErrorComponent } from '../form-error/form-error.component';

@Component({
  selector: 'app-input-form-item',
  standalone: true,
  imports: [NgClass, FormsModule, NgIf, FormErrorComponent],
  templateUrl: './input-form-item.component.html',
  styleUrl: './input-form-item.component.css',
})
export class InputFormItemComponent {
  @Input() idx: number = 0;
  @Input() value: string = '';
  @Input() label: string | null = null;
  @Input() inputClass: string[] = ['mediumField'];
  @Input() inputType: string = 'text';
  @Input() inputName: string = 'inputName';
  @Input() formError: IFormError = {
    errorText: ['ocorreu um erro'],
    active: [],
  };

  @Output() blurEmitter = new EventEmitter<void>();
  @Output() inputEmitter = new EventEmitter<string>();
}
