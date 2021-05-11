import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError, tap, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Colors } from '../constants/colors.service';

export interface IaLogSumary {
  id: number;
  message: string;
  lasttime: string;
  quantity: number;
  color: string;
}

export interface IaLogsErrors {
  id: number;
  message: string;
  created: string;
  levelcritical: string;
  status: string;
  soluciton: string;
  action: string;
  actiondate: string;
  actionresp: string;
}

export interface IaLogsErrorsResponse {
  data: IaLogsErrors[];
  status: boolean;
  totalItem: number;
  totalPage: number;
  pageSize: string;
  currentPage: string;
}

@Injectable({ providedIn: 'root' })
export class ApiServiceAdmLogsErrors {
  constructor(private http: HttpClient) { }

  getLogsErrorsSumary(ptype: string = 'Sumary', pageSize: number = 20, currentPage: number = 1, search: string = '', orderBy: string = '') {
    const url = environment.apiUrlAdmin + '/AdmLogsErrors/api/v1/AdmLogsErrors/?format=datatables';

    search = ptype;

    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-type', 'application/json');
    headers = headers.append('Authorization', localStorage.getItem('basic'));

    let params = new HttpParams();
    params = params.append('pageSize', pageSize + '');
    params = params.append('currentPage', currentPage + '');
    params = params.append('search', search);
    params = params.append('orderBy', orderBy);

    // return this.http.get(url, { headers, params })
    //   .pipe(
    //     map((res: IaLogSumary[]) => {
    //       return res;
    //     }),
    //     catchError(errorRes => {
    //       return throwError(errorRes);
    //     })
    //   );

    let vaLog: IaLogSumary[] = [
      {
        message: 'New user registiration',
        lasttime: '14:12',
        quantity: 1500,
        color: 'border-theme-1',
        id: 0
      },
      {
        message: 'New sale: Soufflé',
        lasttime: '13:20',
        quantity: 350,
        color: 'border-theme-2',
        id: 1
      },
      {
        message: '14 products added',
        lasttime: '12:55',
        quantity: 55,
        color: 'border-danger',
        id: 2
      },
    ];

    return vaLog;
  }

  getLogsErrors(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    const url = environment.apiUrlAdmin + '/AdmLogsErrors/api/v1/AdmLogsErrors/?format=datatables';

    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-type', 'application/json');
    headers = headers.append('Authorization', localStorage.getItem('basic'));

    let params = new HttpParams();
    params = params.append('pageSize', pageSize + '');
    params = params.append('currentPage', currentPage + '');
    params = params.append('search', search);
    params = params.append('orderBy', orderBy);

    return this.http.get(url, { headers, params })
      .pipe(
        map((res: IaLogsErrorsResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
