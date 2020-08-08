import {ContentChild, Directive, HostListener, OnInit} from '@angular/core';
import {ShowOnHoverChildDirective} from './show-on-hover-child.directive';

@Directive({
  selector: '[appShowOnHoverParent]'
})
export class ShowOnHoverParentDirective implements OnInit {

  @ContentChild(ShowOnHoverChildDirective)
  public child: ShowOnHoverChildDirective;

  public constructor() {
  }

  public ngOnInit(): void {
  }

  @HostListener('mouseenter')
  public onEnter(): void {
    this.child.show();
  }

  @HostListener('mouseleave')
  public onLeave(): void {
    this.child.hide();
  }

}
