import { Component } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService} from '../services/login.service';
import { SerieService } from '../services/serie.service';
import { Usuario } from '../services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'serie.component.html',
  providers: [LoginService,
    SerieService]
})

export class SerieComponent {

  private serie;
  private comentarios = [];
  private temporadas = [];
  private trailer;
  private texto = '';
  private id: number;
  private url;

  constructor(private router: Router, private login: LoginService, private service: SerieService, activatedRoute: ActivatedRoute) {

    this.id = activatedRoute.snapshot.params['id'];

    this.service.getSerie(this.id).subscribe(
      serie => {
        this.serie = serie;
        this.comentarios = this.serie.comentarios;
        this.temporadas = this.serie.temporadas;
        this.trailer = this.serie.trailer;
      },
      error => console.error(error)
    );
  };

  comentar(){
    this.login.reqIsLogged();
    this.service.comentar(this.id, this.texto).subscribe();
  };
  

goHome() { this.router.navigate(['/home']) };
}
