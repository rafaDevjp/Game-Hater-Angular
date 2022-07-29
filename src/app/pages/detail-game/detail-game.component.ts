import { HttpErrorResponse } from '@angular/common/http';

import { Games } from './../../shared/models/games';
import { GameService } from './../../core/services/game.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.scss']
})
export class DetailGameComponent implements OnInit {

  // data!: UserModel


  game: Games;
  token: any;
  isError: any

  constructor(
    private gameService: GameService,
    private activate: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.token = window.localStorage.getItem('token')
    const id = this.activate.snapshot.paramMap.get('_id');
    this.getGameDetail(id)
   
  }

  getGameDetail(arg: any) {
    this.gameService.getGameId(arg).subscribe({
      // console.log(res)
      next: (res) => { this.game = res.game},
      error: (err) => {
        console.log(err);
        throw this.isError = ' Data is not Found ID references:  ' + arg; 
      },
      complete: () => {console.info('complete')}
    })
  } 
  
  deleteGame(id:any){
    if (confirm("Deseja Deletar este Game?")){
        this.gameService.deleteGame(id).subscribe({
          next: () => {  this.revoke()},
          error: (err) => err,
          complete: () => { console.log('Complete: Game Deletado');
          }
        })
    }else{
      this.revoke()
    }

  }

  revoke(){
    this.route.navigate(['/'])
  }


}//END_CLASS






