import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderPrincipalComponent } from './loader-principal.component';

describe('LoaderPrincipalComponent', () => {
  let component: LoaderPrincipalComponent;
  let fixture: ComponentFixture<LoaderPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
