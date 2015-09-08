/// <reference path="../../tsd.d.ts" />

import {
  Directive, LifecycleEvent,
  EventEmitter, ElementRef, Renderer,
  CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES
} from 'angular2/angular2';

import {setProperty} from 'angular2/src/forms/directives/shared';

@Directive({
  selector: '[ng2-table-filter]',
  properties: ['config: ng2TableFilter'],
  events: ['tableChanged'],
  host: {
    '(input)': 'onChangeFilter($event.target.value)'
  }
})
export class Ng2TableFilter {
  public config:any = {
    filterString: '',
    columnName: 'name'
  };
  public tableChanged:EventEmitter = new EventEmitter();

  constructor (private element:ElementRef, private renderer:Renderer) {
    // Set default value for filter
    setProperty(this.renderer, this.element, 'value', this.config.filterString);
  }

  onChangeFilter(event) {
    this.config.filterString = event;
    this.tableChanged.next({'filtering': this.config});
  }
}
