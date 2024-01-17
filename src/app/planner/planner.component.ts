import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { SkillTreeComponent } from './skill-tree.component';

import { State } from './state';

/** We are importing the data directly from json for now. */
import data from './data/beorning.json';

/**
 * This is the component that gets rendered for the "#/traits" url (see
 * app.routes.ts).
 * Its purpose is to initialise the planner state and propagate it to the
 * SkillTreeComponents that are generated from the `trees` field in the data.
 */
@Component({
  standalone: true,
  imports: [SkillTreeComponent, NgFor],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.css'
})
export class PlannerComponent {
    d: State = new State(data);
}
