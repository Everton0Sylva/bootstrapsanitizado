import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view.component';

let routes: Routes = [
  {
    path: 'web',
    component: ViewComponent,
    children: [
      { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
