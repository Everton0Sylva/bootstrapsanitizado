import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ComponentsStateButtonModule } from 'src/app/components/state-button/components.state-button.module';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { InterceptorModule } from 'src/app/auth/interceptor.module';
import { HttpRequestService } from 'src/app/auth/http-request.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, UserComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    ComponentsStateButtonModule,
    InterceptorModule,
    ToasterModule,
    TranslateModule,
    InterceptorModule,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  },
    HttpRequestService,
    ToasterService,
    FormBuilder,
  ],
})
export class UserModule { }
