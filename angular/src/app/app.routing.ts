import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {SerieComponent} from './serie/serie.component';
import {PerfilComponent} from './perfil/perfil.component';
import {editarComponent} from './editar/editar.component';

const appRoutes = [
  { path: 'home', component: AppComponent},
  { path: ':id', component: SerieComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'perfil/:id', component: PerfilComponent},
  { path: 'perfil/:id/editar', component: editarComponent}
]

export const routing = RouterModule.forRoot(appRoutes);