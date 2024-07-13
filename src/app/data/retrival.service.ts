import { Injectable } from '@angular/core';
import { LotroClass, Trees } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export abstract class RetrivalService {
  abstract data(lotroClass: LotroClass): Trees;
}
