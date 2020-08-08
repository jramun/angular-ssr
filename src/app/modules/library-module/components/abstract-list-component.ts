import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {UtilityService} from '../services/utility.service';
import {AbstractAddComponent} from './abstract-add-component';
import * as _ from 'lodash';
import {BaseEntity} from "../entities/base.entity";
import {Page} from "../entities/page";
import {Filter} from "../entities/filter";
import {Columns} from "./base-list-table/base-list-table.component";
import {BaseService} from "../services/base.service";
import {environment} from "../../../../environments/environment";

export abstract class AbstractListComponent<T extends BaseEntity, S extends BaseService<T>> implements OnInit {
  // ye nemone az khode hamin
  public instance = this;
  // soton haye jadval
  public columns: Columns<T>;
  // dade haye jadval
  public data: Page<T>;
  // oading vase baze zamani tool keshidane khondane ettelaat
  public loading: boolean;
  //  baraye gereftane ettelaat bar asas yek seri params
  public filter: Filter;

  protected constructor(
    // in service har componento mikhad chun url o .. har componet toshe
    protected service: S,
    // in service ham mikhad chon ye seri tabe haye koli mesl : alert o .. toshe
    protected utilityService: UtilityService,
    //  route har compnenti k  hastim toosh
    protected route: ActivatedRoute,
    //  route ro bara navigate mikhaym
    protected router: Router) {
  }

  public ngOnInit(): void {
    // aval k comonent initialize mishe mire toye in function k in tabe dakhel har componenti piyade sazi shode
    let columns = this.createColumns();
    if (columns) {
      _.values(columns)
        // bad miad be soton hayii k position nadaran bar asase index shon be tartib position mide
        .forEach((col, i) => col && (col.position = col.position || i));
      let defaultColumns = this.defaultColumns();
      //  bad miad columns haye har component ba defaultColumns hash tarkib mikone
      this.columns = _.merge(defaultColumns, columns);
    }
    // gereftane filteri k alan hast
    this.filter = this.initFilter();
    // load mikone ettelato
    this.load();
  }

  // bad azonja miad inja o in tabe ro ejra mikone
  public onAdd(): void {
    // modal ro baz mikone ba function openAddDialog() ke toye khode har component piyade shode
    let ref = this.openAddDialog();
    ref.afterClosed()
      // vaghti k baste shod (ettelaate jadid sabt shod dobare ettelaat load beshan)
      .subscribe(res => res && this.load());
  }

  // vaghti k dokme edit zade mishe miad inja behesh mige k be koja navigate beshe
  public onEdit(t: T): void {
    // be adressi ke hast be ezafe id navigate mishe route/id
    this.router.navigate([t.id], {relativeTo: this.route});
  }

  // vaghti ro dokme delete bezane miad inja
  public onDelete(t: T): void {
    // tabe confirm vase baz shodane dialog
    this.utilityService.confirm()
      .subscribe(confirmed => {
        // age taeed kar k mikhad hazf kone
        if (confirmed)
          // miad az toye base service ono hazf mikone
          this.service.delete(t.id)
            // age ba moafaghiat hazf beshe payam mideo dobare ettelaat load mishan
            .then(() => this.utilityService.alert('اطلاعات مورد نظر با موفقیت حذف شد'))
            .then(() => this.load())
            // age hazfam k nashe in message haro mide
            .catch(err => {
              if (err && err.error && err.error.type === 'RELATED')
                this.utilityService.alert('خطا در حذف! اطلاعات مورد نظر هم اکنون درحال استفاده است');
              else
                this.utilityService.alert('متاسفانه در حذف اطلاعات مورد نظر خطایی رخ داده است');
            });
      });
  }

  // in miad az ro localStorage tedade page haro mikhone ta ettalaat ba on asas biare dar vaghe ye seri

  //  mosavi 0 mizare , ta ettelaat motanaseb ba in filter az aval safhe aval biad
  public onFilter(obj: any): void {
    let filter = this.mapFilter(obj);
    _.assign(this.filter, filter, {page: 0});
    this.load();
  }

  //  va bad ettealat dbare load mishan
  public onPage(event: PageEvent): void {
    _.assign(this.filter, {
      size: event.pageSize,
      page: event.pageIndex
    });
    this.load();
  }

  protected abstract createColumns(): Columns<T>;

  protected abstract openAddDialog(): MatDialogRef<AbstractAddComponent<T, S>, T>;

  //  params vase filter
  protected initFilter(): Filter {
    let size = localStorage.getItem(environment.keyPageSize);
    return {
      size: size && parseInt(size) || 8,
      page: 0
    };
  }

  // vaghti karbar dokme addo mizane az base header list emit mishe mire to base list

  protected load(): void {
    this.loading = true;
    this.fetch()
      // age fetch natije bakhsh bashe mire toye tabe handleResponse
      .then(res => this.handleResponse(res))
      // age fetch natije bakhsh nabanshe mire toye tabe handleError
      .catch(err => this.handleError(err))
      //  va dar akahr k loading o false mikone , che success bashe che fail
      .finally(() => this.loading = false);
  }

  // harbar k ettelaat mikhan load beshan miad inja ta ba filter haye jadid ettelato begire
  protected fetch(): Promise<Page<T>> {
    return this.service.search(this.filter);
  }

  // dade haye har table ya harchizi inja toye data poor mishe
  protected handleResponse(response: Page<T>): void {
    this.data = response;
  }

  //  bad az map filter miad inja p filter haye jaddid o ba filter ghabli assign mikone o bad page ro

  // age tabe fetch natije nade miad inja
  protected handleError(error: any): void {
    this.utilityService.alert('متاسفانه در دریافت اطلاعات خطایی رخ داده است');
  }

  // har bar k filteri rokh mide (search) in tabe emit mishe k dakhel khode har compnent piyade shode
  protected mapFilter(obj: any): Filter {
    return obj;
  }

  // hatbar k pagination avaz mishe  miad inja va bad
  //  eetelate jadid mesle pagesize o page index ro be fiter assign mikone

  // inja yekseri column haye koli h hameja estefade mishe o sabete hamishe hast
  private defaultColumns(): Columns<T> {
    return {
      id: {
        label: 'شناسه',
        type: 'text',
        //  vase inke avale table bashe
        position: -Infinity
      },
      actions: {
        label: 'عملیات',
        type: 'actions',
        //  vase inke avale akhare
        position: Infinity,
        actions: {
          edit: {
            tooltip: 'ویرایش',
            position: 1,
            icon: {
              name: 'edit',
              color: 'accent'
            },
            // vaghti dokme edit zade beshe be in function mire
            click: element => this.onEdit(element)
          },
          delete: {
            tooltip: 'حذف',
            position: 2,
            icon: {
              name: 'delete',
              color: 'warn'
            },
            // vaghti dokme delete zade beshe be in function mire
            click: element => this.onDelete(element)
          }
        }
      }
    };
  }

}
