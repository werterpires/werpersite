import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/sharedServices/auth.service';
import { IUserFromJwt } from '../../shared/sharedTypes';
import { Router } from '@angular/router';
import { LoaderService } from '../../shared/loader/loader.service';
import { SubscriptionsService } from './subscriptions.service';
import { HttpClientModule } from '@angular/common/http';
import { ISubscription } from './types';
import { AlertsService } from '../../shared/alerts/alerts.service';
import { GridHeaderComponent } from '../../shared/grid-header/grid-header.component';
import { IGridHeader } from '../../shared/grid-header/types';
import { NgFor } from '@angular/common';
import { UpdateFormComponent } from '../../shared/update-form/update-form.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '../../../pipes/date.pipe';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [
    HttpClientModule,
    GridHeaderComponent,
    NgFor,
    UpdateFormComponent,
    FormsModule,
    DatePipe,
  ],
  providers: [SubscriptionsService],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css',
})
export class SubscriptionsComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly loaderService: LoaderService,
    private readonly subscriptionsService: SubscriptionsService,
    private readonly alertsService: AlertsService
  ) {}
  user: IUserFromJwt | null = null;
  allUserSubscriptions: ISubscription[] = [];
  headers: IGridHeader[] = [
    {
      title: 'Assinatura',
      size: 'mediumHeader',
    },
    {
      title: 'Ativa',
      size: 'tinyHeader',
    },
    {
      title: 'Validade',
      size: 'smallHeader',
    },
  ];

  ngOnInit(): void {
    this.authService.users$.subscribe((user) => {
      this.user = user;
    });

    if (!this.user?.roles.includes('subscriber')) {
      this.router.navigate(['/cadastros']);
    }

    this.getOwnSubscriptionsByUserId();
  }

  getOwnSubscriptionsByUserId() {
    this.loaderService.showLoader();
    this.subscriptionsService.getOwnSubscriptionsByUserId().subscribe({
      next: (res) => {
        this.allUserSubscriptions = res;
        this.loaderService.hideLoader();
      },
      error: (err) => {
        this.alertsService.showAlerts('error', 'Erro ao buscar assinatura', [
          err.message,
        ]);
        this.loaderService.hideLoader();
      },
    });
  }
}
