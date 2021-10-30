import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashTaskComponent } from './trash-task.component';

describe('TrashTaskComponent', () => {
  let component: TrashTaskComponent;
  let fixture: ComponentFixture<TrashTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
