import { LoadingService } from 'src/app/core/services/loading.service';
import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import { finalize, Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    activeRequest = 0;


constructor(private loadingService: LoadingService ){}

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    if(this.activeRequest == 0 ){
        this.loadingService.show();
    }

    this.activeRequest++;

    return next.handle(request).pipe(
        finalize(() => {
            this.activeRequest--;
            if (this.activeRequest == 0) {
                this.loadingService.hide();
            }
        })
    );
  }
}