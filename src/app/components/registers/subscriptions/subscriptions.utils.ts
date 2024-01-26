import { IGridHeader } from '../../shared/grid-header/types';
import {
  CreateSubscriptionDto,
  ISubscription,
  UpdateSubscriptionDto,
} from './types';
import { IFormErrors } from '../../shared/form-error/types';
import { Injectable } from '@angular/core';
import { Validates } from '../../shared/utils/validates';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsUtils {
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

  createSubscriptionData: CreateSubscriptionDto = {
    subscriptionTitle: '',
  };

  createFormErros: IFormErrors = {
    subscriptionTitle: {
      errorText: ['O título da assinatura deve ter entre 3 e 100 caracteres'],
      active: true,
    },
  };

  newUpdateSubscriptionData(
    subscription: ISubscription
  ): UpdateSubscriptionDto {
    return {
      subscriptionId: subscription.subscriptionId,
      subscriptionTitle: subscription.subscriptionTitle,
      subscriptionActive: subscription.subscriptionActive,
    };
  }

  validateCreateForm(createSubscriptionData: CreateSubscriptionDto) {
    let errorMessage = [];
    if (
      !Validates.validateMinMax(
        3,
        100,
        createSubscriptionData.subscriptionTitle
      )
    ) {
      errorMessage.push(
        'O título da assinatura deve ter entre 3 e 100 caracteres'
      );
    }
    return errorMessage;
  }
}
