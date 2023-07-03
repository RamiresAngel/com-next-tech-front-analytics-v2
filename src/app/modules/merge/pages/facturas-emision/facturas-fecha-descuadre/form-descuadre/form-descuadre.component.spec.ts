import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDescuadreComponent } from './form-descuadre.component';

describe('FormDescuadreComponent', () => {
  let component: FormDescuadreComponent;
  let fixture: ComponentFixture<FormDescuadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDescuadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDescuadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
