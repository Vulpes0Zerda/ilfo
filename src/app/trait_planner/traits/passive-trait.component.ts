import { Component, Input, input } from '@angular/core';
import { TreeComponent } from '../tree.component';
import { TraitComponent } from './trait.component';
import { PassiveTrait, Trait } from '../../data/interfaces';

@Component({
  selector: 'passive-trait',
  standalone: true,
  imports: [TreeComponent],
  templateUrl: './passive-trait.component.html',
  styleUrl: './passive-trait.component.scss',
})
export class PassiveTraitComponent extends TraitComponent {
  @Input() override trait!: PassiveTrait;
}
