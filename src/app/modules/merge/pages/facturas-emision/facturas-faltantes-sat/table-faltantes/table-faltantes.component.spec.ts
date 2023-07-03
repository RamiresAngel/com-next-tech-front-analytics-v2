import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFaltantesComponent } from './table-faltantes.component';

describe('TableFaltantesComponent', () => {
  let component: TableFaltantesComponent;
  let fixture: ComponentFixture<TableFaltantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFaltantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFaltantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
