import {BaseAction} from "../../../library-module/actions/base.action";
import {Post} from "../../../shared-module/entities/post";
import {PostActionType} from "../actions/post.action";

export function PostReducer(state = [], action: BaseAction<Post>) {
  switch (action.type) {
    case PostActionType.GET:
      return [...state, action.payload]
    default:
      return state;
  }
}
