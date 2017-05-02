import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'app-root',
    templateUrl: 'login.component.html',
    styles: [
        ' td { padding-right: 30px; padding-bottom: 33px; text-align: left; } ',
        'input { background-color: transparent; border-color: #F05F40; }',
        'textarea { background-color: transparent; border-color: #F05F40; width: 325px; }',
        'select { background-color: #222222; border-color: #F05F40; overflow: hidden; color: white; }']
})

export class LoginComponent {

    nombre = '';
    user = '';
    email = '';
    paswordHass = '';
    roles = [];
    userlog = '';
    passlog = '';

    private login = "https://localhost:8443/logIn";
    private registroUrl = "https://localhost:8443/usuarios";

    constructor(private http: Http, private router: Router) {


    }

    registro() {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.roles.push("ROLE_USER");

        this.http.post(this.registroUrl, { nombre: this.nombre, user: this.user, email: this.email, passwordHash: this.paswordHass, roles: this.roles }, options).subscribe(
            response => { this.router.navigate(['/home']); },
            error => console.log(error)
        );
    }

    autenticacion() {

        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(this.userlog + ':' + this.passlog));

        this.http.get(this.login, { headers: headers }).subscribe(
            response => {
                let usuario = response.json();
                let id = usuario.id;
                this.router.navigate(['/perfil/' + id]);
            },
            error => console.log(error)
        );
    }

}