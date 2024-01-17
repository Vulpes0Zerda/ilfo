import { Component, Input } from '@angular/core';
import { State, Skill } from './state';

/**
 * This is just a Base class for active and passive traits. It therefore has no
 * template.
 */
@Component({
  standalone: true,
  imports: [],
  template: '',
  styleUrl: './planner.component.css',
})
export abstract class TraitComponent {
    @Input({required: true}) d!: State;
}
