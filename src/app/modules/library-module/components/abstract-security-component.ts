import {OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

// in bstract classi hast k toye component haye security sabete
export abstract class AbstractSecurityComponent implements OnInit {

  public form: FormGroup;

  protected abstract createForm(): FormGroup;

  public abstract onSubmit(): void;

  // crear kardane form
  public ngOnInit(): void {
    this.form = this.createForm();
  }

}
