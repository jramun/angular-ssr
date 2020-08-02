import {BaseAction} from "../../../library-module/actions/base.action";
import {PostEntity} from "../../../shared-module/entities/post.entity";

export enum PostActionType {
  ADD = '[Post Page] Add',
  LOAD = '[Post Page] LOAD',
  REFRESH = '[Post Page] SYNC',
}

// export class PostActionAdd extends BaseAction<PostEntity> {
//   constructor(private payload: PostEntity) {
//     super(payload, PostActionType.ADD);
//   }
// }

export class PostActionLoad extends BaseAction<PostEntity[]> {
  constructor() {
    super(null, PostActionType.LOAD);
  }
}

export class PostActionRefresh extends BaseAction<PostEntity[]> {
  constructor(payload: PostEntity[]) {
    super(payload, PostActionType.REFRESH);
  }
}
