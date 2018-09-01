// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { TestBed } from '@angular/core/testing';
import { TreeComponent } from './app/tree/tree.component';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

let comp: TreeComponent;

TestBed.configureTestingModule({
  declarations: [ TreeComponent ],
  providers: [
    { provide: ComponentFixtureAutoDetect, useValue: true }
  ]
});

it('tree cant be undefined', () => {
  let tree = comp.getFullTree();
  expect(tree).not.toBeUndefined;
});
