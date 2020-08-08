import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-base-list-header',
  templateUrl: './base-list-header.component.html',
  styleUrls: ['./base-list-header.component.css']
})
export class BaseListHeaderComponent implements OnInit {

  // esmi k dakhele jostojo miniviseh
  @Input()
  public field: string;

  // baraye namayesh ya adame namayesh loading
  @Input()
  public loading: boolean;

  // baraye namayesh ya adame namayesh filter
  @Input()
  public filter = true;

  // baraye namayesh ya adame namayesh dokme ADD
  @Input()
  public hideAdd: boolean;

  // vaghti afzodano mizane in emit mishe
  @Output()
  public onAdd = new EventEmitter<void>();

  // vaghti jostojoro mizane in emit mishe
  @Output()
  public onFilter = new EventEmitter<any>();

  // vase sakhtane form search(filter)
  public form: FormGroup;

  // gereftane form search
  public get search(): AbstractControl {
    return this.form.get('search');
  }

  public constructor(private formBuilder: FormBuilder) {
  }

  // meghdar dehi avalie k form khali bashe
  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: ''
    });
  }

}
