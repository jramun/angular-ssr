import {Injectable} from '@angular/core';
import {PostRestRepository} from '../../../shared-module/repositories/post-rest.repository';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {PostActionType} from '../actions/post.action';
import {Action} from '@ngrx/store';
import {PostDbRepository} from "../../../shared-module/repositories/post-db.repository";

@Injectable()
export class PostEffects {

  @Effect()
  restFindAll: Observable<Action> = this.actions.pipe(
    ofType(PostActionType.REST_FIND_ALL),
    mergeMap(() =>
      this.postRestRepository.findAll().pipe(
        map((posts) => ({type: PostActionType.REFRESH, payload: posts})),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  dbFindAll: Observable<Action> = this.actions.pipe(
    ofType(PostActionType.DB_FIND_ALL),
    mergeMap(() => {
        console.log('hello db')
        return this.postDbRepository.findAll().pipe(
          map((post) => ({type: PostActionType.ADD, payload: post})),
          catchError(() => EMPTY)
        )
      }
    )
  );

  @Effect()
  create: Observable<Action> = this.actions.pipe(
    ofType(PostActionType.CREATE),
    mergeMap((value) => {
        // @ts-ignore
        console.log('hello create ' + JSON.stringify(value.payload))
        // @ts-ignore
        return this.postDbRepository.create(value.payload).pipe(map((result => ({
          type: PostActionType.ADD,
          payload: result
        }))));
      }
    )
  );


  constructor(
    private actions: Actions,
    private postRestRepository: PostRestRepository,
    private postDbRepository: PostDbRepository
  ) {
  }
}
