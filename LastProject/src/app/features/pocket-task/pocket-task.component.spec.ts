import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketTaskComponent } from './pocket-task.component';

describe('PocketTaskComponent', () => {
  let component: PocketTaskComponent;
  let fixture: ComponentFixture<PocketTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocketTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
