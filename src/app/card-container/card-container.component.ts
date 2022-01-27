import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  cards: any = ["dog", "cat", "horse", "mouse", "butterfly", "bird", "snake", "pig", "dog", "cat", "horse", "mouse", "butterfly", "bird", "snake", "pig"]
  
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
}
