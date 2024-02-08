import { Component, OnInit } from '@angular/core';
import { OperationalContainerComponent } from '../../../shared/operational-container/operational-container.component';
import { HttpClientModule } from '@angular/common/http';
import { OneSubscriptionService } from './one-subscription.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { LoaderService } from '../../../shared/loader/loader.service';
import { ICompleteSubscription, UpdateSubscriptionDto } from '../types';
import { AlertsService } from '../../../shared/alerts/alerts.service';
import { UpdateOneFormComponent } from '../../../shared/update -one-form/update-one-form.component';
import { SubscriptionsUtils } from '../subscriptions.utils';
import { InputOneFormItemComponent } from '../../../shared/input-one-form-item/input-one-form-item.component';
import { FormErrorService } from '../../../shared/form-error/form-error.service';
import { IFormErrors } from '../../../shared/form-error/types';
import { NgIf } from '@angular/common';
import { GridHeaderComponent } from '../../../shared/grid-header/grid-header.component';
import { IGridHeader } from '../../../shared/grid-header/types';
import { SubscriptionConfigurationsComponent } from '../../subscription-configurations/subscription-configurations.component';
import { ReceiptsComponent } from '../../receipts/receipts.component';
import { SubscriptionsService } from '../subscriptions.service';
import { SharedFunctions } from '../../../shared/utils/sharedFunctions';
import { CloseComponentComponent } from '../../../shared/close-component/close-component.component';
import { UpdateService } from '../../../shared/sharedServices/updates.service';
import { ScrollContentComponent } from '../../../shared/scroll-content/scroll-content.component';

@Component({
  selector: 'app-one-subscription',
  standalone: true,
  imports: [
    OperationalContainerComponent,
    SubscriptionConfigurationsComponent,
    ReceiptsComponent,
    HttpClientModule,
    UpdateOneFormComponent,
    InputOneFormItemComponent,
    GridHeaderComponent,
    CloseComponentComponent,
    ScrollContentComponent,
    RouterOutlet,
    NgIf,
  ],
  providers: [OneSubscriptionService, SubscriptionsService],
  templateUrl: './one-subscription.component.html',
  styleUrl: './one-subscription.component.css',
})
export class OneSubscriptionComponent implements OnInit {
  constructor(
    private oneSubscriptionService: OneSubscriptionService,
    private activatedRoute: ActivatedRoute,
    private readonly loaderService: LoaderService,
    private readonly alertsService: AlertsService,
    public readonly utils: SubscriptionsUtils,
    public readonly formErrorService: FormErrorService,
    private readonly subscriptionsService: SubscriptionsService,
    private readonly sharedFunctions: SharedFunctions,
    private updateService: UpdateService
  ) {
    this.formErrors = this.utils.updateOneFormErros;
  }

  subscriptionId!: number;
  subscription!: ICompleteSubscription;
  formErrors!: IFormErrors;

  ngOnInit(): void {
    this.loaderService.showLoader();
    this.changeRoute();
    this.loaderService.hideLoader();
  }

  changeRoute() {
    this.activatedRoute.params.subscribe((params) => {
      this.subscriptionId = +params['id'];
      if (this.subscriptionId) {
        this.getOneSubscriptionById();
      }
    });
  }

  getOneSubscriptionById() {
    this.loaderService.showLoader();
    this.oneSubscriptionService
      .getOneSubscriptionById(this.subscriptionId)
      .subscribe({
        next: (res) => {
          this.subscription = res;
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

  updateSubscription() {
    this.loaderService.showLoader();
    const updateSubscriptionData: UpdateSubscriptionDto =
      this.utils.newUpdateSubscriptionData(this.subscription);

    this.subscriptionsService
      .updateSubscription(updateSubscriptionData)
      .subscribe({
        next: (res) => {
          this.subscription = {
            ...res,
            receipts: this.subscription.receipts,
            subscriptionConfigs: this.subscription.subscriptionConfigs,
          };
          this.updateService.setSubscription(res);
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

  deleteSubscriptionById() {
    this.loaderService.showLoader();
    this.subscriptionsService
      .deleteSubscription(this.subscription.subscriptionId)
      .subscribe({
        next: () => {
          this.updateService.setDeletedSubscriptionId(
            this.subscription.subscriptionId
          );
          this.sharedFunctions.goToParentRoute();
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
}
