import { Component } from '@angular/core';
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
  private fav = false;

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

    if (usuario.user != null && usuario.user != undefined) {
      this.fav = contains(usuario.user.seriesFavoritas, this.id);
    }
  };

  comentar() {
    this.service.comentar(this.id, this.texto).subscribe(
      r => {
        this.service.getSerie(this.id).subscribe(
          serie => {
            this.comentarios = [];
            this.comentarios = serie.comentarios;
          },
          error => console.error(error)
        );
      },
      error => console.error(error),
    );

  };

  favorita() {
    this.user.favorita(this.usuario.user.id, this.id).subscribe();
    this.fav = true;
  }

  nofavorita() {
    this.user.nofavorita(this.usuario.user.id, this.id).subscribe();
    this.fav = false;
  }


  goInformacion() {
    let tree = this.router.parseUrl(this.router.url);
    if (tree.fragment == 'informacion') {
      let element = document.querySelector("#" + tree.fragment);
      if (element) {
        element.scrollIntoView(element);
      }
    }
    else {
      this.router.navigate(['/series/' + this.id], { fragment: 'informacion' })
        .then(() => {
          let tree = this.router.parseUrl(this.router.url);
          let element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView(element);
          }
        });
    }
  }

  goCapitulos() {
    let tree = this.router.parseUrl(this.router.url);
    if (tree.fragment == 'capitulos') {
      let element = document.querySelector("#" + tree.fragment);
      if (element) {
        element.scrollIntoView(element);
      }
    }
    else {
      this.router.navigate(['/series/' + this.id], { fragment: 'capitulos' })
        .then(() => {
          let tree = this.router.parseUrl(this.router.url);
          let element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView(element);
          }
        });
    }
  }

  goComentarios() {
    let tree = this.router.parseUrl(this.router.url);
    if (tree.fragment == 'comentarios') {
      let element = document.querySelector("#" + tree.fragment);
      if (element) {
        element.scrollIntoView(element);
      }
    }
    else {
      this.router.navigate(['/series/' + this.id], { fragment: 'comentarios' })
        .then(() => {
          let tree = this.router.parseUrl(this.router.url);
          let element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView(element);
          }
        });
    }
  }
}

function contains(a, obj: number) {
  var i = a.length;
  while (i--) {
    if (a[i].id === obj) {
      return true;
    }
  }
  return false;
}

