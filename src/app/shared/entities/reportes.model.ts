export interface DescargaReporte {
  fecha_ultimo_movimiento: string
  fecha_creacion_date: string
  identificador: string
  corporativo: string
  tipo_reporte: string
  fecha_creacion: string
  email: string
  status: string
  nombre_reporte: string
  msj: string
}

export interface bodyListarDescargas {
  email: string
  corporativo: string
}

export interface ArchivoReporteDescarga {
  name: string
  url: string
}

export interface bodyListarDescargasLink {
  q: string
  t: string
}

export interface bodyObtenerTokenTableau {
  token_email: string
  corporativo: string
}

export interface bodyCatalogoIntegracion {
  data_mart: string
  data_set: string
  corporativo: string
  consulta: Consulta
}

export interface Consulta {
  rfc_emisor: string
  fecha_factura_i: string
  fecha_factura_f: string
  sucursal: string
}

export interface CatalogoIntegracion {
  integracion: string
  cc: string
}
