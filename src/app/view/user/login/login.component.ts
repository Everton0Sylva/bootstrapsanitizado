import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { HttpRequestService } from 'src/app/auth/http-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  password: string = '';
  username: string = '';
  mg_erro: string;
  public loginError: boolean = false;

  buttonDisabled = false;
  buttonState = '';
  constructor(private notification: NotificationsService, private router: Router, private oauth2request: HttpRequestService) { }
  ngOnInit(): void {

  }

  onFocus() {
    this.mg_erro = '';
    this.loginError = false
  }

  login() {
    if (this.username == null || this.username == undefined || this.username == '') {
      this.mg_erro = 'login';
      this.loginError = true
      return
    }
    if (this.password == null || this.password == undefined || this.password == '') {
      this.mg_erro = 'password';
      this.loginError = true
      return
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';

    delay(200);
    let that = this
    this.oauth2request.login(this.username, this.password).then(
      (data) => {
        this.router.navigate(['/web/home']);
      }).catch((error) => {
        console.log(error);
        that.buttonDisabled = false;
        that.buttonState = '';
        let eMessage = ''
        if (error.error != null && error.error != undefined && error.error.message != null && error.error.message != undefined) {
          if (error.error.message == 'Bad username or password') {
            eMessage = 'Usuario ou senha errado!';
          } else {
            eMessage = error.error.message;
          }
          that.notification.warn('Atenção', eMessage);
        } else {
          eMessage = 'Um error desconhecido ocorreu, favor entrar em contato com nossa equipe!';
          that.notification.error('Erro', eMessage);
        }
      });
  }

  onChangeFocus() {
    let passwd = document.getElementById("password");
    passwd.focus();
  }
}
