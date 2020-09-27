import { TestBed } from '@angular/core/testing';

import { AutoSearchService } from './auto-search.service';
import { HttpClientModule } from '@angular/common/http';

describe('AutoSearchService', () => {
  let service: AutoSearchService;

  beforeEach(() => {
    //need to write more unit test here
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AutoSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
