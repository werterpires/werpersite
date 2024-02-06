import { Injectable } from '@angular/core';
import { IGridHeader } from '../../shared/grid-header/types';

@Injectable({
  providedIn: 'root',
})
export class subscriptionConfigurationsUtils {
  headers: IGridHeader[] = [
    {
      title: 'Data',
      size: 'smallHeader',
    },
    {
      title: 'Histórico',
      size: 'bigHeader',
    },
    {
      title: 'Número de empresas',
      size: 'smallHeader',
    },
    {
      title: 'Número de usuários',
      size: 'smallHeader',
    },

    {
      title: 'Valor',
      size: 'tinyHeader',
    },
  ];
}
