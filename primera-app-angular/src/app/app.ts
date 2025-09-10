import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { USUARIOS_FALSOS } from './usuario/usuarios-falsos';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrls: ['./app.css']  // plural
})

export class App {

  usuarios=USUARIOS_FALSOS;

  idUsuarioSeleccionado?: string;

get usuarioSeleccionado() {
  return this.usuarios.find((usuario) => usuario.id === this.idUsuarioSeleccionado);
}


  alSeleccionarUsuario(id: string) {
    this.idUsuarioSeleccionado = id;

}
}
