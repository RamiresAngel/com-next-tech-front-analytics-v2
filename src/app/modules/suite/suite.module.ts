import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuiteRoutingModule } from './suite-routing.module';
import { SuitePageComponent } from './suite-page/suite-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [
    SuitePageComponent
  ],
  imports: [
    CommonModule,
    SuiteRoutingModule,
    SharedModule,
    NgbCarouselModule,
    SwiperModule,
    NzToolTipModule,
    NzNotificationModule,
    NzDropDownModule,
    NzAvatarModule
  ]
})
export class SuiteModule { }
