import {ValidatorFn} from '@angular/forms';
import * as moment from 'jalali-moment';

// check kardane inke password o confirm password yeki hastan ya na
export function match(a: string, b: string): ValidatorFn {
  return group => {
    if (group.value[a] === group.value[b])
      return null;
    let control = group.get(b);
    control.setErrors({match: true});
  };
}

// validation matboot be taghvim k tarikhe payan az shoro kochik tar nabashe ya khali nabashe
export function dateConflict(start: string, end: string): ValidatorFn {
  return group => {
    let startValue = group.value[start];
    let endValue = group.value[end];
    if (!startValue || !endValue)
      return null;
    let startDate = moment(startValue);
    let endDate = moment(endValue);
    if (startDate.isBefore(endDate))
      return null;
    let control = group.get(end);
    control.setErrors({dateConflict: true});
  };
}

// regex passsword
export const password: ValidatorFn = control => {
  let regex = /^.{4,14}$/;
  return regex.test(control.value) ? null : {password: true};
};

// regex phone
export const phone: ValidatorFn = control => {
  let regex = /^09[0-9]{9}$/;
  return regex.test(control.value) ? null : {phone: true};
};
