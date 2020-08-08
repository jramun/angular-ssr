import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  public transform<T>(collection: T[], predicate: any): T[] {
    return this.filter(collection, predicate);
  }

  private filter(collection: any[], predicate: any): any[] {
    return _.filter(collection, predicate);
  }

}
