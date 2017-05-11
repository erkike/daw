import { Component } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { SerieService } from '../services/serie.service';
import { LoginService } from '../services/login.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'serie.component.html'
})

export class SerieComponent {

  private serie;
  private comentarios = [];
  private temporadas = [];
  private trailer;
  private texto = '';
  private id: number;
  private url;

  constructor(private router: Router, private service: SerieService, private usuario: LoginService, private user: UsuarioService, activatedRoute: ActivatedRoute) {

    this.id = activatedRoute.snapshot.params['id'];

    this.service.getSerie(this.id).subscribe(
      serie => {
        this.serie = serie;
        this.comentarios = this.serie.comentarios;
        this.temporadas = this.serie.temporadas;
        this.trailer = this.serie.trailer.substr(30);
      },
      error => console.error(error)
    );
  };

  comentar(){
    this.service.comentar(this.id, this.texto).subscribe();
    this.service.getSerie(this.id).subscribe(
      serie => {
        this.comentarios = [];
        this.comentarios = serie.comentarios;
      },
      error => console.error(error)
    );
  };

  favorita(){
      this.user.favorita(this.usuario.user.id,this.id).subscribe();
  }

  nofavorita(){
      this.user.nofavorita(this.usuario.user.id,this.id).subscribe();
  }
  

goHome() { this.router.navigate(['/home']) };
}

