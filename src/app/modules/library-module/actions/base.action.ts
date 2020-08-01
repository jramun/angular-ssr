import {Action} from "@ngrx/store";

export class BaseAction<T> implements Action {
  constructor(payload: T = null, type: string) {
    this._payload = payload;
    this._type = type;
  }

  private _payload: T;

  get payload(): T {
    return this._payload;
  }

  set payload(value: T) {
    this._payload = value;
  }

  private _type: string;

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
}
