import { TestBed } from '@angular/core/testing';

import { SovyServiceService } from './sovy-service.service';

describe('SovyServiceService', () => {
  let service: SovyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SovyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
