import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShareButton} from 'ngx-sharebuttons/button';
import {ShareButtonDirective} from 'ngx-sharebuttons';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShareButton,
    ShareButtonDirective,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
