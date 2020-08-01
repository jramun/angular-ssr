import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {IndexModule} from "./index-module/index.module";


const routes: Routes = [
  {
    path: 'index',
    loadChildren: () => import('./index-module/index.module').then(value => value.IndexModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {
}

@NgModule({
  imports: [WebsiteRoutingModule, IndexModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class WebsiteModule {
}
