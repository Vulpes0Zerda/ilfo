import { Component, Input } from '@angular/core';
import { TreeComponent } from '../tree.component';
import { Trait } from '../../data/interfaces';

@Component({
  selector: 'trait',
  standalone: true,
  imports: [TreeComponent],
  templateUrl: './trait.component.html',
  styleUrl: './trait.component.scss',
})
export class TraitComponent {
  @Input() trait!: Trait;
}
