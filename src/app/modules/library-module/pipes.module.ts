import {NgModule} from '@angular/core';
import {DateFormatPipe} from './pipes/date-format.pipe';
import {FilterByPipe} from './pipes/filter-by.pipe';
import {ShufflePipe} from './pipes/shuffle.pipe';
import {SortByPipe} from './pipes/sort-by.pipe';
import {DataUrlPipe} from './pipes/data-url.pipe';
import {ErrorMessagePipe} from './pipes/error-message.pipe';
import {ResourceUrlPipe} from './pipes/resource-url.pipe';
import {ResourceImageUrlPipe} from './pipes/resource-image-url.pipe';
import {ItemTypePipe} from './pipes/item-type.pipe';
import {LogPipe} from './pipes/log.pipe';
import {TimePipe} from './pipes/time.pipe';
import {SectionTypePipe} from './pipes/section-type.pipe';

@NgModule({
  declarations: [
    DateFormatPipe,
    FilterByPipe,
    ShufflePipe,
    SortByPipe,
    DataUrlPipe,
    ErrorMessagePipe,
    ResourceUrlPipe,
    ResourceImageUrlPipe,
    ItemTypePipe,
    LogPipe,
    TimePipe,
    SectionTypePipe
  ],
  exports: [
    DateFormatPipe,
    FilterByPipe,
    ShufflePipe,
    SortByPipe,
    DataUrlPipe,
    ErrorMessagePipe,
    ResourceUrlPipe,
    ResourceImageUrlPipe,
    ItemTypePipe,
    LogPipe,
    TimePipe
  ]
})
export class PipesModule {
}
