import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() tareas: Tarea[];
  @Output() onChange = new EventEmitter<string>();

  ngOnInit(): void {
  }

  completar(id: string) {
    this.onChange.emit(id);
  }

}
