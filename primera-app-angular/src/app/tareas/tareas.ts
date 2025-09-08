import { Component, Input } from '@angular/core';
import { TareaLiterales } from './tarea.literales/tarea.literales';
import { TareaNueva } from "./tarea-nueva/tarea-nueva";
import { type NuevaTareaInfo } from './tarea.literales/tareas.litareales.model';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [TareaLiterales, TareaNueva],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas {
  @Input({required: true}) idUsuario!: string;
  @Input({required: true}) nombre?: string;

  estaAgregandoTareaNueva=false;

  constructor(private tareaService:TareasService){}

get tareasUsuarioSeleccionado() {
  return this.tareaService.obternerTareasDelUsuario(this.idUsuario);
}


alIniciarTareaNueva(){
this.estaAgregandoTareaNueva=true;
}


alCerrar(){
   this.estaAgregandoTareaNueva=false;
}



}
