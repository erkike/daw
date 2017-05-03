import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService, Usuario } from '../login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'serie.component.html',
  providers: [LoginService]
})

export class SerieComponent {

  private serie;
  private comentarios = [];
  private temporadas = [];
  private trailer;
  private comentario = '';
  private url;

  constructor(private http: Http, private router: Router, private service: LoginService, activatedRoute: ActivatedRoute) {

    let id = activatedRoute.snapshot.params['id'];
    this.url = "http://localhost:4200/series/" + id;

    this.http.get(this.url).subscribe(
      response => {
        this.serie = response.json();
        this.comentarios = this.serie.comentarios;
        this.temporadas = this.serie.temporadas;
        this.trailer = this.serie.trailer;
      },
      error => console.error(error)
    );
  }

  comentar() {

    const usuario = this.service.getLogged();
    this.service.logIn('Carpinchote', 'pass').subscribe(
      response => {
        const headers = new Headers({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ withCredentials: true, headers });

        this.http.put(this.url + '/comentario', { texto: this.comentario }, options).subscribe(
          response => { response => response.json() },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );

  }

  goHome() { this.router.navigate(['/home']) };
}