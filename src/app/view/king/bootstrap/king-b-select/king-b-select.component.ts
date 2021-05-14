import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-king-b-select',
  templateUrl: './king-b-select.component.html',
  styleUrls: ['./king-b-select.component.scss']
})
export class KingBSelectComponent implements OnInit {
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

  @Input()
  set setOpts(value: any) {
    value.forEach((element: any, index: any) => {
      this.dataItens.push({ value: index, label: element })
    });
  }

  @Output()
  selectEvent = new EventEmitter<any>();

  constructor() { }

  public dataItens = Array<any>()

  public selectedValue = [];

  public isInvalidField: boolean = false


  ngOnInit() {
  }

  onFocus() {
 
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
    this.selectEvent.emit(event);
  }
}
