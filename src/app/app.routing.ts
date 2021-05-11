import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './views/error/error.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule) },
  { path: 'user', loadChildren: () => import('./views/user/user.module').then(m => m.UserModule) },
  { path: 'error', component: ErrorComponent },
  { path: '404', redirectTo: '/user/login' },
  { path: '**', redirectTo: '/web/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
