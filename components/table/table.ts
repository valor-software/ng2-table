/// <reference path="../../tsd.d.ts" />

import {
  Component, View,
  Directive, LifecycleEvent,
  EventEmitter, ElementRef,
  CORE_DIRECTIVES, NgClass, NgFor
} from 'angular2/angular2';

// import {pagination} from './pagination';

@Component({
  selector: 'ng2-table, [ng2-table]',
  properties: ['rows', 'columns', 'length', 'config'],
  events: [],
  hostListeners: {
    'click': 'onSorting'
  },
  lifecycle: [LifecycleEvent.onChange]
})
@View({
  template: `
<table>
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
<!--<pagination [total-items]="bigTotalItems" [(ng-model)]="bigCurrentPage" [max-size]="maxSize" class="pagination-sm"-->
  <!--[boundary-links]="true" [rotate]="false" (num-pages)="numPages = $event"></pagination>-->
<!--<pre class="card card-block card-header">Page: {{bigCurrentPage}} / {{numPages}}</pre>-->
`,
  directives: [NgClass, CORE_DIRECTIVES]
})
export class Table {
  public rows:Array<any> = [];
  public columns:Array<any> = [];
  public length:Number = 0;
  public config:Object = {};

  public init:EventEmitter = new EventEmitter();

  private defaultPaging:Boolean = true;
  private defaultFiltering:Boolean = true;
  private defaultSorting:Boolean = true;

  private totalItems:number = 64;
  private currentPage:number = 4;

  private maxSize:number = 5;
  private bigTotalItems:number = 175;
  private bigCurrentPage:number = 1;

  private setPage(pageNo:number):void {
    this.currentPage = pageNo;
  };

  private pageChanged():void {
    console.log('Page changed to: ' + this.currentPage);
  };

  constructor() {
  }

  onChange(changes) {
    this.config = Object.assign({
      paging: this.defaultPaging,
      filtering: this.defaultFiltering,
      sorting: this.defaultSorting
    }, this.config);
  }

  onSorting(event) {
    console.log(arguments);
    // this.update.next(event, {sorting: 'asc'});
  }
}

export const ng2table:Array<any> = [Table];
