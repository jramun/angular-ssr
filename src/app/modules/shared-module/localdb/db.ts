import { DBSchema } from '@ngrx/db';

export const schema: DBSchema = {
  version: 1,
  name: 'post_store',
  stores: {
    books: {
      autoIncrement: true,
      primaryKey: 'id',
    },
  },
};
