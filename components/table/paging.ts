/// <reference path="../../tsd.d.ts" />

import {
  Directive,
  EventEmitter, ElementRef,
  CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES
} from 'angular2/angular2';

@Directive({
  selector: '[ng2-table-paging]',
  inputs: ['config: ng2TablePaging'],
  outputs: ['tableChanged'],
  host: {
    '(pagechanged)': 'onChangePage($event)'
  }
})
export class Ng2TablePaging {
  public config:boolean = true;
  public tableChanged:EventEmitter = new EventEmitter();

  onChangePage(event) {
    // Object.assign(this.config, event);
    if (this.config) {
      this.tableChanged.next({paging: event});
    }
  }
}
