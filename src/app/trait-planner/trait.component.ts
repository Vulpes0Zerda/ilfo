import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PlannerData, Skill } from './planner-data';

@Component({
  selector: 'app-trait',
  standalone: true,
  imports: [],
  templateUrl: './trait.component.html',
  styleUrl: './trait-planner.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TraitComponent {
    @Input({required: true}) d!: PlannerData;
}
