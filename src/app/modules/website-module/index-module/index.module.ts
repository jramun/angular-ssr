import {NgModule} from '@angular/core';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from './scaffold/header/header.component';
import {FooterComponent} from './scaffold/footer/footer.component';
import {SidebarComponent} from './scaffold/sidebar/sidebar.component';
import {StoreModule} from '@ngrx/store';
import {PostReducer} from "./reducers/post.reducer";
import {EffectsModule} from "@ngrx/effects";
import {PostEffects} from "./effects/post-effects.service";


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
    StoreModule.forRoot({posts: PostReducer})
  ],
  exports: [],
  declarations: [HomePageComponent],
  providers: [],
})
export class IndexModule {
}

