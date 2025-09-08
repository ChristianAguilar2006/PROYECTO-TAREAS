import { Component,EventEmitter,inject,Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NuevaTareaInfo } from '../tarea.literales/tareas.litareales.model';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea-nueva',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarea-nueva.html',
  styleUrl: './tarea-nueva.css'
})
export class TareaNueva {
@Input ({required: true}) idUsuario!: string;
@Output() cerrar=new EventEmitter();

tituloIngresado='';
resumenIngresado='';
fechaIngresada='';

private tareaService= inject(TareasService);

alCerrar(){
  this.cerrar.emit();
}


alEnviar(){
  this.tareaService.agregarTarea({
    titulo:this.tituloIngresado,
    resumen:this.resumenIngresado,
    fecha:this.fechaIngresada
  },this.idUsuario)
  this.alCerrar();
};


}
