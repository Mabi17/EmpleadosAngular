import { Component } from '@angular/core';
import { IEmpleado } from '../../../interfaces/IEmpleado';
import { EmpleadoService } from '../../services/empleado.service';
@Component({
  selector: 'app-form-empleados',
  standalone: false,
  templateUrl: './form-empleados.component.html',
  styleUrl: './form-empleados.component.css'
})
export class FormEmpleadosComponent {

  constructor(private service: EmpleadoService){

  }

  empleado: IEmpleado = {
    nEmpleado: 0,
    nombre: "",
    correo: "",
    telefono: "",
    fechaN: "",
    sexo: ""
  };

  agregarEmpleado(){
    this.service.agregarEmpleado(this.empleado);
    this.empleado = {
    nEmpleado: 0,
    nombre: "",
    correo: "",
    telefono: "",
    fechaN: "",
    sexo: ""
  };
  }
}
