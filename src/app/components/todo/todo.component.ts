import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';
import { StorageService } from 'src/app/providers/storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild('tarea') tarea: ElementRef;
  tareas: Tarea[] = [];
  constructor(private storage: StorageService) {
    this.tareas = this.storage.obtenerStorage();
   }

  ngOnInit(): void {
  }

  agregar(descripcion: string) {
    const id = new Date().toISOString();
    const tareaAgregar: Tarea = {
      descripcion,
      estado: false,
      id
    };
    this.tareas.push(tareaAgregar);
    this.tarea.nativeElement.value = '';
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
