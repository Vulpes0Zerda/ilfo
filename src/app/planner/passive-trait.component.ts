import { Component, Input, ViewEncapsulation } from '@angular/core';

import { TraitComponent } from './trait.component';
import { SkillComponent } from './skill.component';

import { PassiveTrait } from './state';

/**
 * TODO:
 * A passive trait is not choosen by the user, instead, it gets activated if it
 * belongs to the chosen skilltree  and a certain number of points get spent.
 * We can check these conditions using the planner's state (member `d` from
 * `TraitComponent`).
 * (reference to skilltree in skill object needed, to check whether skilltree
 * is activated)
 */
@Component({
  selector: '[passive-trait]',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './passive-trait.component.html',
  styleUrl: './planner.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class PassiveTraitComponent extends TraitComponent {
    @Input({required: true}) trait!: PassiveTrait;
}
