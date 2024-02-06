import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridHeaderComponent } from '../../shared/grid-header/grid-header.component';
import { subscriptionConfigurationsUtils } from './subscription-configurations.utils';
import { NgFor } from '@angular/common';
import { ITinySubscriptionConfiguration } from './types';
import { UpdateFormComponent } from '../../shared/update-form/update-form.component';
import { InputFormItemComponent } from '../../shared/input-form-item/input-form-item.component';

@Component({
  selector: 'app-subscription-configurations',
  standalone: true,
  imports: [
    RouterOutlet,
    GridHeaderComponent,
    UpdateFormComponent,
    InputFormItemComponent,
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
