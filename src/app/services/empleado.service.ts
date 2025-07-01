import { Injectable } from '@angular/core';
import { IEmpleado } from '../../interfaces/IEmpleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private _lstEmpleados: IEmpleado[] = [];
  get empleados(): IEmpleado[] {
    return this._lstEmpleados;
  }

  agregarEmpleado(empleado:IEmpleado){
    this._lstEmpleados.push(empleado);
    localStorage.setItem('empleados', JSON.stringify(this._lstEmpleados));
  }

  eliminarEmpleado(nEmpleado:number){
    const index: any = this._lstEmpleados.find(e => e.nEmpleado == nEmpleado);
    if (index !== -1) {
    this._lstEmpleados.splice(index, 1);
    localStorage.setItem('empleados', JSON.stringify(this._lstEmpleados));
  }
}

  constructor(){
    this._lstEmpleados = JSON.parse(localStorage.getItem('empleados')!) || [];
  }
}
