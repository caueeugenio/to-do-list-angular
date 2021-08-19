import { TestBed } from '@angular/core/testing';

import { ToDoListViewService } from './to-do-list-view.service';

describe('ToDoListViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoListViewService = TestBed.get(ToDoListViewService);
    expect(service).toBeTruthy();
  });
});
