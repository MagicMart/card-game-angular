import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card!: string;
  @Input() i!: number;
  @Input() opened!: boolean;
  @Input() matched!: boolean;
  constructor() {}

  ngOnInit(): void {}
}
