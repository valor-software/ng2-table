import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

if (ENV === 'production') {
  enableProdMode();
}

import { Ng2TableDemoModule } from './demo.module';
platformBrowserDynamic().bootstrapModule(Ng2TableDemoModule);
