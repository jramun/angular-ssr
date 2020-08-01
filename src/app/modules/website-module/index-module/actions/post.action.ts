import {BaseAction} from "../../../library-module/actions/base.action";
import {Post} from "../../../shared-module/entities/post";

export enum PostActionType {
  ADD = '[Post Page] Add',
  GET = '[Post Page] GET',
}

// export class PostActionAdd extends BaseAction<Post> {
//   constructor(private payload: Post) {
//     super(payload, PostActionType.ADD);
//   }
// }

export class PostActionGet extends BaseAction<Post> {
  constructor() {
    super(null, PostActionType.GET);
  }
}
