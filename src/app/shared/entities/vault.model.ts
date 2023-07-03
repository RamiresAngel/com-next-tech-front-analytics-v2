export interface FiltroFacturasEmitidas {
  draw: number
  columns: Column[]
  order: Order[]
  start: number
  length: number
  search: Search
  filtro: Filtro
  tipo: string
  tipo_comprobante: string
  ppd_view: boolean
  fidecomiso: boolean
}

export interface Column {
  data: number
  name: string
  searchable: boolean
  orderable: boolean
  search: Search
}

export interface Search {
  value: string
  regex: boolean
}

export interface Order {
  column: number
  dir: string
}

export class BodyFiltro {
  filtro: Filtro;
  tipo: string;;
  tipo_comprobante: string;
  ppd_view: boolean;
  fidecomiso: boolean;
  corporativo: string;

  constructor() {
    this.filtro = new Filtro();
    this.tipo = "emision";
    this.tipo_comprobante = "factura";
    this.ppd_view = false;
    this.fidecomiso = false;
    this.corporativo = "";
  }
}

export class Filtro {
  rfc_emisor: string;
  rfc_receptor: string;
  fecha_factura_i: string;
  fecha_factura_f: string;
  folio_fiscal: string;
  fecha_cancelacion_i: string;
  fecha_cancelacion_f: string;
  razon_social_emisor: string;
  razon_social_receptor: string;
  estatus_factura: string;
  efecto_comprobante: string;
  nivel_acceso: string;
  rfc_pac: string;
  folio: string;
  serie: string;
  cp: string;
  serie_hotel: Array<string> = [];

  constructor() {
    this.rfc_emisor = "";
    this.rfc_receptor = "";
    this.fecha_factura_i = "";
    this.fecha_factura_f = "";
    this.folio_fiscal = "";
    this.fecha_cancelacion_i = "";
    this.fecha_cancelacion_f = "";
    this.razon_social_emisor = "";
    this.razon_social_receptor = "";
    this.estatus_factura = "";
    this.efecto_comprobante = "";
    this.nivel_acceso = "";
    this.rfc_pac = "";
    this.folio = "";
    this.serie = "";
    this.cp = "";
    this.serie_hotel = [];
  }
}

export class ColumnsHeader {
  columns_header: Array<{ title: string, data: string }>;

  constructor() {
    this.columns_header = [
      { title: 'ESTATUS', data: '01' },
      { title: 'FECHA CANCELACIÓN', data: '02' },
      { title: 'FOLIO FISCAL', data: '03' },
      { title: 'RFC EMISOR', data: '04' },
      { title: 'RAZÓN SOCIAL EMISOR', data: '05' },
      { title: 'RFC RECEPTOR', data: '06' },
      { title: 'RAZÓN SOCIAL RECEPTOR', data: '07' },
      { title: 'RFC PAC', data: '08' },
      { title: 'FECHA EMISION (YYYY-MM-DD)', data: '09' },
      { title: 'FECHA EMISION', data: '10' },
      { title: 'FECHA TIMBRADO', data: '11' },
      { title: 'MONTO', data: '12' },
      { title: 'EFECTO COMPROBANTE', data: '13' },
      { title: 'TIPO CAMBIO', data: '14' },
      { title: 'AÑO DE FACTURACIÓN', data: '15' },
      { title: 'MES DE FACTURACIÓN', data: '16' },
      { title: 'TOTAL DE IMPUESTOS TRASLADADOS', data: '17' },
      { title: 'TOTAL DE IMPUESTOS RETENIDOS', data: '18' },
      { title: 'SERIE', data: '19' },
      { title: 'FOLIO', data: '20' },
      { title: 'USO DE CFDI', data: '21' },
      { title: 'FORMA DE PAGO', data: '22' },
      { title: 'MÉTODO DE PAGO', data: '23' },
      { title: 'MONEDA', data: '24' },
      { title: 'IVA TRASLADADO', data: '25' },
      { title: 'ISR TRASLADADO', data: '26' },
      { title: 'IEPS TRASLADADO', data: '27' },
      { title: 'IVA RETENIDO', data: '28' },
      { title: 'ISR RETENIDO', data: '29' },
      { title: 'IEPS RETENIDO', data: '30' },
      { title: 'SUBTOTAL', data: '31' },
      { title: 'PRIMER CONCEPTO', data: '32' },
      { title: 'CÓDIGO POSTAL EMISOR', data: '33' },
      { title: 'HORA', data: '34' },
      { title: 'VERSIÓN', data: '35' },
      { title: 'TOTAL IMPUESTOS LOCALES TRASLADADOS', data: '36' },
      { title: 'TOTAL IMPUESTOS LOCALES RETENIDOS', data: '37' },
      { title: 'DESCUENTO', data: '38' },
      { title: 'DOCUMENTOS RELACIONADOS', data: '39' },
      { title: 'TIPO DE RELACIÓNN', data: '40' },
      { title: 'CARGOS NO FACTURABLES PROPINAS FACTO', data: '41' },
      { title: 'CARGOS NO FACTURABLES OTROS FACTO', data: '42' },
      { title: 'CARGOS NO FACTURABLES TOTAL FACTO', data: '43' },
      { title: 'GRAN TOTAL DE FACTURA FACTO', data: '44' },
      { title: ' pdf / xml', data: '45' },
    ];
  }

}
