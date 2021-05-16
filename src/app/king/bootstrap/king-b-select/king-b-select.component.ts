import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isNullOrUndefined } from '@swimlane/ngx-datatable';

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

  @Input() field_filter!: string;
  @Input() field_select: string;

  @Input()
  set setOpts(value: any) {
    let self = this;
    if (Array.isArray(value)) {
      value.forEach((element: any) => {
        let nValue = element.toLowerCase().replace(' ', '')
        self.dataItens.push(element)
      });
    } else {
      value.genericGet()
        .then((data: any) => {
          if (Array.isArray(data)) {
            data.map((item: any, index: number) => {
              let newItem: any = {};
              newItem.value = item[this.field_select];
              newItem.name = isNullOrUndefined(item[this.field_filter]) ? item.id : item[this.field_filter]
              self.dataItens.push(newItem);
            });
          }
        }).catch((error: any) => {
          console.log(error);
        })
    }
  }

  @Output()
  selectEvent = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  public dataItens = Array<any>()

  public selectedValue = [];

  public isInvalidField: boolean = false


  ngOnInit() {
  }


  change() {
    this.selectEvent.emit(this.form.controls[this.name]);
  }
}
