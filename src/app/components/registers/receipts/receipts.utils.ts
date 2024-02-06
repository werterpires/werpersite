import { Injectable } from '@angular/core';
import { IGridHeader } from '../../shared/grid-header/types';

@Injectable({
  providedIn: 'root',
})
export class ReceiptsUtils {
  headers: IGridHeader[] = [
    {
      title: 'Valor',
      size: 'tinyHeader',
    },
    {
      title: 'Código para pagamento',
      size: 'hugeHeader',
    },
    {
      title: 'Vencimento',
      size: 'smallHeader',
    },

    {
      title: 'Data de pagamento',
      size: 'smallHeader',
    },
    {
      title: 'Método de pagamento',
      size: 'mediumHeader',
    },
    {
      title: 'Autenticação do pagamento',
      size: 'hugeHeader',
    },
  ];
}
