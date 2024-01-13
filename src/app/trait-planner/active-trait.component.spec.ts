import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTraitComponent } from './active-trait.component';

describe('ActiveTraitComponent', () => {
  let component: ActiveTraitComponent;
  let fixture: ComponentFixture<ActiveTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveTraitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
