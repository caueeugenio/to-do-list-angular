import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListDetailComponent } from './to-do-list-detail.component';

describe('ToDoListDetailComponent', () => {
  let component: ToDoListDetailComponent;
  let fixture: ComponentFixture<ToDoListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
