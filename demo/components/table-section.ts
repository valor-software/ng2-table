import { Component } from '@angular/core';
// webpack html imports
let doc = require('../../README.md');
let titleDoc = require('../../components/table/title.md');
let ts = require('!!prismjs?lang=typescript!./table/table-demo.ts');
let ts2 = require('!!prismjs?lang=typescript!./table/row-content/row-content.component.ts');
let html = require('!!prismjs?lang=markup!./table/table-demo.html');

@Component({
  selector: 'table-section',
  template: require('./table-section.html')
})
export class TableSectionComponent {
  public name:string = 'Table';
  public src:string = 'https://github.com/reseract/ng2-expanding-table/tree/master/components/table';
  public ts:string = ts;
  public ts2:string = ts2;
  public doc:string = doc;
  public titleDoc:string = titleDoc;
  public html:string = html;
}
