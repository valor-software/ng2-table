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
  properties: ['rows', 'columns', 'length', 'config'],
  events: ['changePage: changepage'],
  hostListeners: {
    'click': 'onSorting'
  },
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  template: `
<table class="table table-striped table-bordered dataTable" role="grid" style="width: 100%;">
  <thead>
  <tr>
    <th *ng-for="#column of columns">
    <!--[ng2-column]-->
        <!--[ng-sorting]="column.sort" -->
      {{column.title}}
      <!--<i class="pull-right glyphicon"-->
      <!--[ng-class]="{'glyphicon-chevron-down': column.sort}"></i>-->
    </th>
  </tr>
  </thead>
  <tbody>
  <tr *ng-for="#row of rows">
    <td *ng-for="#cell of row">{{cell}}</td>
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
  public rows:Array<any> = [];
  public columns:Array<any> = [];
  public length:number = 0;
  public config:any = {};

  public changePage:EventEmitter = new EventEmitter();

  private defaultPaging:Boolean = true;
  private defaultFiltering:Boolean = true;
  private defaultSorting:Boolean = true;

  private maxSize:number = 5;
  private bigTotalItems:number = 0;
  private bigCurrentPage:number = 1;

  onChangePage(event) {
    this.changePage.next(event);
  }

  onInit() {
    this.config = Object.assign({
      paging: this.defaultPaging,
      filtering: this.defaultFiltering,
      sorting: this.defaultSorting
    }, this.config);

    this.bigTotalItems = this.length;

    if (!this.config.paging) {
      this.changePage.next({
        page: 1,
        itemsPerPage: -1
      });
    }
  }

  onSorting() {
  }
}

export const ng2table:Array<any> = [Table];
