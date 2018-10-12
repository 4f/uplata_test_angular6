import { TestBed } from '@angular/core/testing';

import { MenuLinksService } from './menu_links.service';

describe('MenuLinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuLinksService = TestBed.get(MenuLinksService);
    expect(service).toBeTruthy();
  });
});
