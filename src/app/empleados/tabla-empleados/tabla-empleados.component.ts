import { Component } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { IEmpleado } from '../../../interfaces/IEmpleado';

@Component({
  selector: 'app-tabla-empleados',
  standalone: false,
  templateUrl: './tabla-empleados.component.html',
  styleUrl: './tabla-empleados.component.css'
})
export class TablaEmpleadosComponent {
   constructor(private service:EmpleadoService){
   }

   getEmpleados():IEmpleado[]{
    return this.service.empleados;
   }

   eliminar(nEmpleado:number):void{
    this.service.eliminarEmpleado(nEmpleado);
   }
}
