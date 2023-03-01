import { TestBed } from '@angular/core/testing';

import { GraficarEcuaService } from './graficar-ecua.service';

describe('GraficarEcuaService', () => {
  let service: GraficarEcuaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraficarEcuaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
