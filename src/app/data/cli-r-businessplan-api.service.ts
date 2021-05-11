import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface IcBusinessPlan {
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

export interface IcBusinessPlanResponse {
  data: IcBusinessPlan[];
  status: boolean;
  totalItem: number;
  totalPage: number;
  pageSize: string;
  currentPage: string;
}

@Injectable({ providedIn: 'root' })
export class ApiServiceCliBusinessPlan {
  constructor(private http: HttpClient) { }

  getBusinessPlan(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    const url = environment.apiUrlAdmin + '/CliBusinessPlan/api/v1/CliBusinessPlan/?format=datatables';

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
        map((res: IcBusinessPlanResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
