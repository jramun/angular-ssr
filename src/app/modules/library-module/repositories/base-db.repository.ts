import {Repository} from "./repository";
import {Observable} from "rxjs";
import {Filter} from "../entities/filter";
import {Page} from "../entities/page";
import {Predicates} from "../entities/predicates";
import {Pageable} from "../entities/pageable";
import {Database} from "@ngrx/db";

export class BaseDbRepository<T> implements Repository<T> {

  constructor(protected name: string, private db: Database) {
  }

  create(t: T): Observable<T> {
    console.log('base db ' + this.name + " " + t + " " + this.db)
    return this.db.insert(this.name, [t]);
  }

  delete(id: number): Observable<any> {
    return this.db.executeWrite(this.name, 'delete', [id]);
  }

  findAll(): Observable<T[]> {
    return this.db.query(this.name);
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
