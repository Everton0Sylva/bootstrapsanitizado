/*
Mandra é um projeto de automatização de software
Author : Gleison de souza luiz
Contato:gleisonnanet@gmail.com
*/
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gen01HttpDatatable } from '../class/gen01.service';
import { Gen01, Gen01Interface } from '../class/gen01';
import { Gen01ScreemService } from '../class/gen01-screem.service';
import { Gen01Service } from '../class/gen01.service';
import { TranslateService } from '@ngx-translate/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';



@Component({
    selector: 'app-gen01-table',
    templateUrl: 'gen01-table.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class Gen01TableComponent implements OnInit, AfterViewInit {
    @ViewChild('gtNgxTable') table: any;
    @Input() tela: number;

    @Output() telaTableEvent = new EventEmitter();

    Gen01: Gen01;
    inputsearch: String = '';
    formsearch: FormGroup;

    displayedColumns: String[] = [
        "title",
        "category",
        "status"];

    durationInSeconds = 5;
    resultsLength = 0;
    DatabaseServer: Gen01HttpDatatable | null;
    data: Gen01Interface[] = [];
    isLoadingResults = true;
    isRateLimitReached = false;

    public dataRows = []
    public dataRowsFilter = []

    enviaStatusTela() {
        this.Gen01ScreemService.changeform()

        this.telaTableEvent.emit(this.tela);

    }
    constructor(private Gen01ScreemService: Gen01ScreemService, private _httpClient: HttpClient,
        public _FormBuilder: FormBuilder,
        //   private Showalert: AlertService,
        private Gen01Service: Gen01Service, private translateService: TranslateService
    ) {
    }


    ngOnInit(): void {
        this.dataRows = this.dataRowsFilter = this.itens
    }

    create() {
        debugger
    }


    createForm() {
        this.formsearch = this._FormBuilder.group({
            'inputsearch': [null, Validators.required],
        });
    }

    show(obj: Gen01) {
        this.Gen01ScreemService.setform(obj)
        this.Gen01ScreemService.changeform();
        this.telaTableEvent.emit(this.tela);
    }

    ngAfterViewInit() {
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


    delete(obj: Gen01) {
        this.Gen01Service.delete(obj);
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



    expanded: any = {};
    timeout: any;
    itemsPerPage = 10;
    ColumnMode = ColumnMode;
    columns = [
        { prop: 'title', name: 'Nome' },
        { prop: 'status', name: 'Status' },
        { prop: 'category', name: 'Categoria' },
    ];

    onPage(event) {
    }

    toggleExpandRow(row) {
        this.table.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event) {
    }

    updateFilter(event) {
        const val = event.target.value.toLowerCase().trim();
        const count = this.columns.length;
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
        this.Gen01 = new Gen01();
        this.enviaStatusTela();
        this.Gen01ScreemService.changeform();
        this.telaTableEvent.emit(this.tela);
    }

}
