import { ApplicationRef, ComponentResolver, DoCheck, ElementRef, EventEmitter, Injector, IterableDiffers, OnInit } from '@angular/core';
export declare class NgTableComponent implements DoCheck, OnInit {
    rows: Array<any>;
    config: any;
    tableChanged: EventEmitter<any>;
    columns: Array<any>;
    private appRef;
    private compiler;
    private elementRef;
    private injector;
    private differ;
    private classMap;
    constructor(appRef: ApplicationRef, compiler: ComponentResolver, elementRef: ElementRef, injector: Injector, differs: IterableDiffers);
    ngOnInit(): void;
    ngDoCheck(): void;
    private renderColumnTemplates();
    configColumns: any;
    private _columns;
    onChangeTable(column: any): void;
    getData(row: any, propertyName: string): string;
}
