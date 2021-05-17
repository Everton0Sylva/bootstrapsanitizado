import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class KingBDialogalertService {

  constructor() {
  }

  private kingBDialogAlertCall = new Subject<any>()
  private kingBDialogAlertReturn = new Subject<any>()

  observableCalled = this.kingBDialogAlertCall.asObservable();
  returnCalled = this.kingBDialogAlertCall.asObservable();

  showKingDialog(type, title, message): Promise<boolean> {
    return new Promise((resolve) => {
      this.kingBDialogAlertCall.next({ type, title, message });
      this.returnCalled.subscribe((event) => {
        if (event == null || event == undefined) {
          debugger
          resolve(true);
        }
      })
    })
  }

  onDialogReturn() {
    this.kingBDialogAlertReturn.next();
  }

}
