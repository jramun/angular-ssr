import {NgModule} from '@angular/core';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from './scaffold/header/header.component';
import {FooterComponent} from './scaffold/footer/footer.component';
import {SidebarComponent} from './scaffold/sidebar/sidebar.component';
import {PostReducer} from "./reducers/post.reducer";
import {PostEffects} from "./effects/post.effects.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";


const routes: Routes = [
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class IndexRoutingModule {
}

@NgModule({
  imports: [
    IndexRoutingModule,
    StoreModule.forFeature("posts", PostReducer),
    EffectsModule.forFeature([PostEffects])
  ],
  exports: [],
  declarations: [HomePageComponent],
  providers: [],
})
export class IndexModule {
}

