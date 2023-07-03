import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDescuadreComponent } from './table-descuadre.component';

describe('TableDescuadreComponent', () => {
  let component: TableDescuadreComponent;
  let fixture: ComponentFixture<TableDescuadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDescuadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDescuadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
