import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponente } from "./encabezado/encabezado.componente";
import {  UsuarioComponente } from "./usuario/usuario";
import { USUARIOS_FALSOS } from './usuario/usuarios-falsos';
import { Tareas } from './tareas/tareas';
@Component({
  selector: 'app-root',
  imports: [EncabezadoComponente, UsuarioComponente, Tareas],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
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
