import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-king-b-number',
  templateUrl: './king-b-number.component.html',
  styleUrls: ['./king-b-number.component.scss']
})
export class KingBNumberComponent implements OnInit {

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
  numberEvent = new EventEmitter<any>();

  public isInvalidField: boolean = false


  constructor() { }


  ngOnInit() {
  }

  onFocus(){
    this.isInvalidField = false;
  }

  onBlur() {
    let t = this.form.controls[this.name].status
    if (t.indexOf('INVA') >= 0) {
      this.isInvalidField = true;
    } else{
      this.isInvalidField = false;
    }
  }

  change(event: any) {
    this.numberEvent.emit(event.target.value);
  }
}
