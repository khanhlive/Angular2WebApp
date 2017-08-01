import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './accounts/accounts.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AccountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
