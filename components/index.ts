///<reference path="../tsd.d.ts"/>

import {pagination} from './pagination/pagination';
import {Table} from './table/table';
import {Ng2TableFilter} from './table/filtering';
import {Ng2TablePaging} from './table/paging';

export * from './table/table';
export * from './table/table-config';
export * from './table/filtering';
export * from './table/paging';
export * from './pagination/pagination';

export const Ng2Table:Array<any> = [Table, Ng2TableFilter, Ng2TablePaging, pagination];
