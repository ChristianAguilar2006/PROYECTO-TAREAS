import { Injectable } from '@angular/core';
import { NuevaTareaInfo } from './tarea.literales/tareas.litareales.model';

  @Injectable({ providedIn:'root'})
export class TareasService{


  private tareas = [
    {
      id: 't22',
      idUsuario: 'u1',
      titulo: 'PENDEJO',
      resumen: 'PENDEJO',
      expira: '2025',
    },

    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resumen: 'Apreder todas las características básicas y avanzasAngular cómo apicarlas.',
      expira: '2025-01-01'
    },
    {
      id: 't2',
      idUsuario: 'u3',
      titulo: 'Crear el primer prototipo',
      resumen: 'Crear el primer prototipo del sitio web de la tienda',
      expira: '2025-11-05',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar la plantilla del carrito',
      resumen: 'Preparar y describir una plantilla de carrito de compras de la tienda online',
      expira: '2025-05-16',
    },

  ];

  constructor(){
    const tareas = localStorage.getItem('tareas');
    if(tareas){
      this.tareas=JSON.parse(tareas);
    }
  }
obternerTareasDelUsuario(idUsuario: string){
    return this.tareas.filter((tarea) => tarea.idUsuario === idUsuario);
}

agregarTarea(infoTarea: NuevaTareaInfo,idUsuario: string){
    this.tareas.push({
      id: new Date().getTime.toString(),
      titulo: infoTarea.titulo,
      idUsuario: idUsuario!,
      resumen: infoTarea.resumen,
      expira: infoTarea.fecha

  })
}

eliminarTarea(id: string){
this.tareas=this.tareas.filter((tarea)=>tarea.id!==id);
this.guardarTareas();
}
private guardarTareas(){
  localStorage.setItem('tareas',JSON.stringify(this.tareas));
}

}