import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  cards = ["dog", "cat", "horse", "mouse", "butterfly", "bird", "snake", "pig", "dog", "cat", "horse", "mouse", "butterfly", "bird", "snake", "pig"]
  matched: string[] = []
  check: number[] = []
  constructor() { }

  ngOnInit(): void {
    this.shuffle()
  }
  shuffle() {
    const num =  () => Math.floor(Math.random() * 14) // don't pick last index
    let cardsCopy = this.cards.slice()
    for (let i = 1; i < 32; i++) {
      const pick = cardsCopy.splice(num(), 1)[0]
      cardsCopy = [...cardsCopy, pick]
    }
    this.cards = cardsCopy
  }
  checkCards() {
    if(this.cards[this.check[0]] === this.cards[this.check[1]]) {
      this.matched = [...this.matched, this.cards[this.check[0]]]
    } else {
      this.check = [] // close cards
    }
    console.log(this.matched)
  }
  openCard (index: number) {
    if(this.check.length == 2) return
    this.check.push(index)
    console.log(this.check)
    if(this.check.length ==2 ) return this.checkCards()
  }
}
