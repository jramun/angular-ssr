import {Pipe, PipeTransform} from '@angular/core';
import {Resource} from "../entities/resource";


@Pipe({
  name: 'resourceUrl'
})
export class ResourceUrlPipe implements PipeTransform {

  public constructor() {
  }

  // public constructor(private resourceService: ResourceService) {
  // }

  public transform(resource: Resource): string {
    console.log('resource-url pipe');
    return '';
    // return this.resourceService.resourceUrl(resource);
  }

}
