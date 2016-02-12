import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'c-buttons',
  styles: [ require('./buttons.css') ],
  template: require('./buttons.html')
})
export class Buttons {
  @Output() edit  : EventEmitter<any> = new EventEmitter<any>();
  @Output() ok    : EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  private _editMode: boolean = false;
}
