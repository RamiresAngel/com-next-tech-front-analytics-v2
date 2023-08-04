import { EventEmitter, Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BodyFiltro, Filtro, FiltroPPD } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public collapsedSidebarPrincipal: EventEmitter<boolean> = new EventEmitter<boolean>();
  public collapsedSidebarPrincipalMobile: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _notification: NzNotificationService) { }

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

  // función que reciba this.bodyFiltro.filtro para validar que el formulario no esté vacío
  public validarFormulario(obj_form: BodyFiltro): boolean {
    if (obj_form.filtro.rfc_emisor === '') {
      this._notification.warning('Advertencia', 'Debe ingresar RFC emisor');
      return false;
    }
    switch (obj_form.filtro.estatus_factura) {
      case 'Canceladas':
        if (!obj_form.filtro.fecha_cancelacion_i || obj_form.filtro.fecha_cancelacion_i === '') {
          this._notification.warning('Advertencia', 'Debe ingresar fecha de cancelación');
          return false;
        }
        break;
      case 'Vigentes':
        if (!obj_form.filtro.fecha_factura_i || obj_form.filtro.fecha_factura_i === '') {
          this._notification.warning('Advertencia', 'Debe ingresar fecha de factura');
          return false;
        }
        break;
      case '':
        if (!obj_form.filtro.fecha_factura_i || obj_form.filtro.fecha_factura_i === '') {
          this._notification.warning('Advertencia', 'Debe ingresar fecha de factura');
          return false;
        }
        break;
      default:
        break;
    }
    return true;
  }

  /* función que genere el body de filtro y reciba el value de form */
  public getBodyFiltro(value: any): Filtro {
    let filtro = new Filtro();
    filtro.rfc_emisor = value.rfc_emisor;
    filtro.rfc_receptor = value.rfc_receptor;
    filtro.fecha_factura_i = value.fecha_factura?.inicio ?? '';
    filtro.fecha_factura_f = value.fecha_factura?.fin ?? '';
    filtro.folio_fiscal = value.uuid;
    filtro.fecha_cancelacion_i = value.rango_cancelacion?.inicio ?? '';
    filtro.fecha_cancelacion_f = value.rango_cancelacion?.fin ?? '';
    filtro.serie_hotel = value.serie_hotel;
    filtro.serie = value.serie;
    filtro.folio = value.folio;
    filtro.cp = value.codigo_postal;
    filtro.rfc_pac = value.rfc_pac;
    filtro.efecto_comprobante = value.efecto_comprobante;
    filtro.estatus_factura = value.rango_estatus_f;
    return filtro;
  }

  public getBodyFiltroPPD(value: any): FiltroPPD {
    let filtro = new FiltroPPD();
    filtro.rfc_emisor = value.rfc_emisor;
    filtro.rfc_receptor = value.rfc_receptor;
    filtro.fecha_factura_i = value.fecha_factura?.inicio ?? '';
    filtro.fecha_factura_f = value.fecha_factura?.fin ?? '';
    filtro.folio_fiscal = value.uuid;
    filtro.fecha_cancelacion_i = value.rango_cancelacion?.inicio ?? '';
    filtro.fecha_cancelacion_f = value.rango_cancelacion?.fin ?? '';
    filtro.serie_hotel = value.serie_hotel;
    filtro.serie = value.serie;
    filtro.folio = value.folio;
    filtro.cp = value.codigo_postal;
    filtro.rfc_pac = value.rfc_pac;
    filtro.efecto_comprobante = value.efecto_comprobante;
    filtro.estatus_factura = value.rango_estatus_f;
    filtro.con_ppd = value.ppd;
    return filtro;
  }

}
