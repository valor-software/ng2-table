/// <reference path="../../tsd.d.ts" />

import {
  Directive,
  EventEmitter, ElementRef, Renderer,
  CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES
} from 'angular2/angular2';

// import {setProperty} from 'angular2/ts/src/core/forms/directives/shared';
function setProperty(renderer:Renderer, elementRef:ElementRef, propName:string, propValue:any) {
  renderer.setElementProperty(elementRef, propName, propValue);
}

@Directive({
  selector: '[ng2-table-filter]',
  inputs: ['config: ng2TableFilter'],
  outputs: ['tableChanged'],
  host: {
    '(input)': 'onChangeFilter($event.target.value)'
  }
})
export class Ng2TableFilter {
  public config:any = {
    filterString: '',
    columnName: 'name'
  };
  public tableChanged:EventEmitter<any> = new EventEmitter();

  constructor(private element:ElementRef, private renderer:Renderer) {
    // Set default value for filter
    setProperty(this.renderer, this.element, 'value', this.config.filterString);
  }

  onChangeFilter(event:any) {
    this.config.filterString = event;
    this.tableChanged.next({'filtering': this.config});
  }
}
