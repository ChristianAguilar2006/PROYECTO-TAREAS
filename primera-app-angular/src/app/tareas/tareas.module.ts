import { NgModule } from "@angular/core";
import { Tareas } from "./tareas";
import { TareaLiterales } from "./tarea.literales/tarea.literales";
import { TareaNueva } from "./tarea-nueva/tarea-nueva";
import { CompartidaModule } from "../compartida/compartida.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


import { LOCALE_ID } from '@angular/core';


  @NgModule({

    declarations: [ Tareas,
    TareaNueva,
    TareaLiterales ],
        exports: [Tareas],
        imports: [CommonModule,CompartidaModule,FormsModule]
  })
export class tareasModule{



}
