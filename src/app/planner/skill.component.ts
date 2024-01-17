import { Component, Input, ViewEncapsulation } from '@angular/core';

import { State, Skill } from './state';

/**
 * A skill is what you get when specing into a trait. It also can be an
 * implicit that gets activated when choosing a skill tree.
 * TODO:
 * When hovering over the skill, this components updates the state to hold a
 * reference to the data of the skill. This way, the tooltip component can
 * independently check whether some skill is currently being hovered and, if
 * so, display it's information.
 */
@Component({
  selector: 'skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './planner.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SkillComponent {
    @Input({required: true}) d!: State;
    @Input({required: true}) skill!: Skill;
}
