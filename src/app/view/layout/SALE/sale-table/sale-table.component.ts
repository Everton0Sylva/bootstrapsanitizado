/*
Mandra é um projeto de automatização de software
Author : Gleison de souza luiz
Contato:gleisonnanet@gmail.com
*/
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Sale, SaleInterface } from '../class/sale';
import { SaleHttpDatatable, SaleService } from '../class/sale.service';
import { SaleScreemService } from '../class/sale-screem.service';



@Component({
    selector: 'app-sale-table',
    templateUrl: 'sale-table.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class SaleTableComponent implements OnInit, AfterViewInit {
    @ViewChild('gtNgxTable') table: any;
    @Input() tela: number;

    @Output() telaTableEvent = new EventEmitter();

    sale: Sale;
    inputsearch: String = '';
    formsearch: FormGroup;

    displayedColumns: String[] = [
        "id",
        "Vendedor",
        "Email",
        "Telefone",
        "Quantidade"
    ]

    DatabaseServer: SaleHttpDatatable | null;
    data: SaleInterface[] = [];
    isLoadingResults = true;

    public dataRows = []
    public dataRowsFilter = []

    enviaStatusTela() {
        this.saleScreemService.changeform()

        this.telaTableEvent.emit(this.tela);

    }
    constructor(private saleScreemService: SaleScreemService, private _httpClient: HttpClient,
        public _FormBuilder: FormBuilder,
        //   private Showalert: AlertService,
        private saleService: SaleService
    ) {
    }


    ngOnInit(): void {
        this.dataRows = this.dataRowsFilter = []
    }

    createForm() {
        this.formsearch = this._FormBuilder.group({
            'inputsearch': [null, Validators.required],
        });
    }

    show(obj: Sale) {
        this.saleScreemService.setform(obj)
        this.saleScreemService.changeform();
        this.telaTableEvent.emit(this.tela);
    }

    ngAfterViewInit() {
        let self = this;
        this.saleService.genericGet('/api/mandra/sale/')
            .then((data: any) => {
                if (Array.isArray(data)) {
                    this.dataRows = this.dataRowsFilter = data;
                }
            }).catch((error: any) => {
                console.log(error);
            })
    }


    deleteDialog(obj: any) {
        let msg = 'o objeto com id' + obj.id
        /*    this.Showalert.ShowDeletedialog(msg).then(
                (res: any) => {
                    if (res == 'yes') {
                        this.delete(obj);
                    }
                    if (res == 'no') {
    
                    }
                }
            )
            */
    }


    delete(obj: Sale) {
        this.saleService.delete(obj);
        setTimeout(() => {
            this.ngAfterViewInit()
        }, 500);
    }

    public btnPrev = '<i class="simple-icon-arrow-left"></i>'

    //NGX-DATATABLE
    public itens2 = []

    public itens = [{
        id: 1,
        title: 'Item 1',
        category: 'Categoria 1',
        status: 'ON HOLD',
        statusColor: 'primary',
        description: 'Descrição de EXEMPLO Item 1 Categoria 1',
    },
    {
        id: 2,
        title: 'Item 2',
        category: 'Categoria 1',
        status: 'PROCESSED',
        statusColor: 'secondary',
        description: 'Descrição de EXEMPLO Item 2 Categoria 1',
    },
    {
        id: 3,
        title: 'Item 3',
        category: 'Categoria 2',
        status: 'ON HOLD',
        statusColor: 'primary',
        description: 'Descrição de EXEMPLO Item 3 Categoria 2',
    },
    {
        id: 4,
        title: 'Item 4',
        category: 'Categoria 2',
        status: 'PROCESSED',
        statusColor: 'secondary',
        description: 'Descrição de EXEMPLO Item 4 Categoria 2',
    },
    {
        id: 5,
        title: 'Item 5',
        category: 'Categoria 3',
        status: 'CANCELED',
        statusColor: 'danger',
        description: 'Descrição de EXEMPLO Item 1 Categoria 1',
    }, {
        id: 6,
        title: 'Item 6',
        category: 'Categoria 3',
        status: 'ON HOLD',
        statusColor: 'primary',
        description: 'Descrição de EXEMPLO Item 3 Categoria 3',
    },
    {
        id: 7,
        title: 'Item 7',
        category: 'Categoria 3',
        status: 'PROCESSED',
        statusColor: 'secondary',
        description: 'Descrição de EXEMPLO Item 7 Categoria 3',
    },
    {
        id: 8,
        title: 'Item 8',
        category: 'Categoria 4',
        status: 'ON HOLD',
        statusColor: 'primary',
        description: 'Descrição de EXEMPLO Item 8 Categoria 4',
    },
    {
        id: 9,
        title: 'Item 9',
        category: 'Categoria 4',
        status: 'PROCESSED',
        statusColor: 'secondary',
        description: 'Descrição de EXEMPLO Item 9 Categoria 4',
    },
    {
        id: 10,
        title: 'Item 10',
        category: 'Categoria 3',
        status: 'CANCELED',
        statusColor: 'danger',
        description: 'Descrição de EXEMPLO Item 1 Categoria 1',
    }, {
        id: 11,
        title: 'Item 11',
        category: 'Categoria 1',
        status: 'ON HOLD',
        statusColor: 'primary',
        description: 'Descrição de EXEMPLO Item 1 Categoria 1',
    },
    {
        id: 12,
        title: 'Item 12',
        category: 'Categoria 1',
        status: 'PROCESSED',
        statusColor: 'secondary',
        description: 'Descrição de EXEMPLO Item 2 Categoria 1',
    },
    {
        id: 13,
        title: 'Item 13',
        category: 'Categoria 2',
        status: 'ON HOLD',
        statusColor: 'primary',
        description: 'Descrição de EXEMPLO Item 3 Categoria 2',
    },
    {
        id: 14,
        title: 'Item 14',
        category: 'Categoria 2',
        status: 'PROCESSED',
        statusColor: 'secondary',
        description: 'Descrição de EXEMPLO Item 4 Categoria 2',
    },
    {
        id: 15,
        title: 'Item 15',
        category: 'Categoria 3',
        status: 'CANCELED',
        statusColor: 'danger',
        description: 'Descrição de EXEMPLO Item 1 Categoria 1',
    },
    ]

    updateFilter(event) {
        const val = event.target.value.toLowerCase().trim();
        let temp = this.dataRows.filter(item => {
            let find = false
            this.displayedColumns.forEach((key: any) => {
                let nString = String(item[key]).toLowerCase();
                if (nString.indexOf(val) !== -1 || !val) {
                    find = true;
                }
            });
            return find
        })
        this.dataRowsFilter = temp;
        this.table.offset = 0;
    }

    onNew() {
        this.enviaStatusTela();
        this.saleScreemService.changeform();
        this.telaTableEvent.emit(this.tela);
    }

}
