import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { UsuarioService, Usuario } from '../services/usuario.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'editar.component.html'
})

export class editarComponent {

  private id;
  private u: Usuario;
  private file: any;

  constructor(private service: UsuarioService,private login : LoginService, private router: Router, activatedRoute: ActivatedRoute) {

    this.id = activatedRoute.snapshot.params['id'];

    this.service.getUsuario(this.id).subscribe(
      usuario => {
        this.u = usuario;
      },
      error => console.error(error)
    );
  };

  updateUsuario() {
    this.u.passwordHash = this.login.pass;
    this.service.updateUsuario(this.u).subscribe(
      r => {
            this.router.navigate(['/perfil/' + this.id]);
          },
          error => console.error(error),
        );
  };

  updateImagen() {
    if (this.file !== undefined) {
          let formData = new FormData();
          formData.append('file', this.file, this.file.name);
          this.service.imagen(formData, this.u.id).subscribe(
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

  goHome() { this.router.navigate(['/home']) };
}