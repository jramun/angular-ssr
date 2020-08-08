import {FormGroup} from '@angular/forms';
import {OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {UtilityService} from '../services/utility.service';
import * as _ from 'lodash';
import {BaseEntity} from "../entities/base.entity";
import {BaseService} from "../services/base.service";

// kolan inja ye seri tabe hast  ke hamishe to componet haye add kardan  niaz mishe
export abstract class AbstractAddComponent<T extends BaseEntity, S extends BaseService<T>> implements OnInit {

  public loading: boolean;

  public form: FormGroup;

  protected constructor(protected service: S,
                        protected utilityService: UtilityService,
                        // vase dastresi be on element
                        protected ref: MatDialogRef<AbstractAddComponent<T, S>, T>) {
  }

  // dakht form
  public ngOnInit(): void {
    this.form = this.createForm();
  }

  // vaghti form submit k shod ettelatesho vase tabe create mifreste
  public onSubmit(): void {
    let form = _.assign({}, this.form.value);
    let t = this.mapForm(form);
    this.loading = true;
    this.create(t)
    // moafagh bashe mire in tabe
      .then(res => this.handleResponse(res))
      .catch(err => this.handleError(err))
      .finally(() => this.loading = false);
  }

  protected abstract createForm(): FormGroup;
  // form ro return mikone
  protected mapForm(form: any): T {
    return form;
  }

  // ettalate form o mide be tabe crreate to base service ta add kone
  protected create(t: T): Promise<T> {
    return this.service.create(t);
  }

  // alerte moafagh
  protected handleResponse(t: T): void {
    this.utilityService.alert('اطلاعات مورد نظر با موفقیت افزوده شد');
    this.ref.close(t);
  }

  // alerte na moafagh
  protected handleError(error: any): void {
    this.utilityService.alert('متاسفانه در ارسال اطلاعات مورد نظر خطایی رخ داده است');
  }

}
