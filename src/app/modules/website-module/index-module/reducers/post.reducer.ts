import {BaseAction} from "../../../library-module/actions/base.action";
import {PostActionType} from "../actions/post.action";

export function PostReducer(state = [], action: BaseAction) {
  switch (action.type) {
    case PostActionType.REFRESH: {
      console.log('[PostReducer].Refresh ' + JSON.stringify(action.payload))
      return action.payload;
    }
    case PostActionType.ADD: {
      console.log('[PostReducer].Add ' + JSON.stringify(action.payload))
      console.log('[PostReducer].Add Array' + JSON.stringify([...state, action.payload]))
      return [...state, action.payload];
    }
    default: {
      console.log('[PostReducer].Default ' + JSON.stringify(action.payload))
      return state;
    }
  }
}
