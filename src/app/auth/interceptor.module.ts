import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest, HttpClient, HttpErrorResponse, HttpHeaders,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuth2Response } from './OAuth2Response';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpRequestService } from './http-request.service';
import { throwError } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {
    private usuario: OAuth2Response;
    constructor(private http: HttpClient
        , private router: Router
        , private OAuth: HttpRequestService
        , private ngxService: NgxUiLoaderService) {
        this.usuario = new OAuth2Response();
    }

    cont: any = 0;
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const self = this;
        const dupReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem('_access_token'))), });
        dupReq.headers.set('Access-Control-Allow-Origin', '*');
        dupReq.headers.set('Access-Control-Allow-Method', 'GET,POST,OPTIONS,DELETE,PUT');

        return next
            .handle(dupReq)
            .pipe(
                tap((ev: HttpEvent<any>) => { }),
                catchError(response => {
                    // debugger
                    if (response instanceof HttpErrorResponse) {
                        if (response.status === 401) {
                            this.ngxService.start();
                            let mMessage = response.error.message.toLowerCase();
                            //    debugger
                            if ((mMessage.indexOf('authentication') >= 0) && (mMessage.indexOf('required') >= 0)) {
                                let refresh = localStorage.getItem('_refresh_token');
                                if ((refresh === null) || (refresh.indexOf('null') >= 0)) {
                                    console.error('Erro ao Reconectar, tente logar novamente');
                                    this.router.navigate(['/user/login']);
                                    return
                                }
                                self.OAuth.refretoken(JSON.parse(refresh)).then((res) => {
                                    this.ngxService.stop();
                                    window.location.reload();
                                    return;
                                }).catch((erro) => {
                                    console.error('Erro ao Reconectar, tente logar novamente');
                                    this.ngxService.stop();
                                    this.router.navigate(['/user/login']);
                                })
                            } else {
                                this.ngxService.stop();
                                return throwError(response);
                            }
                     /*   } else if (response.status === 0) {
                            this.router.navigate(['500']);*/
                        } else {
                            console.log('Http error', response);
                            return throwError(response);
                        }
                    } else {
                        return throwError(response);
                    }
                })
            )
    }

}

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ]
})
export class InterceptorModule {
}
