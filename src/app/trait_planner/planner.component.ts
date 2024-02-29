import { NgFor } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [NgFor],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.css'
})
export class PlannerComponent {

}
