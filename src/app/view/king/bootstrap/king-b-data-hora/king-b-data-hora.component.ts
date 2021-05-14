import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, isDateValid } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'app-king-b-data-hora',
  templateUrl: './king-b-data-hora.component.html',
  styleUrls: ['./king-b-data-hora.component.scss']
})
export class KingBDataHoraComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  error: string;

  @Input()
  form: any;

  @Input()
  prefix: string;

  @Input()
  icon1: string;

  @Input()
  icon2: string;

  @Input()
  showSeconds: boolean = false;

  @Output()
  dateEvent = new EventEmitter<any>();

  public isInvalidField: boolean = false

  public bsValue: any;

  public isDate: boolean = true;

  bsConfig: Partial<BsDatepickerConfig>;


  public timeSetted: any = null;
  public dateSetted: any = null;


  constructor(private localeService: BsLocaleService) {
    defineLocale('pt-br', ptBrLocale);
    this.localeService.use('pt-br');
    this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' });
  }

  ngOnInit() {
  }

  onFocus() {
    this.isDate = true;
    this.isInvalidField = false;
  }

  onBlur() {
    let t = this.form.controls[this.name].status
    if (t.indexOf('INVA') >= 0) {
      this.isInvalidField = true;
    } else {
      this.isInvalidField = false;
    }
  }

  openDate(dp: any) {
    dp.toggle();
  }

  change(event: any) {
    if (event != null) {
      if (!isDateValid(event)) {
        this.isDate = false;
        let inputDate: any = document.getElementById(this.name);
        inputDate.value = '';
        this.form.controls[this.name].setErrors({ 'incorrect': true });
        return
      }
      this.isInvalidField = false;
      this.dateEvent.emit(event);
    }
  }

  onSetDate(evt: any) {
    if (isDateValid(evt)) {
      let date = evt.toLocaleDateString();
      this.dateSetted = date;
      this.onSetDateTime();
    }
  }

  onSetTime(pop: any) {
    if (isDateValid(this.timeSetted)) {
      pop.close();
      this.onSetDateTime();
    }
  }

  onSetDateTime() {
    let value = ''
    if (this.dateSetted != null && this.dateSetted != undefined) value += this.dateSetted

    if (this.timeSetted != null && this.timeSetted != undefined) value += ' ' + this.timeSetted.toLocaleTimeString();

    let inputDate: any = document.getElementById(this.name);
    inputDate.value = value;

    if ((this.dateSetted != null && this.dateSetted != undefined && this.dateSetted != '') && (this.timeSetted != null && this.timeSetted != undefined) && this.timeSetted != '') {
      let dateTime = new Date(value);
      if (isDateValid(dateTime)) {
        this.isInvalidField = false;
        this.dateEvent.emit(value);
      } else {
        this.isDate = false;
        this.form.controls[this.name].setErrors({ 'incorrect': true });
      }
    }
  }

}
