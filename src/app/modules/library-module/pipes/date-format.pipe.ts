import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  public transform(value: any, format: string): string {
    const date = new Date(value);
    const m = moment(date);
    return m.format(format);
  }

}
