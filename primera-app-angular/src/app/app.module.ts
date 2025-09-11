import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { App } from './app';
import { UsuarioComponente } from './usuario/usuario';
import { EncabezadoComponente } from './encabezado/encabezado.componente';

import { CompartidaModule } from './compartida/compartida.module';
import { tareasModule } from './tareas/tareas.module';

@NgModule({
  declarations: [
    App,
    EncabezadoComponente,
    UsuarioComponente,
  ],
  imports: [
    BrowserModule,
    CompartidaModule,
    tareasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [App]
})
export class AppModule {}
