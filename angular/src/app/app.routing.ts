import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {SerieComponent} from './serie/serie.component';

const appRoutes = [
  { path: 'home', component: AppComponent},
  { path: ':id', component: SerieComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

export const routing = RouterModule.forRoot(appRoutes);