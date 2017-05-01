import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-root',
    templateUrl: 'login.component.html'
})

export class LoginComponent {

    nombre = '';
    user = '';
    email = '';
    paswordHass = '';
    userlog = '';
    passlog = '';

    private login = "https://localhost:8443/logIn";
    private registroUrl = "https://localhost:8443/usuarios";

    constructor(private http: Http, private router: Router) {


    }

    registro() {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post(this.registroUrl, { nombre: this.nombre, user: this.user, email: this.email, passwordHass: this.paswordHass }, options).subscribe(
            response => { this.router.navigate(['/home']); },
            error => console.log(error)
        );
    }

    autenticacion(){

        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(this.userlog + ':' + this.passlog));

        this.http.get(this.login, {headers: headers}).subscribe(
            response => { 
                let usuario = response.json();
                let id = usuario.id;
                this.router.navigate(['/perfil/'+id]); },
            error => console.log(error)
        );
    }

}