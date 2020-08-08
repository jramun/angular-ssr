import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: 'div[appBgImage]'
})
export class BgImageDirective implements OnInit {

  @Input()
  public set appBgImage(url: any) {
    this.renderer.setStyle(this.element, 'backgroundImage', `url("${url}")`);
    this.renderer.setStyle(this.element, 'backgroundColor', `white`);
  }

  private get element(): HTMLDivElement {
    return this.ref.nativeElement;
  }

  public constructor(private ref: ElementRef<HTMLDivElement>,
                     private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    this.element.classList.add('bg-cover', 'bg-center', 'bg-no-repeat');
  }

}
