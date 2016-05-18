import { OnInit } from '@angular/core';
export declare class TableDemoComponent implements OnInit {
    rows: Array<any>;
    columns: Array<any>;
    page: number;
    itemsPerPage: number;
    maxSize: number;
    numPages: number;
    length: number;
    config: any;
    private data;
    constructor();
    ngOnInit(): void;
    changePage(page: any, data?: Array<any>): Array<any>;
    changeSort(data: any, config: any): any;
    changeFilter(data: any, config: any): any;
    onChangeTable(config: any, page?: any): any;
}
