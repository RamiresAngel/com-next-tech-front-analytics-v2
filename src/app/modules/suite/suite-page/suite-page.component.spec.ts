import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitePageComponent } from './suite-page.component';

describe('SuitePageComponent', () => {
  let component: SuitePageComponent;
  let fixture: ComponentFixture<SuitePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuitePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
