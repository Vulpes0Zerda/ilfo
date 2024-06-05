import { Component, Input, OnInit } from '@angular/core';
import { PlannerComponent } from './planner.component';

@Component({
  selector: 'tree',
  standalone: true,
  imports: [PlannerComponent],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css',
})
export class TreeComponent implements OnInit {
  @Input() TreeObject!: any;
  ngOnInit(): void {
    console.log(this.TreeObject);
  }
}
