export type MenuEntity = Menus[]

export interface Menus {
  icono: string
  label: string
  componentes: Componente[]
  id: number
  href: string
  status?:boolean
}

export interface Componente {
  icono: string
  tablas?: Tablas
  label: string
  id: string
  href: string
}

export interface Tablas {
  tabla: Tabla[]
}

export interface Tabla {
  key: string
  id: number
  label: string
}
