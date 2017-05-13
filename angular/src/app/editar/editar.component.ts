import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { UsuarioService, Usuario } from '../services/usuario.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'editar.component.html'
})

export class editarComponent {

  private id;
  private u: Usuario;

  constructor(private service: UsuarioService, private login: LoginService, private router: Router, activatedRoute: ActivatedRoute) {

    this.id = activatedRoute.snapshot.params['id'];

    this.service.getUsuario(this.id).subscribe(
      usuario => {
        this.u = usuario;
      },
      error => console.error(error)
    );
  };

  updateUsuario() {
    this.service.updateUsuario(this.u).subscribe();
    this.router.navigate(['/perfil/'+this.id]);
  };
  
  goHome() { this.router.navigate(['/home']) };
}