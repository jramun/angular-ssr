import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'sectionType'
})
export class SectionTypePipe implements PipeTransform {

  public constructor() {
  }

  public transform(): string {
    return '';
  }

}
