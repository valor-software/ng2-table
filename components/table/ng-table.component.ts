import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {NgTableSorting} from './ng-table-sorting.directive';
import {NgTableEventBus} from './ng-table-event-bus.service';

@Component({
  selector: 'ngTable, [ngTable]',
  template: `
    <table class="table table-striped table-bordered dataTable" role="grid" style="width: 100%;">
      <thead>
      <tr role="row">
        <th *ngFor="#column of columns" [ngTableSorting]="config.sorting" [column]="column" (sortChanged)="onSortingChanged($event)">
          {{column.title}}
          <i *ngIf="config.sorting && column.sort" class="pull-right glyphicon"
            [ngClass]="{'glyphicon-chevron-down': column.sort === 'desc', 'glyphicon-chevron-up': column.sort === 'asc'}"></i>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="#row of _rows$ | async">
        <td *ngFor="#column of columns">{{row[column.name]}}</td>
      </tr>
      </tbody>
    </table>`,
  directives: [NgTableSorting, CORE_DIRECTIVES]
})
export class NgTable implements OnInit {
  private _columns:Array<any> = [];
  private _rows$:EventEmitter<any> = new EventEmitter();

  @Output()
  private tableChanged:EventEmitter<any> = new EventEmitter();

  @Input()
  private rows:Array<any> = [];

  @Input()
  private config:any = {};

  @Input()
  set columns(values:Array<any>) {
    this._columns = values;
  }

  get columns() {
    return this._columns;
  }

  constructor(private tableEventBus:NgTableEventBus) {
  }

  ngOnInit() {
    this.tableEventBus.igniteEvents(this.config)
      .map(({context}) => {
        const filteredItems = this.changeFilter(this.rows, context.filtering);
        context.filtering._filteredItemsLength = filteredItems.length;

        return {
          context,
          data: filteredItems,
        };
      })
      .map(({context, data}) => {
        return {
          context,
          data: this.changePage(data, context.pagination)
        };
      })
      .map(({context, data}) => {
        return {
          context,
          data: this.changeSort(data, context.sorting)
        };
      })
      .subscribe(({data, context}) => {
        this._rows$.emit(data);
        this.tableChanged.emit(Object.assign(
          {},
          context.sorting,
          context.filtering,
          {pagination: Object.assign(context.pagination, {totalItems: context.filtering._filteredItemsLength})}
        ));
      });
   }

  get configColumns() {
    let columnsToSort = this.columns.reduce((result, column) => {
      if (column.sort) {
        result.push(column);
      }
      return result;
    }, []);

    return {columns: columnsToSort};
  }

  private onSortingChanged($event:any) {
    this.tableEventBus.onSortingChanged(this.configColumns);
  }

  private changePage(data:Array<any>, event:any):Array<any> {
    if (!this.config.pagination) {
      return data;
    }

    let start = (event.page - 1) * event.itemsPerPage;
    let end = event.itemsPerPage > -1 ? (start + event.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  private changeSort(data:Array<any>, sorting:any) {
    if (!sorting) {
      return data;
    }

    return data.sort((previous:any, current:any) => {
      let columns = sorting.columns || [];

      for (let {name, sort} of columns) {
        if (previous[name] > current[name]) {
          return sort === 'desc' ? -1 : 1;
        }
        if (previous[name] < current[name]) {
          return sort === 'asc' ? -1 : 1;
        }
      }
      return 0;
    });
  }

  private changeFilter(data:Array<any>, filtering:any):any {
    if (!filtering) {
      return data;
    }

    let {columnName, filterString} = filtering;
    return data.filter((item:any) => {
      if (columnName) {
        return item[columnName].match(filterString);
      }

      return Object.keys(item).some(key => item[key].match(filterString));
    });
  }
}
