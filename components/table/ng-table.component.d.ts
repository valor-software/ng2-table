import { ApplicationRef, ComponentResolver, ElementRef, EventEmitter, Injector, OnInit } from '@angular/core';
export declare class NgTableComponent implements OnInit {
    rows: Array<any>;
    config: any;
    tableChanged: EventEmitter<any>;
    columns: Array<any>;
    private appRef;
    private compiler;
    private elementRef;
    private injector;
    private classMap;
    constructor(appRef: ApplicationRef, compiler: ComponentResolver, elementRef: ElementRef, injector: Injector);
    ngOnInit(): void;
    configColumns: any;
    private _columns;
    onChangeTable(column: any): void;
    getData(row: any, propertyName: string): string;
}
