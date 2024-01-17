import { Component, Input, ViewEncapsulation } from '@angular/core';

import { TraitComponent } from './trait.component';
import { SkillComponent } from './skill.component';

import { ActiveTrait } from './state';

/**
 * An active trait can be choosen by the user.
 * TODO:
 * This component holds the functionality for incrementing and decrementing the
 * point count of the trait. But the current count is not a direct member
 * variable of the component but a member of the `trait` input object. This
 * way, other components can use this information for constraint checking.
 */
@Component({
  selector: '[active-trait]',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './active-trait.component.html',
  styleUrl: './planner.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ActiveTraitComponent extends TraitComponent {
    @Input({required: true}) trait!: ActiveTrait;
}
