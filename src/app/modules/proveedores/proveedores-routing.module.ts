import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lista69Component } from './pages/lista69/lista69.component';
import { HomeComponent } from './pages/home/home.component';
import { Lista69BComponent } from './pages/lista69-b/lista69-b.component';
import { DofComponent } from './pages/dof/dof.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list_69', component: Lista69Component },
  { path: 'list_69_b', component: Lista69BComponent },
  { path: 'dof', component: DofComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
