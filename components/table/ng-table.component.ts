import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CORE_DIRECTIVES, NgClass} from '@angular/common';
import {NgTableSortingDirective} from './ng-table-sorting.directive';

@Component({
  selector: 'ng-table',
  template: `
    <table [ngClass]="classMap"
           role="grid" style="width: 100%;">
      <thead>
      <tr role="row">
        <th *ngFor="let column of columns" [ngTableSorting]="config" [column]="column" (sortChanged)="onChangeTable($event)">
          {{column.title}}
          <i *ngIf="config && column.sort" class="pull-right fa"
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
  directives: [NgTableSortingDirective, NgClass, CORE_DIRECTIVES]
})
export class NgTableComponent implements OnInit {
  // Table values
  @Input() public rows:Array<any> = [];
  @Input() public config:any = {};

  // Outputs (Events)
  @Output() public tableChanged:EventEmitter<any> = new EventEmitter();

  @Input()
  public set columns(values:Array<any>) {
    values.forEach((value:any) => {
      let column = this._columns.find((col:any) => col.name === value.name);
      if (column) {
        Object.assign(column, value);
      }
      if (!column) {
        this._columns.push(value);
      }
    });
  }

  public get columns():Array<any> {
    return this._columns;
  }

  public elementRef: ElementRef;

  private classMap:string;

  public constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  public ngOnInit():void {
    this.classMap = this.elementRef.nativeElement.getAttribute('class') || { 'table': true, 'table-striped': true, 'table-bordered': true, 'dataTable': true};
  }

  public get configColumns():any {
    let sortColumns:Array<any> = [];

    this.columns.forEach((column:any) => {
      if (column.sort) {
        sortColumns.push(column);
      }
    });

    return {columns: sortColumns};
  }

  private _columns:Array<any> = [];

  public onChangeTable(column:any):void {
    this._columns.forEach((col:any) => {
      if (col.name !== column.name) {
        col.sort = '';
      }
    });
    this.tableChanged.emit({sorting: this.configColumns});
  }

  public getData(row:any, propertyName:string):string {
    return propertyName.split('.').reduce((prev:any, curr:string) => prev[curr], row);
  }
}
