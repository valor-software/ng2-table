import {it, expect, describe, inject, beforeEachProviders} from '@angular/core/testing';
import {ComponentFixture} from '@angular/compiler/testing';
import {NgTableComponent} from './ng-table.component';

describe('Directive: FileSelectDirective', () => {
  beforeEachProviders(() => [
    NgTableComponent
  ]);
  it('should be fine', inject([NgTableComponent], (fixture:ComponentFixture<NgTableComponent>) => {
    expect(fixture).not.toBeNull();
  }));
});
