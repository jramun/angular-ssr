import {Observable} from "rxjs";
import {Filter} from "../entities/filter";
import {Page} from "../entities/page";
import {Predicates} from "../entities/predicates";
import {Pageable} from "../entities/pageable";

export interface Repository<T> {

  findOne(id: number): Observable<T>

  findByFilter(filter: Filter): Observable<Page<T>>

  findByPredicate(predicates: Predicates, pageable: Pageable): Observable<Page<T>>

  findAll(): Observable<T[]>

  create(t: T): Observable<T>

  update(id: number, t: T): Observable<T>

  delete(id: number): Observable<any>
}
