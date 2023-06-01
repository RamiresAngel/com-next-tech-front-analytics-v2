import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelAccesoComponent } from './nivel-acceso.component';

describe('NivelAccesoComponent', () => {
  let component: NivelAccesoComponent;
  let fixture: ComponentFixture<NivelAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelAccesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
