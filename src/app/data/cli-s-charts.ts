import {ApiServiceCliacAreaChart} from './cli-d-areachart-api.service';
import {ApiServiceClicbpDoughnutChart} from './cli-d-doughnutchart-api.service';
import {ApiServiceCliacbpPolarAreaChart} from './cli-d-polarareachart-api.service';
import {ApiServiceCliBroSmallChart} from './cli-d-brosmallchart-api.service';

export const cacAreaChartDayWeek = ApiServiceCliacAreaChart.getAreaChart('acDayWeek').rdataserver;

export const cacAreaChartMonthYear = ApiServiceCliacAreaChart.getAreaChart('acMonthYear').rdataserver;

export const cappAreaChartDayWeek = ApiServiceCliacAreaChart.getAreaChart('appDayWeek').rdataserver;

export const cappAreaChartMonthYear = ApiServiceCliacAreaChart.getAreaChart('appMonthYear').rdataserver;

export const cvaAreaChartDayWeek = ApiServiceCliacAreaChart.getAreaChart('vaDayWeek').rdataserver;

export const cvaAreaChartMonthYear = ApiServiceCliacAreaChart.getAreaChart('vaMonthYear').rdataserver;

export const ccbpDoughnutChart = ApiServiceClicbpDoughnutChart.getData().rdataserver;

export const cacbpPolarAreaChart = ApiServiceCliacbpPolarAreaChart.getData().rdataserver;

export const ccbpBroSmallChart = ApiServiceCliBroSmallChart.getData('Bronze Plan').rdataserver;

export const ccbpSilSmallChart = ApiServiceCliBroSmallChart.getData('Silver Plan').rdataserver;

export const ccbpGolSmallChart = ApiServiceCliBroSmallChart.getData('Gold Plan').rdataserver;

export const ccbpDiaSmallChart = ApiServiceCliBroSmallChart.getData('Diamond Plan').rdataserver;
