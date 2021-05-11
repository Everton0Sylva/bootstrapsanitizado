import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { ErrorComponent } from './error/error.component';

let routes: Routes = [
  {
    path: 'web',
    component: ViewsComponent,
    children: [
      { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
    ]
  },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'error', component: ErrorComponent },
  { path: '404', redirectTo: '/user/login' },
  { path: '**', redirectTo: '/web/home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
