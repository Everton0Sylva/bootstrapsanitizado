import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError, tap, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Colors } from '../constants/colors.service';

export interface IpizzDataserver {
  labels: string[],
  datasets: [{
    label: string;
    data: number[]
  }]
}

export interface IacbpPolarAreaChart {
  labels: string[],
  datasets: [{
    data: number[],
    borderWidth: number,
    borderColor: string[],
    backgroundColor: string[]
  }
  ]
};

export class layoutPolarAreaChart {

  set(pIpizzDataserver: IpizzDataserver): IacbpPolarAreaChart {
    let trataDado: IacbpPolarAreaChart;
    trataDado = {
      labels: pIpizzDataserver.labels,
      datasets: [
        {
          data: pIpizzDataserver.datasets[0].data,
          borderWidth: 2,
          borderColor: [Colors.getColors().themeColor1, Colors.getColors().themeColor2, Colors.getColors().themeColor3, Colors.getColors().themeColor4],
          backgroundColor: [
            Colors.getColors().themeColor1_10,
            Colors.getColors().themeColor2_10,
            Colors.getColors().themeColor3_10,
            Colors.getColors().themeColor4_10,
          ]
        }
      ]
    };

    console.log('trataDado Depois layoutPolarAreaChart', trataDado);

    return trataDado;
  };
};

@Injectable({ providedIn: 'root' })
export class ApiServiceCliacbpPolarAreaChart {
  constructor(private http: HttpClient) { }

  public static getData(
    pageSize: number = 10,
    currentPage: number = 1,
    search: string = '',
    orderBy: string = '') {

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

    let dataserver: any;
    let url: any;

    url = environment.apiUrl + '/cakes/paging';
    // url = environment.apiUrlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
    //const url = environment.apiUrlAdmin + '/CliacbpPolarAreaChart/api/v1/CliacbpPolarAreaChart/?format=datatables';
    dataserver = {
      labels: ['Diamond', 'Gold', 'Silver', 'Bronze'],
      datasets: [{
        data: [55, 70, 90, 65],
      }]
    };

    let data = new layoutPolarAreaChart().set(dataserver);

    // // http.get(url, { headers, params })
    let datax: any;

    datax = data;

    // datax = http.get(url, { params })
    //   .pipe(
    //     map((res: any) => {
    //       debugger;
    //       console.log('Achou Dado - Segue pro Tratamento', res);
    //       let data = new layoutPolarAreaChart().set(res);
    //       console.log(data);
    //       return data;
    //     }),
    //     catchError((errorRes) => {
    //       console.log('Deu Erro Passei por Aqui !!!!!!')
    //       let data: IpizzDataserver;
    //       let datatratado: any;

    //       data = {
    //         labels: [''],
    //         datasets: [{
    //           data: [0]
    //         }]
    //       };

    //       console.log('Mensagem de Erro', errorRes);
    //       datatratado = new layoutPolarAreaChart().set(data);
    //       return datatratado;
    //     })
    //   );

    return { rdataserver: datax };

  }
}
