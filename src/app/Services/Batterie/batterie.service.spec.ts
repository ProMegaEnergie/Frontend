import { TestBed } from '@angular/core/testing';

import { BatterieService } from './batterie.service';

describe('BatterieService', () => {
  let service: BatterieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatterieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
