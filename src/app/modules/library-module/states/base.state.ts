export class BaseState<T> {
  private _entityIds?: Array<number>

  get entityIds(): Array<number> {
    return this._entityIds;
  }

  set entityIds(value: Array<number>) {
    this._entityIds = value;
  }

  private _entities?: Array<T>

  get entities(): Array<T> {
    return this._entities;
  }

  set entities(value: Array<T>) {
    this._entities = value;
  }

  private _select?: T;

  get select(): T {
    return this._select;
  }

  set select(value: T) {
    this._select = value;
  }
}
