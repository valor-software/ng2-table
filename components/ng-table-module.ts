import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTableComponent } from './table/ng-table.component';
import { NgTableFilteringDirective } from './table/ng-table-filtering.directive';
import { NgTablePagingDirective } from './table/ng-table-paging.directive';
import { NgTableSortingDirective } from './table/ng-table-sorting.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective],
  exports: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective]
})
export class Ng2TableModule {
}
