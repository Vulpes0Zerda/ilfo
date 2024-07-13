import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlannerComponent } from './planner.component';
import { Tree } from '../data/interfaces';
import { TreeDataService } from '../data/planner.service';

@Component({
  selector: 'tree',
  standalone: true,
  imports: [PlannerComponent],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css',
})
export class TreeComponent {
  @Input() tree!: Tree;
  @Output() toggleExplaination = new EventEmitter<void>();
  public service: TreeDataService;
  constructor(service: TreeDataService) {
    this.service = service;
  }
}
