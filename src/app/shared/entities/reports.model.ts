export interface ReportDescarga {
   fecha_ultimo_movimiento: string
   fecha_creacion_date: string
   identificador: string
   corporativo: string
   tipo_reporte: string
   fecha_creacion: string
   status: string
   email: string
   nombre_reporte: string
   msj: string
}

export interface TablaReportsDescarga {
   nombre_reporte:string;
   tipo_reporte: string;
   fecha_creacion_date: string;
   status: string;
   identificador: string;
}

export interface TablaReportData {
   nombre_reporte:string;
   tipo_reporte: string;
   fecha_creacion_date: string;
   status: string;
}

export interface ReporteLink {
   name:string;
   url:string;
}