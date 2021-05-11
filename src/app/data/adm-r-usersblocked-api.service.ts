import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError, tap, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Colors } from '../constants/colors.service';

export interface IaUsersBlocked {
  id: number;
  username: string;
  name: string;
  email: string;
  telefono: string;
  tipo_usuario: string;
  activos: string;
  blockeado: string;
  status: string;
  statusColor: string;
  date: string;
}

export interface IaUsersBlockedResponse {
  data: IaUsersBlocked[];
  status: boolean;
  totalItem: number;
  totalPage: number;
  pageSize: string;
  currentPage: string;
}

@Injectable({ providedIn: 'root' })
export class ApiServiceAdmUsersBlocked {
  constructor(private http: HttpClient) { }

  getUsersBlocked(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    const url = environment.apiUrlAdmin + '/AdmUsersBlocked/api/v1/AdmUsersBlocked/?format=datatables';

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
        map((res: IaUsersBlockedResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
