import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  private searchBehaviorSubject = new BehaviorSubject<string>('')

  dataSeach= this.searchBehaviorSubject.asObservable();


  getSearchData(args: string){
    this.searchBehaviorSubject.next(args)
  }

  dataSearch(){
    return this.dataSeach
  }





  
}
