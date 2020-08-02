import {Predicate} from "./predicate";

export class Predicates {
  predicateWrappers?: Array<PredicateWrapper>

  public addPredicate(predicateWrapper: PredicateWrapper) {
    this.predicateWrappers.push(predicateWrapper);
  }
}

export class PredicateWrapper {
  predicate: Predicate;
  type: PredicateWrapper;
}

export enum PredicateWrapperType {
  AND, OR
}
