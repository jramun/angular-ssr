export class BaseState<T> {
  public entityIds?: Array<number>
  public entities?: Array<T>
  public select?: T;

}
