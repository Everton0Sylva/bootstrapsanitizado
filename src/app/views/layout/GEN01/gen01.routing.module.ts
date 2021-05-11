/*
Mandra é um projeto de automatização de software
Author : Gleison de souza luiz
Contato:gleisonnanet@gmail.com
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Gen01Component } from './gen01.component';

const routes: Routes = [{ path: 'gen01', component: Gen01Component }];

@NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
export class Gen01RoutingModule { }
    
