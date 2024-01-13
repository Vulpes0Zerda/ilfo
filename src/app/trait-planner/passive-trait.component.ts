import { Component, Input, ViewEncapsulation } from '@angular/core';

import { TraitComponent } from './trait.component';
import { SkillComponent } from './skill.component';

import { PassiveTrait } from './planner-data';

@Component({
  selector: '[passive-trait]',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './passive-trait.component.html',
  styleUrl: './trait-planner.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class PassiveTraitComponent extends TraitComponent {
    @Input({required: true}) trait!: PassiveTrait;
}
