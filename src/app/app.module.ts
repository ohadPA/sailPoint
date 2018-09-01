import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TreeModule } from 'angular-tree-component';

import { UtilsService } from './utils/utils.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, TreeModule.forRoot(), HttpClientModule],
  declarations: [ AppComponent, TreeComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ UtilsService, BrowserModule ]
})

export class AppModule { }