import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
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

    constructor(private http: Http) { }

    getUsuarios() {
        return this.http.get(URL, { withCredentials: true })
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    getUsuario(id: number | string) {
        return this.http.get(URL + id, { withCredentials: true })
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    saveUsuario(usuario: Usuario) {

        const body = JSON.stringify(usuario);
        const headers = new Headers({
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
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ withCredentials: true, headers });

        return this.http.put(URL + usuario.id, body, options)
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw('Server error (' + error.status + '): ' + error.text());
    }

}