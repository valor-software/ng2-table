import { Component, OnInit } from '@angular/core';
import { TableData } from './table-data';

// webpack html imports
let template = require('./table-demo.html');

@Component({
  selector: 'table-demo',
  template
})
export class TableDemoComponent implements OnInit {
  public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: 'Name', name: 'name'},
    {title: 'Position', name: 'position', sort: false},
    {title: 'Office', name: 'office', sort: 'asc'},
    {title: 'Extn.', name: 'ext', sort: ''},
    {title: 'Start date', name: 'startDate'},
    {title: 'Salary ($)', name: 'salary'}
  ];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},

    // single column filtering
    //filtering: {filterString: '', columnName: 'position'}
    
    // multi columns filtering support
    filtering: {
      filterString: '', columnName: Array<any>()
    }
  };

  private data:Array<any> = TableData;

  public constructor() {
    this.length = this.data.length;
  }

  public ngOnInit():void {
    this.onChangeTable(this.config);
  }

  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    console.log(page);
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data:any, config:any):any {
    if (!config.filtering) {
      return data;
    }

    // single column filtering
    // let filteredData:Array<any> = data.filter((item:any) =>
    //   item[config.filtering.columnName].match(this.config.filtering.filterString));

    let filteredData = new Array<any>();
    let columnName = config.filtering.columnName;

    for (let i in columnName) {
      let column = columnName[i];
      let tempArr:Array<any> = data.filter(
        (item:any) =>
          item[column]
            .toLowerCase()
            .match(
              this.config.filtering.filterString.toLowerCase()
            )
          );
      // merge new arr into filterData arr
      let a = filteredData.concat(tempArr);
      filteredData = a.filter(function (item, pos) {
        return a.indexOf(item) === pos;
      });
    }
    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
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
