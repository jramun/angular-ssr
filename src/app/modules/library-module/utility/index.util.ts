import * as _ from 'lodash';

export function params(obj: any): any {
  const params = {};
  _.entries(obj)
    .forEach(entry => {
      const [key, value] = entry;
      if (value !== null && value !== undefined && value !== '') {
        params[key] = String(value);
      }
    });
  return params;
}
