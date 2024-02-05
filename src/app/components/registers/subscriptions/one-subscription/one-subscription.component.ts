import { Component, OnInit } from '@angular/core';
import { OperationalContainerComponent } from '../../../shared/operational-container/operational-container.component';
import { HttpClientModule } from '@angular/common/http';
import { OneSubscriptionService } from './one-subscription.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from '../../../shared/loader/loader.service';
import { ICompleteSubscription } from '../types';
import { AlertsService } from '../../../shared/alerts/alerts.service';

@Component({
  selector: 'app-one-subscription',
  standalone: true,
  imports: [OperationalContainerComponent, HttpClientModule],
  providers: [OneSubscriptionService],
  templateUrl: './one-subscription.component.html',
  styleUrl: './one-subscription.component.css',
})
export class OneSubscriptionComponent implements OnInit {
  constructor(
    private oneSubscriptionService: OneSubscriptionService,
    private activatedRoute: ActivatedRoute,
    private readonly loaderService: LoaderService,
    private readonly alertsService: AlertsService,
    private router: Router
  ) {}

  subscriptionId!: number;
  subscription!: ICompleteSubscription;

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
          console.log(res);
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
