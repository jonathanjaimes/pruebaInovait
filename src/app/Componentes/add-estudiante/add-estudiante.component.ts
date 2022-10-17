import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-add-estudiante',
  templateUrl: './add-estudiante.component.html',
  styleUrls: ['./add-estudiante.component.css'],
})
export class AddEstudianteComponent implements OnInit {
  constructor(private fb: FormBuilder, private datos: DatosService) {}

  ngOnInit(): void {
    this.listaColegios = this.datos.colegios;
    this.listaGrados = this.datos.grados;
    this.listaProfesores = this.datos.profesores;
  }

  @Output() enviarAPrincipal = new EventEmitter<object>();
  @Output() banderaModal = new EventEmitter<boolean>();

  //Propiedades

  listaColegios: string[] = [];
  listaGrados: string[] = [];
  listaProfesores: string[] = [];

  formularioEstudiante = this.fb.group({
    nombre: [''],
    apellido: [''],
    colegio: [''],
    grado: [''],
    profesor: [''],
    id: [this.getRandom()],
  });

  //Métodos

  //Permite asignar un id a cada estudiante
  getRandom() {
    return Math.floor(Math.random() * (1000000 - 100000) + 100000);
  }

  cerrarModal() {
    this.banderaModal.emit(false);
  }

  onSubmit() {
    this.enviarAPrincipal.emit(this.formularioEstudiante.value);

    //Vaciar formulario
    this.formularioEstudiante.patchValue({
      nombre: '',
      apellido: '',
      colegio: '',
      grado: '',
      profesor: '',
      id: this.getRandom(),
    });

    this.cerrarModal();
  }
}
