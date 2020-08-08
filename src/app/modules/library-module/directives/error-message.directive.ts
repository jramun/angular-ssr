import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {UtilityService} from "../services/utility.service";

@Directive({
  selector: 'mat-error[appErrorMessage]'
})
export class ErrorMessageDirective implements OnInit {

  @Input()
  public appErrorMessage: AbstractControl;

  public constructor(private ref: ElementRef<HTMLElement>,
                     private utilityService: UtilityService) {
  }

  public ngOnInit(): void {
    this.appErrorMessage.valueChanges.subscribe(() => this.onChange());
    this.appErrorMessage.statusChanges.subscribe(() => this.onChange());
    this.onChange();
  }

  private onChange(): void {
    this.ref.nativeElement.innerText = this.utilityService.errorMessage(this.appErrorMessage.errors);
  }

}
