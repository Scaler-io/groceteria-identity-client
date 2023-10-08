import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return moment.duration(value, 'seconds').hours().toString() + ' hr';
  }
}
