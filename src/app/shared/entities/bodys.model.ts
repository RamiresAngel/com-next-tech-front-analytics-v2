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
