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

export interface IcbpDoughnutChart {
  labels: string[],
  datasets: [{
    label: string,
    borderColor: string[],
    backgroundColor: string[],
    borderWidth: number,
    data: number[]
  }
  ]
};

export class layoutDoughnutChart {

  set(pIcbpDataserver: IpizzDataserver): IcbpDoughnutChart {
    let trataDado: IcbpDoughnutChart;
    trataDado = {
      labels: pIcbpDataserver.labels,
      datasets: [
        {
          label: '',
          borderColor: [Colors.getColors().themeColor4, Colors.getColors().themeColor3, Colors.getColors().themeColor2, Colors.getColors().themeColor1],
          backgroundColor: [
            Colors.getColors().themeColor4_10,
            Colors.getColors().themeColor3_10,
            Colors.getColors().themeColor2_10,
            Colors.getColors().themeColor1_10
          ],
          borderWidth: 2,
          data: pIcbpDataserver.datasets[0].data
        }
      ]
    };

    console.log('trataDado Depois layoutDoughnutChart', trataDado);

    return trataDado;
  };
};

@Injectable({ providedIn: 'root' })
export class ApiServiceClicbpDoughnutChart {
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
    //const url = environment.apiUrlAdmin + '/ClicbpDoughnutChart/api/v1/ClicbpDoughnutChart/?format=datatables';
    dataserver = {
      labels: ['Diamond', 'Gold', 'Silver', 'Bronze'],
      datasets: [{
        data: [14, 22, 11, 7]
      }]
    };

    let data = new layoutDoughnutChart().set(dataserver);

    // // http.get(url, { headers, params })
    let datax: any;

    datax = data;

    // datax = http.get(url, { params })
    //   .pipe(
    //     map((res: any) => {
    //       debugger;
    //       console.log('Achou Dado - Segue pro Tratamento', res);
    //       let data = new layoutDoughnutChart().set(res);
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
    //       datatratado = new layoutDoughnutChart().set(data);
    //       return datatratado;
    //     })
    //   );

    return { rdataserver: datax };

  }
}
