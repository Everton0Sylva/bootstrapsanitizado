import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { ErrorComponent } from './error/error.component';

let routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    pathMatch: 'full'
  }, 
  {
    path: 'gen01', loadChildren: () => import('./GEN01/gen01.module').then(m => m.Gen01Module)
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/gen01' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
