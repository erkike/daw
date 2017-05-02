import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'editar.component.html'
})

export class editarComponent{

  private usuario;


  constructor(private http: Http, private router: Router, activatedRoute: ActivatedRoute){

    let id = activatedRoute.snapshot.params['id'];
    let url = "http://localhost:4200/usuarios/"+id;

    this.http.get(url).subscribe(
      response => {
        this.usuario=response.json();
      },
      error => console.error(error)
    );
  }

  goHome() { this.router.navigate(['/home'])};
}