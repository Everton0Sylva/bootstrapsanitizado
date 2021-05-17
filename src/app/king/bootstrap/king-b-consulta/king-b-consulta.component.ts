import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isNullOrUndefined } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-king-b-consulta',
  templateUrl: './king-b-consulta.component.html',
  styleUrls: ['./king-b-consulta.component.scss']
})
export class KingBConsultaComponent implements OnInit {
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
  service: any;

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
            data.map((item: any) => {
              let newItem: any;
              newItem = isNullOrUndefined(item.name) ? item.id : item.name

              self.dataItens.push(newItem);
            });
          }
        }).catch((error: any) => {
          console.log(error);
        })
    }
  }

  @Output()
  filterEvent = new EventEmitter<any>();

  constructor() { }

  public dataItens = Array<any>()

  public searchValue = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.dataItens.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1))
    )

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
    this.filterEvent.emit(event);
  }

}
