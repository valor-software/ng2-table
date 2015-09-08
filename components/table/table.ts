/// <reference path="../../tsd.d.ts" />

import {
  Component, View,
  Directive,
  EventEmitter, ElementRef,
  CORE_DIRECTIVES, NgClass, NgFor, NgIf,
  FORM_DIRECTIVES
} from 'angular2/angular2';

import {Ng2ThSortable} from './sorting';

// todo: use lodash#defaults for configuration
// todo: expose an option to change default configuration

@Component({
  selector: 'ng2-table, [ng2-table]',
  properties: ['rows', 'columns', 'config'],
  events: ['tableChanged']
})
@View({
  template: `
<table class="table table-striped table-bordered dataTable"
       role="grid" style="width: 100%;">
  <thead>
  <tr role="row">
    <th *ng-for="#column of columns" [ng2-th-sortable]="config" [column]="column" (sort-changed)="onChangeTable($event)">
      {{column.title}}
      <i *ng-if="config && column.sort" class="pull-right glyphicon"
        [ng-class]="{'glyphicon-chevron-down': column.sort === 'desc', 'glyphicon-chevron-up': column.sort === 'asc'}"></i>
    </th>
  </tr>
  </thead>
  <tbody>
  <tr *ng-for="#row of rows">
    <td *ng-for="#column of columns">{{row[column.name]}}</td>
  </tr>
  </tbody>
</table>
`,
  directives: [Ng2ThSortable, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class Table {
  // Table values
  public rows:Array<any> = [];
  private _columns:Array<any> = [];
  public config:any = {};

  // Events
  public tableChanged:EventEmitter = new EventEmitter();

  public set columns(values:Array<any>) {
    values.forEach((value) => {
      let column = this._columns.find((col) => col.name === value.name);
      if (column) {
        Object.assign(column, value);
      }
      if (!column) {
        this._columns.push(value);
      }
    });
  }

  public get columns() {
    return this._columns;
  }

  public get configColumns() {
    let sortColumns = [];

    this.columns.forEach((column) => {
      if (column.sort) {
        sortColumns.push(column);
      }
    });

    return {columns: sortColumns};
  }

  onChangeTable(column) {
    this.columns = [column];
    this.tableChanged.next({sorting: this.configColumns});
  }
}
