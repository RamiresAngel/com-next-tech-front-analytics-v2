import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableConciliadasComponent } from './pages/facturas-emision/facturas-conciliadas/table-conciliadas/table-conciliadas.component';
import { TableFaltantesComponent } from './pages/facturas-emision/facturas-faltantes-sat/table-faltantes/table-faltantes.component';
import { TableDescuadreComponent } from './pages/facturas-emision/facturas-fecha-descuadre/table-descuadre/table-descuadre.component';
import { TableFalRecComponent } from './pages/facturas-recepcion/faltantes-recepcion/table-fal-rec/table-fal-rec.component';
import { TableDesRecComponent } from './pages/facturas-recepcion/descuadre-recepcion/table-des-rec/table-des-rec.component';
import { TableConRecComponent } from './pages/facturas-recepcion/conciliadas-recepcion/table-con-rec/table-con-rec.component';
import { TableConciliadasValidComponent } from './pages/facturas-recepcion-valid/facturas-conciliadas-valid/table-conciliadas-valid/table-conciliadas-valid.component';
import { TableDescuadreValidComponent } from './pages/facturas-recepcion-valid/facturas-descuadre-valid/table-descuadre-valid/table-descuadre-valid.component';
import { TableFaltantesValidComponent } from './pages/facturas-recepcion-valid/facturas-faltantes-valid/table-faltantes-valid/table-faltantes-valid.component';
import { TablePagosConciliadosComponent } from './pages/pagos-emision/pagos-conciliados/table-pagos-conciliados/table-pagos-conciliados.component';
import { TablePagosFaltantesSatComponent } from './pages/pagos-emision/pagos-faltantes-sat/table-pagos-faltantes-sat/table-pagos-faltantes-sat.component';
import { TablePagosDescuadreComponent } from './pages/pagos-emision/pagos-descuadre/table-pagos-descuadre/table-pagos-descuadre.component';
import { TablesPagosRecConciliadosComponent } from './pages/pagos-recepcion/pagos-rec-conciliados/tables-pagos-rec-conciliados/tables-pagos-rec-conciliados.component';
import { TablePagosRecFaltantesComponent } from './pages/pagos-recepcion/pagos-rec-faltantes/table-pagos-rec-faltantes/table-pagos-rec-faltantes.component';
import { TablePagosConciliadosValidComponent } from './pages/pagos-recepcion-valid/pagos-conciliados-valid/table-pagos-conciliados-valid/table-pagos-conciliados-valid.component';
import { TablePagosFaltantesValidComponent } from './pages/pagos-recepcion-valid/pagos-faltantes-valid/table-pagos-faltantes-valid/table-pagos-faltantes-valid.component';
import { ReportesMergeComponent } from './pages/reportes-merge/reportes-merge.component';

const routes: Routes = [
  { path: 'fac_emi_conciliadas', component: TableConciliadasComponent },
  { path: 'fac_emi_fal_sat', component: TableFaltantesComponent },
  { path: 'fac_emi_descuadre', component: TableDescuadreComponent },
  { path: 'fac_rec_conciliadas', component: TableConRecComponent },
  { path: 'fac_rec_fal_sat', component: TableFalRecComponent },
  { path: 'fac_rec_descuadre', component: TableDesRecComponent },
  { path: 'fac_rec_valid_conciliadas', component: TableConciliadasValidComponent },
  { path: 'fac_rec_valid_fal_sat', component: TableFaltantesValidComponent },
  { path: 'fac_rec_valid_descuadre', component: TableDescuadreValidComponent },
  { path: 'pag_emi_conciliadas', component: TablePagosConciliadosComponent },
  { path: 'pag_emi_fal_sat', component: TablePagosFaltantesSatComponent },
  { path: 'pag_emi_descuadre', component: TablePagosDescuadreComponent },
  { path: 'pag_rec_conciliadas', component: TablesPagosRecConciliadosComponent },
  { path: 'pag_rec_fal_sat', component: TablePagosRecFaltantesComponent },
  { path: 'pag_rec_conciliadas_valid', component: TablePagosConciliadosValidComponent },
  { path: 'pag_rec_fal_sat_valid', component: TablePagosFaltantesValidComponent },
  { path: 'reporte_generado', component: ReportesMergeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MergeRoutingModule { }
