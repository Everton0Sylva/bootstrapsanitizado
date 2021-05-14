import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-king-b-telefone',
  templateUrl: './king-b-telefone.component.html',
  styleUrls: ['./king-b-telefone.component.scss']
})
export class KingBTelefoneComponent implements OnInit {

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
  phoneEvent = new EventEmitter<any>();


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
    this.phoneEvent.emit(event.target.value);
  }
}