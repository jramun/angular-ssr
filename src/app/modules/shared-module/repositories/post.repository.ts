import {Injectable} from "@angular/core";
import {Post} from "../entities/post";
import {BaseRestRepository} from "../../library-module/repositories/base-rest.repository";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PostRepository extends BaseRestRepository<Post> {
  constructor(private httpClient: HttpClient) {
    super('posts', httpClient);
  }
}
