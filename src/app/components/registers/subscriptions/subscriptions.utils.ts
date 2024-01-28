import { IGridHeader } from '../../shared/grid-header/types';
import {
  CreateSubscriptionDto,
  ISubscription,
  UpdateSubscriptionDto,
} from './types';
import { IFormErrors } from '../../shared/form-error/types';
import { Injectable } from '@angular/core';
import { Validates } from '../../shared/utils/validates';
import { AlertsService } from '../../shared/alerts/alerts.service';

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
      size: 'miniHeader',
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
      active: [],
    },
  };

  updateFormErros: IFormErrors = {
    subscriptionTitle: {
      errorText: ['O título da assinatura deve ter entre 3 e 100 caracteres'],
      active: [],
    },

    subscriptionActive: {
      errorText: ['Não é possível alterar a assinatura.'],
      active: [],
    },

    subscriptionId: {
      errorText: ['Não é possível alterar a assinatura.'],
      active: [],
    },
  };

  constructor(private alertsService: AlertsService) {}

  newUpdateSubscriptionData(
    subscription: ISubscription
  ): UpdateSubscriptionDto {
    return {
      subscriptionId: subscription.subscriptionId,
      subscriptionTitle: subscription.subscriptionTitle,
      subscriptionActive: subscription.subscriptionActive,
    };
  }

  validateCreateForm(createSubscriptionData: CreateSubscriptionDto): boolean {
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

    if (errorMessage.length > 0) {
      this.alertsService.showAlerts(
        'error',
        'Erro ao criar a assinatura',
        errorMessage
      );
      return false;
    }
    return true;
  }

  validateUpdateForm(updateSubscriptionData: UpdateSubscriptionDto): boolean {
    let errorMessages = [];
    if (
      !Validates.validateMinMax(
        3,
        100,
        updateSubscriptionData.subscriptionTitle
      )
    ) {
      errorMessages.push(
        'O título da assinatura deve ter entre 3 e 100 caracteres'
      );
    }
    if (
      !Validates.validateIsBoolean(updateSubscriptionData.subscriptionActive)
    ) {
      errorMessages.push('Não é possível alterar a assinatura.');
    }
    if (!Validates.validateIsNumber(updateSubscriptionData.subscriptionId)) {
      errorMessages.push('Não é possível alterar a assinatura.');
    }

    if (errorMessages.length > 0) {
      this.alertsService.showAlerts(
        'error',
        'Erro ao atualizar a assinatura',
        errorMessages
      );
      return false;
    }
    return true;
  }
}
