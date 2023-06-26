import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public collapsedSidebarPrincipal: EventEmitter<boolean> = new EventEmitter<boolean>();
  public collapsedSidebarPrincipalMobile: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  /* Función para obtener el formato de fecha */
  obtenerFormatoFechas(fecha: any[]): any {
    const inicio = this.FormatoFechas(fecha[0]);
    const fin = this.FormatoFechas(fecha[1]);
    return { inicio, fin };
  }

  /* Función que de formato a fecha  "Mon May 01 2023 17:06:57
  GMT-0600 (hora estándar central)" a formato 'dd/MM/yyyy'
  que*/
  FormatoFechas(date: Date): any {
    if (date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  }

  /* Función para mandar valores a la vista */
  setFechasVista(event: any): { fecha: boolean, rango: boolean } {
    switch (event) {
      case 'Vigentes':
        return { fecha: true, rango: false }
        break;
      case 'Canceladas':
        return { fecha: false, rango: true }
        break;
      case 'Vigentes/Canceladas':
        return { fecha: true, rango: true }
        break;
      default:
    }
    return { fecha: true, rango: true }
  }

}
