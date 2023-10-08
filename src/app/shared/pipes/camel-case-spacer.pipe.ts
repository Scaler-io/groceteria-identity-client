import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseSpacer',
})
export class CamelCaseSpacerPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    var transformedValue = '';
    for (let i = 0; i < value.length; i++) {
      if (this.isCapLetter(value, i)) {
        transformedValue += ` ${value.charAt(i)}`;
      } else {
        transformedValue += value.charAt(i);
      }
    }
    return transformedValue;
  }

  public isCapLetter(value: string, index: number) {
    return value.charCodeAt(index) >= 65 && value.charCodeAt(index) <= 90;
  }
}
