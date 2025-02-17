import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

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
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
