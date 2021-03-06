import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import pt from 'src/app/i18n/pt-BR.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

@Injectable()
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private translateService: TranslateService, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.translateService.setTranslation('pt-BR', pt);
    this.translateService.setDefaultLang('pt-BR');
    this.translateService.use('pt-BR');

    let theme = localStorage.getItem('vien-themecolor')
    
  }
  //vien-themecolor
  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.addClass(document.body, 'show');
    }, 1000);
    setTimeout(() => {
      this.renderer.addClass(document.body, 'default-transition');
    }, 1500);
  }
}
