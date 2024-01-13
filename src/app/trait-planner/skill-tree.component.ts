import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

import { PlannerData, SkillTree } from './planner-data';
import { SkillComponent } from './skill.component';
import { ActiveTraitComponent } from './active-trait.component';
import { PassiveTraitComponent } from './passive-trait.component';

@Component({
  selector: '[skill-tree]',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, SkillComponent, ActiveTraitComponent, PassiveTraitComponent],
  templateUrl: './skill-tree.component.html',
  styleUrl: './trait-planner.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SkillTreeComponent {
    @Input({required: true}) d!: PlannerData;
    @Input({required: true}) tree!: SkillTree;

    show_desc: boolean = false;

    activate() {
        this.d.tree_chosen = true;
        this.d.chosen_tree_id = this.tree.id;
    }

    toggle_desc(): void {
        this.show_desc = !this.show_desc;
    }
}
