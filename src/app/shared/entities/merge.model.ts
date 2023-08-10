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
    this.faltantes_erp = false;
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
  efecto_comprobante: string;
  rfc_pac: string;
  cp: string;
  serie_hotel: Array<string> = [];

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

export class ColumnsEmiConciliadas {
  columns_header: Array<{ title: string, data: string }>;

  constructor() {
    this.columns_header = [
      { title: 'ESTATUS SAT', data: '0' },
      { title: 'FECHA CANCELACIÓN SAT', data: '1' },
      { title: 'FOLIO FISCAL SAT', data: '2' },
      { title: 'RFC EMISOR SAT', data: '3' },
      { title: 'RAZÓN SOCIAL EMISOR SAT', data: '4' },
      { title: 'RFC RECEPTOR SAT', data: '5' },
      { title: 'RAZÓN SOCIAL RECEPTOR SAT', data: '6' },
      { title: 'RFC PAC SAT', data: '7' },
      { title: 'FECHA EMISIÓN SAT (YYYY-MM-DD)', data: '8' },
      { title: 'FECHA EMISIÓN SAT', data: '9' },
      { title: 'FECHA TIMBRADO SAT', data: '10' },
      { title: 'MONTO SAT', data: '11' },
      { title: 'EFECTO COMPROBANTE SAT', data: '12' },
      { title: 'TIPO CAMBIO SAT', data: '13' },
      { title: 'AÑO DE FACTURACIÓN SAT', data: '14' },
      { title: 'MES DE FACTURACIÓN SAT', data: '15' },
      { title: 'TOTAL DE IMPUESTOS TRASLADADOS SAT', data: '16' },
      { title: 'TOTAL DE IMPUESTOS RETENIDOS SAT', data: '17' },
      { title: 'SERIE SAT', data: '18' },
      { title: 'FOLIO SAT', data: '19' },
      { title: 'USO DE CFDI SAT', data: '20' },
      { title: 'FORMA DE PAGO SAT', data: '21' },
      { title: 'MÉTODO DE PAGO SAT', data: '22' },
      { title: 'MONEDA SAT', data: '23' },
      { title: 'IVA TRASLADADO SAT', data: '24' },
      { title: 'ISR TRASLADADO SAT', data: '25' },
      { title: 'IEPS TRASLADADO SAT', data: '26' },
      { title: 'IVA RETENIDO SAT', data: '27' },
      { title: 'ISR RETENIDO SAT', data: '28' },
      { title: 'IEPS RETENIDO SAT', data: '29' },
      { title: 'SUBTOTAL SAT', data: '30' },
      { title: 'PRIMER CONCEPTO SAT', data: '31' },
      { title: 'CÓDIGO POSTAL EMISOR SAT', data: '32' },
      { title: 'HORA SAT', data: '33' },
      { title: 'VERSIÓN SAT', data: '34' },
      { title: 'TOTAL IMPUESTOS LOCALES TRASLADADOS SAT', data: '35' },
      { title: 'TOTAL IMPUESTOS LOCALES RETENIDOS SAT', data: '36' },
      { title: 'DESCUENTO SAT', data: '37' },
      { title: 'DOCUMENTOS RELACIONADOS SAT', data: '38' },
      { title: 'TIPO DE RELACIÓN SAT', data: '39' },
      { title: 'NÚMERO DE TRANSACCIÓN FACTO', data: '40' },
      { title: 'FOLIO FISCAL FACTO', data: '41' },
      { title: 'FORMA DE PAGO FACTO', data: '42' },
      { title: 'FECHA DE TRANSACCIÓN FACTO', data: '43' },
      { title: 'RFC EMISOR FACTO', data: '44' },
      { title: 'RFC RECEPTOR FACTO', data: '45' },
      { title: 'SISTEMA EMISOR FACTO', data: '46' },
      { title: 'RFC PAC FACTO', data: '47' },
      { title: 'ESTATUS FACTO', data: '48' },
      { title: 'TIPO DE DOCUMENTO FISCAL FACTO', data: '49' },
      { title: 'SERIE FACTO', data: '50' },
      { title: 'FOLIO FACTO', data: '51' },
      { title: 'MONEDA FACTO', data: '52' },
      { title: 'TIPO DE CAMBIO FACTO', data: '53' },
      { title: 'IVA FACTO', data: '54' },
      { title: 'IEPS FACTO', data: '55' },
      { title: 'ISR FACTO', data: '56' },
      { title: 'SUBTOTAL FACTO', data: '57' },
      { title: 'DESCUENTO FACTO', data: '58' },
      { title: 'CARGOS NO FACTURABLES PROPINAS FACTO', data: '59' },
      { title: 'CARGOS NO FACTURABLES OTROS FACTO', data: '60' },
      { title: 'CARGOS NO FACTURABLES TOTAL FACTO', data: '61' },
      { title: 'GRAN TOTAL DE FACTURA FACTO', data: '62' },
      { title: 'TOTAL FACTO', data: '63' },
      { title: 'FECHA FACTURA FACTO (YYYY-MM-DD)', data: '64' },
      { title: 'FECHA FACTURA FACTO', data: '65' },
      { title: 'FECHA TIMBRADO FACTO', data: '66' }
    ];
  }
}
