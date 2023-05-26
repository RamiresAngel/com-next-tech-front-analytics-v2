export interface TablaUsuarios {
   apps: string[]
   corporativo: string
   email: string
   estatus: string
   identificador: string
   nivel_acceso: string
   hotel: string
   nombre: string
   apellido: string
   nomina: boolean
   rfcs: string[]
   rol: string
   telefono: string
   nombre_completo?:string
}

export interface AppsVerificadas {
   nombre: string
   identificador: string
}

export interface ListaRoles {
   nombre_rol: string
   corporativo: string
   mostrar: boolean
   funcionalidades: string[]
}