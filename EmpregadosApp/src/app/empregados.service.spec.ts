import { TestBed } from '@angular/core/testing';

import { EmpregadosService } from './empregados.service';

describe('EmpregadosService', () => {
  let service: EmpregadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpregadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
