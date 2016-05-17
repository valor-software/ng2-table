import {Component, Directive, EventEmitter, ElementRef, Renderer, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgFor} from '@angular/common';

import {NgTableSorting} from './ng-table-sorting.directive';

@Component({
  selector: 'ngTable, [ngTable]',
  inputs: ['rows', 'columns', 'config'],
  outputs: ['tableChanged'],
  template: `
    <table class="table dataTable" [ngClass]="{'table-striped': config.striped, 'table-bordered': config.bordered}"
           role="grid" style="width: 100%;">
      <thead>
      <tr role="row">
        <th *ngFor="let column of columns" [ngTableSorting]="config.sorting" [column]="column" (sortChanged)="onChangeTable($event)">
          {{column.title}}
          <i *ngIf="config && config.sorting && column.sort" class="pull-right fa"
            [ngClass]="{'fa-chevron-down': column.sort === 'desc', 'fa-chevron-up': column.sort === 'asc'}"></i>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let row of rows">
        <td *ngFor="let column of columns">{{getData(row, column.name)}}</td>
      </tr>
      </tbody>
    </table>
`,
  directives: [NgTableSorting, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class NgTable implements OnInit {
  // Table values
  public rows:Array<any> = [];
  private _columns:Array<any> = [];
  public config:any = {};

  ngOnInit() {
      if (this.config.striped === undefined) {
          this.config.striped = true;
      }

      if (this.config.bordered === undefined) {
          this.config.bordered = true;
      }
  }

  // Outputs (Events)
  public tableChanged:EventEmitter<any> = new EventEmitter();

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
      if (col.name != column.name) {
        col.sort = '';
      }
    });
    this.tableChanged.emit({sorting: this.configColumns});
  }

  getData(row:any, propertyName:string) {
    return propertyName.split('.').reduce((prev, curr) => prev[curr], row);
  }
}
