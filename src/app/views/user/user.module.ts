import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ComponentsStateButtonModule } from 'src/app/components/state-button/components.state-button.module';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { InterceptorModule } from 'src/app/auth/interceptor.module';
import { HttpRequestService } from 'src/app/auth/http-request.service';
import { OAuth2Response } from 'src/app/auth/OAuth2Response';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, UserComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SimpleNotificationsModule.forRoot(),
    ComponentsStateButtonModule,
    InterceptorModule,
    ToasterModule,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
   },
    HttpRequestService,
    ToasterService,
    FormBuilder,
    OAuth2Response,
  ],
})
export class UserModule { }
