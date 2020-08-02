import {Component} from '@angular/core';
import {ContextService} from "../../../../library-module/services/context.service";
import {Store} from "@ngrx/store";
import {Post} from "../../../../shared-module/entities/post";
import {Observable} from "rxjs";
import {PostActionGet} from "../../actions/post.action";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  posts: Observable<Post[]> = this.store.select(state => state.posts);

  constructor(private store: Store<{ posts: Post[] }>, private contextService: ContextService) {
    // super(contextService)
  }


  onRefresh() {
    console.log(this.store)
    this.store.dispatch(new PostActionGet())
  }
}
