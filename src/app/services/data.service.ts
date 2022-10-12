import {Injectable} from '@angular/core';

@Injectable()
export class NewClass{
  newCount =0 ;
  tomatoCount=0;
  potatoCount=0;
  carrotCount=0;
  beetrootCount=0;
  ladiesFingerCount=0;
  sum =0;

  tomatoPrice = this.tomatoCount * 20;
  potatoPrice =this.potatoCount * 15;
  carrotPrice = this.carrotCount *25;
  ladiesFingerPrice = this.ladiesFingerCount * 10;
  beetrootPrice = this.beetrootCount * 12;
  constructor(){

  }
}
