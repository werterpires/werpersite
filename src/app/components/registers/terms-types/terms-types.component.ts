import { Component } from '@angular/core';
import { UpdateFormComponent } from '../../shared/update-form/update-form.component';

@Component({
  selector: 'app-terms-types',
  standalone: true,
  imports: [UpdateFormComponent],
  templateUrl: './terms-types.component.html',
  styleUrl: './terms-types.component.css',
})
export class TermsTypesComponent {}
