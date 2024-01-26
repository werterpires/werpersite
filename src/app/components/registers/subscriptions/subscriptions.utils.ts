import { isSubscription } from 'rxjs/internal/Subscription';
import { IGridHeader } from '../../shared/grid-header/types';
import {
  CreateSubscriptionDto,
  ISubscription,
  UpdateSubscriptionDto,
} from './types';

export const headers: IGridHeader[] = [
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

export const createSubscriptionData: CreateSubscriptionDto = {
  subscriptionTitle: '',
};

export function newUpdateSubscriptionData(
  subscription: ISubscription
): UpdateSubscriptionDto {
  return {
    subscriptionId: subscription.subscriptionId,
    subscriptionTitle: subscription.subscriptionTitle,
    subscriptionActive: subscription.subscriptionActive,
  };
}
