import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HttpRequestService } from 'src/app/auth/http-request.service';
import { HttpsRequestInterceptor } from 'src/app/auth/interceptor.module';
import { NgxMaskModule } from 'ngx-mask'
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'ngx-bootstrap/modal';
import { kingBModule } from 'src/app/king/bootstrap/king-b.module';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ModalModule,
    HttpClientModule,
    NgxUiLoaderModule,
    ToasterModule,
    CollapseModule,
    TooltipModule.forRoot(),
    NgxMaskModule.forRoot(),
    TranslateModule,
    NgxDatatableModule,
    kingBModule,
  ],
  declarations: [
    LayoutComponent,
    TesteComponent
  ],
  exports: [
    LayoutComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
    HttpRequestService,
    FormBuilder,
    HttpsRequestInterceptor,
  ],
  exports: [
    TesteComponent]
})
export class LayoutModule { }