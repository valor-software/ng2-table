import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {TableDemo} from './table/table-demo';

// webpack html imports
const doc = require('../../components/table/readme.md');
const ts = require('!!prismjs?lang=typescript!./table/table-demo.ts');
const html = require('!!prismjs?lang=markup!./table/table-demo.html');

@Component({
  selector: 'table-section',
  template: `
  <section id="${name.toLowerCase()}">
    <section id="table-demo">
      <h2>{{name}} in action</h2>
      <table-demo></table-demo>
    </section>

    <section id="table-demo-src">
      <h2>How to set up such a table</h2>
      <ul class="nav nav-tabs">
        <li *ngFor="#tab of demoSrcTabs" role="presentation" [class.active]="selectedTabName === tab.name">
          <a (click)="selectTab($event, tab.name)" href="#">{{tab.name}}</a>
        </li>
      </ul>

      <div *ngFor="#tab of demoSrcTabs" [class.hide]="selectedTabName !== tab.name">
        <pre class="language-{{tab.type}}" [innerHtml]="tab.content"></pre>
      </div>
    </section>

    <section id="ng2-table-api">
      <h2>Table's API</h2>
      <div>${doc}</div>
    </section>
  </section>`,
  directives: [TableDemo, CORE_DIRECTIVES]
})
export class TableSection {
  private name:string = 'Table';

  private demoSrcTabs:Array<any> = [
    {
      name: 'Markup',
      type: 'html',
      content: html
    },
    {
      name: 'Typescript',
      type: 'typescript',
      content: ts
    }
  ];

  private selectedTabName:string;

  constructor() {
    const firstTab = this.demoSrcTabs[0];
    this.selectedTabName = firstTab.name;
  }

  private selectTab($event:any, tabName:string):void {
    $event.preventDefault();
    this.selectedTabName = tabName;
  }
}
