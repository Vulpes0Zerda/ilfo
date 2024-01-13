import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveTraitComponent } from './passive-trait.component';

describe('PassiveTraitComponent', () => {
  let component: PassiveTraitComponent;
  let fixture: ComponentFixture<PassiveTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassiveTraitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassiveTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
