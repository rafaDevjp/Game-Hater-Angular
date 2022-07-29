import { SearchService } from './../../core/services/search.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GameService } from './../../core/services/game.service';
import { Component, OnInit } from '@angular/core';
import { Games} from 'src/app/shared/models/games';
import { Router } from '@angular/router';




@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  token:any;
  filter = ''
  gameList: Array<Games>=[];
  isError: any

  constructor(
    private gameService: GameService, 
    private router: Router,
    private searchService: SearchService) { }


  ngOnInit(): void {
      this.token = window.localStorage.getItem('token');
      this.gameService.getAllGames().subscribe({
          next: res => {this.gameList = res.games; console.log(this.gameList);
          },
          error: (err) => {throw this.isError = ' Os Dados ou Servidor não foram Encontrados ' + err},
          complete: () => console.info('complete')
      })
      this.searchService.dataSearch().subscribe(res => this.filter = res)
  }

  gameAction(): void{
    this.router.navigate(['/actions-forms'])
  }

}
