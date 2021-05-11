/*
Mandra é um projeto de automatização de software
Author : Gleison de souza luiz
Contato:gleisonnanet@gmail.com
*/
import { Injectable } from '@angular/core';
import {
 HttpClient, HttpHeaders 
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gen01, Gen01ArrayInterface } from './gen01';
@Injectable({ providedIn: 'root'})

export class Gen01Service {
     constructor(private _httpClient: HttpClient) {  }
genericGet(uri: string)  {
        const href = environment.url
        const requestUrl =   href + uri;   
        return new Promise((resolve, reject) => {
            this._httpClient.get(requestUrl)
             .toPromise().then(res => { 
                  resolve(res); 
                })
              .catch(data => {
                  reject(data); 
               });
         })
    }

create(body: Gen01) {
        
        const url = `${environment.url}` + '/gen01/api/v1/';
        return new Promise((resolve, reject) => {
          this._httpClient.post(url, body)
            .toPromise().then(res => { 
            resolve(res);
             }
            ).catch(data => { 
            reject(data);
             });
        });
    }

show(body:Gen01) {   return body; }

update(body: Gen01) {
        
        const url = `${environment.url}` + '/gen01/api/v1/' + body.id + '/';
        return new Promise((resolve, reject) => {
          this._httpClient.put(url, body)
            .toPromise()
            .then(res => {resolve(res); }
            ).catch(data => { reject(data); });
        });
    }

delete(body: Gen01) {
        
        const url = `${environment.url}` + '/gen01/api/v1/' + body.id + '/';
        return new Promise((resolve, reject) => {
          this._httpClient.delete(url)
            .toPromise()
            .then(res => { 
                resolve(res);
             }).catch(data => {
              reject(data); 
              });
        });
    }

datatables() {
        
        const url = `${environment.url}` + '/gen01/api/v1/?format=datatables';
        return new Promise((resolve, reject) => {
           this._httpClient.get<any>(url)
            .toPromise().then(res => { 
                resolve(res);
                 })
             .catch(data => {
              reject(data); 
              });
        });
    }

getdatatable(sort: string, order: string, page: number, search:any): Observable<Gen01ArrayInterface> {
         const href = environment.url
         const requestUrl =   `${href}/gen01/api/v1/?search=${search}&ordering=${order}&page=${page + 1}`;
        return this._httpClient.get<Gen01ArrayInterface>(requestUrl);
    }
    }

export class Gen01HttpDatatable { 
  constructor(private _httpClient: HttpClient) {}  
getdatatable(sort: string, order: string, page: number, search:any): Observable<Gen01ArrayInterface> {
     const href = environment.url
     const requestUrl =   `${href}/gen01/api/v1/?search=${search}&ordering=${order}&page=${page + 1}`;
    return this._httpClient.get<Gen01ArrayInterface>(requestUrl);
  }
}    
    
    
    
    
