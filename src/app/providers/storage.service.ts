import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  grabarStorage(lista: Tarea[]) {
    const listJson = JSON.stringify(lista);
    localStorage.setItem('lista', listJson);
  }

  obtenerStorage(): Tarea[] {
    const key = 'lista';
    const listaJson = localStorage.getItem(key);
    return listaJson ? JSON.parse(listaJson) as Tarea[] : [];
  }
}
