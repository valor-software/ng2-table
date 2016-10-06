import { Directive, EventEmitter, Input, Output, HostListener } from '@angular/core';

@Directive({selector: '[ngTableSorting]'})
export class NgTableSortingDirective {
  @Input() public ngTableSorting:any;
  @Input() public column:any;
  @Output() public sortChanged:EventEmitter<any> = new EventEmitter();

  @Input()
  public get config():any {
    return this.ngTableSorting;
  }

  public set config(value:any) {
    this.ngTableSorting = value;
  }

  @HostListener('click', ['$event'])
  public onToggleSort(event:any):void {
    if (event) {
      event.preventDefault();
    }

    if (this.ngTableSorting && this.column && this.column.sort !== false) {
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
