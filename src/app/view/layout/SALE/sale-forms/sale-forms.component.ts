/*
Mandra é um formulario mandra de automatização de software
Author : Gleison de souza luiz
Contato:gleisonnanet@gmail.com
*/
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { environment } from 'src/environments/environment';
import { Sale } from '../class/sale';
import { SaleScreemService } from '../class/sale-screem.service';
import { SaleService } from '../class/sale.service';

@Component({
	selector: 'app-sale-forms',
	templateUrl: 'sale-forms.component.html',
	encapsulation: ViewEncapsulation.None
})

export class SaleFormsComponent implements OnInit {
	@Input() tela: Number;
	@Input() progress: boolean;
	@Output() telaFormEvent = new EventEmitter();
	isupdate: boolean = false;
	production: boolean = environment.production;
	items = [{}];
	environment = environment;
	formulario: FormGroup;
	constructor(
		private saleService: SaleService,
		private saleScreemService: SaleScreemService,
		public _FormBuilder: FormBuilder) { }

	eventoCheckGroup(d) { this.items = d }

	evento(d) { this.items = d }


	enviaStatusTela() {
		this.saleScreemService.changetable()
		this.telaFormEvent.emit(this.tela);


	}

	ngOnInit(): void {
		this.createForm();
		let data = this.saleScreemService.getform();
		if (data != null && data != undefined && Object.values(data).length > 0) {			
			this.formulario.setValue(data);
			debugger
		}
		this.saleScreemService.setform({});
	}

	createForm() {
		this.formulario = this._FormBuilder.group({
			'gen01seller_id': [null, Validators.required],
			'quantity': [null, Validators.required],
			'gen01product_id': [null, Validators.required],
		});
		/*
				id?: number;
			created?: string;
			updated?: string;
			quantity?: string;
			gen01seller_id?: number;
			gen01product_id?: number;
			*/

	}
	validate(evento) {

		this.formulario.get(evento.currentTarget.type).setErrors({ valid: false });
		this.formulario.get(evento.currentTarget.type).setValue(evento.target.value);
	}
	product(evento) { this.formulario.get('product').setValue([evento.id]); }

	supplier(evento) { this.formulario.get('supplier').setValue([evento.id]); }
	validatemaps(evento) {
		let latitude = 'lat_' + evento.name;
		let longitude = 'long_' + evento.name;
		this.formulario.get(evento.name).setValue(evento.address);
		this.formulario.get(latitude).setValue(evento.latitude);
		this.formulario.get(longitude).setValue(evento.longitude);
	}
	create() {
		let body: Sale = new Sale();
		body.gen01seller_id = 'id: ' + this.formulario.value.gen01seller_id;
		body.gen01product_id = 'id: ' + this.formulario.value.gen01product_id;
		body.quantity = this.formulario.value.quantity;
		this.saleService.create(body).then((data) => {
			debugger
			this.enviaStatusTela();
		});
	}

	update() {
		this.saleService.update(this.formulario.value).then((data) => {
			this.enviaStatusTela();
			this.saleScreemService.setform({})
		});
	}
	cancelar() {
		this.saleScreemService.changetable;
		this.enviaStatusTela();
	}



