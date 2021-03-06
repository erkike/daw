import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { SerieService } from '../services/serie.service';
import { LoginService } from '../services/login.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
    selector: 'app-root',
    templateUrl: 'admin.component.html',
    styles: [
        ' td { padding-right: 30px; padding-bottom: 33px; text-align: left; } ',
        'input { background-color: transparent; border-color: #F05F40; }',
        'textarea { background-color: transparent; border-color: #F05F40; width: 325px; }',
        'select { background-color: #222222; border-color: #F05F40; overflow: hidden; color: white; }']
})

export class AdminComponent {

    private series = [];
    private Url = "http://localhost:4200/series";
    nombre = '';
    descripcion = '';
    trailer = '';
    temporada: number;
    titulo: string;
    num: number;
    serie;
    id: number;

    private file: any;

    constructor(private service: SerieService, private login: LoginService, private http: Http, private router: Router) {
        this.service.getSeries().subscribe(
            series => {
                let data = series;
                for (var i = 0; i < data.length; i++) {
                    let serie = data[i];
                    this.series.push(serie);
                }
            },
            error => console.error(error)
        );
    }

    altaSerie() {

        const headers = new Headers({
            'Authorization': 'Basic ' + utf8_to_b64('admin:admin'),
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        const options = new RequestOptions({ withCredentials: true, headers });

        this.http.post(this.Url, { nombre: this.nombre, descripcion: this.descripcion, trailer: this.trailer, url: 'default' }, options).subscribe(
            response => {
                this.nombre = '';
                this.descripcion = '';
                this.trailer = '';
                this.series.push(response.json());
                if (this.file !== undefined) {
                    let formData = new FormData();
                    formData.append('file', this.file, this.file.name);
                    this.service.imagen(formData, response.json().id).subscribe(
                        r => {
                            this.router.navigate(['/']);
                        },
                        error => console.error(error),
                    );
                }
            },
            error => console.log(error)
        );
    }

    updateImagen() {
        if (this.file !== undefined) {
            let formData = new FormData();
            formData.append('file', this.file, this.file.name);
            this.service.imagen(formData, this.serie.id).subscribe(
                r => {
                    this.router.navigate(['/perfil/' + this.id]);
                },
                error => console.error(error),
            );
        }
    }

    selectFile($event) {
        this.file = $event.target.files[0];
        console.log("Selected file: " + this.file.name + " type:" + this.file.type + " size:" + this.file.size);
    }

    altaCapitulo() {
        for (var i = 0; i < this.series.length; i++) {
            let busqueda = this.series[i];
            if (busqueda.nombre === this.serie) {
                this.id = busqueda.id;
            }
        }
        this.service.nuevoCapitulo(this.id, this.temporada, this.titulo, this.num).subscribe(response => {
            this.titulo = '';
        },
            error => console.log(error)
        );
    }
}

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}