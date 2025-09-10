import { TareasService } from './../tareas.service';
import { Component,inject,Input } from '@angular/core';

import { type Tarealit } from './tareas.litareales.model';


@Component({
  selector: 'app-tarea-literales',
 standalone: false,
  templateUrl: './tarea.literales.html',
  styleUrl: './tarea.literales.css'
})
export class TareaLiterales {
@Input ({required: true}) tarea!: Tarealit;

private tareaService=inject(TareasService);

alCompletarTarea(){
  this.tareaService.eliminarTarea(this.tarea.id);
}

}
