import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShorten',
})
export class TextShortenPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value.length < 15) {
      return;
    }

    return value.slice(0, 50) + '...';
  }
}
