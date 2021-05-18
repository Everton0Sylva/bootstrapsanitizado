import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './view/error/error.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./view/view.module').then(m => m.ViewModule) },
  { path: 'user', loadChildren: () => import('./view/user/user.module').then(m => m.UserModule) },
  { path: 'error', component: ErrorComponent },
  { path: '404', redirectTo: '/user/login' },
  { path: '**', redirectTo: '/web/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
