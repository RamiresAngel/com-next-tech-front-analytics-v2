import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MergeRoutingModule } from './merge-routing.module';
import { MergePageComponent } from './merge-page/merge-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MergePageComponent
  ],
  imports: [
    CommonModule,
    MergeRoutingModule,
    SharedModule
  ]
})
export class MergeModule { }
