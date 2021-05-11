import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface IcLogSumary {
  id: number;
  message: string;
  lasttime: string;
  quantity: number;
  color: string;
}

export interface IcLogsErrors {
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

export interface IcLogsErrorsResponse {
  data: IcLogsErrors[];
  status: boolean;
  totalItem: number;
  totalPage: number;
  pageSize: string;
  currentPage: string;
}

@Injectable({ providedIn: 'root' })
export class ApiServiceCliLogsErrors {
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
    //     map((res: IcLogSumary[]) => {
    //       return res;
    //     }),
    //     catchError(errorRes => {
    //       return throwError(errorRes);
    //     })
    //   );

    let vaLog: IcLogSumary[] = [
      {
        message: '2 categories added',
        lasttime: '10:20',
        quantity: 7,
        color: 'border-danger',
        id: 0
      },
      {
        message: 'New sale: Chocolate Cake',
        lasttime: '09:28',
        quantity: 10,
        color: 'border-theme-2',
        id: 1
      },
      {
        message: 'New sale: Magdalena',
        lasttime: '09:25',
        quantity: 1,
        color: 'border-theme-2',
        id: 2
      },
      {
        message: 'New sale: Fat Rascal',
        lasttime: '09:20',
        quantity: 5,
        color: 'border-theme-2',
        id: 3
      },
      {
        message: 'New sale: Parkin',
        lasttime: '09:10',
        quantity: 4,
        color: 'border-theme-2',
        id: 4
      }

    ];

    return vaLog;
  }

  getLogsErrors(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    const url = environment.apiUrlAdmin + '/CliLogsErrors/api/v1/CliLogsErrors/?format=datatables';

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
        map((res: IcLogsErrorsResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
