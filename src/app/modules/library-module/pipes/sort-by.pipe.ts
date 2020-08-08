import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  public transform<T>(collection: T[], ...iteratees: any[]): T[] {
    return this.sortBy(collection, ...iteratees);
  }

  private sortBy(collection: any[], ...iteratees: any[]): any[] {
    return _.sortBy(collection, ...iteratees);
  }

}
