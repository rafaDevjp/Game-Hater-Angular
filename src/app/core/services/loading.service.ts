import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

/*  ""BehaviorSubject"": é um metodo da classe RXJS que estendo do SubJect
    isso nos possibilita iniciar com um valor, manipular um valor e 
    trabalhar com observable. Neste caso é declerada como tipo boleano com
    o parametro FALSE, está privada para q outras classes não 
*/  
    private loadSubject = new BehaviorSubject<boolean>(true);

/*   */    

    loading$: Observable<boolean> = this.loadSubject.asObservable();

    hide():void{
      this.loadSubject.next(false);
    }

    show():void{
      this.loadSubject.next(true);
    }


}//END_CLASS
