
//  in class dar vaghe base karhaye maast
//  tavabeei k besorate mikarar hame ja estefade shode mesl : get,post, put , ...
import {BaseEntity} from "../entities/base.entity";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Pageable} from "../entities/pageable";
import {Page} from "../entities/page";
import {Filter} from "../entities/filter";
import {params} from "../utility/index.util";

export abstract class BaseService<T extends BaseEntity> {

  protected baseUrl: string;

  protected constructor(protected name: string,
                        protected http: HttpClient) {
    // address asli k doye contact hast ba url hayi k az service marbot be
    // on component miad concat mikone ta har bar nanevise
    this.baseUrl = environment.apiUrl + '/' + name;
  }

  // sakhte yek item jadid
  public create(t: T): Promise<T> {
    return this.http.post<T>(this.baseUrl, t)
      .toPromise();
  }

  // gereftane ye item bar asase id
  public find(id: number): Promise<T> {
    return this.http.get<T>(this.baseUrl + '/' + id)
      .toPromise();
  }

  //  peyda kardane item ha bar asase pagination
  public findAll(pageable?: Pageable): Promise<Page<T>> {
    return this.http.get<Page<T>>(this.baseUrl, {params: params(pageable)})
      .toPromise();
  }

  //  peyda kardane item ha bar asase yek seri params(filter)
  public search(filter?: Filter): Promise<Page<T>> {
    return this.http.get<Page<T>>(this.baseUrl + '/search', {params: params(filter)})
      .toPromise();
  }

  // vaghti ye item ro virayesh mikonim miad in tabe
  public update(id: number, t: T): Promise<T> {
    return this.http.put<T>(this.baseUrl + '/' + id, t)
      .toPromise();
  }

  //  hazf ye item
  public delete(id: number): Promise<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id)
      .toPromise();
  }

  // olovaiat dadan be item ha
  public sequence(map: { [id: number]: number }): Promise<any> {
    return this.http.post<any>(this.baseUrl + '/sequences', map)
      .toPromise();
  }

  // gereftane ye list az ietem ha baz asase id
  public list(ids: number[]): Promise<T[]> {
    return this.http.get<T[]>(this.baseUrl + '/list', {params: {ids: ids.map(String)}})
      .toPromise();
  }

}
