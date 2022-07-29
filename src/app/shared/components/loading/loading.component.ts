import { Component,  } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoandingComponent{

  constructor(public loadgService: LoadingService) { }

 /* Em vez de iniciar a variavel loadservice no componente como de costume
    EX. this,loadsrvice.loading$... Optamos por iniciada variavel  diretamente
    no tamplate de for assíncrona com os PIPES nativod do Angular detnro de uma
    diretiva estrututral, tambem nativa do Angular  
*/

}
