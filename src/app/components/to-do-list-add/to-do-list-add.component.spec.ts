import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListAddComponent } from './to-do-list-add.component';

describe('ToDoListAddComponent', () => {
  let component: ToDoListAddComponent;
  let fixture: ComponentFixture<ToDoListAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
