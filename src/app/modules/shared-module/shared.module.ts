import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {PostRestRepository} from "./repositories/post-rest.repository";
import {EffectsModule} from "@ngrx/effects";
import {SharedEffects} from "./effects/shared.effects";
import {PostDbRepository} from "./repositories/post-db.repository";

@NgModule({
  imports: [
    HttpClientModule,
    EffectsModule.forFeature([SharedEffects])
  ],
  exports: [],
  declarations: [],
  providers: [PostRestRepository, PostDbRepository],
})
export class SharedModule {
}
