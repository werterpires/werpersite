import { Component } from '@angular/core';
import { SharedFunctions } from '../utils/sharedFunctions';

@Component({
  selector: 'app-close-component',
  standalone: true,
  imports: [],
  templateUrl: './close-component.component.html',
  styleUrl: './close-component.component.css'
})
export class CloseComponentComponent {
	constructor(public sharedFunctions:SharedFunctions){}
}
