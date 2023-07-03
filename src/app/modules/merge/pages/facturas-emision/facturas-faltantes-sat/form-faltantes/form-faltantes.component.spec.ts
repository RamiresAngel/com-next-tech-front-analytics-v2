import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFaltantesComponent } from './form-faltantes.component';

describe('FormFaltantesComponent', () => {
  let component: FormFaltantesComponent;
  let fixture: ComponentFixture<FormFaltantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFaltantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFaltantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
