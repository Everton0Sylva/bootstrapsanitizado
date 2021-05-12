/*
Mandra é um projeto de automatização de software
Author : Gleison de souza luiz
Contato:gleisonnanet@gmail.com
*/
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sale, SaleArrayInterface } from './sale';
@Injectable({ providedIn: 'root' })

export class SaleService {
  constructor(private _httpClient: HttpClient) { }
  genericGet(uri: string) {
    const href = environment.url
    const requestUrl = href + uri;
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

  create(body: Sale) {
    const url = `${environment.url}` + '/api/mandra/sale/';
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

  show(body: Sale) { return body; }

  update(body: Sale) {

    const url = `${environment.url}` + '/api/mandra/sale/' + body.id + '/';
    return new Promise((resolve, reject) => {
      this._httpClient.put(url, body)
        .toPromise()
        .then(res => { resolve(res); }
        ).catch(data => { reject(data); });
    });
  }

  delete(body: Sale) {
    const url = `${environment.url}` + '/api/mandra/sale/' + body.id + '/';
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

    const url = `${environment.url}` + '/api/mandra/sale/?format=datatables';
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

  getdatatable(sort: string, order: string, page: number, search: any): Observable<SaleArrayInterface> {
    const href = environment.url
    const requestUrl = `${href}/api/mandra/sale/?search=${search}&ordering=${order}&page=${page + 1}`;
    return this._httpClient.get<SaleArrayInterface>(requestUrl);
  }
}

export class SaleHttpDatatable {
  constructor(private _httpClient: HttpClient) { }
  getdatatable(sort: string, order: string, page: number, search: any): Observable<SaleArrayInterface> {
    const href = environment.url
    const requestUrl = `${href}/api/mandra/sale/?search=${search}&ordering=${order}&page=${page + 1}`;
    return this._httpClient.get<SaleArrayInterface>(requestUrl);
  }
}




