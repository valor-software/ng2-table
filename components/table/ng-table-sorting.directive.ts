import {Output, Input, HostListener, Directive, EventEmitter} from 'angular2/core';

@Directive({
  selector: '[ngTableSorting]',
})
export class NgTableSorting {
  @Input('ngTableSorting')
  private sorting:any = {
    columns: []
  };

  @Input()
  private column:any = {};

  @Output()
  private sortChanged:EventEmitter<any> = new EventEmitter();

  private static SORTING_DIRECTIONS:any = Object.freeze({
    asc: 'desc',
    desc: ''
  });

  @HostListener('click', ['$event'])
  onToggleSort($event:any) {
    if ($event) {
      $event.preventDefault();
    }

    if (this.columnShouldBeSorted()) {
      let direction = NgTableSorting.SORTING_DIRECTIONS[this.column.sort];
      this.column.sort = direction === undefined ? 'asc' : direction;
      this.sortChanged.emit(this.column);
    }
  }

  private columnShouldBeSorted():boolean {
    return this.sorting && this.column && this.column.sort !== false;
  }
}
