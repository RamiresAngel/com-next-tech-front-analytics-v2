export class BodyFiltroMerge {
  filtro: FiltroMerge;
  faltantes_erp?: boolean;
  tipo: string;
  tipo_comprobante: string;
  fidecomiso: boolean;
  nivel_acceso: string;
  corporativo: string;
  descuadre: boolean;
  //  * @param Generar Reporte
  nombre_reporte?: string;
  email?: string;
  sufijo_tabla?: string;

  constructor() {
    this.filtro = new FiltroMerge();
    this.faltantes_erp = false; /* validar en que vistas se tienen que mandar y en cuales nop */
    this.tipo = '';
    this.tipo_comprobante = '';
    this.fidecomiso = false;
    this.nivel_acceso = '';
    this.corporativo = '';
    this.descuadre = false;
  }
}

export class FiltroMerge {
  rfc_emisor: string;
  rfc_receptor: string;
  fecha_inicio: string;
  fecha_fin: string;
  folio_fiscal: string;
  serie: string;
  folio: string;
  estatus_factura: string;
  efecto_comprobante?: string;
  rfc_pac: string;
  cp?: string;
  serie_hotel?: Array<string> = [];

  constructor() {
    this.rfc_emisor = '';
    this.rfc_receptor = '';
    this.fecha_inicio = '';
    this.fecha_fin = '';
    this.folio_fiscal = '';
    this.serie = '';
    this.folio = '';
    this.estatus_factura = '';
    this.efecto_comprobante = '';
    this.rfc_pac = '';
    this.cp = '';
    this.serie_hotel = [];
  }
}
