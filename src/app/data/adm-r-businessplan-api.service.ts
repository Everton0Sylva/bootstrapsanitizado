import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError, tap, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Colors } from '../constants/colors.service';


export interface IaBusinessPlan {
  id: number;
  name: string;
  descricao: string;
  ativo: string;
  preco: string;
  img: string;
  start_life: string;
  end_life: string;
  created: string;
  last_update: string;
}

export interface IaBusinessPlanResponse {
  data: IaBusinessPlan[];
  status: boolean;
  totalItem: number;
  totalPage: number;
  pageSize: string;
  currentPage: string;
}

@Injectable({ providedIn: 'root' })
export class ApiServiceAdmBusinessPlan {
  constructor(private http: HttpClient) { }

  getBusinessPlan(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    const url = environment.apiUrlAdmin + '/AdmBusinessPlan/api/v1/AdmBusinessPlan/?format=datatables';

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
        map((res: IaBusinessPlanResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
