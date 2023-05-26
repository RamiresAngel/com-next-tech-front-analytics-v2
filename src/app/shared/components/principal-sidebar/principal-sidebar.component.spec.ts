import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSidebarComponent } from './principal-sidebar.component';

describe('PrincipalSidebarComponent', () => {
  let component: PrincipalSidebarComponent;
  let fixture: ComponentFixture<PrincipalSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
