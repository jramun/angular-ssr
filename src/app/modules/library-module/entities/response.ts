export class Response<T> {
  private _data?: T;

  get data(): T {
    return this._data;
  }

  set data(value: T) {
    this._data = value;
  }

  public hasData(): boolean {
    return !!this._data;
  }
}
