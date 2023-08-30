export class ColumnsPagRecConValid {
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
      { title: 'FECHA EMISION SAT (YYYY-MM-DD)', data: '8' },
      { title: 'FECHA EMISION SAT', data: '9' },
      { title: 'FECHA TIMBRADO SAT', data: '10' },
      { title: 'MONTO DE PAGO SAT', data: '11' },
      { title: 'EFECTO COMPROBANTE SAT', data: '12' },
      { title: 'USO DE CFDI SAT', data: '13' },
      { title: 'CÓDIGO POSTAL EMISOR SAT', data: '14' },
      { title: 'FOLIO SAT', data: '15' },
      { title: 'SERIE SAT', data: '16' },
      { title: 'FECHA PAGO SAT (YYYY-MM-DD)', data: '17' },
      { title: 'FORMA DE PAGO SAT ', data: '18' },
      { title: 'MONEDA SAT', data: '19' },
      { title: 'RFC EMISOR CTA. ORD. SAT', data: '20' },
      { title: 'NOMBRE DE BANCO ORD. EXT. SAT', data: '21' },
      { title: 'CTA. ORDENANTE SAT', data: '22' },
      { title: 'RFC EMISOR CTA. BEN. SAT', data: '23' },
      { title: 'CTA. BENEFICIARIO SAT', data: '24' },
      { title: 'DOCUMENTO RELACIONADO', data: '25' },
      { title: 'IMPORTE PAGADO', data: '26' },
      { title: 'IMPORTE SALDO', data: '27' },
      { title: 'IMPORTE INSOLUTO', data: '28' },
      { title: 'MÉTODO DE PAGO DR SAT', data: '29' },
      { title: 'TIPO DE CAMBIO SAT', data: '30' },
      { title: 'TIPO DE CAMBIO DR SAT', data: '31' },
      { title: 'NÚMERO DE PARCIALIDAD SAT', data: '32' },
      { title: 'SERIE DR SAT', data: '33' },
      { title: 'FOLIO DR SAT', data: '34' },
      { title: 'MONEDA DR SAT', data: '35' },
      { title: 'HORA SAT', data: '36' },
      { title: 'VERSIÓN SAT', data: '37' },
      { title: 'FOLIO FISCAL FACTO', data: '38' },
      { title: 'FORMA DE PAGO FACTO', data: '39' },
      { title: 'FECHA DE RECEPCIÓN FACTO', data: '40' },
      { title: 'RFC EMISOR FACTO', data: '41' },
      { title: 'CÓDIGO POSTAL EMISOR FACTO', data: '42' },
      { title: 'RFC RECEPTOR FACTO', data: '43' },
      { title: 'CÓDIGO POSTAL RECEPTOR FACTO', data: '44' },
      { title: 'ESTATUS FACTO', data: '45' },
      { title: 'TIPO DE DOCUMENTO FISCAL FACTO', data: '46' },
      { title: 'SERIE FACTO', data: '47' },
      { title: 'FOLIO FACTO', data: '48' },
      { title: 'MONEDA FACTO', data: '49' },
      { title: 'TIPO DE CAMBIO FACTO', data: '50' },
      { title: 'FECHA FACTURA FACTO (YYYY-MM-DD)', data: '51' },
      { title: 'FECHA FACTURA FACTO', data: '52' },
      { title: 'FECHA TIMBRADO FACTO', data: '53' }
    ];
  }
}

export class ColumnsPagRecFaltantesSATValid {

  columns_header: Array<{ title: string, data: string }>;

  constructor() {
    this.columns_header = [
      { title: 'FOLIO FISCAL FACTO', data: '0' },
      { title: 'FORMA DE PAGO FACTO', data: '1' },
      { title: 'FECHA DE RECEPCIÓN FACTO', data: '2' },
      { title: 'RFC EMISOR FACTO', data: '3' },
      { title: 'RFC RECEPTOR FACTO', data: '4' },
      { title: 'ESTATUS FACTO', data: '5' },
      { title: 'TIPO DE DOCUMENTO FISCAL FACTO', data: '6' },
      { title: 'SERIE FACTO', data: '7' },
      { title: 'FOLIO FACTO', data: '8' },
      { title: 'MONEDA FACTO', data: '9' },
      { title: 'TIPO DE CAMBIO FACTO', data: '10' },
      { title: 'FECHA FACTURA FACTO (YYYY-MM-DD)', data: '11' },
      { title: 'FECHA FACTURA FACTO', data: '12' },
      { title: 'FECHA TIMBRADO FACTO', data: '13' }
    ];
  }
}
