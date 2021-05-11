import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface IcProductsSales {
  id: number;
  nome: string;
  descricao: string;
  img: string;
  status: string;
  categoria: string;
  quantidade: number;
  valorvenda: number;
  created: string;
  order : number;
  requester : string;
  datetimedone : string;
  coupon : string;
  deliveryman : string;
  datetimedelivery : string;
}

export interface IcProductsSalesResponse {
  data: IcProductsSales[];
  status: boolean;
  totalItem: number;
  totalPage: number;
  pageSize: string;
  currentPage: string;
}

@Injectable({ providedIn: 'root' })
export class ApiServiceCliProductsSales {
  constructor(private http: HttpClient) { }

  getProductsPurchased(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    const url = environment.apiUrlAdmin + '/CliProductsSales/api/v1/CliProductsSales/?format=datatables';

    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-type', 'application/json');
    headers = headers.append('Authorization', localStorage.getItem('basic'));

    let params = new HttpParams();
    params = params.append('pageSize', pageSize + '');
    params = params.append('currentPage', currentPage + '');
    params = params.append('search', search);
    params = params.append('orderBy', orderBy);

    return this.http.get(url, { headers, params})
      .pipe(
        map((res: IcProductsSalesResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}

