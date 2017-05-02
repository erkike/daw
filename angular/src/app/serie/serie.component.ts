import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'serie.component.html'
})

export class SerieComponent{

  private serie;
  private comentarios = [];
  private temporadas = [];
  private trailer;
  private comentario = '';
  private url;

  constructor(private http: Http, private router: Router, activatedRoute: ActivatedRoute){

    let id = activatedRoute.snapshot.params['id'];
    this.url = "https://localhost:8443/series/"+id;

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

  comentar(){
    
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });
        
    this.http.put(this.url+'/comentario',{texto: this.comentario},options).subscribe(
      response => { response => response.json() },
      error => console.log(error)
    );
  }

  goHome() { this.router.navigate(['/home'])};
}