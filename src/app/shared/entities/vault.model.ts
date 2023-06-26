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
