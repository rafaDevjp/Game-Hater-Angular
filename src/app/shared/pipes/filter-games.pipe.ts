import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGames'
})

export class FilterGamesPipe implements PipeTransform {

  transform(value: any, args: any): any {
      
      if (args.length < 3) return value;
      const info ="Valor nao encontrado"
      const resultSearch = [] 
      for (const game of value) {
          if (
            game.title.toLowerCase().indexOf(args.toLowerCase()) > -1 || game.description.toLowerCase().indexOf(args.toLowerCase()) > -1) {
              resultSearch.push(game)
          }else{
            
          }
      }
      if (resultSearch.length  === 0) {

          setTimeout(() => {
            console.log("nenhum resultado :::::: " + resultSearch.length);
            return resultSearch.length

          }, );
      }else{
        return resultSearch;
      }

  }

}
