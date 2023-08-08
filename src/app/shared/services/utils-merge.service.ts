import { Injectable } from '@angular/core';
import { BodyFiltroMerge, FiltroMerge } from '../entities/merge.model';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class UtilsMergeService {

  constructor(private _notification: NzNotificationService) { }

  /* Función que genere el body filtro, recibe el value form */
  public getBodyFiltroMerge(value: any): FiltroMerge {
    let filtro = new FiltroMerge();
    filtro.rfc_emisor = value.rfcEmisorControl;
    filtro.rfc_receptor = value.rfcReceptorControl;
    filtro.fecha_inicio = value.fechaFacturaControl?.inicio ?? '';
    filtro.fecha_fin = value.fechaFacturaControl?.fin ?? '';
    filtro.folio_fiscal = value.uuidControl;
    filtro.serie = value.serieControl;
    filtro.folio = value.folioControl;
    filtro.estatus_factura = value.estatusControl;
    filtro.efecto_comprobante = value.efectoComprobanteControl;
    filtro.rfc_pac = value.rfcPacControl;
    filtro.cp = value.cpFactoraControl;
    filtro.serie_hotel = value.serieHotelControl;
    return filtro;
  }

  /* Función para validar this.body_merge.filtro (rfc_emisor,fecha_inicio,fecha_fin) */
  public validarBodyFiltroMerge(obj_form: BodyFiltroMerge): boolean {
    if (obj_form.filtro.rfc_emisor === '') {
      this._notification.warning('Advertencia', 'Debe ingresar RFC emisor');
      return false;
    }
    if (!obj_form.filtro.fecha_inicio || obj_form.filtro.fecha_inicio === '') {
      this._notification.warning('Advertencia', 'Debe ingresar fecha de factura');
      return false;
    }
    if (!obj_form.filtro.fecha_fin || obj_form.filtro.fecha_fin === '') {
      this._notification.warning('Advertencia', 'Debe ingresar fecha de factura');
      return false;
    }
    return true;
  }

}
