import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})
export class CardContainerComponent implements OnInit {
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
    clearInterval(this.intervalID);
  }
  reset() {
    const num = () => Math.floor(Math.random() * 14); // don't pick last index
    let cardsCopy = this.cards.slice();
    for (let i = 1; i < 32; i++) {
      const pick = cardsCopy.splice(num(), 1)[0];
      cardsCopy = [...cardsCopy, pick];
    }
    this.cards = cardsCopy;
    this.opened = [];
    this.matched = [];
    this.done = false;
    clearInterval(this.intervalID);
    this.intervalID = null;
    this.tick = 0;
    this.moves = 0;
  }

  startTicking() {
    this.intervalID = setInterval(() => (this.tick += 1), 1000);
  }

  closeCards() {
    setTimeout(() => (this.opened = []), 800);
  }
  checkCards() {
    const card1 = this.cards[this.opened[0]];
    const card2 = this.cards[this.opened[1]];
    if (card1 === card2) {
      this.matched = [...this.matched, card1];
      if (this.matched.length === 8) {
        console.log('Matched length', this.matched.length);
        clearInterval(this.intervalID);
        this.intervalID = null;
        this.done = true;
      }
      setTimeout(() => (this.opened = []), 600);
    } else {
      this.closeCards(); // close cards
    }
    this.moves += 1;
    console.log(this.matched);
  }
  openCard(index: number, card: string) {
    if (!this.intervalID) this.startTicking();
    if (this.opened.length == 2) return;
    if (this.opened.includes(index)) return;
    if (this.matched.includes(card)) return;
    this.opened.push(index);
    console.log(this.opened);
    if (this.opened.length == 2) return this.checkCards();
  }
}
