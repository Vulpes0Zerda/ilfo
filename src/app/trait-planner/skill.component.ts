import { Component, Input, ViewEncapsulation } from '@angular/core';

import { PlannerData, Skill } from './planner-data';

@Component({
  selector: 'skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './trait-planner.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SkillComponent {
    @Input({required: true}) d!: PlannerData;
    @Input({required: true}) skill!: Skill;
}
