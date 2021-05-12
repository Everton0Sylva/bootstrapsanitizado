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

export interface IpizzBroSmallChart {
  labels: string[],
  datasets: [
    {
      label: string,
      borderColor: string,
      pointBorderColor: string,
      pointHoverBackgroundColor: string,
      pointHoverBorderColor: string,
      pointRadius: number,
      pointBackgroundColor: string,
      pointBorderWidth: number,
      pointHoverRadius: number,
      fill: boolean,
      borderWidth: number,
      data: number[],
      datalabels: {
        align: string,
        anchor: string
      }
    }
  ]
};

export class layoutBroSmallChart {

  set(pIpizzDataserver: IpizzDataserver ): IpizzBroSmallChart {
    let trataDado: IpizzBroSmallChart;
    trataDado = {
      labels: pIpizzDataserver.labels,
      datasets: [
        {
          label: pIpizzDataserver.datasets[0].label,
          borderColor: Colors.getColors().themeColor1,
          pointBorderColor: Colors.getColors().themeColor1,
          pointHoverBackgroundColor: Colors.getColors().themeColor1,
          pointHoverBorderColor: Colors.getColors().themeColor1,
          pointRadius: 3,
          pointBackgroundColor: Colors.getColors().themeColor1,
          pointBorderWidth: 0,
          pointHoverRadius: 3,
          fill: false,
          borderWidth: 2,
          data: pIpizzDataserver.datasets[0].data,
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        }
      ]
    };

    console.log('trataDado Depois layoutBroSmallChart', trataDado);

    return trataDado;
  };
};

@Injectable({ providedIn: 'root' })
export class ApiServiceAdmBroSmallChart {
  constructor(private http: HttpClient) { }

  public static getData(pLabel: string = '',
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

    dataserver = {
      labels: [''],
      datasets: [{
        label: '',
        data: [0],
      }]
    };

    if (pLabel === 'Bronze Plan') {
      url = environment.url + '/cakes/paging';
      // url = environment.urlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      //const url = environment.urlAdmin + '/AdmcbpBroSmallChart/api/v1/AdmcbpBroSmallChart/?format=datatables';
      dataserver = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Bronze Plan',
          data: [1250, 1300, 1550, 921, 1810, 1106, 1610],
        }]
      };
    };

    if (pLabel === 'Silver Plan') {
      url = environment.url + '/cakes/paging';
      // url = environment.urlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      //const url = environment.urlAdmin + '/AdmcbpSilSmallChart/api/v1/AdmcbpSilSmallChart/?format=datatables';
      dataserver = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Silver Plan',
          data: [115, 120, 300, 222, 105, 85, 36],
        }]
      };
    };

    if (pLabel === 'Gold Plan') {
      url = environment.url + '/cakes/paging';
      // url = environment.urlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      //const url = environment.urlAdmin + '/AdmcbpGolSmallChart/api/v1/AdmcbpGolSmallChart/?format=datatables';
      dataserver = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Gold Plan',
          data: [350, 452, 762, 952, 630, 85, 158],
        }]
      };
    };

    if (pLabel === 'Diamond Plan') {
      url = environment.url + '/cakes/paging';
      // url = environment.urlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      //const url = environment.urlAdmin + '/AdmcbpDiaSmallChart/api/v1/AdmcbpDiaSmallChart/?format=datatables';
      dataserver = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Diamond Plan',
          data: [200, 452, 250, 630, 125, 85, 20],
        }]
      };
    };

    let data = new layoutBroSmallChart().set(dataserver);

    // // http.get(url, { headers, params })
    let datax: any;

    datax = data;

    // datax = http.get(url, { params })
    //   .pipe(
    //     map((res: any) => {
    //       debugger;
    //       console.log('Achou Dado - Segue pro Tratamento', res);
    //       let data = new layoutBroSmallChart().set(res);
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
    //       datatratado = new layoutBroSmallChart().set(data);
    //       return datatratado;
    //     })
    //   );

    return { rdataserver: datax };

  }
}
