import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lista69Component } from './pages/lista69/lista69.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list_69', component: Lista69Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
