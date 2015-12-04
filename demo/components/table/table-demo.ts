/// <reference path='../../../tsd.d.ts' />

import {
  Component, Directive, View, EventEmitter, Host,
  OnInit, Self, NgIf,
  CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES
} from 'angular2/angular2';

import {Table} from '../../../components/table/table';
import {pagination} from 'ng2-bootstrap/ng2-bootstrap';
import {Ng2TableFilter} from '../../../components/table/filtering';
import {TableData} from './table-data';

// webpack html imports
let template = require('./table-demo.html');

@Component({
  selector: 'table-demo'
})
@View({
  template: template,
  directives: [Table, pagination, Ng2TableFilter, NgClass, NgIf, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class TableDemo implements OnInit {
  public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: 'Name', name: 'name'},
    {title: 'Position', name: 'position', sort: false},
    {title: 'Office', name: 'office', sort: 'asc'},
    {title: 'Extn.', name: 'ext', sort: 'desc'},
    {title: 'Start date', name: 'startDate'},
    {title: 'Salary', name: 'salary'}
  ];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: []},
    filtering: {filterString: '', columnName: 'position'}
  };

  private data:Array<any> = TableData;

  constructor() {
    this.length = this.data.length;
  }

  onInit() {
    this.onChangeTable(this.config, null);
  }

  changePage(page:any, data:Array<any> = this.data):Array<any> {
    console.log(page);
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  changeSort(data:any, config:any) {
    if (!config.sorting) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      let columns = this.config.sorting.columns || [];
      for (let i = 0; i < columns.length; i++) {
        let columnName = columns[i].name;

        if (previous[columnName] > current[columnName]) {
          return columns[i].sort === 'desc' ? -1 : 1;
        }
        if (previous[columnName] < current[columnName]) {
          return columns[i].sort === 'asc' ? -1 : 1;
        }
      }
      return 0;
    });
  }

  changeFilter(data:any, config:any):any {
    if (!config.filtering) {
      return data;
    }

    let filteredData:Array<any> = data.filter((item:any) =>
      item[config.filtering.columnName].match(this.config.filtering.filterString));

    return filteredData;
  }

  onChangeTable(config:any, page:any = config.paging) {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }
}
