import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-king-b-cpfcpnj',
  templateUrl: './king-b-cpfcpnj.component.html'
})
export class KingBCpfCpnjComponent implements OnInit {

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
  textEvent = new EventEmitter<any>();


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
    this.textEvent.emit(event.target.value);
  }
}
