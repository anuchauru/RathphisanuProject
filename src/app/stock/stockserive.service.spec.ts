import { TestBed, inject } from '@angular/core/testing';

import { StockseriveService } from './stockserive.service';

describe('StockseriveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockseriveService]
    });
  });

  it('should be created', inject([StockseriveService], (service: StockseriveService) => {
    expect(service).toBeTruthy();
  }));
});
