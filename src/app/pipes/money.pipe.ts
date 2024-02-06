import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
  standalone: true,
})
export class MoneyPipe implements PipeTransform {
  transform(value: number | string): unknown {
    value = value.toString().replace(/\D/g, '');
    value = value.toString().replace(/(\d)(\d{8})$/, '$1.$2');
    value = value.toString().replace(/(\d)(\d{5})$/, '$1.$2');
    value = value.toString().replace(/(\d)(\d{2})$/, '$1,$2');
    return 'R$ ' + value;
  }
}
