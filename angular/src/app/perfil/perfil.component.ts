import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute} from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'perfil.component.html'

})

export class PerfilComponent{

    private usuario;
    private user;
    private id:number;


     constructor(private service: UsuarioService, private router: Router, activatedRoute: ActivatedRoute){

    this.id = activatedRoute.snapshot.params['id'];
    this.service.getUsuario(this.id).subscribe(
      usuario => {
        this.usuario = usuario;

      },
      error => console.error(error)
    );
  };

  anadirAmigo(){
    //ni sorra de que poner

  };
   goHome() { this.router.navigate(['/home'])};
}