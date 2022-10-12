import { Component, VERSION } from '@angular/core';
import { NewClass } from './services/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(public newClass: NewClass) {}
  increaseTomatoCount() {
    this.newClass.tomatoCount++;
    this.newClass.tomatoPrice = this.newClass.tomatoCount * 20;
  }
  decreaseTomatoCount() {
    this.newClass.tomatoCount--;
    this.newClass.tomatoPrice = this.newClass.tomatoCount * 20;
  }
  increasePotatoCount() {
    this.newClass.potatoCount++;
    this.newClass.potatoPrice = this.newClass.potatoCount * 15;
  }
  decreasePotatoCount() {
    this.newClass.potatoCount--;
    this.newClass.potatoPrice = this.newClass.potatoCount * 15;
  }
  increaseCarrotCount() {
    this.newClass.carrotCount++;
    this.newClass.carrotPrice = this.newClass.carrotCount * 25;
  }
  decreaseCarrotCount() {
    this.newClass.carrotCount--;
    this.newClass.carrotPrice = this.newClass.carrotCount * 25;
  }
  increaseBeetrootCount() {
    this.newClass.beetrootCount++;
    this.newClass.beetrootPrice = this.newClass.beetrootCount * 12;
  }
  decreaseBeetrootCount() {
    this.newClass.beetrootCount--;
    this.newClass.beetrootPrice = this.newClass.beetrootCount * 12;
  }
  increaseLFCount() {
    this.newClass.ladiesFingerCount++;
    this.newClass.ladiesFingerPrice = this.newClass.ladiesFingerCount * 17;
  }
  decreaseLFCount() {
    this.newClass.ladiesFingerCount--;
    this.newClass.ladiesFingerPrice = this.newClass.ladiesFingerCount * 17;
  }
  total(){
    this.newClass.sum = this.newClass.tomatoPrice + this.newClass.potatoPrice + this.newClass.carrotPrice + this.newClass.beetrootPrice + this.newClass.ladiesFingerPrice
  }
}

