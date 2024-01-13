import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { SkillTreeComponent } from './skill-tree.component';

import { PlannerData } from './planner-data';

import data from './data/beorning.json';

@Component({
  selector: 'trait-planner',
  standalone: true,
  imports: [SkillTreeComponent, NgFor],
  templateUrl: './trait-planner.component.html',
  styleUrl: './trait-planner.component.css'
})
export class TraitPlannerComponent {
    d: PlannerData = new PlannerData(data);
}
