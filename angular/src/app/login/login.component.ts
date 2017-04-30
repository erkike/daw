import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-root',
    templateUrl: 'login.component.html'
})

export class LoginComponent {

    user = 'user';
    pass = 'pass';

    private login = "https://localhost:8443/logIn";
    constructor(private http: Http, private router: Router) {


    }

    registro(){}

    autenticacion(user: string, pass: string): Observable<any> {

        var headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(user+':'+pass));

        return this.http.get(this.login, headers);
    }

}