import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewRoutingModule } from './views.routing';
import { SharedModule } from '../shared/shared.module';
import { Gen01Module } from './GEN01/gen01.module';

@NgModule({
 declarations: [ViewsComponent, ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule,
    Gen01Module
  ]
})
export class ViewsModule { }
