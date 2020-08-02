import {Component} from '@angular/core';
import {ContextService} from "../../../../library-module/services/context.service";
import {Store} from "@ngrx/store";
import {PostEntity} from "../../../../shared-module/entities/post.entity";
import {Observable} from "rxjs";
import {PostActionLoad} from "../../actions/post.action";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  posts: Observable<PostEntity[]> = this.store.select(state => state.posts);

  constructor(private store: Store<{ posts: PostEntity[] }>, private contextService: ContextService) {
    // super(contextService)
  }


  onRefresh() {
    this.store.dispatch(new PostActionLoad())
  }
}
