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
export class TreeDataService {
  public lotroClass: LotroClass = LotroClass.Beorning;
  private retrivalService: RetrivalService;
  public showExplanation: boolean = false;
  public choosenTree: string = '';
  public currentHover: Trait | PassiveTrait | ActiveTrait | undefined =
    undefined;
  public currentTrees: Trees;
  constructor(retrivalService: JsonRetrivalService) {
    this.retrivalService = retrivalService;
    this.currentTrees = this.retrivalService.data(this.lotroClass);
  }
  get trees(): Trees {
    return this.currentTrees;
  }
  setHover(trait: Trait | PassiveTrait | ActiveTrait | undefined = undefined) {
    this.currentHover = trait;
  }
}
