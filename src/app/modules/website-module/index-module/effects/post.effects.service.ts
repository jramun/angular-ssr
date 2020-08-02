import {Injectable} from '@angular/core';
import {PostRepository} from '../../../shared-module/repositories/post.repository';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {PostActionRefresh, PostActionType} from '../actions/post.action';
import {Action} from '@ngrx/store';
import {PostEntity} from "../../../shared-module/entities/post.entity";

@Injectable()
export class PostEffects {

  @Effect()
  findAll: Observable<Action> = this.actions.pipe(
    ofType(PostActionType.LOAD),
    mergeMap(() =>
      this.postRepository.findAll().pipe(
        map((posts) => (new PostActionRefresh(posts))),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(
    private actions: Actions,
    private postRepository: PostRepository
  ) {
  }
}
