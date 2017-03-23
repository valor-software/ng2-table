import { Directive, ElementRef, Input, AfterViewChecked } from '@angular/core';

@Directive({ selector: '[headerAttrs]' })

export class NgTableHeaderAttrsDirective implements AfterViewChecked {
  @Input() private headerAttrs: any;

  public constructor(private element: ElementRef) { }

  public ngAfterViewChecked(): void {

    if (this.headerAttrs) {
      this.headerAttrs.forEach((value: any) => {
        const attrKey = Object.keys(value)[0];
        const attrValue = value[attrKey];
        this.element.nativeElement.setAttribute(attrKey, attrValue);
      });
    }

  }
}
