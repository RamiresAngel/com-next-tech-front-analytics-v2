export interface UserData {
   corporativo: string
   apellido: string
   rol: string
   apps: Array<AppsData>
   fecha_creacion: string
   tableau: boolean
   telefono: string
   fecha_ultimo_movimiento: string
   nivel_acceso: string[]
   carga_archivo: boolean
   identificador: string
   rfcs: string[]
   nombre_nivel_acceso: string
   estatus: string
   email: string
   nombre: string
   nomina: boolean
   hotel: string
   catalogo_niveles: CatalogoNiveles[]
}

export interface AppsData {
   label: string
   identificador: string
   href: string
   icono: string
   permiso: boolean
   id: number
   mensaje: string
   contratado: boolean
}

export interface CatalogoNiveles {
   nombre: string
   hotel: string
}