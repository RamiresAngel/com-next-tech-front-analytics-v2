import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDownloadReportComponent } from './modal-download-report.component';

describe('ModalDownloadReportComponent', () => {
  let component: ModalDownloadReportComponent;
  let fixture: ComponentFixture<ModalDownloadReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDownloadReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDownloadReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
