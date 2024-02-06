import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { OperationalContainerService } from './operational-container.service';

@Component({
  selector: 'app-operational-container',
  standalone: true,
  imports: [],
  templateUrl: './operational-container.component.html',
  styleUrl: './operational-container.component.css',
})
export class OperationalContainerComponent implements AfterViewInit {
  @ViewChild('operationalContainer') operationalContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.insertMaxWidth();
  }
  insertMaxWidth() {
    const element = this.operationalContainer.nativeElement;
    if (!element) {
      return;
    }
    const windowWidth = window.innerWidth;
    const rect = element.getBoundingClientRect();

    const adjustedWidth = windowWidth - 40 - rect.left + 'px';
    element.style.maxWidth = adjustedWidth;
  }
}
