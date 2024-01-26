import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormErrorService } from './form-error.service';

@Component({
  selector: 'app-form-error',
  standalone: true,
  imports: [NgFor],
  providers: [FormErrorService],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.css',
})
export class FormErrorComponent {
  @Input() errorText: string[] = [];
}
