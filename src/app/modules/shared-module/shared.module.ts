import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {PostRepository} from "./repositories/post.repository";

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  declarations: [],
  providers: [PostRepository],
})
export class SharedModule {
}
