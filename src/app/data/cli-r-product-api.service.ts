import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface IcProduct {
  id: number;
  nome: string;
  descricao: string;
  img: string;
  ordem: number;
  preco: number;
  categoria: string;
  status: string;
  statusColor: string;
  start_life: string;
  end_life: string;
  created: string;
}

export interface IcProductResponse {
  data: IcProduct[];
  status: boolean;
  totalItem: number;
  totalPage: number;
  pageSize: string;
  currentPage: string;
}

@Injectable({ providedIn: 'root' })
export class ApiServiceCliProducts {
  constructor(private http: HttpClient) { }

  getProducts(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    const url = environment.urlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';

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
        map((res: IcProductResponse) => {
            let data: any;
            data = res;
            data.status = 1;
            data.totalItem = 1;
            data.totalPage = 1;
            data.pageSize = 1;
            data.currentPage = 1;
            return data;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
