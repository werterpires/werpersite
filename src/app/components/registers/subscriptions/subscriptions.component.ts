import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/sharedServices/auth.service';
import { IUserFromJwt } from '../../shared/sharedTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css',
})
export class SubscriptionsComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
  user: IUserFromJwt | null = null;

  ngOnInit(): void {
    this.authService.users$.subscribe((user) => {
      this.user = user;
    });

    if (!this.user?.roles.includes('subscriber')) {
      this.router.navigate(['/cadastros']);
    }
  }
}
