import { Directive,ElementRef, Renderer, Input, AfterViewChecked} from '@angular/core';

@Directive({selector: '[headerAttrs]'})

export class NgTableHeaderAttrsDirective implements AfterViewChecked {
    @Input() headerAttrs:any;

    public constructor(private element:ElementRef, private renderer:Renderer) {}

    ngAfterViewChecked() {

        if(this.headerAttrs){
            this.headerAttrs.forEach( (value: any, index: number) => {
                const attrKey = Object.keys(value)[0];
                const attrValue = value[attrKey];
                this.element.nativeElement.setAttribute(attrKey, attrValue);       
            })
        }
    }
}