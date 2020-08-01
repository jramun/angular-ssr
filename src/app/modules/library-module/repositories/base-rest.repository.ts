import {RestRepository} from "./rest.repository";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

export abstract class BaseRestRepository<T> extends RestRepository<T> {

  protected constructor(private path: string, private http: HttpClient) {
    super(environment.apiUrl + "/" + path, http);
  }
}
