import {Repository} from "./repository";
import {Observable} from "rxjs";
import {Filter} from "../entities/filter";
import {Page} from "../entities/page";
import {Predicates} from "../entities/predicates";
import {Pageable} from "../entities/pageable";

export abstract class LocalDbRepository<T> implements Repository<T> {

  create(t: T): Observable<T> {
    return undefined;
  }

  delete(id: number): Observable<any> {
    return undefined;
  }

  findAll(): Observable<T> {
    return undefined;
  }

  findByFilter(filter: Filter): Observable<Page<T>> {
    return undefined;
  }

  findByPredicate(predicates: Predicates, pageable: Pageable): Observable<Page<T>> {
    return undefined;
  }

  findOne(id: number): Observable<T> {
    return undefined;
  }

  update(id: number, t: T): Observable<T> {
    return undefined;
  }
}
