import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { isNullOrUndefined } from '@swimlane/ngx-datatable';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { isEmpty } from 'rxjs/operators';
import { Colors } from 'src/app/constants/colors.service';
import { KingBDialogalertService } from './king-b-dialogalert.service';

@Component({
  selector: 'kingB-DialogAlert',
  templateUrl: './king-b-dialog-alert.component.html',
  styleUrls: ['./king-b-dialog-alert.component.scss']
})
export class KingBDialogAlertComponent implements OnInit {
  constructor(public kingBDialogalert: KingBDialogalertService) { }

  public type: string = 'default';
  public title: string = ''
  public message: string = ''
  public primaryColor;
  public secondaryColor;


  @ViewChild('dialogAlert') dialogAlert: ModalDirective;

  config = {
    backdrop: 'static',
    keyboard: false,
    animated: true
  }

  ngOnInit(): void {
    this.primaryColor = Colors.getColors().primaryColor;
    this.secondaryColor = Colors.getColors().separatorColor;
  }


  ngAfterViewInit() {
    if (this.kingBDialogalert.observableCalled) {
      this.kingBDialogalert.observableCalled.subscribe((values: any) => {
        if (values != null && values != undefined) {
          this.type = values.type != null && values.type != undefined && values.type != '' ? this.type = values.type : 'default';
          this.title = values.title
          if (isNullOrUndefined(this.title) || String(this.title).length <= 0) {
            switch (this.type) {
              case 'confirm':
                this.title = 'Sucesso'
                break;
              case 'danger':
                this.title = 'Atenção'
                break;
              case 'warning':
                this.title = 'Alerta'
                break;
              default:
                this.title = 'Aviso'
                break;
            }
          }
          this.message = values.message
          this.dialogAlert.show();
        }
      })
    }
  }

  onCancel() {
    this.dialogAlert.hide()
  }


  onConfirm() {
    this.dialogAlert.hide();
    this.kingBDialogalert.onDialogReturn();
  }

}
