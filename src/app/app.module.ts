import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewModule } from './view/view.module';
import { ErrorComponent } from './view/error/error.component';
import { HttpsRequestInterceptor, InterceptorModule } from './auth/interceptor.module';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ViewModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    InterceptorModule
  ],
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  exports: [
    TranslateModule
  ],

  providers: [HttpsRequestInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
