import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'ng-table',
  template: `
    <div [ngStyle]="{height: config?.height}" style="overflow-y:scroll; width:auto; overflow-x:hidden; display:block;" (scroll)="checkScroll($event)">
      <table class="table dataTable" ngClass="{{config.className || ''}}"
             role="grid" style="width: 100%;" >
        <thead>
          <tr role="row">
            <th *ngIf="expandable"></th>
            <th *ngFor="let column of columns" [ngTableSorting]="config" [column]="column"
                (sortChanged)="onChangeTable($event)" ngClass="{{column.className || ''}}">
              {{column.title}}
              <i *ngIf="config && column.sort" class="pull-right fa"
                [ngClass]="{'fa-chevron-down': column.sort === 'desc', 'fa-chevron-up': column.sort === 'asc'}"></i>
            </th>
          </tr>
        </thead>
        <tbody>
        <tr *ngIf="showFilterRow">
          <td *ngIf="expandable"></td>
          <td *ngFor="let column of columns">
            <input *ngIf="column.filtering" placeholder="{{column.filtering.placeholder}}"
                   [ngTableFiltering]="column.filtering"
                   class="form-control"
                   style="width: 85%; padding:none;"
                   (tableChanged)="onChangeTable(config)"/>
          </td>
        </tr>
          <template ngFor let-row [ngForOf]="rows" let-i= "index" >
          <tr [ngClass]="{'table-info': showExpandedRow && (i == expandedRowIndex) && expandable }">
            <td (click)="toggleRowExpansion(row, i)" *ngIf="expandable" (click)="cellClick(row, 'expand', i)" style="text-align:center; padding:0px; padding-top:7px;"><a style="width:100%; text-align:center;">
              <i [ngClass]="{'fa': true, 'fa-plus-circle': i != expandedRowIndex, 'fa-minus-circle' : i == expandedRowIndex}" style="font-size:1.5em; cursor:pointer"></i></a>
            </td>
            <td (click)="cellClick(row, column.name, i)" *ngFor="let column of columns" [innerHtml]="sanitize(getData(row, column.name))" ></td>
          </tr>
          <tr *ngIf="showExpandedRow && (i == expandedRowIndex) && expandable" class="table-info" >
              <td [attr.colspan]="columns.length + 1">
                <div [innerHtml]="sanitize(rowExpandContent)"></div>
              </td>
          </tr>
          </template>
        </tbody>
      </table>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgTableComponent {
  // Table values
  @Input() public rows:Array<any> = [];
  @Input() public rowExpandContent:string;
  @Input() public expandable:boolean = true;
  @Input() public showExpandedRow:boolean;
  @Input() public expandedRowIndex:number;
  @Input()
  public set config(conf:any) {
    if (!conf.className) {
      conf.className = 'table-striped table-bordered';
    }
    if (conf.className instanceof Array) {
      conf.className = conf.className.join(' ');
    }
    this._config = conf;
  }
  

  // Outputs (Events)
  @Output() public tableChanged:EventEmitter<any> = new EventEmitter();
  @Output() public cellClicked:EventEmitter<any> = new EventEmitter();
  @Output() public expanderClicked:EventEmitter<any> = new EventEmitter();
  @Output() public scrolledDown:EventEmitter<any> = new EventEmitter();

  public showFilterRow:Boolean = false;

  @Input()
  public set columns(values:Array<any>) {
    values.forEach((value:any) => {
      if (value.filtering) {
        this.showFilterRow = true;
      }
      if (value.className && value.className instanceof Array) {
        value.className = value.className.join(' ');
      }
      let column = this._columns.find((col:any) => col.name === value.name);
      if (column) {
        Object.assign(column, value);
      }
      if (!column) {
        this._columns.push(value);
      }
    });
  }

  private _columns:Array<any> = [];
  private _config:any = {};
  public scrollPercentage:number = 0;

  public constructor(private sanitizer:DomSanitizer, public ref: ChangeDetectorRef) {
  }

  public sanitize(html:string):SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  public get columns():Array<any> {
    return this._columns;
  }

  public get config():any {
    return this._config;
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

  public onChangeTable(column:any):void {
    this._columns.forEach((col:any) => {
      if (col.name !== column.name && col.sort !== false) {
        col.sort = '';
      }
    });
    this.showExpandedRow = false;
    this.expandedRowIndex = null;
    this.tableChanged.emit({sorting: this.configColumns});
    this.ref.markForCheck();
  }

  public toggleRowExpansion(row:any, rowNum:number) {
      if (this.showExpandedRow && (this.expandedRowIndex == rowNum)) {
          this.showExpandedRow = false;
          this.expandedRowIndex = null;
      }
      else {
          this.showExpandedRow = true;
          this.expandedRowIndex = rowNum;
          this.expanderClicked.emit({ row: row, rowNum: rowNum });
          this.ref.markForCheck();
      }
  };

  public checkScroll(event:any) {
      this.scrollPercentage = event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight);
      if (this.scrollPercentage > this.config.renderMoreAt) {
          this.scrolledDown.emit(this.scrollPercentage);
      }
  };


  public getData(row:any, propertyName:string):string {
    return propertyName.split('.').reduce((prev:any, curr:string) => prev[curr], row);
  }

  public cellClick(row:any, column:any):void {
    this.cellClicked.emit({row, column});
  }
}
