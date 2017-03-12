import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, Compiler, ViewContainerRef, ViewChild, ComponentRef, ComponentFactory, ComponentFactoryResolver} from '@angular/core';
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
              <template ngFor let-column [ngForOf]="columns" let-j= "index" >

                <td (click)="cellClick(row, column.name, i)" *ngIf="!column.isEditing || editingRow != i">
                  <div style="display:inline-block" [innerHtml]="sanitize(getData(row, column.name))"> </div> 
                  <span class="pull-right" *ngIf="column.editable && !column.editWith"><i class="fa fa-pencil" aria-hidden="true" (click)="setRowToEdit(i, j)"></i></span>
                </td>

                <td *ngIf="column.isEditing && editingRow == i && !column.options">
                  <input class="form-control" style="width:70%;display:inline-block; height:70%;" [value]="getData(row, column.name)" [id]="column.name" #val (keyup)="updateChanges(column.name, val)">
                  <span class="pull-right" *ngIf="column.editable && !column.editWith"><i class="fa fa-check-square-o success" aria-hidden="true" (click)="submitChange(row, i, column.name, j, val)"></i></span>
                </td>
                <td *ngIf="column.isEditing && editingRow == i && column.options">
                  <select class="form-control" style="width:70%;display:inline-block;height:70%;" [value]="getData(row, column.name)" [id]="column.name" #val (keyup)="updateChanges(column.name, val)" (mouseup)="updateChanges(column.name, val)">
                    <option *ngFor="let option of column.options" [value]="option"> {{option}}</option>
                  </select>
                  <span class="pull-right" *ngIf="column.editable && !column.editWith"><i class="fa fa-check-square-o success" aria-hidden="true" (click)="submitChange(row, i, column.name, j, val)"></i></span>
                </td>
              </template>
          </tr>
          <tr *ngIf="showExpandedRow && (i == expandedRowIndex) && expandable" class="table-info" >
              <td [attr.colspan]="columns.length + 1">
                <ng-table-row [rowComponent]="expandedComponent"></ng-table-row>
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
  @Input() expandedComponent:any;
  @Input() public rows:Array<any> = [];
  @Input() public expandable:boolean;
  @Input() public editingRow:number;
  @Input() public editingColumn:number;
  @Input()
  public set config(conf:any) {
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
  @Output() public valueEdit:EventEmitter<any> = new EventEmitter();

  public showFilterRow:Boolean = false;
  public showExpandedRow:Boolean = false;
  public expandedRowIndex:number = null;
  public currentChanges: any = {};

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

  public constructor(private sanitizer:DomSanitizer, public ref: ChangeDetectorRef, private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler) {
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

  public setRowToEdit(rowIndex:any, column:any){
    this.editingRow = rowIndex;
    for(let col of this.columns){
      if(col.editWith != this.columns[column].name){
        col.isEditing = false;
      }else if(col.editWith === this.columns[column].name){
        col.isEditing = true;
      }  
    }
    this.columns[column].isEditing = true;
  }

  public updateChanges(colName:any, val:any){
    this.currentChanges[colName] = val.value;
  }

  public submitChange(row:any, rIndex:number, columnName:string, cIndex:number, newVal:any ){
    let valueChange = {
                        rowChanged: row,
                        rowIndex: rIndex,
                        columnChanged: columnName,
                        columnIndex: cIndex,
                        oldValue: row[columnName],
                        newValue: newVal.value
                      }

    let allChanges = [valueChange];
    
    this.columns.forEach((col, index) => {
      if(col.editWith === this.columns[cIndex].name && this.currentChanges[col.name] != undefined){      
        let newValueChange = {
                              rowChanged: row,
                              rowIndex: rIndex,
                              columnChanged: col.name,
                              columnIndex: index,
                              oldValue: row[col.name],
                              newValue: this.currentChanges[col.name]
                             }
        allChanges.push(newValueChange);
      }
    })
    // Check for changes
    let noChanges = true;
    for(let change of allChanges){
      if(change.newValue != change.oldValue){
        noChanges = false;
      }
    }
    if(noChanges){
      this.editingRow = null;
      return;
    }
    this.valueEdit.emit(allChanges);
    this.editingRow = null;
  }
}
