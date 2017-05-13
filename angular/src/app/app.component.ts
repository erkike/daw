import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SerieService } from './services/serie.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  private series: any[];

  constructor(private router: Router, private service: SerieService, private login: LoginService) {

    this.service.getSeries().subscribe(
      series => {
        this.series = series;
      },
      error => console.error(error)
    );


  }

  goAbout() {
    let tree = this.router.parseUrl(this.router.url);
    if (tree.fragment == 'about') {
      let element = document.querySelector("#" + tree.fragment);
      if (element) {
        element.scrollIntoView(element);
      }
    }
    else {
      this.router.navigate(['/'], { fragment: 'about' })
        .then(() => {
          let tree = this.router.parseUrl(this.router.url);
          let element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView(element);
          }
        });
    }
  }

  goSeries() {
    let tree = this.router.parseUrl(this.router.url);
    if (tree.fragment == 'series') {
      let element = document.querySelector("#" + tree.fragment);
      if (element) {
        element.scrollIntoView(element);
      }
    }
    else {
      this.router.navigate(['/'], { fragment: 'series' })
        .then(() => {
          let tree = this.router.parseUrl(this.router.url);
          let element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView(element);
          }
        });
    }
  }

  goContact() {
    let tree = this.router.parseUrl(this.router.url);
    if (tree.fragment == 'contact') {
      let element = document.querySelector("#" + tree.fragment);
      if (element) {
        element.scrollIntoView(element);
      }
    }
    else {
      this.router.navigate(['/'], { fragment: 'contact' })
        .then(() => {
          let tree = this.router.parseUrl(this.router.url);
          let element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView(element);
          }
        });
    }
  }
}
