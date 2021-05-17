import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-king-b-checkgroup',
  templateUrl: './king-b-checkgroup.component.html',
  styleUrls: ['./king-b-checkgroup.component.scss']
})
export class KingBCheckgroupComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  error: string;

  @Input()
  form: any;

  @Input()
  set setOpts(value: any) {
    value.forEach((element: any, index: any) => {
      let nValue = element.toLowerCase().replace(' ', '')
      this.dataItens.push({ value: nValue, label: element, checked: false })
    });
  }

  @Output()
  checkgroupEvent = new EventEmitter<any>();

  constructor() { }

  public dataItens = Array<any>()

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

  change() {
    if (this.dataItens.length > 0) {
      let selecteds = Array<any>()
      let promis = this.dataItens.map(async (element) => {
        if (element.checked == true) {
          selecteds.push(element.value)
        }
      })
      Promise.all(promis);
      if (selecteds.length > 0) {
        this.checkgroupEvent.emit(selecteds);
      } else {
        this.isInvalidField = true;
        this.form.controls[this.name].setErrors({ 'incorrect': true });
        return
      }
    }
  }
}
