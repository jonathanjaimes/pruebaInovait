import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  profesores:string[] = ["Jonathan Jaimes", "Guillermo Moreno", "Iogni Millán", "Carlos Pérez", "Marlin Camargo"]
  colegios:string[] = ["Los Almendros", "Liceo Mayor", "Scalabrinni", "Los Bosques", "Los Próceres"]
  grados:string[] = ["1ro", "2do", "3ro", "4to", "5to"]
}
