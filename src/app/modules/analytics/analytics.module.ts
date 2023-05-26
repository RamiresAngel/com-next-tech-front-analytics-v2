import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AnalyticsPageComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    SharedModule
  ]
})
export class AnalyticsModule { }
