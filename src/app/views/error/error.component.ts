import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpRequestService } from 'src/app/auth/http-request.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit, OnDestroy {

  constructor(private authService: HttpRequestService,) { }

  ngOnInit() {
    document.body.classList.add('background');
  }

  ngOnDestroy() {
    document.body.classList.remove('background');
  }

  onBackLogin(){
    this.authService.logout();
  }

}
