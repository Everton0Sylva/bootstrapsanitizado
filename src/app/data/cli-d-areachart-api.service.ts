import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError, tap, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Colors } from '../constants/colors.service';

export interface IacDataserver {
  labels: string[],
  datasets: [{
    data: number[],
    dataMin: number,
    dataMax: number,
    dataStep: number
  }]
}

export interface IacAreaChart {
  labels: string[],
  datasets: [{
    label: string,
    data: number[],
    dataMin: number,
    dataMax: number,
    dataStep: number,
    borderColor: string,
    pointBackgroundColor: string,
    pointBorderColor: string,
    pointHoverBackgroundColor: string,
    pointHoverBorderColor: string,
    pointRadius: number,
    pointBorderWidth: number,
    pointHoverRadius: number,
    fill: boolean,
    borderWidth: number,
    backgroundColor: string
  }]
}

export class chartserver {

  set(pIacAreaChart: IacDataserver): IacAreaChart {

    let trataDado: IacAreaChart;
    trataDado = {
      labels: pIacAreaChart.labels,
      datasets: [{
        label: '',
        data: pIacAreaChart.datasets[0].data,
        dataMin: pIacAreaChart.datasets[0].dataMin,
        dataMax: pIacAreaChart.datasets[0].dataMax,
        dataStep: pIacAreaChart.datasets[0].dataStep,
        borderColor: Colors.getColors().themeColor1,
        pointBackgroundColor: Colors.getColors().foregroundColor,
        pointBorderColor: Colors.getColors().themeColor1,
        pointHoverBackgroundColor: Colors.getColors().themeColor1,
        pointHoverBorderColor: Colors.getColors().foregroundColor,
        pointRadius: 4,
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        fill: true,
        borderWidth: 2,
        backgroundColor: Colors.getColors().themeColor1_10
      }]
    };

    console.log('trataDado Depois', trataDado);

    return trataDado;
  };
};

@Injectable({ providedIn: 'root' })
export class ApiServiceCliacAreaChart {
  constructor(private http: HttpClient) { }

  public static getAreaChart(vision: string = 'DayWeek',
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

    if (vision === 'acDayWeek') {
      url = environment.url + '/cakes/paging';
      // url = environment.urlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      //const url = environment.urlAdmin + '/CliacAreaChartDayWeek/api/v1/CliacAreaChartDayWeek/?format=datatables';
      dataserver = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          data: [60, 68, 60, 55, 60, 63, 54],
          dataMin: 50,
          dataMax: 70,
          dataStep: 5
        }]
      };
    };

    if (vision === 'acMonthYear') {
      url = environment.url + '/cakes/paging';
      //url = environment.urlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      // const url = environment.urlAdmin + '/CliacAreaChartMonthYear/api/v1/CliacAreaChartMonthYear/?format=datatables';
      dataserver = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [155, 167, 160, 165, 160, 168, 160, 165, 160, 163, 170, 254],
          dataMin: 150,
          dataMax: 260,
          dataStep: 10
        }]
      };
    };

    if (vision === 'appDayWeek') {
      url = environment.url + '/cakes/paging';
      // url = environment.urlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      //const url = environment.urlAdmin + '/CliappAreaChartDayWeek/api/v1/CliappAreaChartDayWeek/?format=datatables';
      dataserver = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          data: [161, 167, 160, 165, 140, 133, 154],
          dataMin: 130,
          dataMax: 170,
          dataStep: 10
        }]
      };
    };

    if (vision === 'appMonthYear') {
      url = environment.url + '/cakes/paging';
      //url = environment.urlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      // const url = environment.urlAdmin + '/CliappAreaChartMonthYear/api/v1/CliappAreaChartMonthYear/?format=datatables';
      dataserver = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [16, 17, 20, 18, 16, 17, 15, 16, 17, 16, 16, 25],
          dataMin: 15,
          dataMax: 25,
          dataStep: 5
        }]
      };
    };

    if (vision === 'vaDayWeek') {
      url = environment.url + '/cakes/paging';
      // url = environment.urlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      //const url = environment.urlAdmin + '/ClivaAreaChartDayWeek/api/v1/ClivaAreaChartDayWeek/?format=datatables';
      dataserver = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          data: [35, 40, 25, 20, 10, 6, 5],
          dataMin: 0,
          dataMax: 50,
          dataStep: 5
        }]
      };
    };

    if (vision === 'vaMonthYear') {
      url = environment.url + '/cakes/paging';
      //url = environment.urlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      // const url = environment.urlAdmin + '/ClivaAreaChartMonthYear/api/v1/ClivaAreaChartMonthYear/?format=datatables';
      dataserver = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [21, 19, 18, 14, 15, 16, 17, 16, 16, 18, 17, 25],
          dataMin: 10,
          dataMax: 30,
          dataStep: 5
        }]
      };
    };

    let data = new chartserver().set(dataserver);

    // // http.get(url, { headers, params })
    let datax: any;

    datax = data;

    // datax = http.get(url, { params })
    //   .pipe(
    //     map((res: any) => {
    //       debugger;
    //       console.log('Achou Dado - Segue pro Tratamento',res);
    //       let data = new chartserver().set(res);
    //       console.log(data);
    //       return data;
    //     }),
    //     catchError((errorRes) => {
    //       console.log('Deu Erro Passei por Aqui !!!!!!')
    //       let data: IacDataserver ;
    //       let datatratado : any;

    //       data = {
    //         labels: [''],
    //         datasets: [{
    //           data: [0],
    //           dataMin: 0,
    //           dataMax: 0,
    //           dataStep: 0
    //         }]
    //       };

    //       console.log('Mensagem de Erro', errorRes);
    //       datatratado = new chartserver().set(data);
    //       return datatratado;
    //     })
    //   );

    return { rdataserver: datax };

  }
}
