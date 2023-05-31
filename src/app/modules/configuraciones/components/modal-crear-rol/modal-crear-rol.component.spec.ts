import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearRolComponent } from './modal-crear-rol.component';

describe('ModalCrearRolComponent', () => {
  let component: ModalCrearRolComponent;
  let fixture: ComponentFixture<ModalCrearRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
