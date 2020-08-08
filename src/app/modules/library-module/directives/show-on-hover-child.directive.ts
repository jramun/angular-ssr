import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appShowOnHoverChild]'
})
export class ShowOnHoverChildDirective implements OnInit {

  private get element(): HTMLElement {
    return this.ref.nativeElement;
  }

  public constructor(private ref: ElementRef<HTMLElement>,
                     private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    this.hide();
    this.renderer.setStyle(this.element, 'transition', 'opacity .2s ease-out');
  }

  public show(): void {
    this.renderer.setStyle(this.element, 'opacity', '1');
  }

  public hide(): void {
    this.renderer.setStyle(this.element, 'opacity', '0');
  }

}
