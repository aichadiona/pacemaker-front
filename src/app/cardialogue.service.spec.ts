import { TestBed } from '@angular/core/testing';

import { CardialogueService } from './cardialogue.service';

describe('CardialogueService', () => {
  let service: CardialogueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardialogueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
