import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { LoginService } from '../services/login.service';

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

    private registroUrl = "http://localhost:4200/usuarios";

    constructor(private http: Http, private router: Router, private loginService: LoginService) {


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

    logIn() {

        this.loginService.logIn(this.userlog, this.passlog).subscribe(
            u => {
                console.log(u)
                this.router.navigate(['/perfil',u.id]);
            },
            error => alert('Invalid user or password')
        );
    }

    logOut() {
        this.loginService.logOut().subscribe(
            response => { },
            error => console.log('Error when trying to log out: ' + error)
        );
    }

}
