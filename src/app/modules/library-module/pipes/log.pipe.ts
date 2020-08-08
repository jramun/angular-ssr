import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'log'
})
export class LogPipe implements PipeTransform {

  public transform<T>(t: T, ...args: any[]): T {
    // console.log(t, ...args);
    return t;
  }

}
