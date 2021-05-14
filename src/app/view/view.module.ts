import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { ViewRoutingModule } from './view.routing';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LayoutContainersModule } from '../layout/layout.containers.module';
import { LayoutRoutingModule } from './layout/layout.routing';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToasterModule } from 'angular2-toaster';
import { NgxMaskModule } from 'ngx-mask'
import { kingBModule } from './king/bootstrap/king-b.module';

@NgModule({
 declarations: [ViewComponent,
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
    kingBModule,
  ],
  exports: []
})
export class ViewModule { }
