import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { YoutubePlayerModule } from 'ng2-youtube-player';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SerieComponent } from './serie/serie.component';
import { routing } from './app.routing';
import { PerfilComponent } from './perfil/perfil.component';
import { editarComponent } from './editar/editar.component';
import { LoginComponent } from './login/login.component';

import { SerieService } from './services/serie.service';
import { UsuarioService } from './services/usuario.service';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SerieComponent,
    PerfilComponent,
    editarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    YoutubePlayerModule
  ],
  providers: [SerieService, UsuarioService, LoginService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
