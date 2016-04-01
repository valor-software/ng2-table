import {Injectable, EventEmitter} from 'angular2/core';
import {Observable} from 'rxjs';

@Injectable()
export class NgTableEventBus {
  private sorting$:EventEmitter<any> = new EventEmitter();
  private filtering$:EventEmitter<any> = new EventEmitter();
  private pagination$:EventEmitter<any> = new EventEmitter();

  igniteEvents(config:any):Observable<any> {
    const {filteringDebounceTime = 250} = config.filtering || {};

    let initialTableComponentsState = [
      this.filtering$.debounceTime(filteringDebounceTime).startWith(config.filtering),
      this.pagination$.startWith(config.pagination),
      this.sorting$.startWith(config.sorting)
    ];

    return Observable
      .combineLatest(initialTableComponentsState, (filtering, pagination, sorting) => {
        return {context: {filtering, pagination, sorting}};
      });
  }

  onFilterChanged($event:any) {
    this.filtering$.emit($event);
  }

  onPageChanged($event:any) {
    this.pagination$.emit($event);
  }

  onSortingChanged($event:any) {
    this.sorting$.emit($event);
  }
}
