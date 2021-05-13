/*
Mandra é um projeto de automatização de software
Author : Gleison de souza luiz
Contato:gleisonnanet@gmail.com
*/


import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DebugComponent } from './debug/debug.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { kingBModule } from 'src/app/king/bootstrap/king-b.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaleFormsComponent } from './sale-forms/sale-forms.component';
import { SaleRoutingModule } from './sale.routing.module';
import { SaleComponent } from './sale.component';
import { SaleTableComponent } from './sale-table/sale-table.component';

@NgModule({
  declarations: [DebugComponent, SaleComponent, SaleFormsComponent, SaleTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SaleRoutingModule,
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
export class SaleModule { }

