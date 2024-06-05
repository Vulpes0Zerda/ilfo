import { Injectable, OnInit } from '@angular/core';
import { Trees } from "./interfaces";
import data from './beorning.json';

@Injectable({
  providedIn: 'root',
})
export class TreeDataService implements OnInit {
  lotroClass: ;
  json: Trees;
  ngOnInit(lotroClass): void {
    this.lotroClass= lotroClass
  }

  get rawJson() {
    return this.json;
  }
  set rawJson(lotroClass) {
    this.lotroClass = lotroClass;
  }
}
