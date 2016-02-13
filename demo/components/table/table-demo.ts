import {Component, ComponentRef, EventEmitter, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf} from 'angular2/common';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {NG_TABLE_DIRECTIVES} from '../../../ng2-table';

import {TableData} from './table-data';
import {Buttons} from '../buttons/buttons';
import {Editable} from '../editable/editable';

// webpack html imports
let template = require('./table-demo.html');

@Component({
  selector: 'table-demo',
  template: template,
  directives: [NG_TABLE_DIRECTIVES, PAGINATION_DIRECTIVES, NgClass, NgIf, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class TableDemo implements OnInit {

  private _func: any = this.onCellInit.bind(this);
  private _func2: any = this.onDataInit.bind(this);

  private _arr: { [row: number]: { [column: string]: Editable } };

  public rows: Array<any> = [];
  public columns: Array<any> = [
    {title: 'Name', name: 'name', component: Editable, init: this._func2 },
    {title: 'Position', name: 'position', component: Editable, init: this._func2, sort: false},
    {title: 'Office', name: 'office', component: Editable, init: this._func2, sort: 'asc'},
    {title: 'Extn.', name: 'ext', component: Editable, init: this._func2, sort: ''},
    {title: 'Start date', name: 'startDate', component: Editable, init: this._func2 },
    {title: 'Salary ($)', name: 'salary', component: Editable, init: this._func2 },
    {title: '', name: 'id', component: Buttons, init: this._func, sort: false, filter: false }
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: '', columnName: 'position'}
  };

  private data: Array<any> = TableData;

  constructor() {
    this.length = this.data.length;
  }

  ngOnInit() {
    this.onChangeTable(this.config);
  }

  changePage(page: any, data: Array<any> = this.data): Array<any> {
    console.log(page);
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  changeSort(data: any, config: any) {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = null;
    let sort: string = null;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '') {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  changeFilter(data: any, config: any): any {
    if (!config.filtering) {
      return data;
    }

    let filteredData: Array<any> = data.filter((item: any) =>
      item[config.filtering.columnName].match(this.config.filtering.filterString)
    );

    return filteredData;
  }

  onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }) {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    for (var key in this._arr) if (!this.rows.find((row) => row.id == key)) delete this._arr[key];
    this.length = sortedData.length;
  }

  private onDataInit(component: ComponentRef, identifier: any, data: any): void {
    component.instance.data = data;
    component.instance.auxValue = data;
    this._arr = this._arr || { };
    let editableColumns: { [column: string]: Editable } =
      this._arr[identifier.row] || { };
    editableColumns[identifier.column] = component.instance;
    this._arr[identifier.row] = editableColumns;
  }

  private onCellInit(component: ComponentRef, identifier: any, id: any): void {
    console.log('onCellInit: ', identifier);
    component.instance.cancel.subscribe(() => {
      component.instance._editMode = false;
      this.cancel(identifier.row, id);
    });
    component.instance.edit.subscribe(() => {
      component.instance._editMode = true;
      this.edit(identifier.row, id);
    });
    component.instance.ok.subscribe(() => {
      component.instance._editMode = false;
      this.ok(identifier.row, id);
    });
  }

  edit(row: number, id: number) {
    console.log('edit id: ' + id);
    this.setEditable(row, true);
  }

  cancel(row: number, id: number) {
    console.log('cancel id: ' + id);
    this.setEditable(row, false, false);
  }

  ok(row: number, id: number) {
    console.log('ok id: ' + id);
    let newRow: Array<any> = this.setEditable(row, false, true);
    let updateRow: any = this.data.find((row) => row.id == id);
    for (var columnName in newRow) {
      updateRow[columnName] = newRow[columnName];
    }
  }

  setEditable(row: number, value: boolean, ok?: boolean): Array<any> {
    let newRow: Array<any> = [];
    let editableColumns: { [column: string]: Editable };
    if (this._arr && ( editableColumns = this._arr[row] ) ) {
      for (let columnName in editableColumns) {
        if (editableColumns.hasOwnProperty(columnName)) {
          editableColumns[columnName].editable = value;
          if (ok == true) {
            editableColumns[columnName].data = editableColumns[columnName].auxValue;
            newRow[columnName] = editableColumns[columnName].auxValue;
          } else if (ok == false) {
            editableColumns[columnName].auxValue = editableColumns[columnName].data;
          }
        }
      }
    }
    return newRow;
  }

}
