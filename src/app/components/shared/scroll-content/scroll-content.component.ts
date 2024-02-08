import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-content',
  standalone: true,
  imports: [],
  templateUrl: './scroll-content.component.html',
  styleUrl: './scroll-content.component.css',
})
export class ScrollContentComponent {
  @ViewChild('scrollContent') scrollContent!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.insertMaxWidth();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    this.insertMaxWidth();
  }
  insertMaxWidth() {
    const element = this.scrollContent.nativeElement;
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
