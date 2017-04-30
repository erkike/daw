import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'login.component.html'
})

export class LoginComponent{

    constructor(){

        let url = "https://localhost:8443/logIn";
    }

}