import { Component, OnInit } from '@angular/core';
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
export class ContainerComponent implements OnInit {
  constructor(private authService: AuthService) {}

  user: IUserFromJwt | null = null;

  ngOnInit(): void {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      this.user = JSON.parse(atob(accessToken.split('.')[1])) as IUserFromJwt;
    }
  }
}
