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
      { title: 'ESTATUS', data: '0' },
      { title: 'FECHA CANCELACIÓN', data: '1' },
      { title: 'FOLIO FISCAL', data: '2' },
      { title: 'RFC EMISOR', data: '3' },
      { title: 'RAZÓN SOCIAL EMISOR', data: '4' },
      { title: 'RFC RECEPTOR', data: '5' },
      { title: 'RAZÓN SOCIAL RECEPTOR', data: '6' },
      { title: 'RFC PAC', data: '7' },
      { title: 'FECHA EMISION (YYYY-MM-DD)', data: '8' },
      { title: 'FECHA EMISION', data: '9' },
      { title: 'FECHA TIMBRADO', data: '10' },
      { title: 'MONTO', data: '11' },
      { title: 'EFECTO COMPROBANTE', data: '12' },
      { title: 'TIPO CAMBIO', data: '13' },
      { title: 'AÑO DE FACTURACIÓN', data: '14' },
      { title: 'MES DE FACTURACIÓN', data: '15' },
      { title: 'TOTAL DE IMPUESTOS TRASLADADOS', data: '16' },
      { title: 'TOTAL DE IMPUESTOS RETENIDOS', data: '17' },
      { title: 'SERIE', data: '18' },
      { title: 'FOLIO', data: '19' },
      { title: 'USO DE CFDI', data: '20' },
      { title: 'FORMA DE PAGO', data: '21' },
      { title: 'MÉTODO DE PAGO', data: '22' },
      { title: 'MONEDA', data: '23' },
      { title: 'IVA TRASLADADO', data: '24' },
      { title: 'ISR TRASLADADO', data: '25' },
      { title: 'IEPS TRASLADADO', data: '26' },
      { title: 'IVA RETENIDO', data: '27' },
      { title: 'ISR RETENIDO', data: '28' },
      { title: 'IEPS RETENIDO', data: '19' },
      { title: 'SUBTOTAL', data: '30' },
      { title: 'PRIMER CONCEPTO', data: '31' },
      { title: 'CÓDIGO POSTAL EMISOR', data: '32' },
      { title: 'HORA', data: '33' },
      { title: 'VERSIÓN', data: '34' },
      { title: 'TOTAL IMPUESTOS LOCALES TRASLADADOS', data: '35' },
      { title: 'TOTAL IMPUESTOS LOCALES RETENIDOS', data: '36' },
      { title: 'DESCUENTO', data: '37' },
      { title: 'DOCUMENTOS RELACIONADOS', data: '38' },
      { title: 'TIPO DE RELACIÓNN', data: '39' },
      { title: 'CARGOS NO FACTURABLES PROPINAS FACTO', data: '40' },
      { title: 'CARGOS NO FACTURABLES OTROS FACTO', data: '41' },
      { title: 'CARGOS NO FACTURABLES TOTAL FACTO', data: '42' },
      { title: 'GRAN TOTAL DE FACTURA FACTO', data: '43' },
      /* { title: 'XML', data: '44' },
      { title: 'PDF', data: '45' } */
    ];
  }

}
