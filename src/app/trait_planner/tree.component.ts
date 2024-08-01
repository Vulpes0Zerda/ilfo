import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlannerComponent } from './planner.component';
import { Tree } from '../data/interfaces';
import { TreeDataService } from '../data/planner.service';
import { NgClass } from '@angular/common';
import { ActiveTraitComponent } from './traits/active-trait.component';
import { PassiveTraitComponent } from './traits/passive-trait.component';

@Component({
  selector: 'tree',
  standalone: true,
  imports: [
    PlannerComponent,
    NgClass,
    ActiveTraitComponent,
    PassiveTraitComponent,
  ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
})
export class TreeComponent {
  @Input() tree!: Tree;
  public service: TreeDataService;
  constructor(service: TreeDataService) {
    this.service = service;
  }
}
