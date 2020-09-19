import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';
import { StorageService } from './providers/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de tareas';
  tareas: Tarea[] = [];

  constructor(private storage: StorageService) {
    this.tareas = this.storage.obtenerStorage();
   }

  obtenerTarea(descripcion: string) {
    const id = new Date().toISOString();
    const tareaAgregar: Tarea = {
      descripcion,
      estado: false,
      id
    };
    this.tareas.push(tareaAgregar);
    this.storage.grabarStorage(this.tareas);
  }

  completar(id: string) {
    this.tareas.forEach( tareaAcompletar => {
    if( tareaAcompletar.id === id ) {
      tareaAcompletar.estado = !tareaAcompletar.estado;
    }
  });
  this.storage.grabarStorage(this.tareas);
  }
}
