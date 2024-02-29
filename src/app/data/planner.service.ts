import { Injectable } from '@angular/core';
import data from "./beorning.json";
import { trees} from "../data/interfaces";

@Injectable({
  providedIn: 'root'
})
export class PlannerService {
  private TraitTrees: trees = data;
  constructor() { }
}
