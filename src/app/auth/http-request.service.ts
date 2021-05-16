import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HTTP_INTERCEPTORS, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpRequestService {

    constructor(private http: HttpClient, private router: Router, private ngxService: NgxUiLoaderService,
    ) { }


    public clientId = '1_65HOpo7UsEmbZdYaI5GDBFTTcITWOnwZHOcL_fwGOhA';
    public clientSecret = 'RGffkepAgmRhpq5lrqHHN_H2EZzNvxHOIXJuSdvggFk';

    login = (email: string, password: string) => {
        const self = this;
        // this.ngxService.start();

        const body = {
            grant_type: 'password',
            client_id: self.clientId,
            client_secret: self.clientSecret,
            username: email,
            password: password
        };
        const url = environment.url + '/api/oauth2';
        return new Promise((resolve, reject) => {
            this.http.post(url, body, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
                .toPromise()
                .then(
                    (res: any) => {
                        localStorage.setItem('access_token', JSON.stringify(res.access_token));
                        localStorage.setItem('user_type', JSON.stringify(res.type));
                        this.me(res.access_token).then(
                            (res: any) => {
                                delay(200);
                                resolve(res);
                            }).catch(erro => {
                                reject(erro);
                            })
                    }).catch(erro => {
                        reject(erro);
                    })
                ;
        });

    }

    me = (token: any) => {
        const self = this;
        const url = environment.url + '/api/oauth2';
        const promise = new Promise((resolve, reject) => {
            this.http.get(url)
                .toPromise()
                .then(
                    (res: any) => {
                        localStorage.setItem('user_name', JSON.stringify(res.empresa.nome));
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
            grant_type: 'refresh_token',
            client_id: this.clientId,
            client_secret: this.clientSecret,
            refresh_token: refresh_token
        };

        const self = this;
        const url = environment.url + '/api/oauth2';
        return new Promise((resolve, reject) => {
            this.http.post(url, body, {

                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
                .toPromise()
                .then(
                    (res: any) => {
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
        let token = JSON.parse(localStorage.getItem('access_token'));
        const url = environment.url + '/api/oauth2';
        return new Promise((resolve, reject) => {
            this.http.delete(url, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + token
                })
            })
                .toPromise()
                .then(
                    (res: any) => {
                        self.router.navigate(['/user/login']);
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
                    self.router.navigate(['/user/login']);
                });
        });
    }


    GETME = () => {
        const self = this;
        const url = environment.url + '/api/oauth2';
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
        const url = environment.url + '/api/empresa/usuario/' + param;
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

    resetPassword(body) {
        const self = this;
        const url = environment.url + '/api/oauth2';
        return new Promise((resolve, reject) => {
            self.http.post(url, body, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
                .toPromise()
                .then(res => {
                    self.ngxService.stop();
                    resolve(res);
                }
                ).catch((error) => {
                    self.ngxService.stop();
                    reject(error);
                })
                ;
        });
    }



    register(body) {
        const self = this;
        const url = environment.url + '/api/oauth2';
        return new Promise((resolve, reject) => {
            self.http.post(url, body, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
                .toPromise()
                .then(res => {
                    self.ngxService.stop();
                    resolve(res);
                }
                ).catch((error) => {
                    self.ngxService.stop();
                    reject(error);
                })
                ;
        });
    }


    sendPasswordEmail(body) {
        const self = this;
        const url = environment.url + '/api/oauth2';
        return new Promise((resolve, reject) => {
            self.http.post(url, body, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
                .toPromise()
                .then(res => {
                    self.ngxService.stop();
                    resolve(res);
                }
                ).catch((error) => {
                    self.ngxService.stop();
                    reject(error);
                })
                ;
        });
    }
}