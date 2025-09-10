import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { App } from './app';
import { UsuarioComponente } from './usuario/usuario';
import { EncabezadoComponente } from './encabezado/encabezado.componente';
import { Tareas } from './tareas/tareas';
import { TareaLiterales } from './tareas/tarea.literales/tarea.literales';
import { TareaNueva } from './tareas/tarea-nueva/tarea-nueva';
import { FormsModule } from '@angular/forms';
import { CompartidaModule } from './compartida/compartida.module';


@NgModule({
  declarations: [
    App,
    EncabezadoComponente,
    UsuarioComponente,
    Tareas,
    TareaLiterales,
    TareaNueva,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CompartidaModule
  ],
  bootstrap: [App]
})
export class AppModule {}
