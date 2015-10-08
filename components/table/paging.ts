/// <reference path="../../tsd.d.ts" />

import {
  Directive, LifecycleEvent,
  EventEmitter, ElementRef,
  CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES
} from 'angular2/angular2';

@Directive({
  selector: '[ng2-table-paging]',
  properties: ['config: ng2TablePaging'],
  events: ['tableChanged'],
  host: {
    '(pagechanged)': 'onChangePage($event)'
  }
})
export class Ng2TablePaging {
  public config:any = {};
  public tableChanged:EventEmitter = new EventEmitter();

  onChangePage(event) {
    Object.assign(this.config, event);
    this.tableChanged.next({paging: this.config});
  }
}
