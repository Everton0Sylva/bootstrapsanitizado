import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToasterModule } from 'angular2-toaster';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { KingBDialogAlertComponent } from './king-b-dialog-alert.component';
import { KingBSeparatorComponent } from './king-b-separator/king-b-separator.component';
import { KingBDialogalertService } from './king-b-dialogalert.service';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    TranslateModule,
  ],
  declarations: [
    KingBDialogAlertComponent,
    KingBSeparatorComponent,
  ],
  exports: [    
    KingBDialogAlertComponent,
    KingBSeparatorComponent,
  ],
  providers: [
    KingBDialogalertService
  ],
})
export class KingBDialogAlertModule { }