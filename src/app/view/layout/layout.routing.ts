
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { TesteComponent } from './teste/teste.component';

export const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
  }, {
    path: 't',
    component: TesteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
