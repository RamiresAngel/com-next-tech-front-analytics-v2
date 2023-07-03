import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableConciliadasComponent } from './pages/facturas-emision/facturas-conciliadas/table-conciliadas/table-conciliadas.component';
import { TableFaltantesComponent } from './pages/facturas-emision/facturas-faltantes-sat/table-faltantes/table-faltantes.component';
import { TableDescuadreComponent } from './pages/facturas-emision/facturas-fecha-descuadre/table-descuadre/table-descuadre.component';

const routes: Routes = [
  {path: 'fac_emi_conciliadas', component: TableConciliadasComponent },
  {path: 'fac_emi_fal_sat'    , component: TableFaltantesComponent   },
  {path: 'fac_emi_descuadre'  , component: TableDescuadreComponent   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MergeRoutingModule { }
