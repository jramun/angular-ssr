import {Injectable} from "@angular/core";
import {PostRepository} from "../../../shared-module/repositories/post.repository";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {PostActionType} from "../actions/post.action";

@Injectable()
export class PostEffects {

  loadPosts = createEffect(() => this.actions.pipe(
    ofType(PostActionType.GET),
    mergeMap(() => this.postRepository.findAll()
      .pipe(
        map(movies => ({type: '[Movies API] Movies Loaded Success', payload: movies})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions: Actions, private postRepository: PostRepository) {
  }
}
