export interface RfcHotelUser {
   rfc_map: string[]
   cp: string
}

export interface ProveedoresLista69 {
   rfc_receptor: string
   rfc_emisor: string
   ultima_factura: string
   primer_factura: string
   importe: number
   situacion_del_contribuyente: string
   fecha_primera_publicacion: string
   razon_social_receptor: string
}