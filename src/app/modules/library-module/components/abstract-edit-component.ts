import {OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UtilityService} from '../services/utility.service';
import * as _ from 'lodash';
import {BaseEntity} from "../entities/base.entity";
import {BaseService} from "../services/base.service";

export interface Forms {

  [name: string]: FormGroup;

}
// kolan inja ye seri tabe hast  ke hamishe to componet haye edit kardan  niaz mishe
export abstract class AbstractEditComponent<T extends BaseEntity, S extends BaseService<T>> implements OnInit {

  public id: number;

  public forms: Forms;

  public loading: boolean;

  protected constructor(protected service: S,
                        protected route: ActivatedRoute,
                        protected utilityService: UtilityService) {
  }

  protected abstract createForms(): Forms;

  public ngOnInit(): void {
    // gereftan id e k gharare edit beshe
    this.id = parseInt(this.route.snapshot.params.id);
    // sakhtorm
    this.forms = this.createForms();
    // load etteaalat
    this.load();
  }

  protected load(): void {
    this.fetch()
      .then(res => {
        // age natije bakhsh bashe tabe detch mire to in tabe
        this.handleFetchResponse(res);
      })
      // age natije bakhsh nabashe tabe detch mire to in tabe
      .catch(err => this.handleFetchError(err));
  }

  // id i itemo be tabe find , base service mide o ettelatesho migire
  protected fetch(): Promise<T> {
    return this.service.find(this.id);
  }

  protected handleFetchResponse(response: T): void {
    for (let name in this.forms)
    // inja mire vase por kardane ettelaat bar asase name har form
    //  k do ta no form darim : basic , video
      this.patchForm(name, response);
  }

  protected patchForm(name: string, t: T): void {
    // inja ba asase name har form ettelatesho poor mikone
    let form = this.forms[name];
    form.patchValue(t);
  }

  // age tabe fetch natije bakhsh nabashe ino chap mikone
  protected handleFetchError(error: any): void {
    this.utilityService.alert('متاسفانه در دریافت اطلاعات مورد نظر خطایی رخ داده است');
  }

  public onSubmit(name: string): void {
    this.loading = true;
    this.fetch()
      // amire toye tabe sabmit
      .then(t => this.submit(name, t))
      // mire to tabe update
      .then(t => this.update(name, t))
      // payaem success mide
      .then(res => this.handleUpdateResponse(name, res))
      .catch(err => this.handleUpdateError(name, err))
      .finally(() => this.loading = false);
  }

  protected submit(name: string, t: T): T {
    // esme form ro mide be  tabe mapForm
    let data = this.mapForm(name);
    //  bad miad meghdare jadid form o ba ghabli assing mikone
    return _.assign(t, data);
  }

  protected mapForm(name: string): T {
    let form = this.forms[name];
    // meghdare on form ro barmigardone
    return _.assign({}, form.value);
  }

  // update mikone oni k virayesh shode ba etteaate jadid
  protected update(name: string, t: T): Promise<T> {
    return this.service.update(this.id, t);
  }

  protected handleUpdateResponse(name: string, response: T): void {
    let form = this.forms[name];
    // ettealete form update mishe
    form.markAsPristine();
    this.utilityService.alert('اطلاعات مورد نظر با موفقیت بروزرسانی شد');
  }

  protected handleUpdateError(name: string, error: any): void {
    this.utilityService.alert('متاسفانه در بروزرسانی اطلاعات مورد نظر خطایی رخ داده است');
  }

}
