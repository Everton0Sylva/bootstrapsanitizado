import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HTTP_INTERCEPTORS, HttpParams } from '@angular/common/http';
import { OAuth2Response } from './OAuth2Response';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
    providedIn: 'root'
})
export class HttpRequestService {
    private usuario: OAuth2Response;

    constructor(private http: HttpClient, private router: Router, private ngxService: NgxUiLoaderService,
    ) {
        this.usuario = new OAuth2Response();
    }

    login = (email: string, password: string) => {
        const self = this;
        // this.ngxService.start();

        const body = {
            grant_type: 'password',
            client_id: '1_SIburlJf8ePXyECpDzMmCTDvkbicH_WxNmLmnXxALRn',
            client_secret: 'cI2WtlvfYxNnLpr4ZriPuQOFz6t4UheWy9aaVxyfmYi',
            username: email,
            password: password
        };
        const url = environment.apiUrl + '/api/oauth2';

        return new Promise((resolve, reject) => {
            this.http.post(url, body, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
                .toPromise()
                .then(
                    (res: any) => {

                        self.usuario.access_token = res.access_token;
                        self.usuario.habilitado = res.habilitado;
                        self.usuario.type = res.type;
                        self.usuario.seproId = res.seproId;
                        self.usuario.expires_in = res.expires_in;
                        self.usuario.token_type = res.token_type;
                        self.usuario.scope = res.scope;
                        self.usuario.refresh_token = res.refresh_token;
                        this.me(res.access_token).then(
                            (res: any) => {
                                delay(200);
                                resolve(res);
                            }).catch(erro => {
                                reject(erro);
                            })
                    }).catch(erro => {
                        this.ngxService.stop();
                        reject(erro);
                    })
                ;
        });

    }

    me = (token: any) => {
        const self = this;
        const url = environment.apiUrl + '/api/oauth2';
        const promise = new Promise((resolve, reject) => {
            this.http.get(url)
                .toPromise()
                .then(
                    (res: any) => {
                        self.usuario.access_token = JSON.parse(localStorage.getItem('_access_token'));
                        self.usuario.cnpj = res.empresa.cnpj;
                        self.usuario.id = res.empresa.id;
                        self.usuario.habilitado = res.habilitado;
                        self.usuario.nome = res.empresa.nome;
                        self.usuario.type = res.empresa.type;
                        if (res.empresa.uf != null && res.empresa.uf != undefined) {
                            self.usuario.uf = res.empresa.uf;
                        }
                        this.ngxService.stop();
                        resolve(res);
                    }
                ).catch(error => {
                    reject(error);
                    this.ngxService.stop();
                });
        });
        return promise
    }

    refretoken = (refresh_token: any) => {

        const body = {
            grant_type: null,
            client_id: null,
            client_secret: null,
            refresh_token: null
        };
        body.grant_type = 'refresh_token';
        const client_id = '1_65HOpo7UsEmbZdYaI5GDBFTTcITWOnwZHOcL_fwGOhA';
        const client_secret = 'RGffkepAgmRhpq5lrqHHN_H2EZzNvxHOIXJuSdvggFk';
        body.refresh_token = refresh_token;
        // 23_
        const self = this;
        const url = environment.apiUrl + '/api/oauth2';
        return new Promise((resolve, reject) => {
            this.http.post(url, body, {

                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
                .toPromise()
                .then(
                    (res: any) => {
                        self.usuario.access_token = res.access_token;
                        self.usuario.expires_in = res.expires_in;
                        self.usuario.token_type = res.token_type;
                        self.usuario.scope = res.scope;
                        self.usuario.refresh_token = res.refresh_token;
                        resolve(res);

                    }
                ).catch(error => {
                    self.router.navigate(['/user/login']);
                    reject(error);

                });
        });
    }

    logout = () => {
        const self = this;
        let token = JSON.parse(localStorage.getItem('_access_token'));
        const url = environment.apiUrl + '/api/oauth2';
        const promise = new Promise((resolve, reject) => {
            this.http.delete(url, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + token
                })
            })
                .toPromise()
                .then(
                    (res: any) => {
                        self.usuario.access_token = null;
                        self.usuario.expires_in = null;
                        self.usuario.token_type = null;
                        self.usuario.scope = null;
                        self.usuario.refresh_token = null;
                        this.router.navigate(['/user/login']);
                        // localStorage.clear();
                        let i = 0
                        while (localStorage.length > 2) {
                            let lName = localStorage.key(i).toString();
                            if (lName.indexOf('vien') >= 0) {
                                i++;
                            } else {
                                localStorage.removeItem(lName);
                                i = 0;
                            }
                        }
                        resolve(res);
                    }
                ).catch(data => {
                    this.router.navigate(['/user/login']);
                });
        });
    }


    GETME = () => {
        const self = this;
        const url = environment.apiUrl + '/api/oauth2';
        return new Promise((resolve, reject) => {
            this.http.get(url)
                .toPromise()
                .then(
                    (res: any) => {
                        resolve(res);
                    }
                ).catch(error => {
                    reject(error);
                });
        });
    }

    cadastro(body, param) {
        this.ngxService.start();
        const url = environment.apiUrl + '/api/empresa/usuario/' + param;
        return new Promise((resolve, reject) => {
            this.http.post(url, body, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
                .toPromise()
                .then(res => {
                    this.ngxService.stop();
                    resolve(res);
                }
                ).catch((error) => {
                    this.ngxService.stop();
                    reject(error);
                })
                ;
        });

    }


}