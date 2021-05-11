import {ApiServiceAdmacAreaChart} from './adm-d-areachart-api.service';
import {ApiServiceAdmcbpDoughnutChart} from './adm-d-doughnutchart-api.service';
import {ApiServiceAdmacbpPolarAreaChart} from './adm-d-polarareachart-api.service';
import {ApiServiceAdmBroSmallChart} from './adm-d-brosmallchart-api.service';

export const xacAreaChartDayWeek = ApiServiceAdmacAreaChart.getAreaChart('acDayWeek').rdataserver;

export const xacAreaChartMonthYear = ApiServiceAdmacAreaChart.getAreaChart('acMonthYear').rdataserver;

export const xappAreaChartDayWeek = ApiServiceAdmacAreaChart.getAreaChart('appDayWeek').rdataserver;

export const xappAreaChartMonthYear = ApiServiceAdmacAreaChart.getAreaChart('appMonthYear').rdataserver;

export const xvaAreaChartDayWeek = ApiServiceAdmacAreaChart.getAreaChart('vaDayWeek').rdataserver;

export const xvaAreaChartMonthYear = ApiServiceAdmacAreaChart.getAreaChart('vaMonthYear').rdataserver;

export const xcbpDoughnutChart = ApiServiceAdmcbpDoughnutChart.getData().rdataserver;

export const xacbpPolarAreaChart = ApiServiceAdmacbpPolarAreaChart.getData().rdataserver;

export const xcbpBroSmallChart = ApiServiceAdmBroSmallChart.getData('Bronze Plan').rdataserver;

export const xcbpSilSmallChart = ApiServiceAdmBroSmallChart.getData('Silver Plan').rdataserver;

export const xcbpGolSmallChart = ApiServiceAdmBroSmallChart.getData('Gold Plan').rdataserver;

export const xcbpDiaSmallChart = ApiServiceAdmBroSmallChart.getData('Diamond Plan').rdataserver;
