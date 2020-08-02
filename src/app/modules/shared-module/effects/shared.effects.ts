import {Injectable} from "@angular/core";
import {Database} from "@ngrx/db";
import {Effect} from "@ngrx/effects";
import {defer, Observable} from "rxjs";
import {schema} from "../localdb/db";

@Injectable()
export class SharedEffects {

  @Effect({dispatch: false})
  openDB: Observable<any> = defer(() => {
    return this.database.open(schema.name);
  });

  constructor(private database: Database) {
  }


}
