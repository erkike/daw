import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html'
})

export class SerieComponent{
private serie: string="";

  constructor(private http: Http){

    let url = "https://localhost:8443/series/1";

    this.http.get(url).subscribe(
      response => {
        let data = response.json();
          this.serie = data;
      },
      error => console.error(error)
    );
  }
}