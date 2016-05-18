import {Directive, EventEmitter, ElementRef, Renderer} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

@Directive({
  selector: '[ngTablePaging]',
  inputs: ['config: ngTablePaging'],
  outputs: ['tableChanged'],
  host: {
    '(pagechanged)': 'onChangePage($event)'
  }
})
export class NgTablePaging {
  public config:boolean = true;
  public tableChanged:EventEmitter<any> = new EventEmitter();

  onChangePage(event:any) {
    // Object.assign(this.config, event);
    if (this.config) {
      this.tableChanged.emit({paging: event});
    }
  }
}
