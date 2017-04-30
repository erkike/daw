import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  private series: string[] = [];

  constructor(private http: Http, private router: Router){
    this.series = [];

    let url = "https://localhost:8443/series";

    this.http.get(url).subscribe(
      response => {
        let data = response.json();
        for (var i = 0; i < 20; i++){
          let serie = data[i];
          this.series.push(serie);
        }
      },
      error => console.error(error)
    );
  }

  goHome() { this.router.navigate(['/home#page-top'])};

  login() { this.router.navigate(['/login'])};
}
