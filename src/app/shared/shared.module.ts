import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortIdPipe } from './pipes/sort-id.pipe';
import { LoaderPrincipalComponent } from './components/loader-principal/loader-principal.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { PrincipalSidebarComponent } from './components/principal-sidebar/principal-sidebar.component';
import { NgbAccordionModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    SortIdPipe,
    LoaderPrincipalComponent,
    PrincipalSidebarComponent,
    NavbarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    NzLayoutModule,
    NzIconModule,
    NzToolTipModule,
    NgbAccordionModule,
    NzDropDownModule,
    NzAvatarModule,
    NgbDropdownModule
  ],
  exports: [
    SortIdPipe,
    LoaderPrincipalComponent,
    PrincipalSidebarComponent,
    NavbarComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
