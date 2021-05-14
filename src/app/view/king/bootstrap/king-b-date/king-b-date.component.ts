import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale, isDateValid } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'app-king-b-date',
  templateUrl: './king-b-date.component.html',
  styleUrls: ['./king-b-date.component.scss']
})
export class KingBDateComponent implements OnInit {

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
  icon: string;

  @Output()
  dateEvent = new EventEmitter<any>();

  public isInvalidField: boolean = false

  public bsValue: any;

  public isDate: boolean = true;

  bsConfig: Partial<BsDatepickerConfig>;

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
    let inputDate: any = document.getElementById(this.name);
    inputDate.value = '';
    inputDate.focus();
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

}
