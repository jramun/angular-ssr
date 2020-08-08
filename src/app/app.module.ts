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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
