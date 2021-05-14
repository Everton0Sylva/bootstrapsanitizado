
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-king-b-checkbox',
  templateUrl: './king-b-checkbox.component.html',
  styleUrls: ['./king-b-checkbox.component.scss']
})
export class KingBCheckboxComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  error: string;

  @Input()
  form: any;

  @Output()
  checkEvent = new EventEmitter<any>();

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
    this.checkEvent.emit(event.target.checked);
  }
}
