import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionesRoutingModule } from './configuraciones-routing.module';
import { ConfiguracionesPageComponent } from './configuraciones-page/configuraciones-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalCrearUsuarioComponent } from './components/modal-crear-usuario/modal-crear-usuario.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ModalEditarRolComponent } from './components/modal-editar-rol/modal-editar-rol.component';
import { ModalEditarUsuarioComponent } from './components/modal-editar-usuario/modal-editar-usuario.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { RolesComponent } from './pages/roles/roles.component';
import { ModalCrearRolComponent } from './components/modal-crear-rol/modal-crear-rol.component';
import { SociedadesComponent } from './pages/sociedades/sociedades.component';
import { ModalCrearContribuyenteComponent } from './components/modal-crear-contribuyente/modal-crear-contribuyente.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ModalEditarContribuyenteComponent } from './components/modal-editar-contribuyente/modal-editar-contribuyente.component';
import { NivelAccesoComponent } from './pages/nivel-acceso/nivel-acceso.component';

@NgModule({
  declarations: [
    ConfiguracionesPageComponent,
    UsuariosComponent,
    ModalCrearUsuarioComponent,
    ModalEditarRolComponent,
    ModalEditarUsuarioComponent,
    RolesComponent,
    ModalCrearRolComponent,
    SociedadesComponent,
    ModalCrearContribuyenteComponent,
    ModalEditarContribuyenteComponent,
    NivelAccesoComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionesRoutingModule,
    SharedModule,
    NzSelectModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    NzNotificationModule,
    NgxDatatableModule,
    NzModalModule,
    NzToolTipModule,
    NzSwitchModule,
    NzCheckboxModule,
    NzUploadModule,
    NzMessageModule
  ]
})
export class ConfiguracionesModule { }
