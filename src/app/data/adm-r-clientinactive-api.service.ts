import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError, tap, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Colors } from '../constants/colors.service';

export interface IaClientInactive {
  id: number;
  username: string;
  name: string;
  email: string;
  telefono: string;
  city: string;
  state: string;
  country: string;
  tipo_usuario: string;
  activos: string;
  blockeado: string;
  status: string;
  statusColor: string;
  date: string;
}

export interface IaClientInactiveResponse {
  data: IaClientInactive[];
  status: boolean;
  totalItem: number;
  totalPage: number;
  pageSize: string;
  currentPage: string;
}

@Injectable({ providedIn: 'root' })
export class ApiServiceAdmClientInactive {
  constructor(private http: HttpClient) { }

  getClientInactive(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    const url = environment.urlAdmin + '/AdmClientInactive/api/v1/AdmClientInactive/?format=datatables';

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
        map((res: IaClientInactiveResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
