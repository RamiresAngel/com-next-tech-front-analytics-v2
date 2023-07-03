import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConciliadasComponent } from './table-conciliadas.component';

describe('TableConciliadasComponent', () => {
  let component: TableConciliadasComponent;
  let fixture: ComponentFixture<TableConciliadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableConciliadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableConciliadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
