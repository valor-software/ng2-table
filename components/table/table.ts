/// <reference path="../../tsd.d.ts" />

import {
  Component, View,
  Directive, LifecycleEvent,
  EventEmitter, ElementRef,
  CORE_DIRECTIVES, NgClass, NgFor, NgIf,
  FORM_DIRECTIVES
} from 'angular2/angular2';

import {pagination} from  './pagination';

// todo: use lodash#default for configuration
// todo: expose an option to change default configuration (paging, sorting, filtering, table config)

@Component({
  selector: 'ng2-table, [ng2-table]',
  properties: ['rows', 'columns', 'length', 'config', 'sorting'],
  events: ['changePage: changepage', 'changeSort: changesort'],
  hostListeners: {
    'click': 'onSorting'
  },
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
<table class="table table-striped table-bordered dataTable" role="grid" style="width: 100%;">
  <thead>
  <tr role="row">
    <th *ng-for="#column of columns" (^click)="toggleSort($event, column)">
      {{column.title}}
      <i *ng-if="config.sorting || !column.sort" class="pull-right glyphicon"
        [ng-class]="{'glyphicon-chevron-down': column.sort === 'desc', 'glyphicon-chevron-up': column.sort === 'asc'}"></i>
    </th>
  </tr>
  </thead>
  <tbody>
  <tr *ng-for="#row of rows">
    <td *ng-for="#column of columns">{{row[column.attr]}}</td>
  </tr>
  </tbody>
</table>
<pagination *ng-if="config.paging" [total-items]="bigTotalItems" [(ng-model)]="bigCurrentPage"
  [max-size]="maxSize" class="pagination-sm" [boundary-links]="true"
  [rotate]="false" (num-pages)="numPages = $event" (changepage)="onChangePage($event)"></pagination>
<pre *ng-if="config.paging" class="card card-block card-header">Page: {{bigCurrentPage}} / {{numPages}}</pre>
`,
  directives: [pagination, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class Table {
  // Table values
  public rows:Array<any> = [];
  public columns:Array<any> = [];
  public length:number = 0;
  public config:any = {};

  // Events
  public changePage:EventEmitter = new EventEmitter();
  public changeSort:EventEmitter = new EventEmitter();

  // Pagination
  public maxSize:number = 5;
  public bigTotalItems:number = 0;
  public bigCurrentPage:number = 1;
  public itemsPerPage:number = -1; // for displaying  all rows

  // Default values
  private defaultPaging:Boolean = true;
  private defaultFiltering:Boolean = true;
  private defaultSorting:Boolean = true;

  onChangePage(event) {
    this.itemsPerPage = event.itemsPerPage;
    this.changePage.next(event);
  }

  onInit() {
    this.config = Object.assign({
      paging: this.defaultPaging,
      filtering: this.defaultFiltering,
      sorting: this.defaultSorting
    }, this.config);

    this.bigTotalItems = this.length;

    if (this.config.paging) {
      this.changePage.next({
        page: this.bigCurrentPage,
        itemsPerPage: this.itemsPerPage
      });
    }

    if (this.config.sorting) {
      this.onChangeSort();
    }
  }

  toggleSort() {}

  onChangeSort() {}
}

@Directive({
  selector: '[sorting]',
  properties: ['sorting']
})
export class Sorting {
  private _sorting:boolean;
  private _table:any;

  constructor(public table:Table) {
    table.onChangeSort = this.onChangeSort;
    table.toggleSort = this.toggleSort;
    this._table = table;
  }

  private set sorting(value:boolean) {
    this._sorting = value === undefined ? true : value;
    this._table.config.sorting = this._sorting;
  }
  private get sorting() {
    return this._sorting;
  }

  onChangeSort() {
    let sortColumns = [];

    for (let i = 0; i < this.columns.length; i++) {
      if (this.columns[i].sort) {
        sortColumns.push(this.columns[i]);
      }
    }

    let _event = {
      columns: sortColumns,
      itemsPerPage: this.itemsPerPage,
      page: this.bigCurrentPage
    };

    this.changeSort.next(_event);
  }

  toggleSort(event, column) {
    if (event) {
      event.preventDefault();
    }

    if (this.config.sorting && column && column.sort !== false) {
      switch (column.sort) {
        case 'asc':
          column.sort = 'desc';
          break;
        case 'desc':
          column.sort = '';
          break;
        default:
          column.sort = 'asc';
          break;
      }

      this.onChangeSort();
    }
  }
}

export const ng2table:Array<any> = [Table, Sorting];
