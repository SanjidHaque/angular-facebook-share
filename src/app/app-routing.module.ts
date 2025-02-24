import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {NewsComponent} from './news/news.component';
import {SportsComponent} from './sports/sports.component';
import {EconomicsComponent} from './economics/economics.component';
import {HomeComponent} from './home/home.component';
import {NewsContentComponent} from './news/news-content/news-content.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsContentComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'economics', component: EconomicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
