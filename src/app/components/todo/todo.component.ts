import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';
import { StorageService } from 'src/app/providers/storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() tareas: Tarea[];


  ngOnInit(): void {
  }



  completar(id: string) {
  this.tareas.forEach( tareaAcompletar => {
    if( tareaAcompletar.id === id ) {
      tareaAcompletar.estado = !tareaAcompletar.estado;
    }
  });
  //this.storage.grabarStorage(this.tareas);
  }

}
