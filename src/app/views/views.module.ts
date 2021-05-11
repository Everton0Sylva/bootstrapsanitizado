import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewRoutingModule } from './views.routing';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LayoutContainersModule } from '../layout/layout.containers.module';
import { Gen01Module } from './layout/GEN01/gen01.module';
import { LayoutRoutingModule } from './layout/layout.routing';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToasterModule } from 'angular2-toaster';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
 declarations: [ViewsComponent,
],
  imports: [
    CommonModule,
    ViewRoutingModule,
    LayoutModule,
    TranslateModule,
    LayoutRoutingModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    ModalModule,
    HttpClientModule,
    NgxUiLoaderModule,
    ToasterModule,
    CollapseModule,
    TooltipModule.forRoot(),
    NgxMaskModule.forRoot(),
    LayoutContainersModule,
    Gen01Module
  ],
  exports: []
})
export class ViewsModule { }
