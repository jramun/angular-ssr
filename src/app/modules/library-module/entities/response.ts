export class Response<T> {
  public data?: T;

  public hasData(): boolean {
    return !!this.data;
  }
}
