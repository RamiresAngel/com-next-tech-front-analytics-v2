import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearContribuyenteComponent } from './modal-crear-contribuyente.component';

describe('ModalCrearContribuyenteComponent', () => {
  let component: ModalCrearContribuyenteComponent;
  let fixture: ComponentFixture<ModalCrearContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearContribuyenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
