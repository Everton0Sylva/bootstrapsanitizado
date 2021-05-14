import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-king-b-money',
  templateUrl: './king-b-money.component.html',
  styleUrls: ['./king-b-money.component.scss']
})
export class KingBMoneyComponent implements OnInit {

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
  moneyEvent = new EventEmitter<any>();


  constructor() { }

  public isInvalidField: boolean = false


  ngOnInit() {
  }

  onFocus() {
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

  change(event: any) {
    this.moneyEvent.emit(event.target.value);
  }
}
