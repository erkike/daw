import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SerieComponent} from './serie/serie.component';

const appRoutes = [
  { path: '/:id', component: SerieComponent},
  { path: '', component: HomeComponent }
]

export const routing = RouterModule.forRoot(appRoutes);