import { Injectable } from '@angular/core';
import { LotroClass, Trees } from './interfaces';
import { JsonRetrivalService } from './json_retrival.service';
import { RetrivalService } from './retrival.service';

@Injectable({
  providedIn: 'root',
})
export class TreeDataService {
  public lotroClass: LotroClass = LotroClass.Beorning;
  private retrivalService: RetrivalService;
  public showExplanation: boolean = false;
  public currentTrees: Trees;
  constructor(retrivalService: JsonRetrivalService) {
    this.retrivalService = retrivalService;
    this.currentTrees = this.retrivalService.data(this.lotroClass);
    for (let tree of this.currentTrees.trees) {
      if (!tree.explanation) {
        tree.explanation = {};
      }
      tree.explanation.show = false;
    }
  }
  get trees(): Trees {
    return this.currentTrees;
  }
}
