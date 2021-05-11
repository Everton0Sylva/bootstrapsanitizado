/*
Mandra é um projeto de automatização de software
Author : Gleison de souza luiz
Contato:gleisonnanet@gmail.com
*/
import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';
import { Gen01ScreemService } from './class/gen01-screem.service';


@Component({selector: 'app-Gen01', 
			templateUrl: 'gen01.component.html', 
			encapsulation: ViewEncapsulation.None,
})

export class Gen01Component implements  OnInit {
@Input() tela  = 0;
progress: boolean = false;
constructor(private Gen01ScreemService: Gen01ScreemService){}

changeTela(value: any) {
this.tela = Number(this.Gen01ScreemService.getscreem());
}
ngOnInit(): void {
	// debugger
}
}
