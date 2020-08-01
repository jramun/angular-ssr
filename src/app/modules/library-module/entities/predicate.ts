export class Predicate {
  private filed?: string;
  private value?: string;
  private type?: PredicateType = PredicateType.EQ;

  constructor(filed: string, value: string, type: PredicateType = PredicateType.EQ) {
    this.filed = filed;
    this.value = value;
    this.type = type;
  }
}

export enum PredicateType {
  NOT, EQ, LIKE
}
