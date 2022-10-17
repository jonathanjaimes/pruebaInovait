import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-edit-estudiante',
  templateUrl: './edit-estudiante.component.html',
  styleUrls: ['./edit-estudiante.component.css'],
})
export class EditEstudianteComponent implements OnInit, OnChanges {
  constructor(private fb: FormBuilder, private datos: DatosService) {}

  ngOnInit(): void {
    this.listaColegios = this.datos.colegios;
    this.listaGrados = this.datos.grados;
    this.listaProfesores = this.datos.profesores;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['infoEstudianteEditar']) {
      this.formularioEstudianteEditar.patchValue(
        changes['infoEstudianteEditar'].currentValue
      );
      this.valorActualItem = changes['infoEstudianteEditar'].currentValue;
    }
  }

  //Comunicación entre componentes

  @Input() infoEstudianteEditar: any = {};
  @Output() enviarAPrincipal = new EventEmitter<object>();
  @Output() banderaModal = new EventEmitter<boolean>();

  //Propiedades

  listaColegios: string[] = [];
  listaGrados: string[] = [];
  listaProfesores: string[] = [];
  valorActualItem: any = {};

  formularioEstudianteEditar = this.fb.group({
    nombre: [''],
    apellido: [''],
    colegio: [''],
    grado: [''],
    profesor: [''],
    id: [this.valorActualItem],
  });

  //Métodos

  cerrarModal() {
    this.banderaModal.emit(false);
  }

  onSubmitEditar() {
    this.enviarAPrincipal.emit(this.formularioEstudianteEditar.value);

    //Vaciar formulario
    this.formularioEstudianteEditar.patchValue({
      nombre: '',
      apellido: '',
      colegio: '',
      grado: '',
      profesor: '',
      id: this.valorActualItem,
    });

    this.cerrarModal();
  }
}
