import { Component, Input } from '@angular/core';
import { TreeComponent } from '../tree.component';
import { TraitComponent } from './trait.component';
import { ActiveTrait } from '../../data/interfaces';

@Component({
  selector: 'active-trait',
  standalone: true,
  imports: [TreeComponent],
  templateUrl: './active-trait.component.html',
  styleUrl: './active-trait.component.scss',
})
export class ActiveTraitComponent extends TraitComponent {
  @Input() override trait!: ActiveTrait;
}
