import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableConciliadasComponent } from './pages/facturas-emision/facturas-conciliadas/table-conciliadas/table-conciliadas.component';
import { TableFaltantesComponent } from './pages/facturas-emision/facturas-faltantes-sat/table-faltantes/table-faltantes.component';
import { TableDescuadreComponent } from './pages/facturas-emision/facturas-fecha-descuadre/table-descuadre/table-descuadre.component';
import { TableConRecComponent } from './pages/facturas-recepsion/conciliadas-recepsion/table-con-rec/table-con-rec.component';
import { TableFalRecComponent } from './pages/facturas-recepsion/faltantes-sat-recepsion/table-fal-rec/table-fal-rec.component';
import { TableDesRecComponent } from './pages/facturas-recepsion/descuadre-recepsion/table-des-rec/table-des-rec.component';

const routes: Routes = [
  { path: 'fac_emi_conciliadas', component: TableConciliadasComponent },
  { path: 'fac_emi_fal_sat', component: TableFaltantesComponent },
  { path: 'fac_emi_descuadre', component: TableDescuadreComponent },
  { path: 'fac_rec_conciliadas', component: TableConRecComponent },
  { path: 'fac_rec_fal_sat', component: TableFalRecComponent },
  { path: 'fac_rec_descuadre', component: TableDesRecComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MergeRoutingModule { }
