import { EventEmitter, ElementRef, Renderer } from '@angular/core';
export declare class NgTableFilteringDirective {
    ngTableFiltering: any;
    tableChanged: EventEmitter<any>;
    config: any;
    private element;
    private renderer;
    onChangeFilter(event: any): void;
    constructor(element: ElementRef, renderer: Renderer);
}
