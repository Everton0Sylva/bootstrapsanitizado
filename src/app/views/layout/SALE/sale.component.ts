/*
Mandra é um projeto de automatização de software
Author : Gleison de souza luiz
Contato:gleisonnanet@gmail.com
*/
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { SaleScreemService } from './class/sale-screem.service';


@Component({
	selector: 'app-sale',
	templateUrl: 'sale.component.html',
	encapsulation: ViewEncapsulation.None,
})

export class SaleComponent implements OnInit {
	@Input() tela = 0;
	progress: boolean = false;
	constructor(private gen01ScreemService: SaleScreemService,) { }

	changeTela(value: any) {
		this.tela = Number(this.gen01ScreemService.getscreem());
	}
	ngOnInit(): void {
		// debugger
	}
}
