import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuitePageComponent } from './suite-page/suite-page.component';

const routes: Routes = [
  { path: '', component: SuitePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuiteRoutingModule { }
