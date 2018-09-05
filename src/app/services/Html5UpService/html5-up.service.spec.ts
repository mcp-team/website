import { TestBed, inject } from '@angular/core/testing';

import { Html5UpService } from './html5-up.service';

describe('Html5UpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Html5UpService]
    });
  });

  it('should be created', inject([Html5UpService], (service: Html5UpService) => {
    expect(service).toBeTruthy();
  }));
});
