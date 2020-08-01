import {Predicate} from "./predicate";

export class Predicates {
  private _predicateWrappers?: Array<PredicateWrapper>

  get predicateWrappers(): Array<PredicateWrapper> {
    return this._predicateWrappers;
  }

  set predicateWrappers(value: Array<PredicateWrapper>) {
    this._predicateWrappers = value;
  }

  public addPredicate(predicateWrapper: PredicateWrapper) {
    this._predicateWrappers.push(predicateWrapper);
  }
}

export class PredicateWrapper {
  private predicate: Predicate;
  private type: PredicateWrapper;
}

export enum PredicateWrapperType {
  AND, OR
}
