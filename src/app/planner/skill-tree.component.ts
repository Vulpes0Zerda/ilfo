import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

import { State, SkillTree } from './state';
import { SkillComponent } from './skill.component';
import { ActiveTraitComponent } from './active-trait.component';
import { PassiveTraitComponent } from './passive-trait.component';

/**
 * This component describes one of the 3 skill trees that each class has.
 * Both, the planner state, and the specific skill tree come from the planner
 * component.
 */
@Component({
  selector: '[skill-tree]',
  standalone: true,
  imports: [
      NgFor, NgIf, NgClass,
      SkillComponent, ActiveTraitComponent, PassiveTraitComponent
  ],
  templateUrl: './skill-tree.component.html',
  styleUrl: './planner.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SkillTreeComponent {
    /** The planner's state */
    @Input({required: true}) d!: State;
    /** The specific skill tree to render */
    @Input({required: true}) tree!: SkillTree;

    /** Flag determining whether the full description of this tree is shown */
    show_desc: boolean = false;

    /**
     * This function is called when the "activate" button of this tree gets
     * clicked. It changes the planner's state so that other components can
     * adjust their view based on it.
     */
    activate() {
        this.d.tree_chosen = true;
        this.d.chosen_tree_id = this.tree.id;
    }

    /**
     * This gets called when the "more" button of this tree gets clicked. It
     * toggles the `show_desc` flag, the view depends on.
     */
    toggle_desc(): void {
        this.show_desc = !this.show_desc;
    }
}
