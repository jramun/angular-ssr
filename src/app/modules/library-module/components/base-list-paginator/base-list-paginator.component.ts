import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {Pageable} from "../../entities/pageable";
import {Page} from "../../entities/page";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-base-list-paginator',
  templateUrl: './base-list-paginator.component.html',
  styleUrls: ['./base-list-paginator.component.css']
})
export class BaseListPaginatorComponent implements OnInit {
  // ettealate page : tedad, size o ...
  @Input()
  public pageable: Pageable;

  // toole kole safahati k dare
  @Input()
  public page: Page<any>;

  // vaghti taghiri toye agination ettefagh biofte in emit mishe
  @Output()
  public onPage = new EventEmitter<PageEvent>();

  public constructor() {
  }

  public ngOnInit(): void {
  }

  // vaghti click mikone o taghir mide pagination ro miad to in function
  public onPageEvent(event: PageEvent): void {
    // safheeii k mikhad bere masalan : index = 2
    this.onPage.emit(event);
    // mikhad chandta chandta bebine
    let size = String(event.pageSize);
    // ini k mikhad chandta chandta bebine ro to local storage mizarim
    // ta dafe bad ham k omad hamon joori bebine
    localStorage.setItem(environment.keyPageSize, size);
  }

}
