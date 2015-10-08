/// <reference path='../../../tsd.d.ts' />

import {
  Component, Directive, View, EventEmitter, Host,
  OnInit,
  CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES
} from 'angular2/angular2';

import {Ng2Table} from '../../../components/index';
import {TableData} from './table-data';

// webpack html imports
let template = require('./table-demo.html');

@Component({
  selector: 'table-demo'
})
@View({
  template: template,
  directives: [Ng2Table, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
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
  public length:number = 0;
  public config:any = {
    paging: {page: 1, itemsPerPage: 10, maxSize: 5},
    sorting: {columns: []},
    filtering: {filterString: '', columnName: 'position'}
  };

  private data:Array<any> = TableData;

  constructor() {
    this.length = this.data.length;
  }

  onInit() {
    this.onChangeTable(this.config);
  }

  changePage(data, config) {
    if (!config.paging) {
      return data;
    }

    let start = (this.config.paging.page - 1) * this.config.paging.itemsPerPage;
    let end = this.config.paging.itemsPerPage > -1 ? (start + this.config.paging.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  changeSort(data, config) {
    if (!config.sorting) {
      return data;
    }

    // simple sorting
    return data.sort((previous, current) => {
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

  changeFilter(data, config) {
    if (!config.filtering) {
      return data;
    }

    let filteredData = data.filter(item =>
      item[config.filtering.columnName].match(this.config.filtering.filterString));

    return filteredData;
  }

  onChangeTable(config) {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }
    if (config.paging) {
      Object.assign(this.config.paging, config.paging);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = this.changePage(sortedData, this.config);
    this.length = sortedData.length;
  }
}
