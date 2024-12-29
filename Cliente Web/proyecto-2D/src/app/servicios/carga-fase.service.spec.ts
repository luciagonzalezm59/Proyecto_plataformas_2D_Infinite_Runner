import { TestBed } from '@angular/core/testing';

import { CargaFaseService } from './carga-fase.service';

describe('CargaFaseService', () => {
  let service: CargaFaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaFaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
