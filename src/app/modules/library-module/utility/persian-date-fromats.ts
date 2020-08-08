import { MatDateFormats } from '@angular/material/core';
// formate date jalali
export const PERSIAN_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'jYYYY-jMM-jDD'
  },
  display: {
    dateInput: 'jYYYY-jMM-jDD',
    monthYearLabel: 'jYYYY jMMMM',
    dateA11yLabel: 'jYYYY-jMM-jDD',
    monthYearA11yLabel: 'jYYYY jMMMM'
  }
};
