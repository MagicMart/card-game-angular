import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})
export class CardContainerComponent implements OnInit {
  cards = [
    'dog',
    'cat',
    'horse',
    'mouse',
    'butterfly',
    'bird',
    'snake',
    'pig',
    'dog',
    'cat',
    'horse',
    'mouse',
    'butterfly',
    'bird',
    'snake',
    'pig',
  ];
  matched: string[] = [];
  opened: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.shuffle();
  }
  shuffle() {
    const num = () => Math.floor(Math.random() * 14); // don't pick last index
    let cardsCopy = this.cards.slice();
    for (let i = 1; i < 32; i++) {
      const pick = cardsCopy.splice(num(), 1)[0];
      cardsCopy = [...cardsCopy, pick];
    }
    this.cards = cardsCopy;
  }

  closeCards() {
    setTimeout(() => (this.opened = []), 900);
  }
  checkCards() {
    if (this.cards[this.opened[0]] === this.cards[this.opened[1]]) {
      this.matched = [...this.matched, this.cards[this.opened[0]]];
      setTimeout(() => (this.opened = []), 600);
    } else {
      this.closeCards(); // close cards
    }
    console.log(this.matched);
  }
  openCard(index: number) {
    if (this.opened.length == 2) return;
    if (this.opened.includes(index)) return;
    this.opened.push(index);
    console.log(this.opened);
    if (this.opened.length == 2) return this.checkCards();
  }
}
