import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Serie {
  id?: number;
  nombre: string;
  url: string;
  trailer: string;
  valoracion: number;
  año: number;
  img: string;
  descripcion: string;
  temporadas: string[];
  comentarios: string[];
}

const URL = 'http://localhost:4200/series/';

@Injectable()
export class SerieService {

  constructor(private http: Http) { }

  getSeries() {
    return this.http.get(URL, { withCredentials: true })
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  getSerie(id: number | string) {
    return this.http.get(URL + id, { withCredentials: true })
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  saveSerie(serie: Serie) {

    const body = JSON.stringify(serie);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });

    if (!serie.id) {
      return this.http.post(URL, body, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
    } else {
      return this.http.put(URL + serie.id, body, options)
        .map(response => response.json())
        .catch(error => this.handleError(error));
    }
  }

  removeSerie(serie: Serie) {

    const headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });

    return this.http.delete(URL + serie.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  updateSerie(serie: Serie) {

    const body = JSON.stringify(serie);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });

    return this.http.put(URL + serie.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  comentar(id: number | string, comentario: string) {

    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = new RequestOptions({ withCredentials: true, headers });

    return this.http.put(URL + id + '/comentario', { texto: comentario }, options)
      .map(response => response => response.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw('Server error (' + error.status + '): ' + error.text());
  }

}