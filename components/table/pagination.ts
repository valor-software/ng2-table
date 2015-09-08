import {
  Component, View,
  Directive, LifecycleEvent,
  EventEmitter, ElementRef,
  CORE_DIRECTIVES, NgClass, NgFor
} from 'angular2/angular2';

import {pagination} from 'ng2-bootstrap';

// class Pagination
@Component({
  selector: 'pagination[ng-model], [pagination][ng-model]',
  properties: [
    'rotate', 'disabled',
    'totalItems', 'itemsPerPage', 'maxSize',
    'boundaryLinks', 'directionLinks',
    'firstText', 'previousText', 'nextText', 'lastText'
  ],
  events: ['numPages'],
  lifecycle: [LifecycleEvent.onInit]
})

// class Pager
@Component({
  selector: 'pager[ng-model], [pager][ng-model]',
  properties: [
    'align',
    'totalItems', 'itemsPerPage',
    'previousText', 'nextText',
  ],
  lifecycle: [LifecycleEvent.onInit]
})

export const pagination:Array<any> = [Pagination, Pager];
