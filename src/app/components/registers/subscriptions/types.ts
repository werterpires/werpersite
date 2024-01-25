export interface ISubscription {
  subscriptionId: number;
  subscriptionTitle: string;
  subscriptionActive: boolean;
  validate: string;
}

export interface CreateSubscriptionDto {
  subscriptionTitle: string;
}
