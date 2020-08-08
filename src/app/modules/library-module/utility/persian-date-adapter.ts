import { DateAdapter } from '@angular/material/core';
import * as jalali from 'jalali-moment';
// tabdole taghvime moment be kalali 
//  kodesh az net bardashte shode
export class PersianDateAdapter extends DateAdapter<jalali.Moment> {

  constructor() {
    super();
    super.setLocale('fa');
  }

  getYear(date: jalali.Moment): number {
    return this.clone(date).jYear();
  }

  getMonth(date: jalali.Moment): number {
    return this.clone(date).jMonth();
  }

  getDate(date: jalali.Moment): number {
    return this.clone(date).jDate();
  }

  getDayOfWeek(date: jalali.Moment): number {
    return this.clone(date).day();
  }

  getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
    switch (style) {
      case 'long':
      case 'short':
        return jalali.localeData('fa').jMonths().slice(0);
      case 'narrow':
        return jalali.localeData('fa').jMonthsShort().slice(0);
    }
  }

  getDateNames(): string[] {
    const valuesArray = Array(31);
    for (let i = 0; i < 31; i++) {
      valuesArray[i] = String(i + 1);
    }
    return valuesArray;
  }

  getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    switch (style) {
      case 'long':
        return jalali.localeData('fa').weekdays().slice(0);
      case 'short':
        return jalali.localeData('fa').weekdaysShort().slice(0);
      case 'narrow':
        return ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'];
    }
  }

  getYearName(date: jalali.Moment): string {
    return this.clone(date).jYear().toString();
  }

  getFirstDayOfWeek(): number {
    return jalali.localeData('fa').firstDayOfWeek();
  }

  getNumDaysInMonth(date: jalali.Moment): number {
    return this.clone(date).jDaysInMonth();
  }

  clone(date: jalali.Moment): jalali.Moment {
    return date.clone().locale('fa');
  }

  createDate(year: number, month: number, date: number): jalali.Moment {
    if (month < 0 || month > 11) {
      throw Error(
        `Invalid month index "${month}". Month index has to be between 0 and 11.`
      );
    }
    if (date < 1) {
      throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
    }
    const result = jalali()
      .jYear(year).jMonth(month).jDate(date)
      .hours(0).minutes(0).seconds(0).milliseconds(0)
      .locale('fa');

    if (this.getMonth(result) !== month) {
      throw Error(`Invalid date ${date} for month with index ${month}.`);
    }
    if (!result.isValid()) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }

  today(): jalali.Moment {
    return jalali().locale('fa');
  }

  parse(value: any, parseFormat: string | string[]): jalali.Moment | null {
    if (value && typeof value === 'string') {
      return jalali(value, parseFormat, 'fa');
    }
    return value ? jalali(value).locale('fa') : null;
  }

  format(date: jalali.Moment, displayFormat: string): string {
    date = this.clone(date);
    if (!this.isValid(date)) {
      throw Error('JalaliMomentDateAdapter: Cannot format invalid date.');
    }
    return date.format(displayFormat);
  }

  addCalendarYears(date: jalali.Moment, years: number): jalali.Moment {
    return this.clone(date).add(years, 'jYear');
  }

  addCalendarMonths(date: jalali.Moment, months: number): jalali.Moment {
    return this.clone(date).add(months, 'jmonth');
  }

  addCalendarDays(date: jalali.Moment, days: number): jalali.Moment {
    return this.clone(date).add(days, 'jDay');
  }

  toIso8601(date: jalali.Moment): string {
    return this.clone(date).format();
  }

  isDateInstance(obj: any): boolean {
    return jalali.isMoment(obj);
  }

  isValid(date: jalali.Moment): boolean {
    return this.clone(date).isValid();
  }

  invalid(): jalali.Moment {
    return jalali.invalid();
  }

  deserialize(value: any): jalali.Moment | null {
    let date;
    if (value instanceof Date) {
      date = jalali(value);
    }
    if (typeof value === 'string') {
      if (!value) {
        return null;
      }
      date = jalali(value).locale('fa');
    }
    if (date && this.isValid(date)) {
      return date;
    }
    return super.deserialize(value);
  }

}
