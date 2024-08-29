import { Injectable } from '@angular/core';
import {
  ActiveTrait,
  LotroClass,
  PassiveTrait,
  Trait,
  Tree,
  Trees,
} from './interfaces';
import { JsonRetrivalService } from './json_retrival.service';
import { RetrivalService } from './retrival.service';

@Injectable({
  providedIn: 'root',
})
//Service that holds all the data for the tree and the class
export class TreeDataService {
  public lotroClass: LotroClass = LotroClass.Beorning;
  private retrivalService: RetrivalService;
  public showExplanation: boolean = false;
  public choosenTree: string = '';
  public currentHover: Trait | PassiveTrait | ActiveTrait | undefined =
    undefined;
  public currentTrees: Trees;
  public pointsSpend: Number = 0;
  public pointsTotal: Number = 98;
  constructor(retrivalService: JsonRetrivalService) {
    this.retrivalService = retrivalService;
    this.currentTrees = this.retrivalService.data(this.lotroClass);
  }
  get trees(): Trees {
    return this.currentTrees;
  }
  set Hover(trait: typeof this.currentHover) {
    this.currentHover = trait;
  }
  get Hover(): typeof this.currentHover {
    return this.currentHover;
  }
}