	public valuesSelect = [
		'Afghanistan',
		'Albania',
		'Algeria',
		'Andorra',
		'Angola',
		'Antigua and Barbuda',
		'Argentina',
		'Armenia',
		'Australia',
		'Austria',
		'Azerbaijan',
		'Bahamas',
		'Bahrain',
		'Bangladesh',
		'Barbados',
		'Belarus',
		'Belgium',
		'Belize	',
		'Benin	',
		'Bhutan	',
		'Bolivia',
		'Bosnia and Herzegovina',
		'Botswana',
		'Brazil	',
		'Brunei	',
		'Bulgaria',
		'Burkina Faso',
		'Burund',
		'Côte d`Ivoire',
		'Cabo Verde',
		'Cambodia',
		'Cameroon',
		'Canada	',
		'Central African Republic',
		'Chad	',
		'Chile	',
		'China	',
		'Colombia',
		'Comoros	',
		'Congo (Congo-Brazzaville)',
		'Costa Rica',
		'Croatia',
		'Cuba',
		'Cyprus	',
		'Czechia',
		'Democratic Republic of the',
		'Denmark',
		'Djibouti',
		'Dominica',
		'Dominican Republi',
		'Ecuador',
		'Egypt	',
		'El Salvador',
		'Equatorial Guinea',
		'Eritrea',
		'Estonia	',
		'Eswatini',
		'Ethiopia',
		'Fiji	',
		'Finland',
		'France	',
		'Gabon	',
		'Gambia	',
		'Georgia',
		'Germany',
		'Ghana	',
		'Greece	',
		'Grenada',
		'Guatemala',
		'Guinea	',
		'Guinea-Bissau',
		'Guyana	',
		'Haiti	',
		'Holy See',
		'Honduras',
		'Hungary',
		'Iceland',
		'India	',
		'Indonesia',
		'Iran',
		'Iraq',
		'Ireland',
		'Israel	',
		'Italy	',
		'Jamaica',
		'Japan	',
		'Jordan	',
		'Kazakhstan',
		'Kenya',
		'Kiribati',
		'Kuwait',
		'Kyrgyzstan',
		'Laos',
		'Latvia',
		'Lebanon',
		'Lesotho',
		'Liberia',
		'Libya',
		'Liechtenstein',
		'Lithuania',
		'Luxembourg',
		'Madagascar',
		'Malawi',
		'Malaysia',
		'Maldives	',
		'Mali',
		'Malta',
		'Marshall',
		'Mauritania',
		'Mauritius',
		'Mexico	',
		'Micronesia',
		'Moldova',
		'Monaco',
		'Mongolia',
		'Montenegro',
		'Morocco',
		'Mozambique',
		'Myanmar',
		'Namibia',
		'Nauru	',
		'Nepal	',
		'Netherlands',
		'New Zealand',
		'Nicaragua	',
		'Niger	',
		'Nigeria',
		'North Korea',
		'North Macedonia',
		'Norway',
		'Oman	',
		'Pakistan',
		'Palau   ',
		'Palestine State',
		'Panama',
		'Papua New Guinea',
		'Paraguay',
		'Peru',
		'Philippines',
		'Poland',
		'Portugal',
		'Qatar	',
		'Romania',
		'Russia',
		'Rwanda',
		'Saint Kitts and Nevis',
		'Saint Lucia',
		'Saint Vincent and the Grena',
		'Samoa',
		'San Marino',
		'Sao Tome and Principe',
		'Saudi Arabia',
		'Senegal',
		'Serbia	',
		'Seychelles',
		'Sierra Leon',
		'Singapore',
		'Slovakia',
		'Slovenia',
		'Solomon',
		'Somalia',
		'South Africa',
		'South Korea',
		'South Sudan',
		'Spain',
		'Sri Lanka',
		'Sudan',
		'Suriname	',
		'Sweden',
		'Switzerland',
		'Syria',
		'Tajikistan	',
		'Tanzania	',
		'Thailand	',
		'Timor-Leste',
		'Togo',
		'Tonga',
		'Trinidad and Tobago',
		'Tunisia',
		'Turkey',
		'Turkmenistan',
		'Tuvalu',
		'Uganda',
		'Ukraine	',
		'United Arab Emirates',
		'United Kingdom',
		'United States of America',
		'Uruguay',
		'Uzbekistan',
		'Vanuatu',
		'Venezuela',
		'Vietnam',
		'Yemen	',
		'Zambia	',
		'Zimbabwe',
	]

	public checkOpts: any = [
		'one',
		'two',
		'three',
		'four',
		'five',
		'six	',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
		'twenty',
		'twenty-one',
		'twenty-two',
		'twenty-three',
		'twenty-four',
		'twenty-five',
		'twenty-six',
		'twenty-seven',
		'twenty-eight',
		'twenty-nine',
		'thirty'
	];
}

