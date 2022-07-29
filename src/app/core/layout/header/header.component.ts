
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { SearchService } from '../../services/search.service';
import { StartSessionService } from '../../services/start-session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token:any;
  search = ''; //Clear input
  dataSubjectsession: Subscription
  isSessionStart: boolean;

  constructor(
    private route:Router, 
    private startSessionService: StartSessionService,
    private searchService: SearchService
    ) { }

  ngOnInit(): void {
      this.token = window.localStorage.getItem('token') //verifica se tem Token
      this.dataSubjectsession = this.startSessionService.sessionValue().subscribe(res => {
        this.isSessionStart = res
        console.log("The init session is :::: ", this.isSessionStart);
      })
  }

  //Get Input value and send service 
  getSearch(search: string){
    this.searchService.getSearchData(search)
  }

  //Direciona para pagina de login
  login():void {
    this.route.navigate(['/login'])
  }

  logout(){
    window.localStorage.clear()
    setTimeout(() => {
      window.location.reload();
      this.route.navigate(['/']);
    }, 1000);
    
  }

}
