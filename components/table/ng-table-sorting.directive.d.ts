import { EventEmitter } from '@angular/core';
export declare class NgTableSortingDirective {
    ngTableSorting: any;
    column: any;
    sortChanged: EventEmitter<any>;
    config: any;
    onToggleSort(event: any): void;
}
