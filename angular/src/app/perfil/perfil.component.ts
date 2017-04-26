import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'perfil.component.html'
})

export class PerfilComponent{

    private usuario;
    private nombre;
    private apellidos;
    private email;
    private pass;
    private amigos=[];
    private favoritas = [];


     constructor(private http: Http, private router: Router, activatedRoute: ActivatedRoute){

    let id = activatedRoute.snapshot.params['id'];
    let url = "https://localhost:8443/usuarios/"+id;

    this.http.get(url).subscribe(
      response => {
        this.usuario = response.json();
        this.nombre = this.usuario.nombre;
        this.apellidos = this.usuario.apellidos;
        this.email=this.usuario.email;
      },
      error => console.error(error)
    );
  }

  goHome() { this.router.navigate(['/home'])};

}