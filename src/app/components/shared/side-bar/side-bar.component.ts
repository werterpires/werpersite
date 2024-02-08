import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MenuItem } from './types';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IUserFromJwt } from '../sharedTypes';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent implements AfterViewInit {
  @ViewChild('sideBar') sideBar!: ElementRef;

  @Input() menuItens: MenuItem[] = [];
  @Output() choiceEmitter = new EventEmitter<string>();
  @Input() user: IUserFromJwt | null = null;

  @HostListener('window:resize', ['$event'])
  ngAfterViewInit(): void {
    this.insertMaxWidth();
  }
  onWindowResize(event: Event): void {
    this.insertMaxWidth();
  }
  insertMaxWidth() {
    const element = this.sideBar.nativeElement;
    if (!element) {
      return;
    }
    const windowHeight = window.innerHeight;

    const rect = element.getBoundingClientRect();

    const adjustedHeight = windowHeight - 21 - rect.top + 'px';

    element.style.height = adjustedHeight;
  }
}
