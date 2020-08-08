import {Pipe, PipeTransform} from '@angular/core';
import {Resource} from "../entities/resource";


@Pipe({
  name: 'resourceImageUrl'
})
export class ResourceImageUrlPipe implements PipeTransform {

  public constructor() {
  }

  public transform(resource: Resource): any {
    return ''
  }
}
