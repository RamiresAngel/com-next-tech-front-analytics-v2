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
  tipo: string;
  tipo_comprobante: string;
  ppd_view: boolean;
  fidecomiso: any;
  corporativo: string;
  //  * @param para Reporte Generado
  nombre_reporte?: string;
  email?: string;
  nivel_acceso?: string;

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

export class ColumnsFactEmitidas {
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
      { title: 'GRAN TOTAL DE FACTURA FACTO', data: '43' }
    ];
  }

}

export class ColumnsFacturasPPD {
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
      { title: 'FECHA EMISIÓN (YYYY-MM-DD)', data: '8' },
      { title: 'FECHA EMISIÓN', data: '9' },
      { title: 'FECHA TIMBRADO', data: '10' },
      { title: 'MONTO', data: '11' },
      { title: 'EFECTO COMPROBANTE', data: '12' },
      { title: 'TIPO CAMBIO', data: '13' },
      { title: 'TOTAL DE IMPUESTOS TRASLADADOS', data: '14' },
      { title: 'TOTAL DE IMPUESTOS RETENIDOS', data: '15' },
      { title: 'SERIE', data: '16' },
      { title: 'FOLIO', data: '17' },
      { title: 'USO DE CFDI', data: '18' },
      { title: 'FORMA DE PAGO', data: '19' },
      { title: 'MÉTODO DE PAGO', data: '20' },
      { title: 'MONEDA', data: '21' },
      { title: 'IVA TRASLADADO', data: '22' },
      { title: 'ISR TRASLADADO', data: '23' },
      { title: 'IEPS TRASLADADO', data: '24' },
      { title: 'IVA RETENIDO', data: '25' },
      { title: 'ISR RETENIDO', data: '26' },
      { title: 'IEPS RETENIDO', data: '27' },
      { title: 'PRIMER CONCEPTO', data: '28' },
      { title: 'CÓDIGO POSTAL ', data: '29' },
      { title: 'VERSIÓN', data: '30' },
      { title: 'TOTAL IMPUESTOS LOCALES TRASLADADOS', data: '31' },
      { title: 'TOTAL IMPUESTOS LOCALES RETENIDOS', data: '32' },
      { title: 'DESCUENTO', data: '33' },
      { title: 'FOLIO FISCAL PAGO', data: '34' },
      { title: 'ESTATUS PAGO', data: '35' },
      { title: 'FECHA CANCELACIÓN PAGO', data: '36' },
      { title: 'FECHA EMISIÓN PAGO', data: '37' },
      { title: 'FECHA DE TIMBRADO PAGO', data: '38' },
      { title: 'FECHA DE PAGO', data: '39' },
      { title: 'MONTO DE PAGO', data: '41' },
      { title: 'MONEDA DE PAGO', data: '42' },
      { title: 'IMPORTE PAGADO', data: '43' },
      { title: 'IMPORTE SALDO', data: '44' },
      { title: 'IMPORTE INSOLUTO', data: '45' },
      { title: 'TIPO DE CAMBIO PAGO', data: '46' },
      { title: 'TIPO DE CAMBIO DR PAGO', data: '47' },
      { title: 'NÚMERO DE PARCIALIDAD', data: '48' },
      { title: 'SERIE DR PAGO', data: '49' },
      { title: 'MONEDA DR PAGO', data: '50' },
      { title: 'HORA PAGO', data: '51' },
      { title: 'VERSIÓN PAGO', data: '52' }
    ];
  }
}

export class ColumnsPagos {
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
      { title: 'FECHA EMISIÓN (YYYY-MM-DD)', data: '8' },
      { title: 'FECHA EMISIÓN', data: '9' },
      { title: 'FECHA CERTIFICACIÓN', data: '10' },
      { title: 'MONTO', data: '11' },
      { title: 'EFECTO COMPROBANTE', data: '12' },
      { title: 'USO DE CFDI', data: '13' },
      { title: 'CÓDIGO POSTAL', data: '14' },
      { title: 'FOLIO', data: '15' },
      { title: 'SERIE', data: '16' },
      { title: 'FECHA PAGO', data: '17' },
      { title: 'FORMA DE PAGO', data: '18' },
      { title: 'MONEDA', data: '19' },
      { title: 'RFC EMISOR CUENTA ORDENANTE', data: '21' },
      { title: 'NOM. BANCO ORD. EXT.', data: '22' },
      { title: 'CUENTA ORDENANTE', data: '23' },
      { title: 'RFC EMISOR CUENTA BENEFICIARIO', data: '24' },
      { title: 'CUENTA BENEFICIARIO', data: '25' },
      { title: 'DOCUMENTOS RELACIONADOS', data: '26' },
      { title: 'IMPORTE PAGADO', data: '27' },
      { title: 'IMPORTE SALDO', data: '28' },
      { title: 'IMPORTE INSOLUTO', data: '29' },
      { title: 'MÉTODO DE PAGO', data: '30' },
      { title: 'TIPO CAMBIO', data: '31' },
      { title: 'TIPO CAMBIO DR', data: '32' },
      { title: 'NÚMERO DE PARCIALIDAD', data: '33' },
      { title: 'SERIE DR', data: '34' },
      { title: 'FOLIO DR', data: '35' },
      { title: 'MONEDA DR', data: '36' },
      { title: 'HORA', data: '37' },
      { title: 'VERSIÓN', data: '38' },
    ]
  }
}
