import {Directive, Input, Output, HostListener, HostBinding, EventEmitter} from 'angular2/core';

@Directive({
  selector: '[ngTableFiltering]',
})
export class NgTableFiltering {
  @Input('ngTableFiltering')
  private filtering:any = Object.freeze({filterString: ''});

  @Output()
  private tableChanged:EventEmitter<any> = new EventEmitter();

  @HostBinding('value') get initialFilterValue() {
    return this.filtering.filterString;
  }

  @HostListener('input', ['$event.target.value'])
  private onChangeFilter($event:any) {
    let changedFiltering = Object.assign({}, this.filtering, {filterString: $event});
    this.tableChanged.emit(changedFiltering);
  }
}
