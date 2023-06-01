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

export interface Filtro {
   rfc_emisor: string
   rfc_receptor: string
   fecha_factura_i: string
   fecha_factura_f: string
   folio_fiscal: string
   fecha_cancelacion_i: string
   fecha_cancelacion_f: string
   razon_social_emisor: string
   razon_social_receptor: string
   estatus_factura: string
   efecto_comprobante: string
   nivel_acceso: string
   rfc_pac: string
   folio: string
   serie: string
   cp: string
   serie_hotel: any[]
}