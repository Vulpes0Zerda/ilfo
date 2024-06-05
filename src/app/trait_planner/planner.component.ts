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
  lotroClassData = TreeDataService.rawJson;
}
