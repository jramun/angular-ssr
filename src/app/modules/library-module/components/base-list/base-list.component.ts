import {Component, Input, OnInit} from '@angular/core';
import {AbstractListComponent} from "../abstract-list-component";

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.css']
})
export class BaseListComponent implements OnInit {
  // baraye title ei k mikhad toye search benvise
  @Input()
  public searchField: string;

  // vase inke dokme ADD ro neshon bede ya na
  @Input()
  public hideAdd: boolean;

  //  ye instance az khode on component migire ta be hame ajzaee on dastresi dashte bashe
  //  k in instance az noe AbstractListComponent hast ta hamme chizee k onja hast inam dashte bashe
  //  mesl : data , colomn va ...
  @Input()
  public instance: AbstractListComponent<any, any>;

  public constructor() {
  }

  public ngOnInit(): void {
  }

}
