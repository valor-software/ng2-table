import {Component, } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

import {TableDemo} from './table/table-demo';

let name = 'Table';
let src = 'https://github.com/valor-software/ng2-table/blob/master/components/table/table.ts';
// webpack html imports
let doc = require('../../components/table/readme.md');
let titleDoc = require('../../components/table/title.md');
let ts = require('!!prismjs?lang=typescript!./table/table-demo.ts');
let html = require('!!prismjs?lang=markup!./table/table-demo.html');

@Component({
  selector: 'table-section',
  template: `
  <br>
  <section id="${name.toLowerCase()}">
    <div class="row"><h1>${name}<small>(<a href="${src}">src</a>)</small></h1></div>

    <hr>

    <div class="row"><div class="col-md-12">${titleDoc}</div></div>

    <div class="row">
      <h2>Example</h2>
      <div class="card card-block panel panel-default panel-body">
        <table-demo></table-demo>
      </div>
    </div>

    <br>

    <div class="row">
      <tabset>
        <tab heading="Markup">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-html"><code class="language-html">${html}</code></pre>
          </div>
        </tab>
        <tab heading="TypeScript">
          <div class="card card-block panel panel-default panel-body">
            <pre class="language-typescript"><code class="language-typescript">${ts}</code></pre>
          </div>
        </tab>
      </tabset>
    </div>

    <br>

    <div class="row">
      <h2>API</h2>
      <div class="card card-block panel panel-default panel-body">${doc}</div>
    </div>
  </section>
  `,
  directives: [TableDemo, CORE_DIRECTIVES]
})
export class TableSection {
}
