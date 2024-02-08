import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { OperationalContainerService } from './operational-container.service';
import { Router } from '@angular/router';
import { SharedFunctions } from '../utils/sharedFunctions';

@Component({
  selector: 'app-operational-container',
  standalone: true,
  imports: [],
  templateUrl: './operational-container.component.html',
  styleUrl: './operational-container.component.css',
})
export class OperationalContainerComponent implements AfterViewInit {
  @ViewChild('operationalContainer') operationalContainer!: ElementRef;

  constructor(
    private router: Router,
    public sharedFunctions: SharedFunctions
  ) {}

  ngAfterViewInit(): void {
    this.insertMaxWidth();
  }
  insertMaxWidth() {
    const element = this.operationalContainer.nativeElement;
    if (!element) {
      return;
    }
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const rect = element.getBoundingClientRect();

    const adjustedWidth = windowWidth - 40 - rect.left + 'px';
    const adjustedHeight = windowHeight - 40 - rect.top + 'px';
    element.style.maxWidth = adjustedWidth;
    element.style.maxHeight = adjustedHeight;
  }
}
