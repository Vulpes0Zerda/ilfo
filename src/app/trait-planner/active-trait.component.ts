import { Component, Input, ViewEncapsulation } from '@angular/core';

import { TraitComponent } from './trait.component';
import { SkillComponent } from './skill.component';

import { ActiveTrait } from './planner-data';

@Component({
  selector: '[active-trait]',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './active-trait.component.html',
  styleUrl: './trait-planner.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ActiveTraitComponent extends TraitComponent {
    @Input({required: true}) trait!: ActiveTrait;
}
