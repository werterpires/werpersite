import { Component, Input, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { AuthService } from '../sharedServices/auth.service';
import { IUserFromJwt } from '../sharedTypes';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  constructor(private authService: AuthService) {}

  @Input() user: IUserFromJwt | null = null;
}
