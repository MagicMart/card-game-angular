import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padStart',
})
export class ZeroPadPipe implements PipeTransform {
  transform(value: number, pad: number): any {
    return String(value).padStart(pad, '0');
  }
}
