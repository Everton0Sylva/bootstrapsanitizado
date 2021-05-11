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
export class ApiServiceAdmacAreaChart {
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
      url = environment.apiUrl + '/cakes/paging';
      // url = environment.apiUrlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      //const url = environment.apiUrlAdmin + '/AdmacAreaChartDayWeek/api/v1/AdmacAreaChartDayWeek/?format=datatables';
      dataserver = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          data: [540, 630, 600, 650, 600, 680, 600],
          dataMin: 500,
          dataMax: 700,
          dataStep: 50
        }]
      };
    };

    if (vision === 'acMonthYear') {
      url = environment.apiUrl + '/cakes/paging';
      //url = environment.apiUrlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      // const url = environment.apiUrlAdmin + '/AdmacAreaChartMonthYear/api/v1/AdmacAreaChartMonthYear/?format=datatables';
      dataserver = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [1540, 1630, 1600, 1650, 1600, 1680, 1600, 1540, 1630, 1600, 1600, 1600],
          dataMin: 1500,
          dataMax: 2600,
          dataStep: 100
        }]
      };
    };

    if (vision === 'appDayWeek') {
      url = environment.apiUrl + '/cakes/paging';
      // url = environment.apiUrlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      //const url = environment.apiUrlAdmin + '/AdmappAreaChartDayWeek/api/v1/AdmappAreaChartDayWeek/?format=datatables';
      dataserver = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          data: [1540, 1330, 1400, 1650, 1600, 1670, 1610],
          dataMin: 1300,
          dataMax: 1700,
          dataStep: 100
        }]
      };
    };

    if (vision === 'appMonthYear') {
      url = environment.apiUrl + '/cakes/paging';
      //url = environment.apiUrlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      // const url = environment.apiUrlAdmin + '/AdmappAreaChartMonthYear/api/v1/AdmappAreaChartMonthYear/?format=datatables';
      dataserver = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [2540, 1630, 1600, 1650, 1600, 1680, 1600, 1600, 1650, 1600, 1680, 1600],
          dataMin: 1550,
          dataMax: 2600,
          dataStep: 100
        }]
      };
    };

    if (vision === 'vaDayWeek') {
      url = environment.apiUrl + '/cakes/paging';
      // url = environment.apiUrlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      //const url = environment.apiUrlAdmin + '/AdmvaAreaChartDayWeek/api/v1/AdmvaAreaChartDayWeek/?format=datatables';
      dataserver = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          data: [540, 630, 600, 650, 600, 680, 600],
          dataMin: 500,
          dataMax: 700,
          dataStep: 50
        }]
      };
    };

    if (vision === 'vaMonthYear') {
      url = environment.apiUrl + '/cakes/paging';
      //url = environment.apiUrlAdmin + '/CliProduct/api/v1/CliProduct/?format=datatables';
      // const url = environment.apiUrlAdmin + '/AdmvaAreaChartMonthYear/api/v1/AdmvaAreaChartMonthYear/?format=datatables';
      dataserver = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [2540, 1630, 1600, 1650, 1600, 1680, 1600, 1550, 1650, 1600, 1680, 1600],
          dataMin: 1500,
          dataMax: 2600,
          dataStep: 100
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
