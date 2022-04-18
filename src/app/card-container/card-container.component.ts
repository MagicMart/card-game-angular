import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})
export class CardContainerComponent implements OnInit, OnDestroy {
  cards = ['dog', 'cat', 'horse', 'mouse', 'fly', 'bird', 'snake', 'pig'];
  matched: string[] = [];
  opened: number[] = [];
  moves = 0;
  done = false;
  tick = 0;
  intervalID: any;
  constructor() {}

  ngOnInit(): void {
    // double the cards
    this.cards = this.cards.concat(this.cards);
    this.reset();
  }
  ngOnDestroy(): void {
    this.stopTicking();
  }

  shuffleArrayItems<Type>([...arr]: Type[]): Type[] {
    const result: Type[] = [];
    while (arr.length > 0) {
      const randIndex = Math.floor(Math.random() * (arr.length - 1));
      const pick = arr.splice(randIndex, 1)[0]; // pull an element out
      result.push(pick);
    }
    return result;
  }

  reset() {
    this.cards = this.shuffleArrayItems(this.cards); // update the cards that are shown
    this.opened = [];
    this.matched = [];
    this.done = false;
    this.stopTicking();
    this.tick = 0;
    this.moves = 0;
  }

  startTicking() {
    this.intervalID = setInterval(() => (this.tick += 1), 1000);
  }

  stopTicking() {
    clearInterval(this.intervalID);
    this.intervalID = null;
  }

  closeCards() {
    setTimeout(() => (this.opened = []), 800);
  }
  checkCards() {
    const card1 = this.cards[this.opened[0]];
    const card2 = this.cards[this.opened[1]];
    if (card1 === card2) {
      this.matched.push(card1);
      const allCardsMatched = this.matched.length === 8;
      if (allCardsMatched) {
        console.log('Matched length', this.matched.length);
        this.stopTicking();
        this.done = true;
      }
    }
    this.closeCards();
    this.moves += 1;
    console.log(this.matched);
  }
  openCard(index: number, card: string) {
    if (!this.intervalID) this.startTicking();
    if (this.opened.length === 2) return;
    if (this.opened.includes(index)) return;
    if (this.matched.includes(card)) return;
    this.opened.push(index);
    console.log(this.opened);
    if (this.opened.length === 2) return this.checkCards();
  }
}
