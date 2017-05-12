import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {SerieComponent} from './serie/serie.component';
import {PerfilComponent} from './perfil/perfil.component';
import {editarComponent} from './editar/editar.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';

const appRoutes = [
  { path: 'home', component: AppComponent},
  { path: 'series/:id', component: SerieComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'perfil/:id', component: PerfilComponent},
  { path: 'perfil/:id/editar', component: editarComponent},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent }
]

export const routing = RouterModule.forRoot(appRoutes);