import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StartSessionService {

  private sessionBehaviorSubject = new BehaviorSubject<boolean>(false)

  stateNow = this.sessionBehaviorSubject.asObservable();
  

  constructor() { }

  // possibilita alterar o valor inicial do BehaviorSbuject
  initOnStartSession(){
    const token = window.localStorage.getItem('token')
    if (token) {
      this.sessionBehaviorSubject.next(true)
    }
  }

  // Retorna o valor atual (com ou sem alteração)
  sessionValue(){
    return this.sessionBehaviorSubject
  }

}//END_CLASS
