import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista69Component } from './lista69.component';

describe('Lista69Component', () => {
  let component: Lista69Component;
  let fixture: ComponentFixture<Lista69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lista69Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lista69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
