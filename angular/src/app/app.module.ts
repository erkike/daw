import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { YoutubePlayerModule } from 'ng2-youtube-player';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SerieComponent } from './serie/serie.component';
import { routing } from './app.routing';
import {PerfilComponent} from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SerieComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
