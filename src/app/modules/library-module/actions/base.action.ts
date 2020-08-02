import {Action} from "@ngrx/store";

export class BaseAction implements Action {
  public payload: any;
  public type: string;

  constructor(payload: any = null, type: string) {
    this.payload = payload;
    this.type = type;
  }

}
