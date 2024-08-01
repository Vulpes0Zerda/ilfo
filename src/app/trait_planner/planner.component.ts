import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TreeDataService } from '../data/planner.service';
import { TreeComponent } from './tree.component';

@Component({
  selector: 'planner',
  standalone: true,
  imports: [NgFor, TreeComponent, NgClass],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss',
})
export class PlannerComponent {
  readonly service: TreeDataService;
  constructor(service: TreeDataService) {
    this.service = service;
  }
  get trees() {
    return this.service.trees.trees;
  }
}
