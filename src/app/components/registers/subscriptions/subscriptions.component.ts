import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../shared/sharedServices/auth.service';
import { IUserFromJwt } from '../../shared/sharedTypes';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoaderService } from '../../shared/loader/loader.service';
import { SubscriptionsService } from './subscriptions.service';
import { HttpClientModule } from '@angular/common/http';
import { ISubscription, UpdateSubscriptionDto } from './types';
import { AlertsService } from '../../shared/alerts/alerts.service';
import { GridHeaderComponent } from '../../shared/grid-header/grid-header.component';
import { IGridHeader } from '../../shared/grid-header/types';
import { NgFor, NgIf } from '@angular/common';
import { UpdateFormComponent } from '../../shared/update-form/update-form.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '../../../pipes/date.pipe';
import { CreateFormComponent } from '../../shared/create-form/create-form.component';
import { CreateSubscriptionDto } from './types';
import { FormErrorComponent } from '../../shared/form-error/form-error.component';
import { FormErrorService } from '../../shared/form-error/form-error.service';
import { SubscriptionsUtils } from './subscriptions.utils';
import { InputFormItemComponent } from '../../shared/input-form-item/input-form-item.component';
import { SubscriptionsCreateFormComponent } from './subscriptions-create-form/subscriptions-create-form.component';
import { OneSubscriptionService } from './one-subscription/one-subscription.service';
import { OperationalContainerComponent } from '../../shared/operational-container/operational-container.component';
import { CloseComponentComponent } from '../../shared/close-component/close-component.component';
import { Subscription } from 'rxjs';
import { UpdateService } from '../../shared/sharedServices/updates.service';
@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [
    NgIf,
    HttpClientModule,
    GridHeaderComponent,
    NgFor,
    UpdateFormComponent,
    FormsModule,
    DatePipe,
    CreateFormComponent,
    FormsModule,
    FormErrorComponent,
    InputFormItemComponent,
    SubscriptionsCreateFormComponent,
    RouterOutlet,
    OperationalContainerComponent,
    CloseComponentComponent,
  ],
  providers: [SubscriptionsService, OneSubscriptionService],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css',
})
export class SubscriptionsComponent implements OnInit {
  user: IUserFromJwt | null = null;
  allUserSubscriptions: ISubscription[] = [];
  createForm = false;
  headers: IGridHeader[] = this.utils.headers;
  createSubscriptionData: CreateSubscriptionDto =
    this.utils.createSubscriptionData;
  createFormErrors = this.utils.createFormErros;
  updateFormErrors = this.utils.updateFormErros;

  teste!: ISubscription | null;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly loaderService: LoaderService,
    private readonly subscriptionsService: SubscriptionsService,
    private readonly alertsService: AlertsService,
    public formErrorService: FormErrorService,
    public readonly utils: SubscriptionsUtils,
    private updateService: UpdateService
  ) {
    this.updateService.subscription$.subscribe((test) => {
      if (!test) {
        return;
      }
      const index = this.allUserSubscriptions.findIndex(
        (sub) => sub.subscriptionId === test?.subscriptionId
      );
      this.allUserSubscriptions[index] = test;
    });

    this.updateService.deletedSubscriptionId$.subscribe((id) => {
      if (!id) {
        return;
      }
      const index = this.allUserSubscriptions.findIndex(
        (sub) => sub.subscriptionId === id
      );
      this.allUserSubscriptions.splice(index, 1);
    });
  }

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

  createSubscription() {
    this.loaderService.showLoader();
    this.subscriptionsService
      .createSubscription(this.createSubscriptionData)
      .subscribe({
        next: (res) => {
          this.allUserSubscriptions.push(res);
          this.createForm = false;
          this.loaderService.hideLoader();
        },
        error: (err) => {
          this.alertsService.showAlerts('error', 'Erro ao criar assinatura', [
            err.message,
          ]);
          this.loaderService.hideLoader();
        },
      });
  }

  updateSubscription(idx: number) {
    this.loaderService.showLoader();
    const updateSubscriptionData: UpdateSubscriptionDto =
      this.utils.newUpdateSubscriptionData(this.allUserSubscriptions[idx]);

    this.subscriptionsService
      .updateSubscription(updateSubscriptionData)
      .subscribe({
        next: (res) => {
          this.allUserSubscriptions[idx] = res;
          this.loaderService.hideLoader();
        },
        error: (err) => {
          this.alertsService.showAlerts(
            'error',
            'Erro ao atualizar assinatura',
            [err.message]
          );
          this.loaderService.hideLoader();
        },
      });
  }

  deleteSubscriptionById(idx: number) {
    this.loaderService.showLoader();
    this.subscriptionsService
      .deleteSubscription(this.allUserSubscriptions[idx].subscriptionId)
      .subscribe({
        next: () => {
          this.allUserSubscriptions.splice(idx, 1);
          this.loaderService.hideLoader();
        },
        error: (err) => {
          this.alertsService.showAlerts('error', 'Erro ao deletar assinatura', [
            err.message,
          ]);
          this.loaderService.hideLoader();
        },
      });
  }

  changeSubscription(subscription: ISubscription) {
    const subscriptionsIdx = this.allUserSubscriptions.findIndex(
      (sub) => sub.subscriptionId === subscription.subscriptionId
    );
    this.allUserSubscriptions[subscriptionsIdx] = subscription;
  }
}
