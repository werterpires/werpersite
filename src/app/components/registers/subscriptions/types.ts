import { ITinyReceipt } from '../receipts/types';
import { ITinySubscriptionConfiguration } from '../subscription-configurations/types';

export interface ISubscription {
  subscriptionId: number;
  subscriptionTitle: string;
  subscriptionActive: boolean;
  validate: string;
}

export interface CreateSubscriptionDto {
  subscriptionTitle: string;
}

export interface UpdateSubscriptionDto {
  subscriptionTitle: string;
  subscriptionActive?: boolean;
  subscriptionId: number;
}

export interface ICompleteSubscription extends ISubscription {
  receipts: ITinyReceipt[];
  subscriptionConfigs: ITinySubscriptionConfiguration[];
}
