import {Injectable} from '@angular/core';
import {ValidationErrors} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material/snack-bar';
import {Observable} from 'rxjs';
import * as moment from 'moment';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  public constructor(private snackBar: MatSnackBar,
                     private dialog: MatDialog) {
  }

  // namayesh alert be hamrahe dokme bastan o message ham az birron behesh ersal mishe
  public alert(message: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, 'بستن', {duration: 3000});
  }

  // ye dialog bazikone vase har kari k lazeme mesl delet o logout o ..
  public confirm(title?: string, message?: string): Observable<boolean> {
    return new Observable();
  }

  // payam hayii k dar sorat validate naboodan haye mokhtalef chap mikone
  public errorMessage(errors: ValidationErrors): string {
    if (!errors)
      return '';
    let keys = Object.keys(errors);
    let key = keys[0];
    let value = errors[key];
    switch (key) {
      case 'required':
        return `ورودی نباید خالی باشد`;
      case 'email':
        return `ایمیل وارد شده صحیح نیست`;
      case 'min':
        return `ورودی نباید کوچکتر از ${value.min} باشد`;
      case 'max':
        return `ورودی نباید بزرگتر از ${value.max} باشد`;
      case 'minlength':
        return `طول ورودی نباید کمتر از ${value.requiredLength} باشد`;
      case 'maxlength':
        return `طول ورودی نباید بیشتر از ${value.requiredLength} باشد`;
      case 'match':
        return `کلمه های عبور یکسان نیستند`;
      case 'password':
        return `طول رمز باید بین 4 تا 14 باشد`;
      case 'matDatepickerParse':
        return `تاریخ وارد شده صحیح نیست`;
      case 'dateConflict':
        return `تاریخ پایان باید بعد از تاریخ شروع باشد`;
      case 'phone':
        return `شماره وارد شده صحیح نیست`;
      default:
        return `ورودی نادرست است`;
    }
  }

  // baraye namayesh saat : daghighe : saniye
  public format(time: number): string {
    if (isNaN(time))
      return '';
    let duration = moment.duration(time, 'seconds');
    let h = duration.hours();
    let m = duration.minutes();
    let s = duration.seconds();
    let hh = _.padStart(h + '', 2, '0');
    let mm = _.padStart(m + '', 2, '0');
    let ss = _.padStart(s + '', 2, '0');
    return (h ? hh + ':' : '') + mm + ':' + ss;
  }

}
