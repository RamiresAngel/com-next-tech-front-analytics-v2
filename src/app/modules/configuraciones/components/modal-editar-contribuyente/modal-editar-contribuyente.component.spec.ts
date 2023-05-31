import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarContribuyenteComponent } from './modal-editar-contribuyente.component';

describe('ModalEditarContribuyenteComponent', () => {
  let component: ModalEditarContribuyenteComponent;
  let fixture: ComponentFixture<ModalEditarContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarContribuyenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
