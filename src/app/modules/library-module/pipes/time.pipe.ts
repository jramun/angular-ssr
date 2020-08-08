import {Pipe, PipeTransform} from '@angular/core';
import {UtilityService} from "../services/utility.service";


@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  public constructor(private utilityService: UtilityService) {
  }

  public transform(time: number): string {
    return this.utilityService.format(time);
  }

}
