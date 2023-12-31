export interface BodyLogin {
  corporativo: string;
  email: string | null | undefined;
}

export interface BodyMenu {
  corporativo: string;
  modulo: string;
}

export interface bodyDescargaReportes {
  corporativo: string;
  email: string | null | undefined;
}

export interface bodyDescargarReporte {
  q: string;
  t: string;
}

export interface bodyVerificaFuncionalidad {
  nombre_rol: string;
  corporativo: string;
}

export interface bodyRfcHotelUser {
  email: string;
  corporativo: string;
  nivel_acceso: string;
  rol: string;
}

export interface bodyProveedoresLIsta69 {
  rfc: string[];
}

export interface bodyGetListUsers {
  email: string
  corporativo: string
  niveles_acceso: string[]
  rol: string
}

export interface bodyListarRfcHotel {
  corporativo: string;
  nivel_acceso: string;
}

export interface bodyCrearUsuario {
  corporativo: string
  nivel_acceso: string
  rol: string
  telefono: string
  password: string
  apps: any[]
  rfcs: any[]
  nomina: boolean
  carga_archivo: boolean
  estatus: string
  hotel: string
}

export interface bodyCambiarRol {
  email: string
  corporativo: string
  rol: string
  identificador: string
}

export interface bodyEditarUsuario {
  email: string
  corporativo: string
  nivel_acceso: string
  nombre: string
  apellido: string
  telefono: string
  apps: string[]
  rfcs: string[]
  nomina: boolean
  carga_archivo: boolean
  estatus: string
  identificador: string
  hotel: string
}

export interface bodyCrearRol {
  nombre_rol: string
  funcionalidades: string[]
  corporativo: string
}

export interface bodyRFCUser {
  email: string
  corporativo: string
  nivel_acceso: string
  rol: string
}

export interface bodyCrearRFCCorporativo {
  rfc: string
  id_corporativo: number
  razon_social: string
  file_cer: string
  file_key: string
  corporativo: string
  password: string
  nivel_acceso: string
}

export interface bodyEditarRFCCorporativo {
  corporativo: string
  identificador: string
  file_cer: string
  file_key: string
  password: string
}

export interface bodyNivelesAcceso {
  email: string
  corporativo: string
  niveles_acceso: string[]
  rol: string
}

export interface bodyGetNivelAcceso {
  email: string
  corporativo: string
  niveles_acceso: string[]
  rol: string
}

export interface bodyAddSucursal {
  corporativo: any
  hotel: string
  direccion: string
  telefono: string
  centralizado: boolean
  rfc: string[]
  cp: string
  rfc_map: RfcMap[]
  usuario: string[]
}

export interface RfcMap {
  cp: string
  fidecomiso: boolean
  serie: string[]
  rfc: string
}


export interface bodyEditSucursal {
  corporativo: any
  nombre: string
  hotel: string
  direccion: string
  cp: string
  telefono: string
  centralizado: boolean
  rfc: string[]
  rfc_map: RfcMap[]
}

export type ListaSucursales = Sucursal[]

export interface Sucursal {
  corporativo: any
  nombre: string
  hotel: string
  direccion: string
  telefono: string
  centralizado: boolean
  rfc: string[]
  cp: string
  rfc_map: RfcMap[]
}
