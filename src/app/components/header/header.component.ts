import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Output() onChange = new EventEmitter<string>();
  tarea: string;
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {
    this.onChange.emit(this.tarea);
    this.tarea = '';
  }

}
