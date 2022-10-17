import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VistaPrincipalComponent } from './Componentes/vista-principal/vista-principal.component';
import { AddEstudianteComponent } from './Componentes/add-estudiante/add-estudiante.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEstudianteComponent } from './Componentes/edit-estudiante/edit-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaPrincipalComponent,
    AddEstudianteComponent,
    EditEstudianteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
