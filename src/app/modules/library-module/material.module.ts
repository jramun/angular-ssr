import {NgModule} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports: [MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressBarModule],
  declarations: [],
  providers: [],
})
export class MaterialModule {
}
