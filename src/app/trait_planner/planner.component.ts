import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TreeDataService } from '../data/planner.service';
import { TreeComponent } from './tree.component';

@Component({
  selector: 'planner',
  standalone: true,
  imports: [NgFor, TreeComponent],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.css',
})
export class PlannerComponent {
  private service: TreeDataService;
  //public showExplanation: boolean = false;
  constructor(service: TreeDataService) {
    this.service = service;
  }
  get trees() {
    return this.service.trees.trees;
  }
  toggleExplanation() {
    for (let tree of this.trees) {
      if (!tree.explanation) {
        tree.explanation = {};
      }
      tree.explanation.show = !tree.explanation.show;
    }
  }
}
