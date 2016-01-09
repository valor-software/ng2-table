import {Directive, EventEmitter, ElementRef, Renderer} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';

// import {setProperty} from 'angular2/ts/src/core/forms/directives/shared';
function setProperty(renderer:Renderer, elementRef:ElementRef, propName:string, propValue:any) {
  renderer.setElementProperty(elementRef, propName, propValue);
}

@Directive({
  selector: '[ngTableFiltering]',
  inputs: ['config: ngTableFiltering'],
  outputs: ['tableChanged'],
  host: {
    '(input)': 'onChangeFilter($event.target.value)'
  }
})
export class NgTableFiltering {
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
    this.tableChanged.emit({filtering: this.config});
  }
}
