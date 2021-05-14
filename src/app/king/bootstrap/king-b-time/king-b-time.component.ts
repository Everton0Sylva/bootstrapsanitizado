import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-king-b-time',
  templateUrl: './king-b-time.component.html',
  styleUrls: ['./king-b-time.component.scss']
})
export class KingBTimeComponent implements OnInit {

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
  timeEvent = new EventEmitter<any>();

  public isInvalidField: boolean = false


  public isDate: boolean = true;


  constructor() {
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

  change(event: any) {
      this.timeEvent.emit(event);
  }

}
