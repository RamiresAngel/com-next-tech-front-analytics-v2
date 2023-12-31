import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RolesComponent } from './pages/roles/roles.component';
import { SociedadesComponent } from './pages/sociedades/sociedades.component';
import { NivelAccesoComponent } from './pages/nivel-acceso/nivel-acceso.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'sociedades', component: SociedadesComponent },
  { path: 'nivel_acceso', component: NivelAccesoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionesRoutingModule { }
