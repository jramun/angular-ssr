import {Injectable} from "@angular/core";
import {BaseDbRepository} from "../../library-module/repositories/base-db.repository";
import {PostEntity} from "../entities/post.entity";
import {Database} from "@ngrx/db";

@Injectable()
export class PostDbRepository extends BaseDbRepository<PostEntity> {
  constructor(private database: Database) {
    super('posts', database)
  }
}
