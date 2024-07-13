import { Injectable } from '@angular/core';
import { LotroClass, Trees } from './interfaces';
import data from './beorning.json';
import { RetrivalService } from './retrival.service';

@Injectable({
  providedIn: 'root',
})
export class JsonRetrivalService extends RetrivalService {
  private allTrees: { [key in LotroClass]: Trees };
  constructor() {
    super();
    this.allTrees = {
      [LotroClass.Beorning]: data,
      [LotroClass.Brawler]: data,
      [LotroClass.Burglar]: data,
    };
  }
  data(lotroClass: LotroClass): Trees {
    return this.allTrees[lotroClass];
  }
}
