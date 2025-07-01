import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEmpleadosComponent } from './form-empleados/form-empleados.component';
import { HeaderComponent } from './header/header.component';
import { TablaEmpleadosComponent } from './tabla-empleados/tabla-empleados.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormEmpleadosComponent,
    HeaderComponent,
    TablaEmpleadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    FormEmpleadosComponent,
    HeaderComponent,
    TablaEmpleadosComponent
  ]
})
export class EmpleadosModule { }
