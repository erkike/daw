import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoginService} from './login.service';
import 'rxjs/Rx';

export interface Usuario {
    id?: number;
    nombre: string;
    apellido: string;
    user: string;
    email: string;
    passwordHash: string;
    img: string;
    roles: string[];
    amigos: string[];
    seriesFavoritas: string[];
}

const URL = 'http://localhost:4200/usuarios/';


@Injectable()
export class UsuarioService {

    private u: Usuario;

    constructor(private http: Http, private login: LoginService) { }

    getUsuarios() {
        return this.http.get(URL, { withCredentials: true })
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    getUsuario(id: number | string) {
        return this.http.get(URL + id, { withCredentials: true })
            .map(response => {this.u = response.json();
            return this.u})
            .catch(error => this.handleError(error));
    }

    saveUsuario(usuario: Usuario) {

        const body = JSON.stringify(usuario);
        const headers = new Headers({
            'Authorization': 'Basic ' + utf8_to_b64(this.login.usuario+':'+this.login.pass),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ withCredentials: true, headers });

        if (!usuario.id) {
            return this.http.post(URL, body, options)
                .map(response => response.json())
                .catch(error => this.handleError(error));
        } else {
            return this.http.put(URL + usuario.id, body, options)
                .map(response => response.json())
                .catch(error => this.handleError(error));
        }
    }

    removeUsuario(usuario: Usuario) {

        const headers = new Headers({
            'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ withCredentials: true, headers });

        return this.http.delete(URL + usuario.id, options)
            .map(response => undefined)
            .catch(error => this.handleError(error));
    }

    updateUsuario(usuario: Usuario) {

        const body = JSON.stringify(usuario);
        const headers = new Headers({
            'Authorization': 'Basic ' + utf8_to_b64(this.login.usuario+':'+this.login.pass),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ withCredentials: true, headers });

        return this.http.put(URL + usuario.id, body, options)
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    favorita(usuario: number, serie: number) {

        const headers = new Headers({
            'Authorization': 'Basic ' + utf8_to_b64(this.login.usuario+':'+this.login.pass),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ withCredentials: true, headers });

        return this.http.put(URL + usuario + '/favorita/' + serie, {}, options)
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    nofavorita(usuario: number, serie: number) {

        const headers = new Headers({
            'Authorization': 'Basic ' + utf8_to_b64(this.login.usuario+':'+this.login.pass),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ withCredentials: true, headers });

        return this.http.delete(URL + usuario + '/favorita/' + serie, options)
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    imagen(formData: FormData, id: number) {

    const headers = new Headers({
            'Authorization': 'Basic ' + utf8_to_b64(this.login.usuario+':'+this.login.pass),
            'X-Requested-With': 'XMLHttpRequest',            
                    contentType: false
        });
        const options = new RequestOptions({ withCredentials: true, headers });

    return this.http.put(URL + id + '/imagen', formData, options)
      .map(response => response.json())
            .catch(error => this.handleError(error));
}

    anadirAmigo(id: number | string, id2: number) {

        const headers = new Headers({
            'Authorization': 'Basic ' + utf8_to_b64(this.login.usuario+':'+this.login.pass),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ withCredentials: true, headers });

        return this.http.put(URL + id + '/amigo/' + id2, {}, options)
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    borrarAmigo(id: number | string, id2: number) {

        const headers = new Headers({
            'Authorization': 'Basic ' + utf8_to_b64(this.login.usuario+':'+this.login.pass),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ withCredentials: true, headers });

        return this.http.delete(URL + id + '/amigo/' + id2, options)
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text());
    }


}

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}