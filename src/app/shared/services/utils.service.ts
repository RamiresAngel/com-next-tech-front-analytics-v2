import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public collapsedSidebarPrincipal: EventEmitter<boolean> = new EventEmitter<boolean>();
  public collapsedSidebarPrincipalMobile: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  /* Función que de formato a fecha  "Mon May 01 2023 17:06:57
 GMT-0600 (hora estándar central)" a formato 'dd/MM/yyyy'
 que*/
  obtenerFormatoFechas(fechas: Date[]): { inicio: string, fin: string } {
    if (!fechas || fechas.length === 0) return { inicio: '', fin: '' };
    const inicio = fechas[0].toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const fin = fechas[1].toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return { inicio, fin };
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
