import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerBacklogComponent } from './planner-backlog.component';

describe('PlannerBacklogComponent', () => {
  let component: PlannerBacklogComponent;
  let fixture: ComponentFixture<PlannerBacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerBacklogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
