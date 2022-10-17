import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css'],
})
export class VistaPrincipalComponent implements OnInit {
  constructor(private datos: DatosService) {}

  ngOnInit(): void {}

  //Propiedades

  listaEstudiantes: Array<any> = [];
  infoEstudianteEditar: any = {};
  banderaModal: boolean = false;
  mostrarCrearEst: boolean = true;

  //Métodos

  addListaEstudiantes(estudiante: any) {
    this.listaEstudiantes.push(estudiante);
  }

  eliminarEstudiante(estudiante: any) {
    this.listaEstudiantes = this.listaEstudiantes.filter(
      (est) => est.id != estudiante.id
    );
  }

  editarEstudiante(estudiante: any) {
    this.mostrarCrearEst = false;
    this.infoEstudianteEditar = estudiante;
    this.banderaModal = true;
  }

  cerrarModal(banderaModal: boolean) {
    this.banderaModal = banderaModal;
  }

  actualizarListaEstudiantes(estudiante: any) {
    this.listaEstudiantes[
      this.listaEstudiantes.findIndex((el) => el.id == estudiante.id)
    ] = estudiante;
    this.mostrarCrearEst = true;
  }
}
