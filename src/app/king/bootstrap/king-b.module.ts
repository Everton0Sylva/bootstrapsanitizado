import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//BOOTSTRAP
import { KingBTelefoneComponent } from './king-b-telefone/king-b-telefone.component';
import { KingBTextComponent } from './king-b-text/king-b-text.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { KingBSenhaComponent } from './king-b-senha/king-b-senha.component';
import { KingBTextareaComponent } from './king-b-textarea/king-b-textarea.component';
import { KingBMoneyComponent } from './king-b-money/king-b-money.component';
import { KingBNumberComponent } from './king-b-number/king-b-number.component';
import { KingBEmailComponent } from './king-b-email/king-b-email.component';
import { KingBImageComponent } from './king-b-image/king-b-image.component';
import { KingBTimeComponent } from './king-b-time/king-b-time.component';
import { KingBSelectComponent } from './king-b-select/king-b-select.component';
import { KingBConsultaComponent } from './king-b-consulta/king-b-consulta.component';
import { KingBDataHoraComponent } from './king-b-data-hora/king-b-data-hora.component';
import { KingBCheckboxComponent } from './king-b-checkbox/king-b-checkbox.component';
import { KingBCheckgroupComponent } from './king-b-checkgroup/king-b-checkgroup.component';
import { KingBDateComponent } from './king-b-date/king-b-date.component';
//import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        //Angular
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonsModule,
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        NgbModule,
        /* AgmCoreModule.forRoot({
             apiKey: 'AIzaSyDnWKnvjVbVV6_zCsZ8srbG1Z1uuBmCTB4'
         })
         */
    ],
    declarations: [
        KingBTelefoneComponent,
        KingBTextComponent,
        KingBSenhaComponent,
        KingBTextareaComponent,
        KingBMoneyComponent,
        KingBNumberComponent,
        KingBEmailComponent,
        KingBImageComponent,
        KingBDateComponent,
        KingBTimeComponent,
        KingBSelectComponent,
        KingBConsultaComponent,
        KingBDataHoraComponent,
        KingBCheckboxComponent,
        KingBCheckgroupComponent,
    ],
    exports: [

        KingBTelefoneComponent,
        KingBTextComponent,
        KingBSenhaComponent,
        KingBTextareaComponent,
        KingBMoneyComponent,
        KingBNumberComponent,
        KingBEmailComponent,
        KingBImageComponent,
        KingBDateComponent,
        KingBTimeComponent,
        KingBSelectComponent,
        KingBConsultaComponent,
        KingBDataHoraComponent,
        KingBCheckboxComponent,
        KingBCheckgroupComponent
    ],

})
export class kingBModule { }
