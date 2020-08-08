import {NgModule} from '@angular/core';
import {ContextService} from "./services/context.service";
import {UtilityService} from "./services/utility.service";
import {BaseEditHeaderComponent} from "./components/base-edit-header/base-edit-header.component";
import {BaseListComponent} from "./components/base-list/base-list.component";
import {BaseListHeaderComponent} from "./components/base-list-header/base-list-header.component";
import {BaseListPaginatorComponent} from "./components/base-list-paginator/base-list-paginator.component";
import {BaseListTableComponent} from "./components/base-list-table/base-list-table.component";
import {BaseSecurityComponent} from "./components/base-security/base-security.component";
import {MaterialModule} from "./material.module";
import {CommonModule} from "@angular/common";
import {BgImageDirective} from "./directives/bg-image.directive";
import {ErrorMessageDirective} from "./directives/error-message.directive";
import {IdComparatorDirective} from "./directives/id-comparator.directive";
import {ShowOnHoverChildDirective} from "./directives/show-on-hover-child.directive";
import {ShowOnHoverParentDirective} from "./directives/show-on-hover-parent.directive";
import {ReactiveFormsModule} from "@angular/forms";
import {PipesModule} from "./pipes.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    PipesModule,

  ],
  exports: [BaseEditHeaderComponent, ShowOnHoverParentDirective, ShowOnHoverChildDirective, IdComparatorDirective, ErrorMessageDirective, BgImageDirective, BaseSecurityComponent,
    BaseListTableComponent, BaseListComponent, BaseListHeaderComponent, BaseListPaginatorComponent],
  declarations: [BaseEditHeaderComponent, ShowOnHoverParentDirective, ShowOnHoverChildDirective, IdComparatorDirective, ErrorMessageDirective, BgImageDirective, BaseSecurityComponent,
    BaseListTableComponent, BaseListComponent, BaseListHeaderComponent, BaseListPaginatorComponent],
  providers: [ContextService, UtilityService],
})
export class LibraryModule {
}
