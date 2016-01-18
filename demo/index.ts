import {bootstrap} from 'angular2/bootstrap';
import {Component} from 'angular2/core';

import {TableSection} from './components/table-section';
import {NgTableEventBus} from '../ng2-table';

@Component({
  selector: 'app',
  template: `
  <main class="bd-pageheader">
    <div class="container">
      <h1>ng2-table</h1>
      <p>Angular2 based table component</p>
      <a class="btn btn-primary" href="https://github.com/valor-software/ng2-table">View on GitHub</a>
      <div class="row">
        <div class="col-lg-1">
          <iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-table&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
        </div>
        <div class="col-lg-1">
          <iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-table&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
        </div>
      </div>
    </div>
  </main>

  <div class="container">
    <section id="getting-started">
      <h1>Getting started</h1>
      <h3>First of all, welcome!</h3>
    </section>
    <table-section></table-section>
  </div>

  <footer class="footer">
    <div class="container">
      <p class="text-muted text-center">
        <a href="https://github.com/valor-software/ng2-table">ng2-table</a> is maintained by <a href="https://github.com/valor-software">valor-software</a>
      </p>
    </div>
  </footer>`,
  directives: [TableSection]
})
export class Demo {
}

bootstrap(Demo, [NgTableEventBus]);
