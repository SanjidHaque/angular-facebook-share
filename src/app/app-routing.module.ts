import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {NewsComponent} from './news/news.component';
import {SportsComponent} from './sports/sports.component';
import {EconomicsComponent} from './economics/economics.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/news',
  //   pathMatch: 'full',
  // },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'economics',
    component: EconomicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
