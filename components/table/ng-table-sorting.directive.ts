import {Directive, EventEmitter} from '@angular/core';
import {FORM_DIRECTIVES, CORE_DIRECTIVES, NgClass} from '@angular/common';

@Directive({
  selector: '[ngTableSorting]',
  inputs: ['config: ngTableSorting', 'column'],
  outputs: ['sortChanged'],
  host: {
    '(click)': 'onToggleSort($event, $target)'
  }
})
export class NgTableSorting {
  public config:any;
  public column:any;
  public sortChanged:EventEmitter<any> = new EventEmitter();

  onToggleSort(event:any) {
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

      this.sortChanged.emit(this.column);
    }
  }
}
