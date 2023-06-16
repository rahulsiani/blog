import { TestBed } from '@angular/core/testing';

import { PageAddService } from './page-add.service';

describe('PageAddService', () => {
  let service: PageAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
