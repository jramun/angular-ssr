import {BaseAction} from "../../../library-module/actions/base.action";
import {PostEntity} from "../../../shared-module/entities/post.entity";

export enum PostActionType {
  REST_FIND_ALL = '[Post_Entity] REST_FIND_ALL',
  DB_FIND_ALL = '[Post_Entity] DB_FIND_ALL',
  ADD = '[Post_Entity] Add',
  CREATE = '[Post_Entity] CREATE',
  REFRESH = '[Post_Entity] SYNC',
}
