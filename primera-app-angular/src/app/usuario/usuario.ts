import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Usuario } from './usuario.model';
import { Tarjeta } from "../compartida/tarjeta/tarjeta";
/*type Usuario = {
  id: string;
  nombre: string;
  avatar: string;
}
*/

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
  imports: [Tarjeta]
})
export class UsuarioComponente {
  @Input({ required: true }) usuario!: Usuario
  @Input({ required: true }) seleccionado!: boolean;
  @Output() seleccion = new EventEmitter<string>();


  get rutaImagen() {
    return 'assets/usuarios/' + this.usuario.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}
