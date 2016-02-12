import {Component} from 'angular2/core';

@Component({
  selector: 'editable',
  styles: [ require('./editable.css') ],
  template: require('./editable.html')
})
export class Editable {

  private _editable: boolean = false;
  public data: any;
  public auxValue: any;

  set editable(value: boolean) {
    this._editable = value;
  }

  get editable(): boolean {
    return this._editable;
  }

}
