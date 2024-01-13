import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitPlannerComponent } from './trait-planner.component';

describe('TraitPlannerComponent', () => {
  let component: TraitPlannerComponent;
  let fixture: ComponentFixture<TraitPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitPlannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraitPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
