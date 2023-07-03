import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConciliadasComponent } from './form-conciliadas.component';

describe('FormConciliadasComponent', () => {
  let component: FormConciliadasComponent;
  let fixture: ComponentFixture<FormConciliadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConciliadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConciliadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
