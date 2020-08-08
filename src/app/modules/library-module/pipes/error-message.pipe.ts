import {Pipe, PipeTransform} from '@angular/core';
import {ValidationErrors} from '@angular/forms';
import {UtilityService} from "../services/utility.service";

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {

  public constructor(private utilityService: UtilityService) {
  }

  public transform(errors: ValidationErrors): string {
    return this.utilityService.errorMessage(errors);
  }

}
