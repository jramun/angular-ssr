import {Injectable} from "@angular/core";
import {PostEntity} from "../entities/post.entity";
import {BaseRestRepository} from "../../library-module/repositories/base-rest.repository";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PostRepository extends BaseRestRepository<PostEntity> {
  constructor(private httpClient: HttpClient) {
    super('posts', httpClient);
  }
}
