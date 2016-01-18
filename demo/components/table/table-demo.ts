import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap';

import {TableData} from './table-data';
import {NG_TABLE_DIRECTIVES, NgTableEventBus} from '../../../ng2-table';

@Component({
  selector: 'table-demo',
  template: require('./table-demo.html'),
  directives: [NG_TABLE_DIRECTIVES, PAGINATION_DIRECTIVES, CORE_DIRECTIVES],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableDemo {
  private columns:Array<any> = [
    {title: 'Name', name: 'name'},
    {title: 'Position', name: 'position', sort: false},
    {title: 'Office', name: 'office', sort: 'asc'},
    {title: 'Extn.', name: 'ext', sort: 'desc'},
    {title: 'Start date', name: 'startDate'},
    {title: 'Salary', name: 'salary'}
  ];

  private rows:Array<any> = TableData;

  private config:any = {
    sorting: {},
    filtering: {filterString: ''},
    pagination: {
      page: 1,
      itemsPerPage: 10,
    }
  };

  private totalItems:number = 0;

  /*
  This guy called "tableEventBus" will be injected and used
  among sibling components for event propagation - please, check markup
  */
  constructor(public tableEventBus: NgTableEventBus) {
  }

  /*
  Pagination component needs to know when number of
  elements has changed due to, for example, filtering
  */
  private onTableChanged($event:any):void {
    this.totalItems = $event.pagination.totalItems;
  }
}
