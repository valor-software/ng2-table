import {Component, Directive, EventEmitter, ElementRef, Renderer} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgFor} from 'angular2/common';
import {DCLComponent} from 'dcl-component/dcl-component';

import {NgTableSorting} from './ng-table-sorting.directive';

@Component({
  selector: 'ngTable, [ngTable]',
  inputs: ['rows', 'columns', 'config', 'id'],
  outputs: ['tableChanged'],
  template: `
    <table class="table table-striped table-bordered dataTable"
           role="grid" style="width: 100%;">
      <thead>
      <tr role="row">
        <th *ngFor="#column of columns" [ngTableSorting]="config" [column]="column" (sortChanged)="onChangeTable($event)">
          {{column.title}}
          <i *ngIf="config && column.sort" class="pull-right glyphicon"
            [ngClass]="{'glyphicon-chevron-down': column.sort === 'desc', 'glyphicon-chevron-up': column.sort === 'asc'}"></i>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="#row of rows">
        <td *ngFor="#column of columns">
          <dcl-component [identifier]="{row: row[id], column: column.name}" [type]="column.component" [init]="column.init" [data]="row[column.name]"></dcl-component>
        </td>
      </tr>
      </tbody>
    </table>
`,
  directives: [DCLComponent, NgTableSorting, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class NgTable {
  // Table values
  public rows:Array<any> = [];
  private _columns:Array<any> = [];
  public config:any = {};
  public id:string = 'id';

  // Outputs (Events)
  public tableChanged:EventEmitter<any> = new EventEmitter();

  public set columns(values:Array<any>) {
    values.forEach((value) => {
      let column = this._columns.find((col) => col.name === value.name);
      if (column) {
        Object.assign(column, value);
      } else {
        this._columns.push(value);
      }
    });
  }

  public get columns() {
    return this._columns;
  }

  public get configColumns() {
    let sortColumns:Array<any> = [];

    this.columns.forEach((column) => {
      if (column.sort) {
        sortColumns.push(column);
      }
    });

    return {columns: sortColumns};
  }

  onChangeTable(column:any) {
    this._columns.forEach((col) => {
      if (col.name !== column.name) {
        col.sort = '';
      }
    });
    this.tableChanged.emit({sorting: this.configColumns});
  }
}
