import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { HttpRequestService } from 'src/app/auth/http-request.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild('passwordForm') passwordForm: NgForm;
  buttonDisabled = false;
  buttonState = '';

  constructor(private authService: HttpRequestService, private notifications: NotificationsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.passwordForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';

    this.authService.sendPasswordEmail(this.passwordForm.value.email)
      .then((answer) => {
        this.notifications.create('Done', 'Password reset email is sent, you will be redirected to Reset Password page!', NotificationType.Bare, { theClass: 'outline primary', timeOut: 6000, showProgressBar: true });
        this.buttonDisabled = false;
        this.buttonState = '';
        setTimeout(() => {
          this.router.navigate(['user/reset-password']);
        }, 6000);
      }).catch((error) => {
        this.notifications.create('Error', error.message, NotificationType.Bare, { theClass: 'outline primary', timeOut: 6000, showProgressBar: false });
        this.buttonDisabled = false;
        this.buttonState = '';
      })
  }

}