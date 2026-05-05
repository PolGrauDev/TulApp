import { TestBed } from '@angular/core/testing';

import { Recados } from './recados';

describe('Recados', () => {
  let service: Recados;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Recados);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
