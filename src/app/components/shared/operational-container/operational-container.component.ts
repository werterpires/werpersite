import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
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

  constructor(public sharedFunctions: SharedFunctions) {}

  ngAfterViewInit(): void {
    this.insertMaxWidth();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
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
    const adjustedHeight = windowHeight - 25 - rect.top + 'px';

    element.style.maxWidth = adjustedWidth;
    element.style.maxHeight = adjustedHeight;
  }
}
