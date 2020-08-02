import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LibraryModule} from "./modules/library-module/library.module";
import {SharedModule} from "./modules/shared-module/shared.module";
import {WebsiteModule} from "./modules/website-module/website.module";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {PostEffects} from "./modules/website-module/index-module/effects/post-effects.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    LibraryModule,
    EffectsModule.forRoot([PostEffects]),
    SharedModule,
    WebsiteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
