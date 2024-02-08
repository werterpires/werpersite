import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeStamps',
  standalone: true,
})
export class TimeStampsPipe implements PipeTransform {
  transform(value: string | null): string {
    if (!value) {
      return '';
    }
    const date = new Date(value);

    const formatedData = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    return formatedData;
  }
}
