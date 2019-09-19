import { TestBed } from '@angular/core/testing';

import { GruposEtareosService } from './grupos-etareos.service';

describe('GruposEtareosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GruposEtareosService = TestBed.get(GruposEtareosService);
    expect(service).toBeTruthy();
  });
});
