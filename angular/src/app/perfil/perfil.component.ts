import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'perfil.component.html'

})

export class PerfilComponent {

  private usuario;
  private user;
  private id: number;
  private id2: number;


  constructor(private service: UsuarioService, private login: LoginService, private router: Router, activatedRoute: ActivatedRoute) {

    this.id = activatedRoute.snapshot.params['id'];
    this.service.getUsuario(this.id).subscribe(
      usuario => {
        this.usuario = usuario;

      },
      error => console.error(error)
    );
  };

  desconectar() {
    this.login.logOut().subscribe();
    this.router.navigate(['/home']);
  }

  anadirAmigo() {
    this.service.getUsuarios().subscribe(
      users => {
        let data = users;
        for (var i = 0; i < data.length; i++) {
          let busqueda = data[i];
          if (busqueda.user === this.user) {
            this.id2 = busqueda.id;
          }
        }
        this.service.anadirAmigo(this.id, this.id2).subscribe(
          r => {
            this.service.getUsuario(this.id).subscribe(
              u => {
                this.usuario = u;
              },
              error => console.error(error)
            );
          },
          error => console.error(error),
        );
      },
      error => console.error(error)
    );
  };

  borrarAmigo(){
    this.service.getUsuarios().subscribe(
      users => {
        let data = users;
        for (var i = 0; i < data.length; i++) {
          let busqueda = data[i];
          if (busqueda.user === this.user) {
            this.id2 = busqueda.id;
          }
        }
        this.service.borrarAmigo(this.id, this.id2).subscribe(
          r => {
            this.service.getUsuario(this.id).subscribe(
              u => {
                this.usuario = u;
              },
              error => console.error(error)
            );
          },
          error => console.error(error),
        );
      },
      error => console.error(error)
    );
  };

  goAmigos() {
    let tree = this.router.parseUrl(this.router.url);
    if (tree.fragment == 'amigos') {
      let element = document.querySelector("#" + tree.fragment);
      if (element) {
        element.scrollIntoView(element);
      }
    }
    else {
      this.router.navigate(['/perfil/' + this.id], { fragment: 'amigos' })
        .then(() => {
          let tree = this.router.parseUrl(this.router.url);
          let element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView(element);
          }
        });
    }
  }

  goSeries() {
    let tree = this.router.parseUrl(this.router.url);
    if (tree.fragment == 'series') {
      let element = document.querySelector("#" + tree.fragment);
      if (element) {
        element.scrollIntoView(element);
      }
    }
    else {
      this.router.navigate(['/perfil/' + this.id], { fragment: 'series' })
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