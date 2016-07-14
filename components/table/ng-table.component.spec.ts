import {inject, addProviders, ComponentFixture} from '@angular/core/testing';
import {NgTableComponent} from './ng-table.component';

describe('Directive: FileSelectDirective', () => {
  beforeEach(() => {
    addProviders([NgTableComponent]);
  });
  it('should be fine', inject([NgTableComponent], (fixture:ComponentFixture<NgTableComponent>) => {
    expect(fixture).not.toBeNull();
  }));
});
