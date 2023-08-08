import { Injectable } from '@angular/core';
import { FiltroMerge } from '../entities/merge.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsMergeService {

  constructor() { }

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
}
