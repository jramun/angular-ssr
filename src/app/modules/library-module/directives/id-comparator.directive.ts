import {Directive, OnInit} from '@angular/core';
import { MatSelect } from '@angular/material/select';

@Directive({
  selector: 'mat-select[appIdComparator]'
})
export class IdComparatorDirective implements OnInit {

  public constructor(private select: MatSelect) {
  }

  public ngOnInit(): void {
    this.select.compareWith = (o1, o2) => o1.id === o2.id;
  }

}
