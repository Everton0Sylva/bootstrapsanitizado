
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-king-b-textarea',
  templateUrl: './king-b-textarea.component.html'
})
export class KingBTextareaComponent implements OnInit {
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
  textAreaEvent = new EventEmitter<any>();

  public isInvalidField: boolean = false


  constructor() { }


  ngOnInit() {
    this.form
    this.error
    this.name
    // debugger

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
    this.textAreaEvent.emit(event);
  }
}
