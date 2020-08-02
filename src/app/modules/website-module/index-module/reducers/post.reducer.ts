import {BaseAction} from "../../../library-module/actions/base.action";
import {PostEntity} from "../../../shared-module/entities/post.entity";
import {PostActionType} from "../actions/post.action";

export function PostReducer(state = [], action: BaseAction<PostEntity>) {
  switch (action.type) {
    case PostActionType.REFRESH: {
      console.log('[PostReducer].Refresh ' + action.payload)
      return action.payload;
    }
    default: {
      console.log('[PostReducer].Default ' + action.payload)
      return state;
    }
  }
}
