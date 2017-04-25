import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  private series: string[] = [];

  constructor(private http: Http){
    this.series = [];

    let url = "https://localhost:8443/series";

    this.http.get(url).subscribe(
      response => {
        let data = response.json();
        for (var i = 1; i < 21; i++){
          let serie = data[i];
          this.series.push(serie);
        }
      },
      error => console.error(error)
    );
  }
}
