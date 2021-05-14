import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-king-b-email',
  templateUrl: './king-b-email.component.html',
  styleUrls: ['./king-b-email.component.scss']
})
export class KingBEmailComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  error: string;

  @Input()
  form: any;

  @Input()
  icon: string;

  @Output()
  emailEvent = new EventEmitter<any>();

  public isInvalidField: boolean = false


  constructor() { }


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
    this.emailEvent.emit(event.target.value);
  }
}
