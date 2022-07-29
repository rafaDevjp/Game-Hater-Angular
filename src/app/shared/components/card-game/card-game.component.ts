import { Component, Input, OnInit } from '@angular/core';
import { Games } from './../../models/games';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent implements OnInit {

  @Input()
  games: Games

  constructor() { }

  
  ngOnInit(): void {
  }

}
