import {Component, Input, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {MatTableDataSource} from '@angular/material/table';
import * as _ from 'lodash';
import {BaseEntity} from "../../entities/base.entity";

export interface Columns<T extends BaseEntity> {

  [key: string]: Column<T>;

}

export interface Column<T extends BaseEntity> {

  key?: string;

  label?: string;

  type?: 'text' | 'image' | 'icon' | 'actions';

  position?: number;

  actions?: Actions<T>;

  value?(element: T): any;

  ngClass?(element: T): {

    [name: string]: boolean;

  };

}

export interface Actions<T extends BaseEntity> {

  [key: string]: Action<T>;

}

export interface Action<T extends BaseEntity> {

  tooltip: string;

  icon: {

    name: string;

    color: ThemePalette;

  };

  position?: number;

  click(element: T): void;

}

@Component({
  selector: 'app-base-list-table',
  templateUrl: './base-list-table.component.html',
  styleUrls: ['./base-list-table.component.css']
})
export class BaseListTableComponent<T extends BaseEntity> implements OnInit {

  // soton haye jadval
  public displayedColumns: string[];
  // dade haye jadval
  public dataSource = new MatTableDataSource<T>();

  public constructor() {
  }

  @Input()
  // dade haye har jadval k daryaft mikone
  public set data(data: T[]) {
    this.dataSource.data = data;
  }

  public _columns: Column<T>[];

  @Input()
  public set columns(columns: Columns<T>) {
    // inja column hayi ro ke behesh pas dade shode ro migire o
    //  tabdil mikone be key value
    let cols = Object.keys(columns)
      .filter(key => columns[key])
      .map(key => ({key, ...columns[key]}));
    // bar asase position ke dare inaro sort mikone
    this._columns = _.sortBy(cols, 'position');
    // inja miad key haro map mikone vase neshon dadaneshon toye title har column
    this.displayedColumns = this._columns.map(item => item.key);
  }

  public ngOnInit(): void {
  }

}
