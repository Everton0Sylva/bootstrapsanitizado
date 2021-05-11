/*
Mandra é um projeto de automatização de software
Author : Gleison de souza luiz
Contato:gleisonnanet@gmail.com
*/


import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DebugComponent } from './debug/debug.component';
import { Gen01RoutingModule } from './gen01.routing.module';
import { Gen01Component } from './gen01.component';
import { Gen01FormsComponent } from './gen01-forms/gen01-forms.component';
import { Gen01TableComponent } from './gen01-table/gen01-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { kingBModule } from 'src/app/king/bootstrap/king-b.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [DebugComponent, Gen01Component, Gen01FormsComponent, Gen01TableComponent],
  imports: [
    CommonModule,
    Gen01RoutingModule,
    HttpClientModule,
    TranslateModule,
    NgxDatatableModule,
    PaginationModule.forRoot(),
    kingBModule,
    CollapseModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
  ],
  exports: [
    CommonModule
  ]
})
export class Gen01Module { }

