import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewsModule } from './views/views.module';
import { ErrorComponent } from './views/error/error.component';
import { HttpsRequestInterceptor, InterceptorModule } from './auth/interceptor.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    InterceptorModule,
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
