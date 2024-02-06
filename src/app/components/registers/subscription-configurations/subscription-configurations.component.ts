import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridHeaderComponent } from '../../shared/grid-header/grid-header.component';
import { subscriptionConfigurationsUtils } from './subscription-configurations.utils';
import { NgFor } from '@angular/common';
import { ITinySubscriptionConfiguration } from './types';
import { UpdateFormComponent } from '../../shared/update-form/update-form.component';
import { InputOneFormItemComponent } from '../../shared/input-one-form-item/input-one-form-item.component';

@Component({
  selector: 'app-subscription-configurations',
  standalone: true,
  imports: [
    RouterOutlet,
    GridHeaderComponent,
    UpdateFormComponent,
    InputOneFormItemComponent,
    NgFor,
  ],
  templateUrl: './subscription-configurations.component.html',
  styleUrl: './subscription-configurations.component.css',
})
export class SubscriptionConfigurationsComponent {
  @Input() allSubscriptionConfigurations: ITinySubscriptionConfiguration[] = [];

  headers = this.utils.headers;

  constructor(public utils: subscriptionConfigurationsUtils) {}
}
