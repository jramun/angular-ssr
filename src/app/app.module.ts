import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LibraryModule} from './modules/library-module/library.module';
import {SharedModule} from './modules/shared-module/shared.module';
import {WebsiteModule} from './modules/website-module/website.module';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {DBModule} from "@ngrx/db";
import {schema} from "./modules/shared-module/localdb/db";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    LibraryModule,
    SharedModule,
    DBModule.provideDB(schema),
    WebsiteModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
