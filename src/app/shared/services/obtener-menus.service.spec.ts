import { TestBed } from '@angular/core/testing';

import { ObtenerMenusService } from './obtener-menus.service';

describe('ObtenerMenusService', () => {
  let service: ObtenerMenusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerMenusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
