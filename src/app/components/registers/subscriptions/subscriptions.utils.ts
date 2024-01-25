import { IGridHeader } from '../../shared/grid-header/types';
import { CreateSubscriptionDto } from './types';

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
