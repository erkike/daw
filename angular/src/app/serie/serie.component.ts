import { Component } from '@angular/core';
import { Http } from '@angular/http';
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

  constructor(private http: Http, private router: Router, activatedRoute: ActivatedRoute){

    let id = activatedRoute.snapshot.params['id'];
    let url = "https://localhost:8443/series/"+id;

    this.http.get(url).subscribe(
      response => {
        this.serie = response.json();
        this.comentarios = this.serie.comentarios;
        this.temporadas = this.serie.temporadas;
        this.trailer = this.serie.trailer;
      },
      error => console.error(error)
    );
  }

  goHome() { this.router.navigate(['/home'])};
}