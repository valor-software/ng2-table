import { Component } from '@angular/core';
// webpack html imports
let doc = require('../../components/table/readme.md');
let titleDoc = require('../../components/table/title.md');
let ts = require('!!prismjs?lang=typescript!./table/table-demo.ts');
let html = require('!!prismjs?lang=markup!./table/table-demo.html');

@Component({
  selector: 'table-section',
  templateUrl: './demo/components/table-section.html'
})
export class TableSectionComponent {
  public name:string = 'Table';
  public src:string = 'https://github.com/valor-software/ng2-table/tree/master/components/table';
  public ts:string = ts;
  public doc:string = doc;
  public titleDoc:string = titleDoc;
  public html:string = html;
}
