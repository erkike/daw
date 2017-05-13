import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from "rxjs/Observable";
import { UsuarioService } from '../services/usuario.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'editar.component.html'
})

export class editarComponent{

  private usuario;
    id;
    nombre = '';
    apellido='';
    user = '';
    email = '';
    paswordHass = '';
    roles = [];
    userlog = '';
    passlog = '';

  constructor(private service: UsuarioService,private login: LoginService, private router: Router, activatedRoute: ActivatedRoute){

    this.id = activatedRoute.snapshot.params['id'];
   // let url = "http://localhost:4200/usuarios/"+id;

    this.service.getUsuario(this.id).subscribe(
      usuario => {
        this.usuario = usuario;

      },
      error => console.error(error)
    );
  };
updateUsuario(){
  this.service.updateUsuario(this.usuario).subscribe();
  this.service.saveUsuario(this.usuario).subscribe();
};
  goHome() { this.router.navigate(['/home'])};
}