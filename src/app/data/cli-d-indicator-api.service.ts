import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError, tap, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Colors } from '../constants/colors.service';

export interface IindDataserver {
  data: number[]
};

export class layoutIndicator {

  set(pNameIndicator: string, pIindDataserver: IindDataserver): any {
    let trataDado: any;

    if ((pNameIndicator != 'aucActiveUsersQtd') && (pNameIndicator != 'tmMsgTraffickedQtd')) {
      trataDado = {
        label: pNameIndicator,
        data: pIindDataserver.data,
      };

    } else {
      trataDado = {
        data: pIindDataserver.data[0]
      };
    }

    console.log('trataDado Depois layoutIndicator', trataDado);

    return trataDado;
  };
};

@Injectable({ providedIn: 'root' })
export class ApiServiceCliIndicator {
  constructor(private http: HttpClient) { }

  public static getData(pNameIndicator: string = '',
    pageSize: number = 10,
    currentPage: number = 1,
    search: string = '',
    orderBy: string = '') {

    search = pNameIndicator;

    let http: HttpClient;

    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-type', 'application/json');
    headers = headers.append('Authorization', localStorage.getItem('basic'));

    let params = new HttpParams();
    params = params.append('pageSize', pageSize + '');
    params = params.append('currentPage', currentPage + '');
    params = params.append('search', search);
    params = params.append('orderBy', orderBy);

    let dataserver: IindDataserver;
    let url: any;

    url = environment.url + '/cakes/paging';
    // url = environment.urlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
    //const url = environment.urlAdmin + '/CliIndicator/api/v1/CliIndicator/?format=datatables';

    if (pNameIndicator === 'Inactive Clients') {
      dataserver = {
        data: [10]
      };
    };
    if (pNameIndicator === 'Blocked Clients') {
      dataserver = {
        data: [4]
      };
    };
    if (pNameIndicator === 'Blocked Users from Active Clients') {
      dataserver = {
        data: [20]
      };
    };
    if (pNameIndicator === 'Blocked Consumers from Active Clients') {
      dataserver = {
        data: [15]
      };
    };
    if (pNameIndicator === 'aucActiveUsersQtd') {
      dataserver = {
        data: [8]
      };
    };
    if (pNameIndicator === 'tmMsgTraffickedQtd') {
      dataserver = {
        data: [346]
      };
    };

    let data = new layoutIndicator().set(pNameIndicator, dataserver);

    // // http.get(url, { headers, params })
    let datax: any;

    datax = data;

    // datax = http.get(url, { params })
    //   .pipe(
    //     map((res: any) => {
    //       debugger;
    //       console.log('Achou Dado - Segue pro Tratamento', res);
    //       let data = new layoutIndicator().set(pNameIndicator, res);
    //       console.log(data);
    //       return data;
    //     }),
    //     catchError((errorRes) => {
    //       console.log('Deu Erro Passei por Aqui !!!!!!')
    //       let data: IindDataserver;
    //       let datatratado: any;

    //       data = {
    //              data: number[]
    //         };

    //       console.log('Mensagem de Erro', errorRes);
    //       datatratado = new layoutIndicator().set(pNameIndicator,data);
    //       return datatratado;
    //     })
    //   );

    return { rdataserver: datax };

  }
}
