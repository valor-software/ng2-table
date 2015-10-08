/// <reference path="../../tsd.d.ts" />

import {
  Directive, Injectable, LifecycleEvent,
  EventEmitter, ElementRef, ViewEncapsulation,
  CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES
} from 'angular2/angular2';

import {Table} from './table';

@Directive({
  selector: '[ng2-th-sortable]',
  properties: ['config: ng2ThSortable', 'column'],
  events: ['sortChanged'],
  host: {
    '(click)': 'onToggleSort($event, $target)'
  }
})
export class Ng2ThSortable {
  public config:any;
  public column:any;
  public sortChanged:EventEmitter = new EventEmitter();

  onToggleSort(event) {
    if (event) {
      event.preventDefault();
    }

    if (this.config && this.column && this.column.sort !== false) {
      switch (this.column.sort) {
        case 'asc':
          this.column.sort = 'desc';
          break;
        case 'desc':
          this.column.sort = '';
          break;
        default:
          this.column.sort = 'asc';
          break;
      }

      this.sortChanged.next(this.column);
    }
  }
}
