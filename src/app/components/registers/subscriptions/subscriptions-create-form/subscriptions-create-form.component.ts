import { Component, EventEmitter, Output } from '@angular/core';
import { CreateFormComponent } from '../../../shared/create-form/create-form.component';

import { CreateSubscriptionDto, ISubscription } from '../types';
import { LoaderService } from '../../../shared/loader/loader.service';
import { SubscriptionsService } from '../subscriptions.service';
import { AlertsService } from '../../../shared/alerts/alerts.service';
import { HttpClientModule } from '@angular/common/http';
import { InputFormItemComponent } from '../../../shared/input-form-item/input-form-item.component';
import { SubscriptionsUtils } from '../subscriptions.utils';
import { FormErrorService } from '../../../shared/form-error/form-error.service';

@Component({
  selector: 'app-subscriptions-create-form',
  standalone: true,
  imports: [CreateFormComponent, HttpClientModule, InputFormItemComponent],
  providers: [SubscriptionsService],
  templateUrl: './subscriptions-create-form.component.html',
  styleUrl: './subscriptions-create-form.component.css',
})
export class SubscriptionsCreateFormComponent {
  @Output() cancelEmitter = new EventEmitter<void>();
  @Output() createEmitter = new EventEmitter<ISubscription>();

  createSubscriptionData: CreateSubscriptionDto =
    this.utils.createSubscriptionData;
  createFormErrors = this.utils.createFormErros;

  constructor(
    public utils: SubscriptionsUtils,
    private readonly loaderService: LoaderService,
    private readonly subscriptionsService: SubscriptionsService,
    private readonly alertsService: AlertsService,
    public readonly formErrorService: FormErrorService
  ) {}

  createSubscription() {
    this.loaderService.showLoader();
    this.subscriptionsService
      .createSubscription(this.createSubscriptionData)
      .subscribe({
        next: (res) => {
          this.createEmitter.emit(res);
          this.cancelEmitter.emit();
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
}
