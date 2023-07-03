import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergePageComponent } from './merge-page.component';

describe('MergePageComponent', () => {
  let component: MergePageComponent;
  let fixture: ComponentFixture<MergePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
