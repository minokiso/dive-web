import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utcToLocal',
  standalone: true,
})
export class UtcToLocalPipe implements PipeTransform {
  transform(utcTime: string): string {
    const date = new Date(utcTime + 'Z');
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    const localTime = date.toLocaleTimeString([], options);
    return localTime;
  }
}
