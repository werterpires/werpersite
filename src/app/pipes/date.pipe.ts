import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
  standalone: true,
})
export class DatePipe implements PipeTransform {
  transform(date: string): string {
    return `${date.substring(8, 10)}/${date.substring(5, 7)}/${date.substring(
      0,
      4
    )}`;
  }
}
