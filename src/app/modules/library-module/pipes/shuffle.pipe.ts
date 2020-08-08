import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'shuffle'
})
export class ShufflePipe implements PipeTransform {

  public transform<T>(collection: T[]): T[] {
    return _.shuffle<T>(collection);
  }

}
