import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Filter} from "../entities/filter";
import {params} from "../utility/index.util"
import {Page} from "../entities/page";
import {Predicates} from "../entities/predicates";
import {Pageable} from "../entities/pageable";
import {Repository} from "./repository";

export abstract class RestRepository<T> implements Repository<T> {

  protected constructor(private url: string, private httpCt: HttpClient) {
  }

  public findOne(id: number): Observable<T> {
    return this.httpCt.get<T>(this.url + '/' + id);
  }

  public findByFilter(filter: Filter): Observable<Page<T>> {
    return this.httpCt.get<Page<T>>(this.url, {params: params(filter)});
  }

  public findByPredicate(predicates: Predicates, pageable: Pageable): Observable<Page<T>> {
    return this.httpCt.post(this.url, predicates, {params: params(pageable)})
  }

  public findAll(): Observable<T> {
    return this.httpCt.get<T>(this.url);
  }

  public create(t: T): Observable<T> {
    return this.httpCt.post<T>(this.url, t);
  }

  public update(id: number, t: T): Observable<T> {
    return this.httpCt.put<T>(this.url + '/' + id, t);
  }

  public delete(id: number): Observable<any> {
    return this.httpCt.delete<T>(this.url + '/' + id);
  }
}
