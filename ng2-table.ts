import { NgTableComponent } from './components/table/ng-table.component';

import { NgTableFilteringDirective } from './components/table/ng-table-filtering.directive';
import { NgTablePagingDirective } from './components/table/ng-table-paging.directive';
import { NgTableSortingDirective } from './components/table/ng-table-sorting.directive';

export * from './components/table/ng-table.component';

export * from './components/table/ng-table-filtering.directive';
export * from './components/table/ng-table-paging.directive';
export * from './components/table/ng-table-sorting.directive';

export * from './components/ng-table-directives';

export default {
  directives: [
    NgTableComponent,
    NgTableFilteringDirective,
    NgTableSortingDirective,
    NgTablePagingDirective
  ]
};
