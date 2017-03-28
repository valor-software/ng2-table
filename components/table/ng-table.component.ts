import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'ng-table',
  template: `<table class="table dataTable" ngClass="{{config.className || ''}}"
           role="grid" style="width: 100%;">
      <thead>
        <tr role="row">
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
        <td *ngFor="let column of columns">
          <input *ngIf="column.filtering" placeholder="{{column.filtering.placeholder}}"
                 [ngTableFiltering]="column.filtering"
                 class="form-control"
                 style="width: auto;"
                 (tableChanged)="onChangeTable(config)"/>
        </td>
      </tr>
        <tr *ngFor="let row of rows">      
            <ng-container *ngFor="let column of columns" >     
                <td *ngIf="!column.actions" (click)="cellClick(row, column.name)" [innerHtml]="sanitize(getData(row, column.name))"></td>

                <td *ngIf="column.actions">
                    <ng-container *ngIf="column.actions.type === 'simple'">
                        <a  *ngFor="let actionButton of column.actions.buttons" [className]="actionButton.styleClass" (click)="actionClick(actionButton.action, row, column)">
                             <i class="" ngClass="{{actionButton.styleIcon || ''}}"></i> {{ actionButton.title }}
                        </a>
                    </ng-container>
                    
                    <ng-container *ngIf="column.actions.type === 'group'">
                        <div class="btn-group" role="group">
                            <a  *ngFor="let actionButton of column.actions.buttons" [className]="actionButton.styleClass" (click)="actionClick(actionButton.action, row, column)">
                                <i class="" ngClass="{{actionButton.styleIcon || ''}}"></i>  {{ actionButton.title }}
                            </a>
                        </div>
                    </ng-container>

                    <ng-container *ngIf="column.actions.type === 'dropdown'">
                        <div class="btn-group" dropdown>
                        <button id="single-button" type="button" [className]="column.actions.dropdownStyleClass" dropdownToggle>
                           {{ column.actions.dropdownTitle }} <span class="caret"></span>
                        </button>
                        <ul dropdownMenu role="menu" aria-labelledby="single-button">      
                            <li role="menuitem" *ngFor="let actionButton of column.actions.buttons">
                                <a class="dropdown-item" (click)="actionClick(actionButton.action, row, column)">
                                    <i class="" ngClass="{{actionButton.styleIcon || ''}}"></i> {{ actionButton.title }}
                                </a>
                            </li>                             
                        </ul>
                        </div>                        
                    </ng-container>
            
                </td>            
            </ng-container>
        </tr>
      </tbody>
    </table>`
})
export class NgTableComponent {
  // Table values
  @Input() public rows:Array<any> = [];

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

  public constructor(private sanitizer:DomSanitizer) {
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
    this.tableChanged.emit({sorting: this.configColumns});
  }

  public getData(row:any, propertyName:string):string {
    return propertyName.split('.').reduce((prev:any, curr:string) => prev[curr], row);
  }

  public cellClick(row:any, column:any):void {
    this.cellClicked.emit({row, column});
  }

  public actionClick(action: string, row:any, column:any):void {
    let emitAction = this._config.api[action];
    if (!emitAction) {
      throw new Error('[Ng2-Table] Action "' + action + '" not found on config.api');
    }

    emitAction({row, column});
  }
}
