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
    this.usuario.amigos.push(this.service.anadirAmigo(this.id,this.usuario,this.user.id).subscribe());

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