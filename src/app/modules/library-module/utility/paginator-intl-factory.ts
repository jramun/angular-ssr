import { MatPaginatorIntl } from '@angular/material/paginator';

// ettelaate text pagination
export function paginatorIntlFactory(): MatPaginatorIntl {
  let intl = new MatPaginatorIntl();
  intl.firstPageLabel = 'صفحه اول';
  intl.lastPageLabel = 'صفحه آخر';
  intl.nextPageLabel = 'صفحه بعد';
  intl.previousPageLabel = 'صفحه قبل';
  intl.itemsPerPageLabel = 'تعداد نمایش در صفحه';
  intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    let totalPages = Math.ceil(length / pageSize);
    return `صفحه ${page + 1} از ${totalPages} [تعداد کل موارد ${length}]`;
    // if (length === 0 || pageSize === 0)
    //   return `0 از ${length}`;
    // length = Math.max(length, 0);
    // let startIndex = page * pageSize;
    // let endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    // return `${startIndex + 1} تا ${endIndex} از ${length}`;
  };
  return intl;
}
