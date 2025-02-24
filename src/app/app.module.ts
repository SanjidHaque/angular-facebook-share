import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShareButton} from 'ngx-sharebuttons/button';
import {ShareButtonDirective} from 'ngx-sharebuttons';
import { provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { SportsComponent } from './sports/sports.component';
import { EconomicsComponent } from './economics/economics.component';
import { HomeComponent } from './home/home.component';
import { NewsContentComponent } from './news/news-content/news-content.component';



@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SportsComponent,
    EconomicsComponent,
    HomeComponent,
    NewsContentComponent
  ],
  imports: [
    BrowserModule,
    ShareButton,
    ShareButtonDirective,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
