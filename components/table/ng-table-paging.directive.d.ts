import { EventEmitter } from '@angular/core';
export declare class NgTablePagingDirective {
    ngTablePaging: boolean;
    tableChanged: EventEmitter<any>;
    config: any;
    onChangePage(event: any): void;
}
